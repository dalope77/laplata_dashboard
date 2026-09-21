const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: 'c:/Users/dalop/.gemini/antigravity-ide/scratch/laplata-dashboard/.env.local' });

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// We will use a mock import of TEMPLATES just to inject the requirements
// Since we can't easily import TS, we'll just redefine the requirements map here for the migration

const reqs = {
  titular: [
    { id: 'req-t-1', name: 'Documento único del titular', estimatedDays: 1, isCompleted: false },
    { id: 'req-t-2', name: 'Escritura del inmueble', estimatedDays: 1, isCompleted: false },
    { id: 'req-t-3', name: 'CUIT del titular', estimatedDays: 1, isCompleted: false }
  ],
  catastro: [
    { id: 'req-c-1', name: 'Partida Inmobiliaria', estimatedDays: 2, isCompleted: false },
    { id: 'req-c-2', name: 'Plano de Mensura Vigente', estimatedDays: 3, isCompleted: false },
    { id: 'req-c-3', name: 'Valuación Fiscal', estimatedDays: 1, isCompleted: false },
    { id: 'req-c-4', name: 'Libre Deuda Inmobiliario', estimatedDays: 2, isCompleted: false }
  ],
  prefact_muni: [
    { id: 'req-pm-1', name: 'Consulta de Zonificación', estimatedDays: 3, isCompleted: false },
    { id: 'req-pm-2', name: 'Indicadores Urbanísticos', estimatedDays: 2, isCompleted: false },
    { id: 'req-pm-3', name: 'Usos del Suelo Permitidos', estimatedDays: 2, isCompleted: false },
    { id: 'req-pm-4', name: 'Certificado de Localización Previa', estimatedDays: 5, isCompleted: false },
    { id: 'req-pm-5', name: 'Informe de Dominio', estimatedDays: 3, isCompleted: false }
  ],
  consulta_muni: [
    { id: 'req-cm-1', name: 'Consulta de Zonificación', estimatedDays: 2, isCompleted: false },
    { id: 'req-cm-2', name: 'Indicadores Urbanísticos', estimatedDays: 2, isCompleted: false },
    { id: 'req-cm-3', name: 'Línea Municipal', estimatedDays: 3, isCompleted: false }
  ],
  ada: [
    { id: 'req-a-1', name: 'Alta de Usuario en Portal ADA', estimatedDays: 2, isCompleted: false },
    { id: 'req-a-2', name: 'Certificado de Prefactibilidad Hídrica (CPH)', estimatedDays: 10, isCompleted: false },
    { id: 'req-a-3', name: 'Consulta Línea de Ribera', estimatedDays: 5, isCompleted: false },
    { id: 'req-a-4', name: 'Verificación Zona Inundable', estimatedDays: 3, isCompleted: false }
  ],
  servicios: [
    { id: 'req-s-1', name: 'Factibilidad de Agua Potable', estimatedDays: 5, isCompleted: false },
    { id: 'req-s-2', name: 'Factibilidad Cloacal', estimatedDays: 5, isCompleted: false },
    { id: 'req-s-3', name: 'Factibilidad Eléctrica', estimatedDays: 5, isCompleted: false },
    { id: 'req-s-4', name: 'Factibilidad de Gas Natural', estimatedDays: 5, isCompleted: false }
  ],
  cerrada: [
    { id: 'req-uc-1', name: 'Estudio Urbanístico Integral', estimatedDays: 15, isCompleted: false },
    { id: 'req-uc-2', name: 'Evaluación de Impacto Ambiental', estimatedDays: 20, isCompleted: false },
    { id: 'req-uc-3', name: 'Cálculo de Densidades', estimatedDays: 3, isCompleted: false },
    { id: 'req-uc-4', name: 'Reglamento Urbanístico', estimatedDays: 10, isCompleted: false },
    { id: 'req-uc-5', name: 'Proyecto de Equipamiento Común', estimatedDays: 15, isCompleted: false }
  ],
  habitat: [
    { id: 'req-h-1', name: 'Convenio Urbanístico', estimatedDays: 10, isCompleted: false },
    { id: 'req-h-2', name: 'Registro de Demanda Habitacional', estimatedDays: 5, isCompleted: false },
    { id: 'req-h-3', name: 'Compromiso de Infraestructura Básica', estimatedDays: 10, isCompleted: false },
    { id: 'req-h-4', name: 'Precio de Referencia Regulado', estimatedDays: 3, isCompleted: false }
  ]
};

// Map procedure IDs to their requirements
const reqMap = {
  '1.4': reqs.habitat,
  '1.5': reqs.titular,
  '2.3': reqs.servicios,
  
  'p-1-1': reqs.titular,
  'p-1-2': reqs.catastro,
  'p-1-3': reqs.prefact_muni,
  'p-1-4': reqs.ada,
  'p-1-5': reqs.servicios,
  'p-1-6': reqs.cerrada,
  
  'c-1-1': reqs.titular,
  'c-1-2': reqs.catastro,
  'c-1-3': reqs.consulta_muni,
  'c-1-4': reqs.servicios,
  
  'o-1-1': reqs.titular,
  'o-1-2': reqs.catastro,
  'o-1-3': reqs.prefact_muni,
  'o-1-4': reqs.ada,
  'o-1-5': reqs.servicios,
  
  'cc-1-1': reqs.titular,
  'cc-1-2': reqs.catastro,
  'cc-1-3': reqs.prefact_muni,
  'cc-1-4': reqs.ada,
  'cc-1-5': reqs.servicios
};

async function migrate() {
  console.log("Fetching all developments...");
  const { data, error } = await supabase.from('development_edits').select('development_id, data');
  if (error) {
    console.error("Error fetching:", error);
    return;
  }

  for (const row of data) {
    let dev = row.data;
    if (!dev.procedures) continue;
    
    let changed = false;
    dev.procedures = dev.procedures.map(p => {
      if (reqMap[p.id] && (!p.requirements || p.requirements.length === 0)) {
        changed = true;
        p.requirements = JSON.parse(JSON.stringify(reqMap[p.id])); // deep copy
      }
      return p;
    });

    if (changed) {
      console.log(`Updating ${dev.name}...`);
      await supabase.from('development_edits').update({ data: dev }).eq('development_id', row.development_id);
    }
  }
  console.log("Migration complete.");
}

migrate();
