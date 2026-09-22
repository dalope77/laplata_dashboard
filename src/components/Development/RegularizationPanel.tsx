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

  const handleToggleRequirement = (procId: string, reqId: string) => {
    const updatedProcedures = development.procedures.map(p => {
      if (p.id !== procId || !p.requirements) return p;
      
      const newReqs = p.requirements.map(r => 
        r.id === reqId ? { ...r, isCompleted: !r.isCompleted } : r
      );
      
      // Auto-update status if all requirements are completed
      const allCompleted = newReqs.every(r => r.isCompleted);
      const newStatus = allCompleted ? 'aprobado' : (newReqs.some(r => r.isCompleted) ? 'observado' : 'faltante');

      return { ...p, requirements: newReqs, status: p.status === 'aprobado' ? 'aprobado' : newStatus };
    });
    
    onUpdateDevelopment({
      ...development,
      procedures: updatedProcedures as any
    });
  };

  const handleUploadRequirementDoc = (procId: string, reqId: string) => {
    // Simulate uploading a doc specifically for a requirement
    setUploadingId(`req-${reqId}`);
    setTimeout(() => {
      const updatedProcedures = development.procedures.map(p => {
        if (p.id !== procId || !p.requirements) return p;
        const newReqs = p.requirements.map(r => 
          r.id === reqId ? { ...r, isCompleted: true, documentUrl: 'https://fake.url/doc.pdf' } : r
        );
        const allCompleted = newReqs.every(r => r.isCompleted);
        const newStatus = allCompleted ? 'aprobado' : 'observado';
        return { ...p, requirements: newReqs, status: newStatus };
      });
      onUpdateDevelopment({
        ...development,
        procedures: updatedProcedures as any
      });
      setUploadingId(null);
    }, 1000);
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

  const totalEstimatedDays = development.procedures.reduce((total, p) => {
    if (p.requirements && p.status !== 'aprobado') {
      const activeReqsDays = p.requirements.filter(r => !r.isCompleted).reduce((sum, r) => sum + (r.estimatedDays || 0), 0);
      return total + activeReqsDays;
    }
    return total;
  }, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Trámites y Documentación</h3>
          <p className="text-xs text-gray-400 mb-4">Sube los documentos correspondientes a cada etapa para avanzar en la regularización.</p>
        </div>
        <div className="flex gap-3 items-start shrink-0">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-500 uppercase mb-2">Estado General</span>
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${development.isRegularized ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'}`}>
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${development.isRegularized ? 'translate-x-6' : ''}`}></div>
              </div>
              <input 
                type="checkbox" 
                className="hidden"
                checked={!!development.isRegularized}
                onChange={(e) => {
                  onUpdateDevelopment({
                    ...development,
                    isRegularized: e.target.checked
                  });
                }}
              />
              <span className={`text-xs font-bold ${development.isRegularized ? 'text-green-600 dark:text-green-400' : 'text-gray-500 group-hover:text-gray-700'}`}>
                {development.isRegularized ? 'Regularizado' : 'Marcar Regularizado'}
              </span>
            </label>
          </div>

          {totalEstimatedDays > 0 && (
            <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-lg p-3 text-right">
              <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase">Tiempo Estimado Restante</p>
              <p className="text-xl font-black text-indigo-700 dark:text-indigo-300">{totalEstimatedDays} días</p>
            </div>
          )}
        </div>
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
              {phaseTasks.map((proc) => {
                const totalReqs = proc.requirements?.length || 0;
                const completedReqs = proc.requirements?.filter(r => r.isCompleted).length || 0;
                const hasReqs = totalReqs > 0;

                return (
                  <div key={proc.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(proc.status)}
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{proc.name}</p>
                          {hasReqs && (
                            <p className="text-[10px] text-gray-500">{completedReqs} de {totalReqs} requisitos completados</p>
                          )}
                        </div>
                      </div>
                      
                      {(!hasReqs) && (proc.status === "documentacion_subida" || proc.status === "aprobado" ? (
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
                      ))}
                      {hasReqs && (proc.status === "aprobado") && (
                         <span className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded text-xs font-semibold text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Aprobado
                        </span>
                      )}
                    </div>

                    {hasReqs && (
                      <div className="border-t border-gray-100 dark:border-gray-700 pt-3 pl-8 flex flex-col gap-2">
                        {proc.requirements!.map(req => (
                          <div key={req.id} className="flex items-center justify-between group py-1">
                            <label className="flex items-center gap-2 cursor-pointer flex-1">
                              <input 
                                type="checkbox" 
                                checked={req.isCompleted} 
                                onChange={() => handleToggleRequirement(proc.id, req.id)}
                                className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                              />
                              <span className={`text-xs ${req.isCompleted ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-gray-700 dark:text-gray-300 font-medium'}`}>
                                {req.name} <span className="text-[10px] text-gray-400">({req.estimatedDays}d)</span>
                              </span>
                            </label>
                            
                            {!req.isCompleted ? (
                              <button 
                                onClick={() => handleUploadRequirementDoc(proc.id, req.id)}
                                disabled={uploadingId === `req-${req.id}`}
                                className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded text-[10px] font-bold"
                              >
                                {uploadingId === `req-${req.id}` ? 'Subiendo...' : <><UploadCloud className="w-3 h-3" /> Subir doc</>}
                              </button>
                            ) : (
                              <span className="text-[10px] font-bold text-green-600 dark:text-green-400 flex items-center gap-1">
                                <FileText className="w-3 h-3" /> Doc OK
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
