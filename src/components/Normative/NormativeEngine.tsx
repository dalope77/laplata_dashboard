import { useState, useEffect } from "react";
import type { UrbanDevelopment } from "../../types/development";
import { Scale, FileWarning, CheckCircle2, Loader2, Map as MapIcon, ChevronDown, ChevronUp, Info } from "lucide-react";

interface Props {
  development: UrbanDevelopment;
}

export function NormativeEngine({ development }: Props) {
  const [loadingZone, setLoadingZone] = useState(true);
  const [zoneData, setZoneData] = useState<{ zone: string; code: string } | null>(null);
  const [expandedRule, setExpandedRule] = useState<string | null>(null);

  // Simulate querying UrbaSIG for the zoning of the polygon
  useEffect(() => {
    setLoadingZone(true);
    setZoneData(null);

    // Mock API call to UrbaSIG / ARBA GeoServer
    const timer = setTimeout(() => {
      // Deterministic pseudo-random zone based on development ID length for demo purposes
      const isUrban = development.id.length % 2 === 0;
      setZoneData({
        zone: isUrban ? "Área Urbana Consolidada (U/C)" : "Área Rural / Borde Urbano (R/E)",
        code: isUrban ? "U/C" : "R/E"
      });
      setLoadingZone(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [development.id]);

  const isBannedZone = zoneData?.code === "U/C" && (development.type === "barrio_cerrado" || development.type === "club_campo");

  const density = development.technicalData.indicators.density;
  const fos = development.technicalData.indicators.fos;
  const fot = development.technicalData.indicators.fot;
  const minArea = development.technicalData.indicators.minArea || 0;
  const totalArea = development.technicalData.totalAreaSqM;
  const isCat1 = development.technicalData.hasMaterialization;
  const isCat2 = development.technicalData.hasPartialViability;
  const zona = development.technicalData.zonaTerritorialidad;
  const ley14449 = development.technicalData.ley14449;
  
  const hydroRisk = development.technicalData.hydroRisk;
  const nearIndustry = development.technicalData.nearIndustry;
  const pasivos = development.technicalData.pasivosAmbientales;

  let pgaRequired = hydroRisk || nearIndustry || pasivos !== 'ninguno';

  let regStatus = "EXCLUIDO";
  if (isCat1 || isCat2) {
    regStatus = "APTO";
  } else if (density >= 1 && density <= 30) {
    regStatus = "EXCEPCIÓN";
  }

  let art85Status = "N/A";
  let art85Messages: string[] = [];
  
  if (regStatus === "APTO" || regStatus === "EXCEPCIÓN") {
    if (zona === 'urbana') {
       art85Status = "APTO";
       art85Messages.push("Caso A: Se exhortará a ajustarse a los parámetros vigentes (Ord. 10703) en un plazo de 60 días hábiles.");
    } else if (zona === 'periferica') {
       const maxFos = 0.2;
       const maxFot = 0.4;
       const minA = ley14449 ? 200 : 600;
       
       if (fos > maxFos) art85Messages.push(`Infracción: FOS (${fos}) supera el máximo de ${maxFos}.`);
       if (fot > maxFot) art85Messages.push(`Infracción: FOT (${fot}) supera el máximo de ${maxFot}.`);
       if (minArea > 0 && minArea < minA) art85Messages.push(`Infracción: Superficie mínima (${minArea}m2) es menor al requerido de ${minA}m2.`);
       if (totalArea > 40000) art85Messages.push("Alerta: Superficie mayor a 4 ha. Requiere Convenio Urbanístico por Etapabilidad.");
       
       art85Status = art85Messages.some(m => m.includes('Infracción')) ? "INFRACCIÓN" : "APTO";
    } else if (zona === 'periurbana_rural') {
       const isCasoC = density > 30;
       const maxFos = ley14449 ? 0.6 : 0.2;
       const maxFot = ley14449 ? 0.8 : 0.4;
       const minA = isCasoC ? (ley14449 ? 200 : 600) : (ley14449 ? 200 : 1200);
       
       if (isCasoC && density > 80) art85Messages.push(`Infracción: Densidad bruta (${density}) supera el máximo de 80 hab/ha (Caso C).`);
       
       if (fos > maxFos) art85Messages.push(`Infracción: FOS (${fos}) supera el máximo de ${maxFos}.`);
       if (fot > maxFot) art85Messages.push(`Infracción: FOT (${fot}) supera el máximo de ${maxFot}.`);
       if (minArea > 0 && minArea < minA) art85Messages.push(`Infracción: Superficie mínima (${minArea}m2) es menor al requerido de ${minA}m2.`);
       
       if (ley14449 && isCasoC === false && totalArea > 40000) {
           art85Messages.push(`Infracción: Superficie mayor a 4 ha (límite Ley 14449 Caso D).`);
       }

       if (totalArea > 80000) art85Messages.push("Alerta: Superficie mayor a 8 ha. Requiere Convenio Urbanístico por Etapabilidad.");
       
       art85Status = art85Messages.some(m => m.includes('Infracción')) ? "INFRACCIÓN" : "APTO";
    } else {
       art85Status = "FUERA";
       art85Messages.push("El polígono se encuentra fuera de las zonas especiales de territorialidad.");
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
          <Scale className="w-4 h-4" /> Cruce Normativo Oficial
        </h3>
        <p className="text-xs text-gray-400 mb-4">Análisis automático cruzando las parcelas del polígono contra UrbaSIG y normativas vigentes.</p>
      </div>

      {/* Consulta a UrbaSIG */}
      <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-2">
            <MapIcon className="w-4 h-4 text-indigo-500" />
            Zonificación Territorial (UrbaSIG)
          </h4>
          {loadingZone && <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />}
        </div>
        
        {loadingZone ? (
          <p className="text-xs text-slate-500 italic">Consultando servidor WFS de UrbaSIG cruzando geometrías...</p>
        ) : (
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
              Las parcelas del polígono se ubican en:
            </p>
            <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold ${
              isBannedZone ? 'bg-red-100 text-red-700' : 'bg-indigo-100 text-indigo-700'
            }`}>
              {zoneData?.zone}
            </span>
          </div>
        )}
      </div>

      {/* Reglas Normativas */}
      {!loadingZone && zoneData && (
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Evaluación de Aptitud</h4>
          
          {/* Programa de Regularización */}
          <div className={`border rounded-lg ${
            regStatus === 'APTO' ? 'bg-green-50 border-green-200' :
            regStatus === 'EXCEPCIÓN' ? 'bg-yellow-50 border-yellow-200' :
            'bg-red-50 border-red-200'
          }`}>
            <div className="p-3">
              <div className="flex items-start justify-between cursor-pointer" onClick={() => setExpandedRule(expandedRule === 'reg' ? null : 'reg')}>
                <div className="flex items-start gap-3">
                  {regStatus === 'APTO' ? <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> :
                   regStatus === 'EXCEPCIÓN' ? <FileWarning className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" /> :
                   <FileWarning className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />}
                  <div>
                    <p className={`text-sm font-bold ${
                      regStatus === 'APTO' ? 'text-green-900' :
                      regStatus === 'EXCEPCIÓN' ? 'text-yellow-900' :
                      'text-red-900'
                    }`}>
                      Programa de Regularización (Art. 82-84)
                    </p>
                    <p className={`text-xs mt-1 ${
                      regStatus === 'APTO' ? 'text-green-700' :
                      regStatus === 'EXCEPCIÓN' ? 'text-yellow-700' :
                      'text-red-700'
                    }`}>
                      {regStatus === 'APTO' ? "Apto: Cumple con Categoría 1 o 2." :
                       regStatus === 'EXCEPCIÓN' ? `Excepción Art. 96: Densidad (${density} hab/ha) permite empadronamiento.` :
                       `Excluido: Sin materialización, sin viabilidad y densidad (${density} hab/ha) fuera del rango 1-30.`}
                    </p>
                  </div>
                </div>
                <button className={`p-1 rounded hover:bg-black/5 ${
                  regStatus === 'APTO' ? 'text-green-700' :
                  regStatus === 'EXCEPCIÓN' ? 'text-yellow-700' :
                  'text-red-700'
                }`}>
                  {expandedRule === 'reg' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {expandedRule === 'reg' && (
                <div className={`mt-3 pt-3 border-t text-xs ${
                  regStatus === 'APTO' ? 'border-green-200/50 text-green-800' :
                  regStatus === 'EXCEPCIÓN' ? 'border-yellow-200/50 text-yellow-800' :
                  'border-red-200/50 text-red-800'
                }`}>
                  <h5 className="font-bold mb-2 flex items-center gap-1.5"><Info className="w-3.5 h-3.5" /> Criterios Legales:</h5>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Categoría 1 (Materialización de Uso):</strong> Haber finalizado procesos de subdivisión o contar con ocupación residencial entre 19/12/2013 y 09/10/2024.</li>
                    <li><strong>Categoría 2 (Viabilidad Parcial):</strong> Obtención de factibilidad, aprobación geométrica, pago de plusvalía, permisos de obra, Plan ARCA o planes provinciales.</li>
                    <li><strong>Excluidos (Art. 83):</strong> Los loteos no incluidos en Cat 1 o 2 no recibirán tratamiento.</li>
                    <li><strong>Excepción (Art. 96):</strong> Loteos sin viabilidad pero con densidad de 1 a 30 hab/ha podrán ser empadronados.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Tratamiento Administrativo (Art. 85) */}
          {(regStatus === 'APTO' || regStatus === 'EXCEPCIÓN') && zona !== 'fuera' && (
            <div className={`border rounded-lg ${
              art85Status === 'APTO' ? 'bg-green-50 border-green-200' :
              art85Status === 'INFRACCIÓN' ? 'bg-red-50 border-red-200' :
              'bg-gray-50 border-gray-200'
            }`}>
              <div className="p-3">
                <div className="flex items-start justify-between cursor-pointer" onClick={() => setExpandedRule(expandedRule === 'art85' ? null : 'art85')}>
                  <div className="flex items-start gap-3">
                    {art85Status === 'APTO' ? <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> :
                     art85Status === 'INFRACCIÓN' ? <FileWarning className="w-5 h-5 text-red-500 shrink-0 mt-0.5" /> :
                     <Info className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />}
                    <div>
                      <p className={`text-sm font-bold ${
                        art85Status === 'APTO' ? 'text-green-900' :
                        art85Status === 'INFRACCIÓN' ? 'text-red-900' :
                        'text-gray-900'
                      }`}>
                        Parámetros Urbanísticos (Art. 85)
                      </p>
                      <div className={`text-xs mt-1 ${
                        art85Status === 'APTO' ? 'text-green-700' :
                        art85Status === 'INFRACCIÓN' ? 'text-red-700' :
                        'text-gray-700'
                      }`}>
                        {art85Messages.length > 0 ? (
                          <ul className="list-disc pl-4 mt-1">
                            {art85Messages.map((msg, idx) => (
                              <li key={idx} className={msg.includes('Alerta:') ? 'font-semibold text-yellow-700' : ''}>{msg}</li>
                            ))}
                          </ul>
                        ) : "Evaluación de parámetros."}
                      </div>
                    </div>
                  </div>
                  <button className={`p-1 rounded hover:bg-black/5 ${
                    art85Status === 'APTO' ? 'text-green-700' :
                    art85Status === 'INFRACCIÓN' ? 'text-red-700' :
                    'text-gray-700'
                  }`}>
                    {expandedRule === 'art85' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {expandedRule === 'art85' && (
                  <div className={`mt-3 pt-3 border-t text-xs ${
                    art85Status === 'APTO' ? 'border-green-200/50 text-green-800' :
                    art85Status === 'INFRACCIÓN' ? 'border-red-200/50 text-red-800' :
                    'border-gray-200/50 text-gray-800'
                  }`}>
                    <h5 className="font-bold mb-2 flex items-center gap-1.5"><Info className="w-3.5 h-3.5" /> Exigencias calculadas:</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      {zona === 'periferica' && (
                        <>
                          <li>FOS Máximo: 0.2 | FOT Máximo: 0.4</li>
                          <li>Sup. Mínima de Parcela: {ley14449 ? '200m2' : '600m2'}</li>
                          <li>Etapabilidad: Si supera 4 hectáreas.</li>
                        </>
                      )}
                      {zona === 'periurbana_rural' && density > 30 && (
                        <>
                          <li>Caso C (Densidad {'>'} 30 hab/ha)</li>
                          <li>Densidad Bruta Máxima: 80 hab/ha</li>
                          <li>FOS Máximo: {ley14449 ? '0.6' : '0.2'} | FOT Máximo: {ley14449 ? '0.8' : '0.4'}</li>
                          <li>Sup. Mínima de Parcela: {ley14449 ? '200m2' : '600m2'}</li>
                          <li>Etapabilidad: Si supera 8 hectáreas.</li>
                        </>
                      )}
                      {zona === 'periurbana_rural' && density <= 30 && (
                        <>
                          <li>Caso D (Densidad {'<='} 30 hab/ha)</li>
                          <li>FOS Máximo: {ley14449 ? '0.6' : '0.2'} | FOT Máximo: {ley14449 ? '0.8' : '0.4'}</li>
                          <li>Sup. Mínima de Parcela: {ley14449 ? '200m2' : '1200m2'}</li>
                          <li>Etapabilidad: Si supera 8 hectáreas.</li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Condiciones Ambientales (Art. 87-90) */}
          <div className={`border rounded-lg ${
            pgaRequired ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
          }`}>
            <div className="p-3">
              <div className="flex items-start justify-between cursor-pointer" onClick={() => setExpandedRule(expandedRule === 'amb' ? null : 'amb')}>
                <div className="flex items-start gap-3">
                  {pgaRequired ? <FileWarning className="w-5 h-5 text-red-500 shrink-0 mt-0.5" /> : <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />}
                  <div>
                    <p className={`text-sm font-bold ${pgaRequired ? 'text-red-900' : 'text-green-900'}`}>
                      Condiciones Ambientales (Art. 87-90)
                    </p>
                    <div className={`text-xs mt-1 ${pgaRequired ? 'text-red-700' : 'text-green-700'}`}>
                      {pgaRequired ? (
                        <>
                          <p className="font-semibold mb-1">Obligatorio: Plan de Gestión Ambiental (PGA) por:</p>
                          <ul className="list-disc pl-4">
                            {hydroRisk && <li>Peligrosidad a Inundaciones (ADA).</li>}
                            {nearIndustry && <li>Proximidad a industrias habilitadas.</li>}
                            {pasivos === 'proximo' && <li>Proximidad a cavas o pasivos (Requiere evaluación).</li>}
                            {pasivos === 'dentro' && <li>Pasivo ambiental DENTRO del loteo (Obligación de remediación Ley 14.343).</li>}
                          </ul>
                        </>
                      ) : "Apto: Sin pasivos ambientales, proximidad a industrias, ni riesgo hídrico."}
                    </div>
                  </div>
                </div>
                <button className={`p-1 rounded hover:bg-black/5 ${pgaRequired ? 'text-red-700' : 'text-green-700'}`}>
                  {expandedRule === 'amb' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {expandedRule === 'amb' && (
                <div className={`mt-3 pt-3 border-t text-xs ${pgaRequired ? 'border-red-200/50 text-red-800' : 'border-green-200/50 text-green-800'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-1.5"><Info className="w-3.5 h-3.5" /> Criterios Legales:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Plan de Gestión Ambiental:</strong> Todo loteo con impactos negativos deberá presentar un PGA estableciendo medidas de mitigación.</li>
                    <li><strong>Remediación (Ley 14.343):</strong> Si el pasivo está dentro del loteo, el titular de la actividad o los propietarios están obligados a implementar remediación.</li>
                    <li><strong>Subasta por apremios:</strong> Inmuebles lindantes con pasivos que estén vacantes podrán ser subastados por el municipio.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Ordenanza 12692/25 */}
          <div className={`border rounded-lg ${isBannedZone ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
            <div className="p-3">
              <div className="flex items-start justify-between cursor-pointer" onClick={() => setExpandedRule(expandedRule === '12692' ? null : '12692')}>
                <div className="flex items-start gap-3">
                  {isBannedZone ? <FileWarning className="w-5 h-5 text-red-500 shrink-0 mt-0.5" /> : <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />}
                  <div>
                    <p className={`text-sm font-bold ${isBannedZone ? 'text-red-900' : 'text-green-900'}`}>
                      Ordenanza Municipal 12.692/25 (P.O.T.)
                    </p>
                    <p className={`text-xs mt-1 ${isBannedZone ? 'text-red-700' : 'text-green-700'}`}>
                      {isBannedZone 
                        ? "Infracción: Prohibición en Área Urbana. Requiere excepción." 
                        : "Apto: La zonificación permite este desarrollo."}
                    </p>
                  </div>
                </div>
                <button className={`p-1 rounded hover:bg-black/5 ${isBannedZone ? 'text-red-700' : 'text-green-700'}`}>
                  {expandedRule === '12692' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {expandedRule === '12692' && (
                <div className={`mt-3 pt-3 border-t text-xs ${isBannedZone ? 'border-red-200/50 text-red-800' : 'border-green-200/50 text-green-800'}`}>
                  <h5 className="font-bold mb-2 flex items-center gap-1.5"><Info className="w-3.5 h-3.5" /> Criterios y Reglas a cumplir:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Prohibición en Casco Urbano:</strong> No se autorizan nuevos barrios cerrados dentro del perímetro urbano consolidado.</li>
                    <li><strong>Áreas Permitidas:</strong> Solo se permiten en áreas periurbanas o rurales con parcelas mayores a determinados m2.</li>
                    <li><strong>Cesiones Obligatorias:</strong> Se requiere cesión de tierras para espacios verdes y equipamiento comunitario (mín. 10%).</li>
                    <li><strong>Plusvalía Urbana:</strong> Todo loteo que requiera re-zonificación abonará un porcentaje del diferencial de valor (Plusvalía).</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Ley 8912/77 */}
          <div className="border bg-yellow-50 border-yellow-200 rounded-lg">
            <div className="p-3">
              <div className="flex items-start justify-between cursor-pointer" onClick={() => setExpandedRule(expandedRule === '8912' ? null : '8912')}>
                <div className="flex items-start gap-3">
                  <FileWarning className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-yellow-900">
                      Decreto-Ley Prov. 8.912/77 y Dcto 27/98
                    </p>
                    <p className="text-xs mt-1 text-yellow-800">
                      Pendiente: Requiere convalidación técnica del DPOUT y ADA.
                    </p>
                  </div>
                </div>
                <button className="p-1 rounded hover:bg-black/5 text-yellow-700">
                  {expandedRule === '8912' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {expandedRule === '8912' && (
                <div className="mt-3 pt-3 border-t border-yellow-200/50 text-xs text-yellow-800">
                  <h5 className="font-bold mb-2 flex items-center gap-1.5"><Info className="w-3.5 h-3.5" /> Criterios y Reglas a cumplir:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Art. 65 (Ley 8912):</strong> Aprobación de prefactibilidad hidráulica obligatoria por la Autoridad del Agua (ADA).</li>
                    <li><strong>Decreto 27/98:</strong> Todo Barrio Cerrado requiere un cerco perimetral transparente y tratamiento de calles internas.</li>
                    <li><strong>DPOUT:</strong> Es obligatorio obtener la "Convalidación Técnica Final" provincial antes de escriturar.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
