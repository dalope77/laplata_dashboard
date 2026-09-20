import { useState } from 'react';
import { DevelopmentMap } from './Map/DevelopmentMap';
import { DevelopmentDirectory } from './Directory/DevelopmentDirectory';
import { RegularizationPanel } from './Development/RegularizationPanel';
import { NormativeEngine } from './Normative/NormativeEngine';
import { FinancialSummary } from './Financial/FinancialSummary';
import { TechnicalSheet } from './Development/TechnicalSheet';
import { mockDevelopments } from '../data/mockDevelopments';
import { generateDevelopmentReport } from '../utils/pdfExport';
import type { UrbanDevelopment } from '../types/development';
import { X, LogOut, Map as MapIcon, ChevronRight } from 'lucide-react';

export function DevelopmentViewer({ onLogout }: { onLogout: () => void }) {
  const [selectedDevelopment, setSelectedDevelopment] = useState<UrbanDevelopment | null>(null);
  const [activeTab, setActiveTab] = useState<'ficha' | 'tramites' | 'normativa' | 'finanzas'>('ficha');
  const [isDrawingMode, setIsDrawingMode] = useState(false);

  const handleUpdateDevelopment = (updatedDev: UrbanDevelopment) => {
    setSelectedDevelopment(updatedDev);
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

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden bg-gray-50 dark:bg-gray-900">
      
      {/* Left Panel: Directory */}
      <div className="w-full md:w-[350px] shrink-0 z-10 shadow-lg">
        <DevelopmentDirectory 
          developments={mockDevelopments}
          onSelect={setSelectedDevelopment}
          selectedId={selectedDevelopment?.id}
        />
      </div>

      {/* Map Area */}
      <div className={`transition-all duration-300 ease-in-out relative z-0 flex-1`}>
        <DevelopmentMap 
          selectedDevelopment={selectedDevelopment}
          onSelectDevelopment={setSelectedDevelopment}
          isDrawingMode={isDrawingMode}
          onAddPoint={handleAddPoint}
          onRemovePoint={handleRemovePoint}
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
              {activeTab === 'finanzas' && <FinancialSummary development={selectedDevelopment} />}
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
    </div>
  );
}
