import React, { useState } from 'react';
import type { UrbanDevelopment, ProcedureStep } from '../../types/development';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Play, 
  MapPin, 
  UploadCloud, 
  FileText,
  Trash2,
  Download,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface Props {
  development: UrbanDevelopment;
  onClose: () => void;
}

const CATEGORY_PHASES: Record<string, { id: number, label: string }> = {
  factibilidad: { id: 1, label: "Fase 1 — Prefactibilidad y Factibilidad" },
  catastro: { id: 2, label: "Fase 2 — Mensura y Catastro" },
  proyecto: { id: 2, label: "Fase 2 — Proyecto" },
  obra: { id: 3, label: "Fase 3 — Ejecución de Obra" },
  legal: { id: 4, label: "Fase 4 — Legales y Registración" }
};

export function DevelopmentGantt({ development, onClose }: Props) {
  const [expandedTask, setExpandedTask] = useState<string | null>(null);

  // Group procedures by phase
  const phases = [1, 2, 3, 4];
  
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'aprobado': return { label: 'Completado', color: 'bg-emerald-500', bg: 'bg-emerald-50 border-emerald-200 text-emerald-700', icon: <CheckCircle2 className="w-4 h-4" /> };
      case 'documentacion_subida': return { label: 'En revisión', color: 'bg-indigo-500', bg: 'bg-indigo-50 border-indigo-200 text-indigo-700', icon: <Play className="w-4 h-4" /> };
      case 'observado': return { label: 'Observado', color: 'bg-red-500', bg: 'bg-red-50 border-red-200 text-red-700', icon: <AlertCircle className="w-4 h-4" /> };
      case 'faltante': default: return { label: 'Faltante', color: 'bg-slate-300 hover:bg-slate-400', bg: 'bg-slate-100 border-slate-200 text-slate-500', icon: <Clock className="w-4 h-4" /> };
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 absolute inset-0 z-[2000] overflow-hidden animate-in slide-in-from-right-10 duration-300">
      
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Ruta Crítica</span>
            <span className="text-gray-500 text-sm font-medium">{development.name}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Planificador de Regularización</h2>
        </div>
        <button 
          onClick={onClose}
          className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Cerrar Planificador
        </button>
      </div>

      {/* Main Content Split: Gantt Visual + Task Details */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side: Gantt Chart */}
        <div className="w-1/2 border-r border-gray-100 dark:border-gray-800 overflow-y-auto p-6 bg-white dark:bg-gray-900 relative">
          <div className="absolute top-6 right-6 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-bl-xl text-[10px] font-black tracking-widest uppercase flex items-center gap-1.5 shadow-sm border-b border-l border-indigo-100">
            <MapPin className="h-3 w-3" />
            Línea de Tiempo Estimada
          </div>

          <div className="mt-8 space-y-6">
            {phases.map(phaseId => {
              const phaseTasks = development.procedures.filter(p => CATEGORY_PHASES[p.category]?.id === phaseId);
              if (phaseTasks.length === 0) return null;
              
              const phaseLabel = Object.values(CATEGORY_PHASES).find(c => c.id === phaseId)?.label;

              return (
                <div key={phaseId}>
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-[140px]">
                    {phaseLabel}
                  </h3>
                  
                  <div className="space-y-2">
                    {phaseTasks.map((task, idx) => {
                      const cfg = getStatusConfig(task.status);
                      const isSelected = expandedTask === task.id;
                      
                      // Simulating time offset for visual effect
                      const offsetLeft = phaseId * 10 + (idx * 5);
                      const width = 20 + (idx * 5);

                      return (
                        <div 
                          key={task.id} 
                          className="flex items-center gap-3 cursor-pointer group"
                          onClick={() => setExpandedTask(isSelected ? null : task.id)}
                        >
                          <span className={`w-[130px] shrink-0 text-[11px] font-medium truncate text-right pr-2 transition-colors ${isSelected ? 'text-indigo-600 font-bold' : 'text-slate-600'}`}>
                            {task.name}
                          </span>
                          
                          <div className="flex-1 h-6 bg-slate-50 rounded relative group-hover:bg-slate-100 transition-colors">
                            <div
                              className={`h-full rounded-md shadow-sm relative flex items-center justify-end px-2 transition-all ${cfg.color} ${isSelected ? 'brightness-110 ring-2 ring-indigo-200' : ''}`}
                              style={{ marginLeft: `${offsetLeft}%`, width: `${width}%` }}
                            >
                              <span className="text-[9px] font-bold text-white drop-shadow-sm">45d</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Task Detail / Document Uploader */}
        <div className="w-1/2 overflow-y-auto p-6 bg-gray-50/30 dark:bg-gray-900/50">
          {expandedTask ? (
            (() => {
              const task = development.procedures.find(p => p.id === expandedTask)!;
              const cfg = getStatusConfig(task.status);

              return (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  
                  {/* Task Header */}
                  <div className={`p-5 rounded-2xl border ${cfg.bg} shadow-sm bg-white`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl border bg-white ${cfg.bg}`}>
                          {cfg.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{task.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${cfg.bg}`}>
                              {cfg.label}
                            </span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                              {task.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Document Uploader Area */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Checkpoints y Documentación</h4>
                    
                    {task.status === 'faltante' || task.status === 'observado' ? (
                      <div className="border-2 border-dashed border-gray-200 hover:border-indigo-400 bg-gray-50 hover:bg-indigo-50/50 transition-all rounded-xl p-8 text-center cursor-pointer">
                        <UploadCloud className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                        <p className="text-sm font-bold text-gray-700">Seleccionar plano o documento pdf</p>
                        <p className="text-xs text-gray-400 mt-1">Sube la documentación para validar este hito en la regularización.</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-gray-50">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-indigo-600" />
                            <div>
                              <p className="text-sm font-semibold text-gray-800">documentacion_presentada.pdf</p>
                              <p className="text-[10px] text-gray-500">Subido hoy • Verificado por IA</p>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <button className="p-1.5 text-indigo-600 hover:bg-indigo-100 rounded">
                              <Download className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 text-red-500 hover:bg-red-50 rounded">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })()
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
              <MapPin className="w-12 h-12 mb-4 text-gray-200" />
              <h3 className="text-lg font-bold text-gray-600">Selecciona un trámite</h3>
              <p className="text-sm max-w-sm mt-2">Haz clic en una barra del diagrama de Gantt para ver los detalles del trámite y cargar su documentación.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
