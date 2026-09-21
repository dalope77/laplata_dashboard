import type { DevelopmentType, ProcedureStep } from "../types/development";

type ProcedureTemplate = Omit<ProcedureStep, 'status' | 'documentUrl'>;

const SOCIAL_PROCEDURES: ProcedureTemplate[] = [
  { id: '1.1', category: 'fase1', mandatory: true, name: '1.1. Nota de Solicitud de Adhesión (Sub. Hábitat - 5 días)' },
  { id: '1.2', category: 'fase1', mandatory: true, name: '1.2. Informe Urbanístico Municipal (Municipio - 10 días)' },
  { id: '1.3', category: 'fase1', mandatory: true, name: '1.3. Certificado de No Inundabilidad (Municipio/ADA - 7 días)' },
  { id: '1.4', category: 'fase1', mandatory: true, name: '1.4. Anteproyecto Urbano L.14449 (Municipio/Hábitat - 15 días)' },
  { id: '1.5', category: 'fase1', mandatory: true, name: '1.5. Título de Propiedad e Informes (RPBA - 12 días)' },
  
  { id: '2.1', category: 'fase2', mandatory: true, name: '2.1. Convenio Urbanístico de Consorcio (Municipio/Hábitat - 20 días)' },
  { id: '2.2', category: 'fase2', mandatory: true, name: '2.2. Ordenanza Municipal de Homologación (HCD - 30 días)' },
  { id: '2.3', category: 'fase2', mandatory: true, name: '2.3. Prefactibilidad de Servicios de Red (Prestatarias - 15 días)' },
  { id: '2.4', category: 'fase2', mandatory: true, name: '2.4. Factibilidad de Apertura de Calles (Municipio - 10 días)' },
  { id: '2.5', category: 'fase2', mandatory: true, name: '2.5. Plan de Adjudicación y Comercialización (Hábitat - 10 días)' },
  
  { id: '3.1', category: 'fase3', mandatory: true, name: '3.1. Plano de Mensura y División Final (Geodesia/ARBA - 45 días)' },
  { id: '3.2', category: 'fase3', mandatory: true, name: '3.2. Obra de Apertura Vial y Pluviales (Municipio - 60 días)' },
  { id: '3.3', category: 'fase3', mandatory: true, name: '3.3. Red de Agua Potable y Sistema Cloacal (ADA - 90 días)' },
  { id: '3.4', category: 'fase3', mandatory: true, name: '3.4. Red Eléctrica y Alumbrado Público (Prestatarias - 45 días)' },
  { id: '3.5', category: 'fase3', mandatory: true, name: '3.5. Forestación y Señalización Urbana (Municipio - 15 días)' }
];

