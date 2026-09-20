import { useState, useMemo } from 'react';
import type { UrbanDevelopment } from '../../types/development';
import { Search, Filter, MapPin, AlertTriangle, ShieldCheck } from 'lucide-react';

interface Props {
  developments: UrbanDevelopment[];
  onSelect: (dev: UrbanDevelopment) => void;
  selectedId: string | undefined;
}

export function DevelopmentDirectory({ developments, onSelect, selectedId }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filters
  const [filterDpout, setFilterDpout] = useState<boolean | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('todos');
  const [filterType, setFilterType] = useState<string>('todos');
  const [filterTerritory, setFilterTerritory] = useState<string>('todos');
  const [filterLey14449, setFilterLey14449] = useState<boolean | null>(null);

  const filteredDevelopments = useMemo(() => {
    return developments.filter(dev => {
      // Name Search
      if (searchTerm && !dev.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      
      // DPOUT
      if (filterDpout !== null && dev.technicalData.inDpoutRegistry !== filterDpout) return false;
      
      // Status
      if (filterStatus !== 'todos' && dev.complianceStatus !== filterStatus) return false;

      // Type
      if (filterType !== 'todos' && dev.type !== filterType) return false;

      // Territory
      if (filterTerritory !== 'todos' && dev.technicalData.zonaTerritorialidad !== filterTerritory) return false;

      // Ley 14449
      if (filterLey14449 !== null && dev.technicalData.ley14449 !== filterLey14449) return false;

      return true;
    });
  }, [developments, searchTerm, filterDpout, filterStatus, filterType, filterTerritory, filterLey14449]);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      
      {/* Header & Search */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Directorio de Loteos</h2>
        
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

        {/* Filters */}
        <div className="space-y-3">
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
            className={`p-3 rounded-lg border cursor-pointer transition-all ${
              selectedId === dev.id 
                ? 'bg-indigo-50 border-indigo-300 dark:bg-indigo-900/20 dark:border-indigo-700' 
                : 'bg-white border-gray-200 hover:border-indigo-300 hover:shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:border-indigo-600'
            }`}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100">{dev.name}</h3>
              <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                dev.complianceStatus === 'rojo' ? 'bg-red-500' : 
                dev.complianceStatus === 'amarillo' ? 'bg-yellow-500' : 'bg-green-500'
              }`} />
            </div>
            
            <div className="flex flex-wrap gap-1 mt-2">
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
