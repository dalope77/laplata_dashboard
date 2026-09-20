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
import { X, ChevronRight } from 'lucide-react';

export function DevelopmentViewer() {
  const [developments, setDevelopments] = useState<UrbanDevelopment[]>(mockDevelopments);
  const [selectedDevelopment, setSelectedDevelopment] = useState<UrbanDevelopment | null>(null);
  const [activeTab, setActiveTab] = useState<'ficha' | 'tramites' | 'normativa' | 'finanzas'>('ficha');
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [marketPoints, setMarketPoints] = useState<any[]>([]);
  const [isAddingMarketPoint, setIsAddingMarketPoint] = useState(false);
  const [pendingMarketPoint, setPendingMarketPoint] = useState<{lat: number, lng: number} | null>(null);
  const [newComparableForm, setNewComparableForm] = useState({ title: '', price: '', sqm: '', url: '' });

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
          setDevelopments(mockDevelopments.map(dev => {
            const edit = editsMap.get(dev.id);
            return edit ? { ...dev, ...edit } : dev;
          }));
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

    const idx = mockDevelopments.findIndex(d => d.id === updatedDev.id);
    if (idx !== -1) {
      mockDevelopments[idx] = updatedDev;
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

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden bg-gray-50 dark:bg-gray-900">
      
      {/* Left Panel: Directory */}
      <div className="w-full md:w-[350px] shrink-0 z-10 shadow-lg">
        <DevelopmentDirectory 
          developments={developments}
          onSelect={setSelectedDevelopment}
          selectedId={selectedDevelopment?.id}
        />
      </div>

      {/* Map Area */}
      <div className={`transition-all duration-300 ease-in-out relative z-0 flex-1`}>
        <DevelopmentMap 
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
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-1">{selectedDevelopment.name}</h2>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-gray-500">Estado:</span>
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
                  onToggleDrawingMode={() => setIsDrawingMode(!isDrawingMode)}
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
    </div>
  );
}
