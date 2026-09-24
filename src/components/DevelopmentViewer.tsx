import { useState, useEffect } from 'react';
import { DevelopmentMap } from './Map/DevelopmentMap';
import { DevelopmentDirectory } from './Directory/DevelopmentDirectory';
import { RegularizationPanel } from './Development/RegularizationPanel';
import { NormativeEngine } from './Normative/NormativeEngine';
import { FinancialSummary } from './Financial/FinancialSummary';
import { TechnicalSheet } from './Development/TechnicalSheet';
import { mockDevelopments } from '../data/mockDevelopments';
import { generateDevelopmentReport } from '../utils/pdfExport';
import { supabase } from '../lib/supabase';
import type { UrbanDevelopment } from '../types/development';
import { getProceduresForType } from '../data/procedureTemplates';
import { X, ChevronRight } from 'lucide-react';

export function DevelopmentViewer() {
  const initialDevelopments = mockDevelopments.map(dev => ({
    ...dev,
    procedures: getProceduresForType(dev.type, dev.procedures)
  }));
  const [developments, setDevelopments] = useState<UrbanDevelopment[]>(initialDevelopments);
  const [selectedDevelopment, setSelectedDevelopment] = useState<UrbanDevelopment | null>(null);
  const [activeTab, setActiveTab] = useState<'ficha' | 'tramites' | 'normativa' | 'finanzas'>('ficha');
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [isParcelPickMode, setIsParcelPickMode] = useState(false);
  const [marketPoints, setMarketPoints] = useState<any[]>([]);
  const [isAddingMarketPoint, setIsAddingMarketPoint] = useState(false);
  const [pendingMarketPoint, setPendingMarketPoint] = useState<{lat: number, lng: number} | null>(null);
  const [newComparableForm, setNewComparableForm] = useState({ title: '', price: '', sqm: '', url: '' });
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

  useEffect(() => {
    async function loadEdits() {
      if (!supabase) return;
      try {
        const { data: editsData, error: editsError } = await supabase
          .from('development_edits')
          .select('*');
        
        if (editsError) throw editsError;

        if (editsData) {
          const editsMap = new Map(editsData.map(e => [e.development_id, e.data]));
          
          const baseDevelopments = mockDevelopments.map(dev => {
            const edit = editsMap.get(dev.id);
            if (edit) editsMap.delete(dev.id);
            const merged = edit ? { ...dev, ...edit } : dev;
            merged.procedures = getProceduresForType(merged.type, merged.procedures);
            return merged;
          });

          const newDevelopments = Array.from(editsMap.values()).map((dev: any) => {
            dev.procedures = getProceduresForType(dev.type, dev.procedures || []);
            return dev as UrbanDevelopment;
          });

          setDevelopments([...newDevelopments, ...baseDevelopments]);
        }

        const { data: marketData, error: marketError } = await supabase
          .from('market_comparables')
          .select('*');
          
        if (marketError) throw marketError;
        
        if (marketData) {
          setMarketPoints(marketData);
        }

      } catch (e) {
        console.error('Error loading from Supabase', e);
      }
    }
    loadEdits();

    if (supabase) {
      const channel = supabase
        .channel('public:development_edits')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'development_edits' }, (payload: any) => {
          if (payload.new && payload.new.data) {
            setDevelopments(prev => prev.map(dev => {
              if (dev.id === payload.new.development_id) {
                const merged = { ...dev, ...payload.new.data };
                merged.procedures = getProceduresForType(merged.type, merged.procedures);
                return merged;
              }
              return dev;
            }));
            
            setSelectedDevelopment(prev => {
              if (prev && prev.id === payload.new.development_id) {
                const merged = { ...prev, ...payload.new.data };
                merged.procedures = getProceduresForType(merged.type, merged.procedures);
                return merged;
              }
              return prev;
            });
          }
        })
        .subscribe();
        
      return () => {
        supabase?.removeChannel(channel);
      };
    }
  }, []);

  const handleUpdateDevelopment = async (updatedDev: UrbanDevelopment) => {
    setSelectedDevelopment(updatedDev);
    setDevelopments(prev => prev.map(d => d.id === updatedDev.id ? updatedDev : d));

    if (!supabase) return;

    try {
      const { error } = await supabase
        .from('development_edits')
        .upsert({
          development_id: updatedDev.id,
          data: updatedDev,
          updated_at: new Date().toISOString()
        });
        
      if (error) throw error;
    } catch (e) {
      console.error('Error saving to Supabase', e);
    }
  };

  const handleAddParcelFromMap = async (lat: number, lng: number) => {
    if (!selectedDevelopment || !isParcelPickMode) return;
    
    try {
      // Create WMS GetFeatureInfo URL
      const BBOX = `${lng-0.001},${lat-0.001},${lng+0.001},${lat+0.001}`;
      const url = `https://geo.arba.gov.ar/geoserver/idera/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=idera:Parcela&LAYERS=idera:Parcela&INFO_FORMAT=application/json&X=50&Y=50&WIDTH=101&HEIGHT=101&SRS=EPSG:4326&BBOX=${BBOX}`;
      
      const res = await fetch(url);
      const data = await res.json();
      
      if (data.features && data.features.length > 0) {
        const fullId = data.features[0].id; // e.g. Parcela.055...
        const nomenclature = fullId.replace('Parcela.', '');
        
        const currentParcels = selectedDevelopment.technicalData.parcels || [];
        if (!currentParcels.includes(nomenclature)) {
          const newParcels = [...currentParcels, nomenclature];
          
          let urbasigIndicators = { ...selectedDevelopment.technicalData.indicators };
          let newCaso = selectedDevelopment.technicalData.ordenanza12638_caso;
          let newZona = selectedDevelopment.technicalData.zonaTerritorialidad;

          try {
            const urbUrl = `https://urbasig.mgob.gba.gob.ar/geoserver/urbasig/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=urbasig:uso_del_suelo&LAYERS=urbasig:uso_del_suelo&INFO_FORMAT=application/json&X=50&Y=50&WIDTH=101&HEIGHT=101&SRS=EPSG:4326&BBOX=${BBOX}`;
            const urbRes = await fetch(urbUrl);
            const urbData = await urbRes.json();
            if (urbData.features && urbData.features.length > 0) {
              const props = urbData.features[0].properties;
              if (props) {
                urbasigIndicators = {
                  ...urbasigIndicators,
                  fos: props.fos !== undefined && props.fos !== null ? Number(props.fos) : urbasigIndicators.fos,
                  fot: props.fota !== undefined && props.fota !== null ? Number(props.fota) : urbasigIndicators.fot,
                  density: props.dena !== undefined && props.dena !== null ? Number(props.dena) : urbasigIndicators.density,
                  minArea: props.sm !== undefined && props.sm !== null ? Number(props.sm) : urbasigIndicators.minArea,
                  maxHeight: props.hmax || urbasigIndicators.maxHeight,
                  zoning: props.designacio || urbasigIndicators.zoning,
                  description: props.descripcio || urbasigIndicators.description,
                  allowedUses: props.ud || urbasigIndicators.allowedUses,
                  complementaryUses: props.uc || urbasigIndicators.complementaryUses,
                };

                const desc = (props.descripcio || '').toUpperCase();
                const ucr = (props.u_c_r || '').toUpperCase();
                const desig = (props.designacio || '').toUpperCase();

                if (ucr.includes('URBANA') || desc.includes('URBANA')) {
                  if (desc.includes('PERIFERICA') || desig.includes('UP')) {
                    newCaso = 'B';
                    newZona = 'periferica';
                  } else {
                    newCaso = 'A';
                    newZona = 'urbana';
                  }
                } else if (ucr.includes('RURAL') || desc.includes('RURAL') || ucr.includes('COMPLEMENTARIA') || desc.includes('PERIURBANA')) {
                  newCaso = 'C';
                  newZona = 'periurbana_rural';
                }
              }
            }
          } catch(e) {
            console.error("Error fetching Urbasig info", e);
          }

          handleUpdateDevelopment({
            ...selectedDevelopment,
            technicalData: {
              ...selectedDevelopment.technicalData,
              parcels: newParcels,
              indicators: urbasigIndicators,
              ordenanza12638_caso: newCaso,
              zonaTerritorialidad: newZona
            }
          });
        } else {
          const newParcels = currentParcels.filter(p => p !== nomenclature);
          handleUpdateDevelopment({
            ...selectedDevelopment,
            technicalData: {
              ...selectedDevelopment.technicalData,
              parcels: newParcels
            }
          });
        }
      }
    } catch (e) {
      console.error('Error fetching parcel info:', e);
    }
  };

  const handleAddPoint = (lat: number, lng: number) => {
    if (!selectedDevelopment) return;
    const currentPoints = selectedDevelopment.technicalData.executedUnitsPoints || [];
    const newPoints = [...currentPoints, { lat, lng }];
    
    handleUpdateDevelopment({
      ...selectedDevelopment,
      technicalData: {
        ...selectedDevelopment.technicalData,
        executedUnitsPoints: newPoints,
        executedUnits: newPoints.length
      }
    });
  };

  const handleRemovePoint = (index: number) => {
    if (!selectedDevelopment) return;
    const currentPoints = selectedDevelopment.technicalData.executedUnitsPoints || [];
    const newPoints = currentPoints.filter((_, i) => i !== index);
    
    handleUpdateDevelopment({
      ...selectedDevelopment,
      technicalData: {
        ...selectedDevelopment.technicalData,
        executedUnitsPoints: newPoints,
        executedUnits: newPoints.length
      }
    });
  };

  const handleMapClickMarket = (lat: number, lng: number) => {
    if (!isAddingMarketPoint || !selectedDevelopment) return;
    setPendingMarketPoint({ lat, lng });
    setIsAddingMarketPoint(false);
  };

  const handleSaveMarketPoint = async () => {
    if (!pendingMarketPoint || !selectedDevelopment || !supabase) return;
    
    const newPoint = {
      development_id: selectedDevelopment.id,
      lat: pendingMarketPoint.lat,
      lng: pendingMarketPoint.lng,
      title: newComparableForm.title,
      price_usd: Number(newComparableForm.price) || null,
      sq_meters: Number(newComparableForm.sqm) || null,
      source_url: newComparableForm.url
    };

    try {
      const { data, error } = await supabase
        .from('market_comparables')
        .insert([newPoint])
        .select('*');

      if (error) throw error;
      
      if (data && data.length > 0) {
        setMarketPoints(prev => [...prev, data[0]]);
      }
      
      setPendingMarketPoint(null);
      setNewComparableForm({ title: '', price: '', sqm: '', url: '' });
    } catch (e) {
      console.error("Error saving market point", e);
      alert("Hubo un error al guardar la publicación.");
    }
  };

  const handleDeleteMarketPoint = async (id: string) => {
    if (!supabase) return;
    try {
      const { error } = await supabase
        .from('market_comparables')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      setMarketPoints(prev => prev.filter(mp => mp.id !== id));
    } catch (e) {
      console.error("Error deleting market point", e);
      alert("Hubo un error al borrar la publicación.");
    }
  };

  const handleDeleteOffer = (offerId: string) => {
    if (!selectedDevelopment) return;
    const newOffers = selectedDevelopment.offers?.filter(o => o.id !== offerId);
    handleUpdateDevelopment({
      ...selectedDevelopment,
      offers: newOffers
    });
  };

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden bg-gray-50 dark:bg-gray-900">
      
      {/* Left Panel: Directory */}
      <div className="w-full md:w-[350px] shrink-0 z-10 shadow-lg">
        <DevelopmentDirectory 
          developments={developments}
          onSelect={setSelectedDevelopment}
          selectedId={selectedDevelopment?.id}
          marketPoints={marketPoints}
          onOpenBudgetList={() => setIsBudgetModalOpen(true)}
          onAddDevelopment={() => {
            const newDev: UrbanDevelopment = {
              id: crypto.randomUUID(),
              name: "Nuevo Emprendimiento",
              type: "loteo_abierto",
              polygon: [],
              complianceStatus: "amarillo",
              isRegularized: false,
              procedures: getProceduresForType("loteo_abierto", []),
              financials: {
                marketValueIrregularUsd: 0,
                marketValueRegularizedUsd: 0,
                regularizationCostUsd: 0,
                requiredCessionsSqM: 0,
                plusvaliaAmountUsd: 0,
                comparables: []
              },
              ordinanceViolations: [],
              technicalData: {
                parcels: [],
                totalAreaSqM: 0,
                executedUnits: 0,
                executedUnitsPoints: [],
                indicators: {
                  fos: 0,
                  fot: 0,
                  density: 0,
                  minArea: 0,
                  maxHeight: "",
                  zoning: "",
                  description: "",
                  allowedUses: "",
                  complementaryUses: ""
                },
                hydroRisk: false,
                hasMaterialization: false,
                hasPartialViability: false,
                zonaTerritorialidad: "fuera",
                ley14449: false,
                nearIndustry: false,
                pasivosAmbientales: "ninguno"
              },
              offers: []
            };
            setDevelopments([newDev, ...developments]);
            setSelectedDevelopment(newDev);
          }}
        />
      </div>

      {/* Map Area */}
      <div className={`transition-all duration-300 ease-in-out relative z-0 flex-1`}>
        <DevelopmentMap 
          developments={developments}
          selectedDevelopment={selectedDevelopment}
          onSelectDevelopment={setSelectedDevelopment}
          isDrawingMode={isDrawingMode || isAddingMarketPoint}
          onAddPoint={(lat, lng) => {
            if (isAddingMarketPoint) {
              handleMapClickMarket(lat, lng);
            } else if (isDrawingMode) {
              handleAddPoint(lat, lng);
            }
          }}
          onRemovePoint={handleRemovePoint}
          marketPoints={marketPoints}
          isParcelPickMode={isParcelPickMode}
          onAddParcelFromMap={handleAddParcelFromMap}
        />
      </div>

      {/* Side Panel (Shows when a development is selected) */}
      <div 
        className={`bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-300 ease-in-out z-20 flex flex-col overflow-hidden shrink-0 ${
          selectedDevelopment ? 'w-full md:w-[450px] translate-x-0' : 'w-0 translate-x-full'
        }`}
      >
        {selectedDevelopment && (
          <>
            {/* Panel Header */}
            <div className="p-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900 flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                  {selectedDevelopment.type.replace('_', ' ')}
                </span>
                <input 
                  type="text"
                  value={selectedDevelopment.name}
                  onChange={(e) => handleUpdateDevelopment({ ...selectedDevelopment, name: e.target.value })}
                  className="w-full text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-1 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-indigo-500 focus:outline-none transition-colors"
                />
                <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
                  <span className="text-gray-500">Estado Normativo:</span>
                  <div className="flex items-center gap-1 font-semibold">
                    <div className={`w-2 h-2 rounded-full ${
                      selectedDevelopment.complianceStatus === 'rojo' ? 'bg-red-500' : 
                      selectedDevelopment.complianceStatus === 'amarillo' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <span className={
                      selectedDevelopment.complianceStatus === 'rojo' ? 'text-red-600' : 
                      selectedDevelopment.complianceStatus === 'amarillo' ? 'text-yellow-600' : 'text-green-600'
                    }>
                      {selectedDevelopment.complianceStatus === 'rojo' ? 'Irregular' : 
                       selectedDevelopment.complianceStatus === 'amarillo' ? 'Con Adecuaciones' : 'Apto'}
                    </span>
                  </div>
                  
                  <span className="text-gray-300 mx-1">|</span>
                  <span className="text-gray-500">Gestión:</span>
                  <label className="flex items-center gap-1.5 cursor-pointer group">
                    <div className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${selectedDevelopment.isRegularized ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'}`}>
                      <div className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${selectedDevelopment.isRegularized ? 'translate-x-5' : ''}`}></div>
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={!!selectedDevelopment.isRegularized}
                      onChange={(e) => {
                        handleUpdateDevelopment({
                          ...selectedDevelopment,
                          isRegularized: e.target.checked
                        });
                      }}
                    />
                    <span className={`font-semibold ${selectedDevelopment.isRegularized ? 'text-green-600 dark:text-green-400' : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300'}`}>
                      {selectedDevelopment.isRegularized ? 'Regularizado' : 'Marcar Regularizado'}
                    </span>
                  </label>
                  <span className="text-gray-300 mx-1">|</span>
                  <label className="flex items-center gap-1.5 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={!!selectedDevelopment.inBudgetList}
                      onChange={(e) => {
                        handleUpdateDevelopment({
                          ...selectedDevelopment,
                          inBudgetList: e.target.checked
                        });
                      }}
                    />
                    <div className={`px-2 py-0.5 rounded text-xs font-bold border transition-colors ${selectedDevelopment.inBudgetList ? 'bg-amber-100 border-amber-300 text-amber-700 dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-400' : 'bg-gray-100 border-gray-200 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700'}`}>
                      {selectedDevelopment.inBudgetList ? 'En Presupuestos' : 'A Presupuestar'}
                    </div>
                  </label>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDevelopment(null)}
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-800">
              {[
                { id: 'ficha', label: 'Ficha Técnica' },
                { id: 'tramites', label: 'Gestión / Trámites' },
                { id: 'normativa', label: 'Normativa' },
                { id: 'finanzas', label: 'Finanzas / Ofertas' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 text-xs font-semibold py-3 border-b-2 transition-colors ${
                    activeTab === tab.id 
                      ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Panel Content */}
            <div className="flex-1 overflow-y-auto p-5">
              {activeTab === 'ficha' && (
                <TechnicalSheet 
                  development={selectedDevelopment} 
                  onUpdateDevelopment={handleUpdateDevelopment}
                  isDrawingMode={isDrawingMode}
                  onToggleDrawingMode={() => {
                    setIsDrawingMode(!isDrawingMode);
                    setIsParcelPickMode(false);
                  }}
                  isParcelPickMode={isParcelPickMode}
                  onToggleParcelPickMode={() => {
                    setIsParcelPickMode(!isParcelPickMode);
                    setIsDrawingMode(false);
                  }}
                />
              )}
              {activeTab === 'tramites' && (
                <RegularizationPanel 
                  development={selectedDevelopment} 
                  onUpdateDevelopment={handleUpdateDevelopment}
                />
              )}
              {activeTab === 'normativa' && <NormativeEngine development={selectedDevelopment} />}
              {activeTab === 'finanzas' && (
                <FinancialSummary 
                  development={selectedDevelopment} 
                  marketPoints={marketPoints.filter(mp => mp.development_id === selectedDevelopment.id)}
                  isAddingMarketPoint={isAddingMarketPoint}
                  onToggleAddMarketPoint={() => setIsAddingMarketPoint(!isAddingMarketPoint)}
                  onDeleteComparable={handleDeleteMarketPoint}
                  onDeleteOffer={handleDeleteOffer}
                />
              )}
            </div>
            
            {/* Footer CTA */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <button 
                onClick={() => {
                  if (selectedDevelopment) {
                    generateDevelopmentReport(selectedDevelopment);
                  }
                }}
                className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-white dark:text-gray-900 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 group"
              >
                Descargar Informe Completo (PDF)
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal for adding market point */}
      {pendingMarketPoint && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-md border border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Nueva Publicación Testigo</h3>
              <button onClick={() => setPendingMarketPoint(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Título / Descripción</label>
                <input 
                  type="text" 
                  value={newComparableForm.title}
                  onChange={e => setNewComparableForm(prev => ({...prev, title: e.target.value}))}
                  className="w-full mt-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-2 text-sm focus:outline-none focus:border-indigo-500"
                  placeholder="Ej: Lote 1000m2 en Haras"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Precio (USD)</label>
                  <input 
                    type="number" 
                    value={newComparableForm.price}
                    onChange={e => setNewComparableForm(prev => ({...prev, price: e.target.value}))}
                    className="w-full mt-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-2 text-sm focus:outline-none focus:border-indigo-500"
                    placeholder="Ej: 25000"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Superficie (m²)</label>
                  <input 
                    type="number" 
                    value={newComparableForm.sqm}
                    onChange={e => setNewComparableForm(prev => ({...prev, sqm: e.target.value}))}
                    className="w-full mt-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-2 text-sm focus:outline-none focus:border-indigo-500"
                    placeholder="Ej: 1000"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Link (Zonaprop/ML)</label>
                <input 
                  type="url" 
                  value={newComparableForm.url}
                  onChange={e => setNewComparableForm(prev => ({...prev, url: e.target.value}))}
                  className="w-full mt-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-2 text-sm focus:outline-none focus:border-indigo-500"
                  placeholder="https://..."
                />
              </div>
              
              <button 
                onClick={handleSaveMarketPoint}
                className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-lg transition-colors"
              >
                Guardar Publicación
              </button>
            </div>
          </div>
        </div>
      )}

      {isBudgetModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-amber-50 dark:bg-amber-900/10">
              <h2 className="text-xl font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2">
                📋 Listado a Presupuestar (Ordenanza 12.638)
              </h2>
              <button onClick={() => setIsBudgetModalOpen(false)} className="text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1 bg-gray-50 dark:bg-gray-900/50">
              {['A', 'B', 'C', 'D', 'none'].map((caso) => {
                const devsInCase = developments.filter(d => d.inBudgetList && (d.technicalData.ordenanza12638_caso || 'none') === caso);
                if (devsInCase.length === 0) return null;

                const caseNames: Record<string, string> = {
                  'A': 'Caso A (Zona Urbana) - Complejidad Baja',
                  'B': 'Caso B (Zona Urbana Periférica) - Complejidad Media',
                  'C': 'Caso C (Zona Periurbana/Rural) - Complejidad Alta',
                  'D': 'Caso D (Parcelas sin acceso directo) - Complejidad Muy Alta',
                  'none': 'Sin Clasificar'
                };

                return (
                  <div key={caso} className="mb-6">
                    <h3 className="text-md font-bold text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                      {caseNames[caso]}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {devsInCase.map(dev => (
                        <div key={dev.id} className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm flex justify-between items-center">
                          <div>
                            <p className="font-bold text-sm text-gray-900 dark:text-gray-100">{dev.name}</p>
                            <p className="text-xs text-gray-500">{dev.technicalData.totalAreaSqM.toLocaleString('es-AR')} m² • {dev.technicalData.parcels.length} parcelas</p>
                          </div>
                          <button 
                            onClick={() => {
                              handleUpdateDevelopment({ ...dev, inBudgetList: false });
                            }}
                            className="text-xs text-red-500 hover:text-red-700 bg-red-50 dark:bg-red-900/10 px-2 py-1 rounded"
                          >
                            Quitar
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              {developments.filter(d => d.inBudgetList).length === 0 && (
                <div className="text-center p-8 text-gray-500 dark:text-gray-400">
                  <p>No hay emprendimientos en la lista a presupuestar.</p>
                  <p className="text-sm mt-2">Agrega emprendimientos desde el panel derecho usando el botón "A Presupuestar".</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
