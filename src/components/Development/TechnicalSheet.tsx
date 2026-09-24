import { useState, useEffect } from "react";
import type { UrbanDevelopment, DevelopmentType } from "../../types/development";
import { Layers, Maximize, MapPin, Home, MousePointerClick, Activity, AlertTriangle } from "lucide-react";
import { getProceduresForType } from "../../data/procedureTemplates";

interface Props {
  development: UrbanDevelopment;
  onUpdateDevelopment?: (dev: UrbanDevelopment) => void;
  isDrawingMode?: boolean;
  onToggleDrawingMode?: () => void;
  isParcelPickMode?: boolean;
  onToggleParcelPickMode?: () => void;
}

export function TechnicalSheet({ development, onUpdateDevelopment, isDrawingMode, onToggleDrawingMode, isParcelPickMode, onToggleParcelPickMode }: Props) {
  const data = development.technicalData;
  const [customRestriction, setCustomRestriction] = useState('');

  const handleChange = (field: keyof typeof data, value: any) => {
    if (!onUpdateDevelopment) return;
    
    const updatedData = {
      ...data,
      [field]: value
    };

    if (['inciso1a_subdivision', 'inciso1b_ocupacion', 'punto2_aprobacion', 'zonaTerritorialidad', 'executedUnits'].includes(field as string)) {
      const zona = updatedData.zonaTerritorialidad;
      const i1a = updatedData.inciso1a_subdivision;
      const i1b = updatedData.inciso1b_ocupacion;
      const p2 = updatedData.punto2_aprobacion;
      const density = updatedData.indicators.density || 0;
      const houses = updatedData.executedUnits || 0;

      let newCaso = updatedData.ordenanza12638_caso;

      if (!i1a && !i1b && !p2) {
        newCaso = 'inviable';
      } else {
        if (zona === 'urbana') {
          newCaso = 'A';
        } else if (zona === 'periferica') {
          newCaso = 'B';
        } else if (zona === 'periurbana_rural') {
          if (i1a || (i1b && (density > 30 || houses > 20))) {
            newCaso = 'C';
          } else if (i1b && density < 30 && p2) {
            newCaso = 'D';
          } else if (i1b && density < 30 && houses < 20) {
            newCaso = 'E';
          } else {
            newCaso = 'C';
          }
        }
      }
      updatedData.ordenanza12638_caso = newCaso;
    }

    onUpdateDevelopment({
      ...development,
      technicalData: updatedData
    });
  };

  const toggleRestriction = (restriction: string) => {
    if (!onUpdateDevelopment) return;
    const current = data.landRestrictions || [];
    const updated = current.includes(restriction) 
      ? current.filter(r => r !== restriction)
      : [...current, restriction];
    handleChange('landRestrictions', updated);
  };

  const addCustomRestriction = () => {
    if (!customRestriction.trim() || !onUpdateDevelopment) return;
    const current = data.landRestrictions || [];
    if (!current.includes(customRestriction.trim())) {
      handleChange('landRestrictions', [...current, customRestriction.trim()]);
    }
    setCustomRestriction('');
  };

  const handleIndicatorChange = (field: keyof typeof data.indicators, value: any) => {
    if (!onUpdateDevelopment) return;
    onUpdateDevelopment({
      ...development,
      technicalData: {
        ...data,
        indicators: {
          ...data.indicators,
          [field]: value
        }
      }
    });
  };

  useEffect(() => {
    async function calculateTotalArea() {
      if (!data.parcels || data.parcels.length === 0) {
        if (data.totalAreaSqM !== 0) {
          handleChange('totalAreaSqM', 0);
        }
        return;
      }
      
      const validParcels = data.parcels
        .map(p => p.replace('Nomenclatura: ', '').trim())
        .filter(p => p.length > 5);

      if (validParcels.length === 0) return;

      try {
        const featureIds = validParcels.map(p => `Parcela.${p}`).join(',');
        const url = `https://geo.arba.gov.ar/geoserver/idera/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=idera:Parcela&featureId=${featureIds}&outputFormat=application/json&srsName=EPSG:4326`;
        const res = await fetch(url);
        const geojson = await res.json();
        
        if (geojson && geojson.features) {
          let total = 0;
          geojson.features.forEach((f: any) => {
            if (f.properties && f.properties.ara1) {
              total += Number(f.properties.ara1);
            }
          });
          
          if (total > 0 && Math.round(total) !== Math.round(data.totalAreaSqM || 0)) {
            handleChange('totalAreaSqM', Math.round(total));
          }
        }
      } catch (e) {
        console.error("Error fetching parcel areas", e);
      }
    }
    
    calculateTotalArea();
  }, [JSON.stringify(data.parcels)]);


  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Ficha Técnica</h3>
          <p className="text-xs text-gray-400 mb-4">Información catastral, urbanística y constructiva (Pre-cargada desde UrbaSIG).</p>
        </div>
      </div>

      {/* Encuadre Normativo */}
      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 shadow-sm">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase">Encuadre Normativo</span>
          <select 
            value={development.type}
            onChange={(e) => {
              if (!onUpdateDevelopment) return;
              const newType = e.target.value as DevelopmentType;
              const newProcedures = getProceduresForType(newType, development.procedures);
              onUpdateDevelopment({
                ...development,
                type: newType,
                procedures: newProcedures,
                technicalData: {
                  ...development.technicalData,
                  ley14449: newType === 'loteo_social' ? true : development.technicalData.ley14449
                }
              });
            }}
            className="mt-1 bg-slate-800 border border-slate-700 rounded p-2 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="loteo_abierto">Loteo Abierto (Ley 8912)</option>
            <option value="club_campo">Club de Campo</option>
            <option value="barrio_cerrado">Barrio Cerrado</option>
            <option value="condominio">Condominio (PH)</option>
            <option value="loteo_social">Hábitat (Ley 14.449)</option>
            <option value="parque_industrial">Parque Industrial</option>
          </select>
          <p className="text-[10px] text-gray-500 mt-1">Al cambiar el encuadre, la lista de Gestión/Trámites se actualizará automáticamente a los requisitos correspondientes.</p>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Superficie Total */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-start gap-3 shadow-sm">
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600 dark:text-indigo-400">
            <Maximize className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Superficie Terreno (m²)</p>
            <input 
              type="number" 
              value={data.totalAreaSqM} 
              onChange={(e) => handleChange('totalAreaSqM', Number(e.target.value))}
              className="mt-1 w-full text-lg font-bold text-gray-900 dark:text-gray-100 bg-transparent border-b border-dashed border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Viviendas Ejecutadas */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-start gap-3 shadow-sm">
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
            <Home className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Viviendas Ejecutadas</p>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{data.executedUnitsPoints?.length || 0}</span>
              <button 
                onClick={onToggleDrawingMode}
                className={`flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-bold transition-colors ${
                  isDrawingMode 
                    ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-200' 
                    : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 hover:bg-indigo-200'
                }`}
              >
                <MousePointerClick className="w-3.5 h-3.5" />
                {isDrawingMode ? 'Terminar Edición' : '📍 Marcar en Mapa'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Estado Físico */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase flex items-center gap-2 mb-3">
          <Activity className="w-4 h-4 text-orange-500" /> Estado Físico del Desarrollo
        </h4>
        <select
          value={data.physicalState || ''}
          onChange={(e) => handleChange('physicalState', e.target.value || undefined)}
          className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Sin especificar</option>
          <option value="abandonado_sin_desarrollo">Abandonado / Sin Desarrollo</option>
          <option value="con_apertura_calles">Con apertura de calles</option>
          <option value="con_obras_comunes">Con obras en comunes</option>
          <option value="con_movimiento_suelos">Con movimiento de suelos</option>
          <option value="con_viviendas_construccion">Con viviendas en construcción</option>
          <option value="con_viviendas_terminadas">Con viviendas terminadas</option>
          <option value="con_personas_habitando">Con personas habitando inmuebles</option>
        </select>
      </div>

      {/* Parcelas */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase flex items-center gap-2">
            <MapPin className="w-4 h-4 text-indigo-500" /> Nomenclaturas Catastrales
          </h4>
          <div className="flex gap-2">
            <button 
              onClick={onToggleParcelPickMode}
              className={`text-[10px] flex items-center gap-1 font-bold px-2 py-1 rounded transition-colors ${
                isParcelPickMode 
                  ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 hover:bg-amber-200' 
                  : 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/10 hover:bg-amber-100 dark:hover:bg-amber-900/30'
              }`}
            >
              <MousePointerClick className="w-3.5 h-3.5" />
              {isParcelPickMode ? 'Terminar Selección' : '📍 Seleccionar en Mapa'}
            </button>
            <button 
              onClick={() => {
                const newParcels = [...data.parcels, 'Nueva Parcela'];
                handleChange('parcels', newParcels);
              }}
              className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded hover:bg-indigo-100"
            >
              + Añadir Manual
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {data.parcels.map((parcel, idx) => {
            const cleanParcel = parcel.replace('Nomenclatura: ', '').trim();
            return (
              <div key={idx} className="flex items-center gap-2">
                <input 
                  type="text"
                  value={cleanParcel}
                  onChange={(e) => {
                    const newParcels = [...data.parcels];
                    newParcels[idx] = e.target.value.replace('Nomenclatura: ', '').trim();
                    handleChange('parcels', newParcels);
                  }}
                  className="flex-1 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-gray-100 px-3 py-1.5 rounded text-xs font-mono border border-dashed border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500"
                />
                <button 
                  onClick={() => {
                    const newParcels = data.parcels.filter((_, i) => i !== idx);
                    handleChange('parcels', newParcels);
                  }}
                  className="text-red-500 hover:text-red-700 p-1"
                  title="Eliminar"
                >
                  ×
                </button>
              </div>
            );
          })}
          {data.parcels.length === 0 && (
            <p className="text-xs text-gray-400 italic">No hay parcelas registradas.</p>
          )}
        </div>
      </div>

      {/* Indicadores Urbanísticos */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase flex items-center gap-2 mb-4">
          <Layers className="w-4 h-4 text-indigo-500" /> Indicadores Urbanísticos (Proyectados)
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 mb-1">FOS</p>
            <input 
              type="number" 
              step="0.1"
              value={data.indicators.fos} 
              onChange={(e) => handleIndicatorChange('fos', Number(e.target.value))}
              className="w-full text-center text-lg font-bold text-indigo-600 bg-transparent border-b border-dashed border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 mb-1">FOT</p>
            <input 
              type="number" 
              step="0.1"
              value={data.indicators.fot} 
              onChange={(e) => handleIndicatorChange('fot', Number(e.target.value))}
              className="w-full text-center text-lg font-bold text-indigo-600 bg-transparent border-b border-dashed border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 mb-1">Densidad (hab/Ha)</p>
            <input 
              type="number" 
              value={data.indicators.density} 
              onChange={(e) => handleIndicatorChange('density', Number(e.target.value))}
              className="w-full text-center text-lg font-bold text-indigo-600 bg-transparent border-b border-dashed border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 mb-1">Frente Mín. (m)</p>
            <input 
              type="number" 
              value={data.indicators.minFront || 0} 
              onChange={(e) => handleIndicatorChange('minFront', Number(e.target.value))}
              className="w-full text-center text-lg font-bold text-indigo-600 bg-transparent border-b border-dashed border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 mb-1">Sup. Mínima (m²)</p>
            <input 
              type="number" 
              value={data.indicators.minArea || 0} 
              onChange={(e) => handleIndicatorChange('minArea', Number(e.target.value))}
              className="w-full text-center text-lg font-bold text-indigo-600 bg-transparent border-b border-dashed border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 mb-1">Altura Máxima</p>
            <input 
              type="text" 
              value={data.indicators.maxHeight || ''} 
              onChange={(e) => handleIndicatorChange('maxHeight', e.target.value)}
              className="w-full text-center text-sm font-bold text-indigo-600 bg-transparent border-b border-dashed border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-1 font-bold">Zonificación</p>
            <input 
              type="text" 
              value={data.indicators.zoning || ''} 
              onChange={(e) => handleIndicatorChange('zoning', e.target.value)}
              className="w-full text-sm font-bold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded p-2 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1 font-bold">Descripción de Zona</p>
            <input 
              type="text" 
              value={data.indicators.description || ''} 
              onChange={(e) => handleIndicatorChange('description', e.target.value)}
              className="w-full text-sm font-bold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded p-2 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div>
            <p className="text-xs text-gray-500 mb-1 font-bold">Usos Admitidos / Dominantes</p>
            <textarea 
              value={data.indicators.allowedUses || ''} 
              onChange={(e) => handleIndicatorChange('allowedUses', e.target.value)}
              className="w-full text-sm text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded p-2 focus:outline-none focus:border-indigo-500"
              rows={2}
            />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1 font-bold">Usos Complementarios</p>
            <textarea 
              value={data.indicators.complementaryUses || ''} 
              onChange={(e) => handleIndicatorChange('complementaryUses', e.target.value)}
              className="w-full text-sm text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded p-2 focus:outline-none focus:border-indigo-500"
              rows={2}
            />
          </div>
        </div>
      </div>

      {/* Riesgo Hídrico */}
      <div className={`border rounded-lg p-4 shadow-sm flex items-start gap-3 ${
        data.hydroRisk 
          ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/30' 
          : 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/30'
      }`}>
        <div className={`p-2 rounded-lg ${data.hydroRisk ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
          <Layers className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className={`text-xs font-bold uppercase mb-1 ${data.hydroRisk ? 'text-red-800 dark:text-red-400' : 'text-green-800 dark:text-green-400'}`}>
              Evaluación de Riesgo Hídrico (ADA)
            </h4>
            <button 
              onClick={() => handleChange('hydroRisk', !data.hydroRisk)}
              className="text-[10px] underline text-gray-500 hover:text-gray-700"
            >
              Forzar Cambio
            </button>
          </div>
          <p className={`text-sm font-semibold ${data.hydroRisk ? 'text-red-700 dark:text-red-300' : 'text-green-700 dark:text-green-300'}`}>
            {data.hydroRisk 
              ? 'ATENCIÓN: El polígono intersecta con zonas de cuencas hídricas. Requiere prefactibilidad estricta de ADA.' 
              : 'SIN RIESGO APARENTE: No se detectan cruces con cuencas hídricas principales de UrbaSIG.'}
          </p>
        </div>
      </div>

      {/* Evaluación de Criterios (Art 82-84) */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase flex items-center gap-2 mb-4">
          <Layers className="w-4 h-4 text-indigo-500" /> Atributos de Regularización
        </h4>
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-900/50">
            <input 
              type="checkbox" 
              className="mt-1"
              checked={data.inciso1a_subdivision} 
              onChange={(e) => handleChange('inciso1a_subdivision', e.target.checked)} 
            />
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">1.a) Subdivisión Finalizada</p>
              <p className="text-xs text-gray-500">Materialización bajo régimen geodésico/PH entre 19/12/2013 y 09/10/2024.</p>
            </div>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-900/50">
            <input 
              type="checkbox" 
              className="mt-1"
              checked={data.inciso1b_ocupacion} 
              onChange={(e) => handleChange('inciso1b_ocupacion', e.target.checked)} 
            />
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">1.b) Ocupación Residencial</p>
              <p className="text-xs text-gray-500">Viviendas en construcción/iniciadas entre 19/12/2013 y 09/10/2024.</p>
            </div>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-900/50">
            <input 
              type="checkbox" 
              className="mt-1"
              checked={data.punto2_aprobacion} 
              onChange={(e) => handleChange('punto2_aprobacion', e.target.checked)} 
            />
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">2) Aprobación Técnica Parcial</p>
              <p className="text-xs text-gray-500">Faz geométrica y prefactibilidad hidráulica (19/12/2013 - 10/06/2023).</p>
            </div>
          </label>
        </div>
        <div className="space-y-3 mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <label className="flex flex-col gap-1 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-900/50">
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Encuadre Art. 64 (Ord. 12.638)</span>
            <select 
              value={data.ordenanza12638_caso || 'none'} 
              onChange={(e) => handleChange('ordenanza12638_caso', e.target.value)}
              className={`mt-1 border rounded p-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${data.ordenanza12638_caso === 'inviable' ? 'bg-red-900 border-red-700 text-red-100' : 'bg-slate-800 border-slate-700 text-white'}`}
            >
              <option value="none" className="bg-slate-800 text-white">No aplica / Sin clasificar</option>
              <option value="A" className="bg-slate-800 text-white">Caso A (Zona Urbana DENTRO Ord 10703)</option>
              <option value="B" className="bg-slate-800 text-white">Caso B (Zona Urbana FUERA Ord 10703)</option>
              <option value="C" className="bg-slate-800 text-white">Caso C (Periurbana/Rural, &gt;30 hab/ha o &gt;20 viv)</option>
              <option value="D" className="bg-slate-800 text-white">Caso D (Periurbana/Rural, &lt;30 hab/ha con Aprob. Técnica)</option>
              <option value="E" className="bg-slate-800 text-white">Caso E (Periurbana/Rural, &lt;30 hab/ha y &lt;20 viv)</option>
              <option value="inviable" className="bg-red-900 text-red-100">Rechazado / Inviable (Sancionatorio)</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-900/50">
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Ubicación (Zona de Territorialidad)</span>
            <select 
              value={data.zonaTerritorialidad || 'fuera'} 
              onChange={(e) => handleChange('zonaTerritorialidad', e.target.value)}
              className="mt-1 bg-slate-800 border border-slate-700 rounded p-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="urbana" className="bg-slate-800 text-white">Zona Urbana</option>
              <option value="periferica" className="bg-slate-800 text-white">Zona Urbana Periférica</option>
              <option value="periurbana_rural" className="bg-slate-800 text-white">Zona Periurbana y Rural</option>
              <option value="fuera" className="bg-slate-800 text-white">Fuera de Zonas Especiales</option>
            </select>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-900/50">
            <input 
              type="checkbox" 
              className="mt-1"
              checked={data.ley14449} 
              onChange={(e) => handleChange('ley14449', e.target.checked)} 
            />
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Ley 14.449 (Hábitat)</p>
              <p className="text-xs text-gray-500">Loteos sociales con requerimientos mínimos reducidos.</p>
            </div>
          </label>
        </div>
      </div>

      {/* Restricciones al Dominio / Uso de Suelo */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 shadow-sm">
        <h4 className="text-xs font-bold text-white uppercase flex items-center gap-2 mb-4">
          <AlertTriangle className="w-4 h-4 text-amber-500" /> Restricciones al Dominio / Uso de Suelo
        </h4>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {['Electroductos', 'Arroyos', 'Canales', 'Restricciones de Vialidad', 'Reservas'].map(restriction => (
            <label key={restriction} className="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-slate-700">
              <input 
                type="checkbox" 
                checked={(data.landRestrictions || []).includes(restriction)}
                onChange={() => toggleRestriction(restriction)}
              />
              <span className="text-sm font-semibold text-white">{restriction}</span>
            </label>
          ))}
        </div>
        
        {/* Custom restrictions list */}
        <div className="space-y-2 mb-3">
          {(data.landRestrictions || []).filter(r => !['Electroductos', 'Arroyos', 'Canales', 'Restricciones de Vialidad', 'Reservas'].includes(r)).map((customRes, idx) => (
             <div key={idx} className="flex items-center justify-between bg-slate-700 p-2 rounded border border-slate-600">
               <span className="text-sm font-medium text-white">{customRes}</span>
               <button onClick={() => toggleRestriction(customRes)} className="text-slate-400 hover:text-white">×</button>
             </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input 
            type="text"
            placeholder="Agregar otra restricción..."
            value={customRestriction}
            onChange={(e) => setCustomRestriction(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addCustomRestriction()}
            className="flex-1 bg-slate-700 border border-slate-600 rounded p-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
          />
          <button 
            onClick={addCustomRestriction}
            className="px-3 py-2 bg-indigo-600 text-white font-bold text-sm rounded hover:bg-indigo-500 transition-colors"
          >
            Agregar
          </button>
        </div>
      </div>

      {/* Condiciones Ambientales */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 shadow-sm">
        <h4 className="text-xs font-bold text-white uppercase flex items-center gap-2 mb-4">
          <Layers className="w-4 h-4 text-emerald-500" /> Condiciones Ambientales (Art. 87-90)
        </h4>
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer p-2 rounded hover:bg-slate-700">
            <input 
              type="checkbox" 
              className="mt-1"
              checked={data.nearIndustry} 
              onChange={(e) => handleChange('nearIndustry', e.target.checked)} 
            />
            <div>
              <p className="text-sm font-semibold text-white">Próximo a Industrias</p>
              <p className="text-xs text-slate-400">Requiere evaluación de impacto industrial.</p>
            </div>
          </label>
          <label className="flex flex-col gap-1 p-2 rounded hover:bg-slate-700">
            <span className="text-sm font-semibold text-white">Pasivos Ambientales / Cavas</span>
            <select 
              value={data.pasivosAmbientales || 'ninguno'} 
              onChange={(e) => handleChange('pasivosAmbientales', e.target.value)}
              className="mt-1 bg-slate-800 border border-slate-700 rounded p-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ninguno" className="bg-slate-800 text-white">Ninguno</option>
              <option value="proximo" className="bg-slate-800 text-white">Próximo al loteo (evaluación individualizada)</option>
              <option value="dentro" className="bg-slate-800 text-white">Dentro del loteo (remediación obligatoria Ley 14.343)</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
