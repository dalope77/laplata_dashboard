import type { DevelopmentType, ProcedureStep, ProcedureRequirement } from "../types/development";

type ProcedureTemplate = Omit<ProcedureStep, 'status' | 'documentUrl'>;

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
  ],
  industrial: [
    { id: 'req-i-1', name: 'Certificado de Aptitud Ambiental', estimatedDays: 15, isCompleted: false },
    { id: 'req-i-2', name: 'Categorización Industrial', estimatedDays: 5, isCompleted: false },
    { id: 'req-i-3', name: 'Estudio de Impacto Ambiental', estimatedDays: 20, isCompleted: false },
    { id: 'req-i-4', name: 'Localización Industrial', estimatedDays: 10, isCompleted: false }
  ]
};

const SOCIAL_PROCEDURES: ProcedureTemplate[] = [
  { id: '1.1', category: 'fase1', mandatory: true, name: '1.1. Nota de Solicitud de Adhesión (Sub. Hábitat - 5 días)' },
  { id: '1.2', category: 'fase1', mandatory: true, name: '1.2. Informe Urbanístico Municipal (Municipio - 10 días)' },
  { id: '1.3', category: 'fase1', mandatory: true, name: '1.3. Certificado de No Inundabilidad (Municipio/ADA - 7 días)' },
  { id: '1.4', category: 'fase1', mandatory: true, name: 'Requisitos Ley 14.449 - Acceso Justo al Hábitat', requirements: reqs.habitat },
  { id: '1.5', category: 'fase1', mandatory: true, name: 'Documentación del Titular', requirements: reqs.titular },
  { id: '2.1', category: 'fase2', mandatory: true, name: '2.1. Convenio Urbanístico de Consorcio (Municipio/Hábitat - 20 días)' },
  { id: '2.2', category: 'fase2', mandatory: true, name: '2.2. Ordenanza Municipal de Homologación (HCD - 30 días)' },
  { id: '2.3', category: 'fase2', mandatory: true, name: 'Prefactibilidad de Servicios', requirements: reqs.servicios },
  { id: '2.4', category: 'fase2', mandatory: true, name: '2.4. Factibilidad de Apertura de Calles (Municipio - 10 días)' },
  { id: '2.5', category: 'fase2', mandatory: true, name: '2.5. Plan de Adjudicación y Comercialización (Hábitat - 10 días)' },
  { id: '3.1', category: 'fase3', mandatory: true, name: '3.1. Plano de Mensura y División Final (Geodesia/ARBA - 45 días)' },
  { id: '3.2', category: 'fase3', mandatory: true, name: '3.2. Obra de Apertura Vial y Pluviales (Municipio - 60 días)' },
  { id: '3.3', category: 'fase3', mandatory: true, name: '3.3. Red de Agua Potable y Sistema Cloacal (ADA - 90 días)' },
  { id: '3.4', category: 'fase3', mandatory: true, name: '3.4. Red Eléctrica y Alumbrado Público (Prestatarias - 45 días)' },
  { id: '3.5', category: 'fase3', mandatory: true, name: '3.5. Forestación y Señalización Urbana (Municipio - 15 días)' }
];

