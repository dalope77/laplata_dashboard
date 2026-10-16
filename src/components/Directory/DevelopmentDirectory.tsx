import { useState, useMemo } from 'react';
import type { UrbanDevelopment } from '../../types/development';
import { Search, TrendingUp, MapPin, Trash2 } from 'lucide-react';
import { calculateDynamicValues } from '../../utils/financials';

interface Props {
  developments: UrbanDevelopment[];
  onSelect: (dev: UrbanDevelopment) => void;
  selectedId: string | undefined;
  marketPoints?: any[];
  onAddDevelopment?: () => void;
  onOpenBudgetList?: () => void;
  onDeleteDevelopment?: (id: string, name: string) => void;
}

export function DevelopmentDirectory({ developments, onSelect, selectedId, marketPoints = [], onAddDevelopment, onOpenBudgetList, onDeleteDevelopment }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filters
  const [filterSubdivision, setFilterSubdivision] = useState<'all' | 'ph' | 'geodesia' | 'indiviso'>('all');
  const [filterDpout, setFilterDpout] = useState<boolean | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterType] = useState<UrbanDevelopment['type'] | 'all'>('all');
  const [filterTerritory, setFilterTerritory] = useState<string>('all');
  const [filterLey14449, setFilterLey14449] = useState<boolean | null>(null);
  const [filterRegularized, setFilterRegularized] = useState<boolean | null>(null);
  const [filterOrdenanza12638, setFilterOrdenanza12638] = useState<string>('all');

  const filteredDevelopments = useMemo(() => {
    return developments.filter(dev => {
      // Name Search
      if (searchTerm && !dev.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      
      // Subdivision Group (PH, Geodesia, Indiviso)
      const state = dev.technicalData?.subdivisionState || (
        dev.technicalData?.hasSubparcelas ? 'ph' :
        ((dev.technicalData?.parcels?.length || 0) >= 10 && ((dev.technicalData?.totalAreaSqM || 1) / (dev.technicalData?.parcels?.length || 1)) < 5000) ? 'geodesia' : 'indiviso'
      );
      if (filterSubdivision !== 'all' && state !== filterSubdivision) return false;

      // DPOUT
      if (filterDpout !== null && dev.technicalData.inDpoutRegistry !== filterDpout) return false;

      // Regularized
      if (filterRegularized !== null && !!dev.isRegularized !== filterRegularized) return false;
      
      // Status
      if (filterStatus !== 'all' && dev.complianceStatus !== filterStatus) return false;

      // Type
      if (filterType !== 'all' && dev.type !== filterType) return false;

      // Territory
      if (filterTerritory !== 'all' && dev.technicalData.zonaTerritorialidad !== filterTerritory) return false;

      // Ley 14449
      if (filterLey14449 !== null && dev.technicalData.ley14449 !== filterLey14449) return false;

      // Ordenanza 12638
      if (filterOrdenanza12638 !== 'all' && (dev.technicalData.ordenanza12638_caso || 'none') !== filterOrdenanza12638) return false;

      return true;
    });
  }, [developments, searchTerm, filterSubdivision, filterDpout, filterStatus, filterType, filterTerritory, filterLey14449, filterRegularized, filterOrdenanza12638]);

  const globalKpis = useMemo(() => {
    let totalCessions = 0;
    let totalPlusvalia = 0;
    
    filteredDevelopments.forEach(dev => {
      if (!dev.isRegularized && (dev.complianceStatus === 'rojo' || dev.complianceStatus === 'amarillo') && dev.technicalData.physicalState !== 'abandonado_sin_desarrollo') {
        const devMarketPoints = marketPoints.filter(mp => mp.development_id === dev.id);
        const dynamicVals = calculateDynamicValues(dev, devMarketPoints);
        totalCessions += dynamicVals.cessionsSqM;
        totalPlusvalia += dynamicVals.plusvalia;
      }
    });

    return { totalCessions, totalPlusvalia };
  }, [filteredDevelopments, marketPoints]);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      
      {/* Header & Search */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Directorio de Loteos</h2>
          <div className="flex gap-2">
            {onOpenBudgetList && (
              <button 
                onClick={onOpenBudgetList}
                className="px-2 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-300 dark:border-amber-700 text-xs font-bold rounded hover:bg-amber-200 transition-colors flex items-center gap-1"
                title="Lista a Presupuestar"
              >
                📋 Presupuestos
              </button>
            )}
            {onAddDevelopment && (
              <button 
                onClick={onAddDevelopment}
                className="px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded hover:bg-indigo-700 transition-colors"
              >
                + Nuevo
              </button>
            )}
          </div>
        </div>
        
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg leading-5 bg-gray-50 dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Buscar emprendimiento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Global KPIs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-green-50 dark:bg-green-900/10 p-2 rounded-lg border border-green-100 dark:border-green-900/20">
            <span className="text-[9px] text-green-800 dark:text-green-400 uppercase font-bold flex items-center gap-1"><MapPin className="w-3 h-3" /> Cesiones Global (m²)</span>
            <p className="text-sm font-bold text-green-700 dark:text-green-300 mt-0.5">
              {globalKpis.totalCessions.toLocaleString()}
            </p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 p-2 rounded-lg border border-red-100 dark:border-red-900/20">
            <span className="text-[9px] text-red-800 dark:text-red-400 uppercase font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Plusvalía Global (USD)</span>
            <p className="text-sm font-bold text-red-700 dark:text-red-300 mt-0.5">
              {globalKpis.totalPlusvalia.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-3">
          {/* Subdividido vs Indiviso Quick Filter */}
          <div className="grid grid-cols-4 gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
            <button
              onClick={() => setFilterSubdivision('all')}
              className={`py-1 px-1 rounded-md text-[11px] font-bold transition-all ${
                filterSubdivision === 'all'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilterSubdivision(filterSubdivision === 'ph' ? 'all' : 'ph')}
              className={`py-1 px-1 rounded-md text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
                filterSubdivision === 'ph'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/30'
              }`}
              title="Barrios con PH Armado (subparcelas detectadas)"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${filterSubdivision === 'ph' ? 'bg-white' : 'bg-purple-500'}`} />
              PH
            </button>
            <button
              onClick={() => setFilterSubdivision(filterSubdivision === 'geodesia' ? 'all' : 'geodesia')}
              className={`py-1 px-1 rounded-md text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
                filterSubdivision === 'geodesia'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30'
              }`}
              title="Subdivisión Geodésica de Lotes Urbanos"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${filterSubdivision === 'geodesia' ? 'bg-white' : 'bg-blue-500'}`} />
              Geodesia
            </button>
            <button
              onClick={() => setFilterSubdivision(filterSubdivision === 'indiviso' ? 'all' : 'indiviso')}
              className={`py-1 px-1 rounded-md text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
                filterSubdivision === 'indiviso'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/30'
              }`}
              title="Parcela o macizos de origen sin subdividir"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${filterSubdivision === 'indiviso' ? 'bg-white' : 'bg-orange-500'}`} />
              Indiviso
            </button>
          </div>

          {/* DPOUT Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterDpout(filterDpout === true ? null : true)}
              className={`flex-1 py-1.5 px-2 rounded text-xs font-semibold border transition-colors ${
                filterDpout === true 
                  ? 'bg-indigo-100 border-indigo-300 text-indigo-700 dark:bg-indigo-900/30 dark:border-indigo-700 dark:text-indigo-300' 
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300'
              }`}
            >
              Empadronados DPOUT
            </button>
            <button
              onClick={() => setFilterLey14449(filterLey14449 === true ? null : true)}
              className={`flex-1 py-1.5 px-2 rounded text-xs font-semibold border transition-colors ${
                filterLey14449 === true 
                  ? 'bg-purple-100 border-purple-300 text-purple-700 dark:bg-purple-900/30 dark:border-purple-700 dark:text-purple-300' 
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300'
              }`}
            >
              Ley 14.449
            </button>
            <button
              onClick={() => setFilterRegularized(filterRegularized === true ? null : true)}
              className={`flex-1 py-1.5 px-2 rounded text-xs font-semibold border transition-colors ${
                filterRegularized === true 
                  ? 'bg-green-100 border-green-300 text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300' 
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300'
              }`}
            >
              Regularizados
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="block w-full py-1.5 px-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="todos">Estado: Todos</option>
              <option value="verde">Apto</option>
              <option value="amarillo">Con Adecuaciones</option>
              <option value="rojo">Irregular</option>
            </select>
            <select
              value={filterOrdenanza12638}
              onChange={(e) => setFilterOrdenanza12638(e.target.value)}
              className="block w-full py-1.5 px-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="all">Ord. 12638: Todas</option>
              <option value="A">Ord. 12638: Caso A</option>
              <option value="B">Ord. 12638: Caso B</option>
              <option value="C">Ord. 12638: Caso C</option>
              <option value="D">Ord. 12638: Caso D</option>
              <option value="E">Ord. 12638: Caso E</option>
              <option value="inviable">Rechazado / Inviable</option>
              <option value="none">No aplica / Sin clasif.</option>
            </select>

            <select
              value={filterTerritory}
              onChange={(e) => setFilterTerritory(e.target.value)}
              className="block w-full py-1.5 px-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="todos">Zona: Todas</option>
              <option value="urbana">Urbana</option>
              <option value="periferica">Periférica</option>
              <option value="periurbana_rural">Periurbana/Rural</option>
              <option value="fuera">Fuera de Zona</option>
            </select>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-gray-50 dark:bg-gray-900/50">
        {filteredDevelopments.map(dev => (
          <div 
            key={dev.id}
            onClick={() => onSelect(dev)}
            className={`group p-3 rounded-lg border cursor-pointer transition-all ${
              selectedId === dev.id 
                ? 'bg-indigo-50 border-indigo-300 dark:bg-indigo-900/20 dark:border-indigo-700' 
                : 'bg-white border-gray-200 hover:border-indigo-300 hover:shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:border-indigo-600'
            }`}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 flex-1 pr-2">{dev.name}</h3>
              <div className="flex items-center gap-1.5 shrink-0">
                {onDeleteDevelopment && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteDevelopment(dev.id, dev.name);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded transition-all"
                    title={`Eliminar ${dev.name}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
                <div className={`w-2 h-2 rounded-full ${
                  dev.complianceStatus === 'rojo' ? 'bg-red-500' : 
                  dev.complianceStatus === 'amarillo' ? 'bg-yellow-500' : 'bg-green-500'
                }`} />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 mt-2">
              {(() => {
                const state = dev.technicalData?.subdivisionState || (
                  dev.technicalData?.hasSubparcelas ? 'ph' :
                  ((dev.technicalData?.parcels?.length || 0) >= 10 && ((dev.technicalData?.totalAreaSqM || 1) / (dev.technicalData?.parcels?.length || 1)) < 5000) ? 'geodesia' : 'indiviso'
                );
                if (state === 'ph') {
                  return (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      PH Armado
                    </span>
                  );
                } else if (state === 'geodesia') {
                  return (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Subdivisión ({dev.technicalData?.parcels?.length || 0} lotes)
                    </span>
                  );
                } else {
                  return (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      Indiviso ({dev.technicalData?.parcels?.length || 1} origen)
                    </span>
                  );
                }
              })()}
              <span className="inline-block px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] uppercase rounded">
                {dev.type.replace('_', ' ')}
              </span>
              {dev.technicalData.inDpoutRegistry && (
                <span className="inline-block px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[10px] font-bold uppercase rounded">
                  DPOUT
                </span>
              )}
              {dev.technicalData.ley14449 && (
                <span className="inline-block px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-[10px] uppercase rounded">
                  Ley 14.449
                </span>
              )}
              {dev.isRegularized && (
                <span className="inline-block px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase rounded">
                  Regularizado
                </span>
              )}
            </div>
          </div>
        ))}
        {filteredDevelopments.length === 0 && (
          <div className="text-center p-4 text-gray-500 text-sm">
            No se encontraron resultados.
          </div>
        )}
      </div>

    </div>
  );
}
