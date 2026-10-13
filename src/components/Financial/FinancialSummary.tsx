import { useState } from "react";
import type { UrbanDevelopment, PropertyOffer } from "../../types/development";
import { TrendingUp, DollarSign, Calculator, Plus, ExternalLink, FileText, UploadCloud, X, Trash2 } from "lucide-react";
import { calculateDynamicValues } from "../../utils/financials";

interface Props {
  development: UrbanDevelopment;
  marketPoints?: any[];
  isAddingMarketPoint?: boolean;
  onToggleAddMarketPoint?: () => void;
  onDeleteComparable?: (id: string) => void;
  onDeleteOffer?: (id: string) => void;
  onAddOffer?: (offer: PropertyOffer) => void;
}

export function FinancialSummary({ development, marketPoints = [], isAddingMarketPoint, onToggleAddMarketPoint, onDeleteComparable, onDeleteOffer, onAddOffer }: Props) {
  const { financials } = development;
  const [isAddOfferOpen, setIsAddOfferOpen] = useState(false);
  const [newOfferForm, setNewOfferForm] = useState({ fileName: '', amountUsd: '', date: new Date().toISOString().split('T')[0] });
  
  const dynamicVals = calculateDynamicValues(development, marketPoints);
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
          <Calculator className="w-4 h-4" /> Resumen Financiero y Plusvalía
        </h3>
        <p className="text-xs text-gray-400 mb-4">Costos de regularización, cesiones y análisis de mercado.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
          <span className="text-[10px] text-gray-500 uppercase font-semibold">Valor Irregular</span>
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-1">
            USD {dynamicVals.actual.toLocaleString()}
          </p>
          {dynamicVals.isDynamic && <div className="absolute top-0 right-0 px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[8px] font-bold rounded-bl">DINÁMICO</div>}
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/30 shadow-sm relative overflow-hidden">
          <span className="text-[10px] text-indigo-600 dark:text-indigo-400 uppercase font-bold">Valor Regularizado</span>
          <p className="text-lg font-bold text-indigo-700 dark:text-indigo-300 mt-1">
            USD {dynamicVals.final.toLocaleString()}
          </p>
          {dynamicVals.isDynamic && <div className="absolute top-0 right-0 px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[8px] font-bold rounded-bl">DINÁMICO</div>}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-900/20">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-green-800 dark:text-green-400">Sup. Cesiones (Art 56)</span>
          </div>
          <span className="font-bold text-green-700 dark:text-green-300">
            {dynamicVals.cessionsSqM.toLocaleString()} m²
          </span>
        </div>

        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Costos (Honorarios, Tasas)</span>
          </div>
          <span className="font-bold text-gray-900 dark:text-gray-100">
            USD {financials.regularizationCostUsd.toLocaleString()}
          </span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/20 relative overflow-hidden">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-medium text-red-800 dark:text-red-400">Plusvalía a abonar</span>
          </div>
          <span className="font-bold text-red-700 dark:text-red-300">
            USD {dynamicVals.plusvalia.toLocaleString()}
          </span>
          {dynamicVals.isDynamic && <div className="absolute top-0 right-0 px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[8px] font-bold rounded-bl">DINÁMICO</div>}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase">Casos Testigo (Mercado)</h4>
          <button 
            onClick={onToggleAddMarketPoint}
            className={`text-[10px] font-semibold px-2 py-1 rounded transition-colors flex items-center gap-1 ${
              isAddingMarketPoint 
                ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-200' 
                : 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 hover:bg-indigo-100'
            }`}
          >
            {isAddingMarketPoint ? <span className="flex items-center gap-1"><X className="w-3 h-3" /> Cancelar Puntero</span> : <span className="flex items-center gap-1"><Plus className="w-3 h-3" /> Agregar Caso</span>}
          </button>
        </div>
        
        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
          {marketPoints.map((comp) => (
            <div key={comp.id} className="flex justify-between items-center p-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-sm text-xs">
              <div className="flex-1 pr-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 line-clamp-1 flex-1" title={comp.title}>{comp.title || 'Publicación'}</p>
                  <button 
                    onClick={() => onDeleteComparable && onDeleteComparable(comp.id)}
                    className="text-red-400 hover:text-red-600 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors shrink-0"
                    title="Eliminar publicación"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-gray-500 mt-0.5">{comp.sq_meters} m²</p>
              </div>
              <div className="text-right flex flex-col items-end shrink-0 ml-2">
                <p className="font-bold text-gray-900 dark:text-gray-100">USD {comp.price_usd?.toLocaleString()}</p>
                {comp.source_url && (
                  <a href={comp.source_url} target="_blank" rel="noreferrer" className="text-[9px] text-blue-500 flex items-center gap-1 mt-0.5 hover:underline">
                    Ver fuente <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
          {marketPoints.length === 0 && (
            <p className="text-xs text-center text-gray-400 py-4 bg-gray-50 dark:bg-gray-800/50 rounded border border-dashed">
              No hay inmuebles testigo cargados.
            </p>
          )}
        </div>
      </div>

      {/* Ofertas (AVIS) */}
      <div>
        <div className="flex items-center justify-between mb-3 pt-4 border-t border-gray-100 dark:border-gray-800">
          <h4 className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase">Ofertas (AVIS)</h4>
          <button 
            type="button"
            onClick={() => setIsAddOfferOpen(true)}
            className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline"
          >
            <UploadCloud className="w-3 h-3" /> Subir PDF AVIS
          </button>
        </div>
        
        <div className="space-y-2">
          {development.offers?.map((offer) => (
            <div key={offer.id} className="flex justify-between items-center p-2.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded shadow-sm text-xs">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">{offer.fileName}</p>
                  <p className="text-gray-500 mt-0.5">{offer.date}</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-2">
                <p className="font-bold text-indigo-600 dark:text-indigo-400">USD {offer.amountUsd.toLocaleString()}</p>
                <button 
                  onClick={() => onDeleteOffer && onDeleteOffer(offer.id)}
                  className="text-red-400 hover:text-red-600 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                  title="Eliminar AVIS"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
          {(!development.offers || development.offers.length === 0) && (
            <p className="text-xs text-center text-gray-400 py-4 bg-gray-50 dark:bg-gray-800/50 rounded border border-dashed">
              No hay avisos de oferta (AVIS) subidos.
            </p>
          )}
        </div>
      </div>

      {/* Modal para cargar aviso de oferta AVIS con todas las letras en blanco */}
      {isAddOfferOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm p-4">
          <div className="bg-slate-900 text-white rounded-2xl shadow-2xl p-6 w-full max-w-md border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">Nuevo Aviso de Oferta (AVIS)</h3>
              <button onClick={() => setIsAddOfferOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              if (!newOfferForm.amountUsd) return;
              if (onAddOffer) {
                onAddOffer({
                  id: crypto.randomUUID(),
                  fileName: newOfferForm.fileName.trim() || 'aviso_oferta.pdf',
                  date: newOfferForm.date || new Date().toISOString().split('T')[0],
                  amountUsd: Number(newOfferForm.amountUsd) || 0
                });
              }
              setIsAddOfferOpen(false);
              setNewOfferForm({ fileName: '', amountUsd: '', date: new Date().toISOString().split('T')[0] });
            }} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-white block mb-1">Nombre del Archivo / Documento</label>
                <input 
                  type="text" 
                  value={newOfferForm.fileName}
                  onChange={e => setNewOfferForm(prev => ({...prev, fileName: e.target.value}))}
                  className="w-full bg-slate-800 text-white placeholder-slate-400 border border-slate-600 rounded-lg p-2.5 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  placeholder="Ej: aviso_oferta_lote_12.pdf"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-white block mb-1">Monto Ofrecido (USD)</label>
                  <input 
                    type="number" 
                    required
                    value={newOfferForm.amountUsd}
                    onChange={e => setNewOfferForm(prev => ({...prev, amountUsd: e.target.value}))}
                    className="w-full bg-slate-800 text-white placeholder-slate-400 border border-slate-600 rounded-lg p-2.5 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="Ej: 30000"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-white block mb-1">Fecha</label>
                  <input 
                    type="date" 
                    value={newOfferForm.date}
                    onChange={e => setNewOfferForm(prev => ({...prev, date: e.target.value}))}
                    className="w-full bg-slate-800 text-white placeholder-slate-400 border border-slate-600 rounded-lg p-2.5 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-lg transition-colors shadow-lg"
              >
                Guardar Aviso de Oferta
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