const GENERIC_PRIVATE_PROCEDURES: ProcedureTemplate[] = [
  { id: 'p-1-1', name: 'Documentación del Titular', category: 'fase1', mandatory: true, requirements: reqs.titular },
  { id: 'p-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true, requirements: reqs.catastro },
  { id: 'p-1-3', name: 'Prefactibilidad Municipal', category: 'fase1', mandatory: true, requirements: reqs.prefact_muni },
  { id: 'p-1-4', name: 'Prefactibilidad Hidráulica - ADA', category: 'fase1', mandatory: true, requirements: reqs.ada },
  { id: 'p-1-5', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true, requirements: reqs.servicios },
  { id: 'p-1-6', name: 'Requisitos Específicos Urbanización Cerrada', category: 'fase1', mandatory: true, requirements: reqs.cerrada },
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
  { id: 'c-1-1', name: 'Documentación del Titular', category: 'fase1', mandatory: true, requirements: reqs.titular },
  { id: 'c-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true, requirements: reqs.catastro },
  { id: 'c-1-3', name: 'Consulta Municipal', category: 'fase1', mandatory: true, requirements: reqs.consulta_muni },
  { id: 'c-1-4', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true, requirements: reqs.servicios },
  { id: 'c-2-1', name: 'Permiso de Obra / Aviso de Obra', category: 'fase2', mandatory: true },
  { id: 'c-2-2', name: 'Desglose de Materiales y Mano de Obra', category: 'fase2', mandatory: true },
  { id: 'c-3-1', name: 'Régimen de Propiedad Horizontal', category: 'fase3', mandatory: true },
  { id: 'c-3-2', name: 'Final de Obra', category: 'fase3', mandatory: true },
];

const GENERIC_OPEN_PROCEDURES: ProcedureTemplate[] = [
  { id: 'o-1-1', name: 'Documentación del Titular', category: 'fase1', mandatory: true, requirements: reqs.titular },
  { id: 'o-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true, requirements: reqs.catastro },
  { id: 'o-1-3', name: 'Prefactibilidad Municipal', category: 'fase1', mandatory: true, requirements: reqs.prefact_muni },
  { id: 'o-1-4', name: 'Prefactibilidad Hidráulica - ADA', category: 'fase1', mandatory: true, requirements: reqs.ada },
  { id: 'o-1-5', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true, requirements: reqs.servicios },
  { id: 'o-2-1', name: 'Proyecto de Subdivisión', category: 'fase2', mandatory: true },
  { id: 'o-2-2', name: 'Visado de Planos - ADA', category: 'fase2', mandatory: true },
  { id: 'o-2-3', name: 'Aprobación DPOUT', category: 'fase2', mandatory: true },
  { id: 'o-2-4', name: 'Aprobación Municipal del Proyecto', category: 'fase2', mandatory: true },
  { id: 'o-2-5', name: 'Permisos de Recursos Hídricos - ADA', category: 'fase2', mandatory: true },
  { id: 'o-3-1', name: 'Registración en Catastro - ARBA', category: 'fase3', mandatory: true },
  { id: 'o-3-2', name: 'Inscripción Registral', category: 'fase3', mandatory: true },
  { id: 'o-3-3', name: 'Habilitaciones ADA', category: 'fase3', mandatory: true },
  { id: 'o-3-4', name: 'Habilitación Municipal Final', category: 'fase3', mandatory: true },
];

const CLUB_CAMPO_PROCEDURES: ProcedureTemplate[] = [
  { id: 'cc-1-1', name: 'Documentación del Titular y Estatuto', category: 'fase1', mandatory: true, requirements: reqs.titular },
  { id: 'cc-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true, requirements: reqs.catastro },
  { id: 'cc-1-3', name: 'Prefactibilidad Municipal (Dec. 9404/86)', category: 'fase1', mandatory: true, requirements: reqs.prefact_muni },
  { id: 'cc-1-4', name: 'Prefactibilidad Hidráulica - ADA', category: 'fase1', mandatory: true, requirements: reqs.ada },
  { id: 'cc-1-5', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true, requirements: reqs.servicios },
  { id: 'cc-1-6', name: 'Evaluación de Impacto Ambiental (OPDS)', category: 'fase1', mandatory: true },
  { id: 'cc-2-1', name: 'Proyecto de Subdivisión (Club de Campo)', category: 'fase2', mandatory: true },
  { id: 'cc-2-2', name: 'Visado de Planos - ADA', category: 'fase2', mandatory: true },
  { id: 'cc-2-3', name: 'Aprobación DPOUT (Dec. 9404/86)', category: 'fase2', mandatory: true },
  { id: 'cc-2-4', name: 'Aprobación Municipal del Proyecto', category: 'fase2', mandatory: true },
  { id: 'cc-2-5', name: 'Permisos de Recursos Hídricos - ADA', category: 'fase2', mandatory: true },
  { id: 'cc-2-6', name: 'Infraestructura Deportiva y Recreativa', category: 'fase2', mandatory: true },
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
    
    // Merge existing requirements statuses with template requirements
    let mergedRequirements = step.requirements ? JSON.parse(JSON.stringify(step.requirements)) : undefined;
    if (mergedRequirements && existing?.requirements) {
      mergedRequirements = mergedRequirements.map((req: ProcedureRequirement) => {
        const existingReq = existing.requirements?.find(er => er.id === req.id);
        if (existingReq) {
          return { ...req, isCompleted: existingReq.isCompleted, documentUrl: existingReq.documentUrl };
        }
        return req;
      });
    }

    return {
      ...step,
      status: existing ? existing.status : 'faltante',
      documentUrl: existing ? existing.documentUrl : undefined,
      requirements: mergedRequirements
    };
  });
};