const GENERIC_PRIVATE_PROCEDURES: ProcedureTemplate[] = [
  { id: 'p-1-1', name: 'Documentación del Titular', category: 'fase1', mandatory: true },
  { id: 'p-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true },
  { id: 'p-1-3', name: 'Prefactibilidad Municipal', category: 'fase1', mandatory: true },
  { id: 'p-1-4', name: 'Prefactibilidad Hidráulica - ADA', category: 'fase1', mandatory: true },
  { id: 'p-1-5', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true },
  { id: 'p-1-6', name: 'Requisitos Específicos Urbanización Cerrada', category: 'fase1', mandatory: true },
  { id: 'p-2-1', name: 'Proyecto de Subdivisión', category: 'fase2', mandatory: true },
  { id: 'p-2-2', name: 'Visado de Planos - ADA', category: 'fase2', mandatory: true },
  { id: 'p-2-3', name: 'Aprobación DPOUT', category: 'fase2', mandatory: true },
  { id: 'p-2-4', name: 'Aprobación Municipal del Proyecto', category: 'fase2', mandatory: true },
  { id: 'p-2-5', name: 'Permisos de Recursos Hídricos - ADA', category: 'fase2', mandatory: true },
  { id: 'p-2-6', name: 'Infraestructura Urbanización Cerrada', category: 'fase2', mandatory: true },
  { id: 'p-3-1', name: 'Registración en Catastro - ARBA', category: 'fase3', mandatory: true },
  { id: 'p-3-2', name: 'Inscripción Registral', category: 'fase3', mandatory: true },
  { id: 'p-3-3', name: 'Habilitaciones ADA', category: 'fase3', mandatory: true },
  { id: 'p-3-4', name: 'Habilitación Municipal Final', category: 'fase3', mandatory: true },
  { id: 'p-3-5', name: 'Constitución del Consorcio', category: 'fase3', mandatory: true },
];

const CONDOMINIO_PROCEDURES: ProcedureTemplate[] = [
  // Fase 1
  { id: 'c-1-1', name: 'Documentación del Titular', category: 'fase1', mandatory: true },
  { id: 'c-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true },
  { id: 'c-1-3', name: 'Consulta Municipal', category: 'fase1', mandatory: true },
  { id: 'c-1-4', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true },
  // Fase 2
  { id: 'c-2-1', name: 'Permiso de Obra / Aviso de Obra', category: 'fase2', mandatory: true },
  { id: 'c-2-2', name: 'Desglose de Materiales y Mano de Obra', category: 'fase2', mandatory: true },
  // Fase 3
  { id: 'c-3-1', name: 'Régimen de Propiedad Horizontal', category: 'fase3', mandatory: true },
  { id: 'c-3-2', name: 'Final de Obra', category: 'fase3', mandatory: true },
];

const GENERIC_OPEN_PROCEDURES: ProcedureTemplate[] = [
  // Fase 1
  { id: 'o-1-1', name: 'Documentación del Titular', category: 'fase1', mandatory: true },
  { id: 'o-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true },
  { id: 'o-1-3', name: 'Prefactibilidad Municipal', category: 'fase1', mandatory: true },
  { id: 'o-1-4', name: 'Prefactibilidad Hidráulica - ADA', category: 'fase1', mandatory: true },
  { id: 'o-1-5', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true },
  // Fase 2
  { id: 'o-2-1', name: 'Proyecto de Subdivisión', category: 'fase2', mandatory: true },
  { id: 'o-2-2', name: 'Visado de Planos - ADA', category: 'fase2', mandatory: true },
  { id: 'o-2-3', name: 'Aprobación DPOUT', category: 'fase2', mandatory: true },
  { id: 'o-2-4', name: 'Aprobación Municipal del Proyecto', category: 'fase2', mandatory: true },
  { id: 'o-2-5', name: 'Permisos de Recursos Hídricos - ADA', category: 'fase2', mandatory: true },
  // Fase 3
  { id: 'o-3-1', name: 'Registración en Catastro - ARBA', category: 'fase3', mandatory: true },
  { id: 'o-3-2', name: 'Inscripción Registral', category: 'fase3', mandatory: true },
  { id: 'o-3-3', name: 'Habilitaciones ADA', category: 'fase3', mandatory: true },
  { id: 'o-3-4', name: 'Habilitación Municipal Final', category: 'fase3', mandatory: true },
];
const CLUB_CAMPO_PROCEDURES: ProcedureTemplate[] = [
  // Fase 1
  { id: 'cc-1-1', name: 'Documentación del Titular y Estatuto', category: 'fase1', mandatory: true },
  { id: 'cc-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true },
  { id: 'cc-1-3', name: 'Prefactibilidad Municipal (Dec. 9404/86)', category: 'fase1', mandatory: true },
  { id: 'cc-1-4', name: 'Prefactibilidad Hidráulica - ADA', category: 'fase1', mandatory: true },
  { id: 'cc-1-5', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true },
  { id: 'cc-1-6', name: 'Evaluación de Impacto Ambiental (OPDS)', category: 'fase1', mandatory: true },
  // Fase 2
  { id: 'cc-2-1', name: 'Proyecto de Subdivisión (Club de Campo)', category: 'fase2', mandatory: true },
  { id: 'cc-2-2', name: 'Visado de Planos - ADA', category: 'fase2', mandatory: true },
  { id: 'cc-2-3', name: 'Aprobación DPOUT (Dec. 9404/86)', category: 'fase2', mandatory: true },
  { id: 'cc-2-4', name: 'Aprobación Municipal del Proyecto', category: 'fase2', mandatory: true },
  { id: 'cc-2-5', name: 'Permisos de Recursos Hídricos - ADA', category: 'fase2', mandatory: true },
  { id: 'cc-2-6', name: 'Infraestructura Deportiva y Recreativa', category: 'fase2', mandatory: true },
  // Fase 3
  { id: 'cc-3-1', name: 'Registración en Catastro - ARBA', category: 'fase3', mandatory: true },
  { id: 'cc-3-2', name: 'Inscripción Registral', category: 'fase3', mandatory: true },
  { id: 'cc-3-3', name: 'Habilitación Municipal Final', category: 'fase3', mandatory: true },
  { id: 'cc-3-4', name: 'Constitución de Entidad Jurídica (Consorcio/Sociedad)', category: 'fase3', mandatory: true },
];

const TEMPLATES: Record<DevelopmentType, ProcedureTemplate[]> = {
  'loteo_social': SOCIAL_PROCEDURES,
  'barrio_cerrado': GENERIC_PRIVATE_PROCEDURES,
  'club_campo': CLUB_CAMPO_PROCEDURES,
  'condominio': CONDOMINIO_PROCEDURES,
  'loteo_abierto': GENERIC_OPEN_PROCEDURES,
  'ph_horizontal': CONDOMINIO_PROCEDURES
};

export const getProceduresForType = (type: DevelopmentType, existingProcedures?: ProcedureStep[]): ProcedureStep[] => {
  const template = TEMPLATES[type] || GENERIC_PRIVATE_PROCEDURES;
  
  return template.map(step => {
    const existing = existingProcedures?.find(p => p.id === step.id);
    return {
      ...step,
      status: existing ? existing.status : 'faltante',
      documentUrl: existing ? existing.documentUrl : undefined
    };
  });
};
