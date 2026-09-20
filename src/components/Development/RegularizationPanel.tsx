import { useState } from "react";
import type { UrbanDevelopment } from "../../types/development";
import { CheckCircle2, Circle, UploadCloud, FileText, AlertCircle, Loader2 } from "lucide-react";

interface Props {
  development: UrbanDevelopment;
  onUpdateDevelopment: (dev: UrbanDevelopment) => void;
}

export function RegularizationPanel({ development, onUpdateDevelopment }: Props) {
  const [uploadingId, setUploadingId] = useState<string | null>(null);

  const handleUpload = (procId: string) => {
    // Create a hidden input element
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx,.jpg,.png';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      // Simulate upload delay
      setUploadingId(procId);
      setTimeout(() => {
        const updatedProcedures = development.procedures.map(p => 
          p.id === procId ? { ...p, status: "documentacion_subida" as const } : p
        );
        onUpdateDevelopment({
          ...development,
          procedures: updatedProcedures
        });
        setUploadingId(null);
      }, 1500);
    };

    input.click();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "aprobado": return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "documentacion_subida": return <FileText className="w-5 h-5 text-blue-500" />;
      case "observado": return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default: return <Circle className="w-5 h-5 text-gray-300" />;
    }
  };

  const phases = [
    { id: 'fase1', label: 'FASE 1 - Documentación Inicial' },
    { id: 'fase2', label: 'FASE 2 - Permisos' },
    { id: 'fase3', label: 'FASE 3 - Aprobaciones' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Trámites y Documentación</h3>
        <p className="text-xs text-gray-400 mb-4">Sube los documentos correspondientes a cada etapa para avanzar en la regularización.</p>
      </div>

      {/* Barra Temporal (Timeline) */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm mb-6">
        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-4">Línea de Tiempo del Desarrollo</h4>
        <div className="flex items-center justify-between relative">
          {/* Línea conectora */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0"></div>
          
          {phases.map((phase, idx) => {
            const phaseTasks = development.procedures.filter(p => p.category === phase.id);
            const total = phaseTasks.length;
            const completed = phaseTasks.filter(p => p.status === "documentacion_subida" || p.status === "aprobado").length;
            const progress = total === 0 ? 0 : completed / total;
            const isFinished = progress === 1;
            const isStarted = progress > 0;

            return (
              <div key={phase.id} className="relative z-10 flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                  isFinished 
                    ? "bg-green-500 border-green-500 text-white" 
                    : isStarted 
                      ? "bg-indigo-100 dark:bg-indigo-900 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-400"
                }`}>
                  {isFinished ? <CheckCircle2 className="w-4 h-4" /> : <span className="text-xs font-bold">{idx + 1}</span>}
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-gray-800 dark:text-gray-200 uppercase">{phase.label.split(' - ')[0]}</p>
                  <p className="text-[9px] text-gray-500">{completed} / {total} Trámites</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {phases.map(phase => {
        const phaseTasks = development.procedures.filter(p => p.category === phase.id);
        if (phaseTasks.length === 0) return null;

        return (
          <div key={phase.id} className="space-y-3">
            <h4 className="text-xs font-bold text-gray-700 uppercase">{phase.label}</h4>
            <div className="space-y-2">
              {phaseTasks.map((proc) => (
                <div key={proc.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(proc.status)}
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{proc.name}</p>
                    </div>
                  </div>
                  
                  {proc.status === "documentacion_subida" || proc.status === "aprobado" ? (
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded text-xs font-semibold text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completado
                    </span>
                  ) : (
                    <button 
                      onClick={() => handleUpload(proc.id)}
                      disabled={uploadingId === proc.id}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-colors border ${
                        uploadingId === proc.id 
                          ? "bg-indigo-50 border-indigo-200 text-indigo-700 cursor-not-allowed" 
                          : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600"
                      }`}
                    >
                      {uploadingId === proc.id ? (
                        <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Subiendo...</>
                      ) : (
                        <><UploadCloud className="w-3.5 h-3.5" /> Subir PDF</>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
