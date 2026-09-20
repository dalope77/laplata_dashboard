import type { UrbanDevelopment } from "../../types/development";
import { TrendingUp, DollarSign, Calculator, Plus, ExternalLink, FileText, UploadCloud, X } from "lucide-react";

interface Props {
  development: UrbanDevelopment;
  marketPoints?: any[];
  isAddingMarketPoint?: boolean;
  onToggleAddMarketPoint?: () => void;
}

export function FinancialSummary({ development, marketPoints = [], isAddingMarketPoint, onToggleAddMarketPoint }: Props) {
  const { financials } = development;
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
          <Calculator className="w-4 h-4" /> Resumen Financiero y Plusvalía
        </h3>
        <p className="text-xs text-gray-400 mb-4">Costos de regularización, cesiones y análisis de mercado.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <span className="text-[10px] text-gray-500 uppercase font-semibold">Valor Irregular</span>
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-1">
            USD {financials.marketValueIrregularUsd.toLocaleString()}
          </p>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/30 shadow-sm">
          <span className="text-[10px] text-indigo-600 dark:text-indigo-400 uppercase font-bold">Valor Regularizado</span>
          <p className="text-lg font-bold text-indigo-700 dark:text-indigo-300 mt-1">
            USD {financials.marketValueRegularizedUsd.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Costos (Honorarios, Tasas)</span>
          </div>
          <span className="font-bold text-gray-900 dark:text-gray-100">
            USD {financials.regularizationCostUsd.toLocaleString()}
          </span>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/20">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-medium text-red-800 dark:text-red-400">Plusvalía a abonar</span>
          </div>
          <span className="font-bold text-red-700 dark:text-red-300">
            USD {financials.plusvaliaAmountUsd.toLocaleString()}
          </span>
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
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 line-clamp-1" title={comp.title}>{comp.title || 'Publicación'}</p>
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
          <button className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline">
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
              <div className="text-right">
                <p className="font-bold text-indigo-600 dark:text-indigo-400">USD {offer.amountUsd.toLocaleString()}</p>
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
    </div>
  );
}
