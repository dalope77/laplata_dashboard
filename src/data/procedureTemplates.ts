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
  ],
  opds: [
    { id: 'req-opds-1', name: 'Estudio de Impacto Ambiental', estimatedDays: 20, isCompleted: false },
    { id: 'req-opds-2', name: 'Declaración de Impacto Ambiental (DIA)', estimatedDays: 15, isCompleted: false }
  ],
  subdivision: [
    { id: 'req-sub-1', name: 'Plano de Subdivisión', estimatedDays: 15, isCompleted: false },
    { id: 'req-sub-2', name: 'Memoria Urbanística', estimatedDays: 10, isCompleted: false },
    { id: 'req-sub-3', name: 'Plano de Trazado', estimatedDays: 10, isCompleted: false },
    { id: 'req-sub-4', name: 'Cálculo de Cesiones', estimatedDays: 5, isCompleted: false }
  ],
  visado_ada: [
    { id: 'req-va-1', name: 'Visado de Plano de Mensura', estimatedDays: 10, isCompleted: false },
    { id: 'req-va-2', name: 'Estudio Hidráulico', estimatedDays: 15, isCompleted: false },
    { id: 'req-va-3', name: 'Aptitud Hidráulica de Obra', estimatedDays: 10, isCompleted: false }
  ],
  dpout: [
    { id: 'req-dp-1', name: 'Convalidación Técnica Preliminar', estimatedDays: 15, isCompleted: false },
    { id: 'req-dp-2', name: 'Estudio de Impacto', estimatedDays: 20, isCompleted: false },
    { id: 'req-dp-3', name: 'Dictamen de DPOUT', estimatedDays: 30, isCompleted: false }
  ],
  aprobacion_muni: [
    { id: 'req-am-1', name: 'Expediente Municipal', estimatedDays: 5, isCompleted: false },
    { id: 'req-am-2', name: 'Visado de Planeamiento', estimatedDays: 10, isCompleted: false },
    { id: 'req-am-3', name: 'Visado de Obras Particulares', estimatedDays: 10, isCompleted: false },
    { id: 'req-am-4', name: 'Ordenanza de Aprobación', estimatedDays: 30, isCompleted: false }
  ],
  permisos_ada: [
    { id: 'req-pa-1', name: 'Permiso Recurso Subterráneo', estimatedDays: 10, isCompleted: false },
    { id: 'req-pa-2', name: 'Permiso de Vuelco', estimatedDays: 10, isCompleted: false },
    { id: 'req-pa-3', name: 'Permiso Recurso Superficial', estimatedDays: 10, isCompleted: false }
  ],
  infra_cerrada: [
    { id: 'req-ic-1', name: 'Proyecto Vial Interno', estimatedDays: 15, isCompleted: false },
    { id: 'req-ic-2', name: 'Proyecto Perimetral', estimatedDays: 10, isCompleted: false },
    { id: 'req-ic-3', name: 'Proyecto Áreas Comunes', estimatedDays: 15, isCompleted: false },
    { id: 'req-ic-4', name: 'Sistema de Seguridad', estimatedDays: 10, isCompleted: false }
  ],
  permiso_obra: [
    { id: 'req-po-1', name: 'Planos de Obra', estimatedDays: 7, isCompleted: false },
    { id: 'req-po-2', name: 'Cálculo Estructural', estimatedDays: 5, isCompleted: false },
    { id: 'req-po-3', name: 'Declaración Jurada de Obra', estimatedDays: 1, isCompleted: false },
    { id: 'req-po-4', name: 'Pago de Derechos de Construcción', estimatedDays: 3, isCompleted: false }
  ],
  registracion_arba: [
    { id: 'req-ra-1', name: 'Visado de Geodesia', estimatedDays: 10, isCompleted: false },
    { id: 'req-ra-2', name: 'Registración del Plano', estimatedDays: 10, isCompleted: false },
    { id: 'req-ra-3', name: 'Generación de Partidas', estimatedDays: 5, isCompleted: false },
    { id: 'req-ra-4', name: 'Valuación de Lotes', estimatedDays: 5, isCompleted: false }
  ],
  inscripcion_registral: [
    { id: 'req-ir-1', name: 'Escritura de División', estimatedDays: 10, isCompleted: false },
    { id: 'req-ir-2', name: 'Inscripción en RPI', estimatedDays: 10, isCompleted: false },
    { id: 'req-ir-3', name: 'Cesión EVLP al Municipio', estimatedDays: 5, isCompleted: false },
    { id: 'req-ir-4', name: 'Cesión REC al Municipio', estimatedDays: 5, isCompleted: false }
  ],
  hab_ada: [
    { id: 'req-ha-1', name: 'Permiso Hidráulico de Explotación (PHE)', estimatedDays: 10, isCompleted: false },
    { id: 'req-ha-2', name: 'Habilitación de Vuelco', estimatedDays: 5, isCompleted: false },
    { id: 'req-ha-3', name: 'Inspección de Obras Hidráulicas', estimatedDays: 3, isCompleted: false }
  ],
  hab_muni: [
    { id: 'req-hm-1', name: 'Recepción de Obras de Infraestructura', estimatedDays: 5, isCompleted: false },
    { id: 'req-hm-2', name: 'Ordenanza de Aceptación de Cesiones', estimatedDays: 10, isCompleted: false },
    { id: 'req-hm-3', name: 'Habilitación para Comercialización', estimatedDays: 5, isCompleted: false },
    { id: 'req-hm-4', name: 'Certificado Final de Urbanización', estimatedDays: 5, isCompleted: false }
  ],
  consorcio: [
    { id: 'req-co-1', name: 'Reglamento de Copropiedad', estimatedDays: 10, isCompleted: false },
    { id: 'req-co-2', name: 'Acta Constitutiva del Consorcio', estimatedDays: 3, isCompleted: false },
    { id: 'req-co-3', name: 'Inscripción del Consorcio en AFIP', estimatedDays: 2, isCompleted: false }
  ],
  regimen_ph: [
    { id: 'req-rph-1', name: 'Plano de PH', estimatedDays: 10, isCompleted: false },
    { id: 'req-rph-2', name: 'Reglamento de Copropiedad y Administración', estimatedDays: 10, isCompleted: false },
    { id: 'req-rph-3', name: 'Escrituras de Unidades Funcionales', estimatedDays: 5, isCompleted: false }
  ],
  final_obra: [
    { id: 'req-fo-1', name: 'Inspección Final Municipal', estimatedDays: 5, isCompleted: false },
    { id: 'req-fo-2', name: 'Certificado de Final de Obra', estimatedDays: 5, isCompleted: false },
    { id: 'req-fo-3', name: 'Plano Conforme a Obra', estimatedDays: 5, isCompleted: false }
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
  { id: 'p-2-1', name: 'Proyecto de Subdivisión', category: 'fase2', mandatory: true, requirements: reqs.subdivision },
  { id: 'p-2-2', name: 'Visado de Planos - ADA', category: 'fase2', mandatory: true, requirements: reqs.visado_ada },
  { id: 'p-2-3', name: 'Aprobación DPOUT', category: 'fase2', mandatory: true, requirements: reqs.dpout },
  { id: 'p-2-4', name: 'Aprobación Municipal del Proyecto', category: 'fase2', mandatory: true, requirements: reqs.aprobacion_muni },
  { id: 'p-2-5', name: 'Permisos de Recursos Hídricos - ADA', category: 'fase2', mandatory: true, requirements: reqs.permisos_ada },
  { id: 'p-2-6', name: 'Infraestructura Urbanización Cerrada', category: 'fase2', mandatory: true, requirements: reqs.infra_cerrada },
  { id: 'p-3-1', name: 'Registración en Catastro - ARBA', category: 'fase3', mandatory: true, requirements: reqs.registracion_arba },
  { id: 'p-3-2', name: 'Inscripción Registral', category: 'fase3', mandatory: true, requirements: reqs.inscripcion_registral },
  { id: 'p-3-3', name: 'Habilitaciones ADA', category: 'fase3', mandatory: true, requirements: reqs.hab_ada },
  { id: 'p-3-4', name: 'Habilitación Municipal Final', category: 'fase3', mandatory: true, requirements: reqs.hab_muni },
  { id: 'p-3-5', name: 'Constitución del Consorcio', category: 'fase3', mandatory: true, requirements: reqs.consorcio },
];

const CONDOMINIO_PROCEDURES: ProcedureTemplate[] = [
  { id: 'c-1-1', name: 'Documentación del Titular', category: 'fase1', mandatory: true, requirements: reqs.titular },
  { id: 'c-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true, requirements: reqs.catastro },
  { id: 'c-1-3', name: 'Consulta Municipal', category: 'fase1', mandatory: true, requirements: reqs.consulta_muni },
  { id: 'c-1-4', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true, requirements: reqs.servicios },
  { id: 'c-2-1', name: 'Permiso de Obra / Aviso de Obra', category: 'fase2', mandatory: true, requirements: reqs.permiso_obra },
  { id: 'c-2-2', name: 'Desglose de Materiales y Mano de Obra', category: 'fase2', mandatory: true },
  { id: 'c-3-1', name: 'Régimen de Propiedad Horizontal', category: 'fase3', mandatory: true, requirements: reqs.regimen_ph },
  { id: 'c-3-2', name: 'Final de Obra', category: 'fase3', mandatory: true, requirements: reqs.final_obra },
];

const GENERIC_OPEN_PROCEDURES: ProcedureTemplate[] = [
  { id: 'o-1-1', name: 'Documentación del Titular', category: 'fase1', mandatory: true, requirements: reqs.titular },
  { id: 'o-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true, requirements: reqs.catastro },
  { id: 'o-1-3', name: 'Prefactibilidad Municipal', category: 'fase1', mandatory: true, requirements: reqs.prefact_muni },
  { id: 'o-1-4', name: 'Prefactibilidad Hidráulica - ADA', category: 'fase1', mandatory: true, requirements: reqs.ada },
  { id: 'o-1-5', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true, requirements: reqs.servicios },
  { id: 'o-2-1', name: 'Proyecto de Subdivisión', category: 'fase2', mandatory: true, requirements: reqs.subdivision },
  { id: 'o-2-2', name: 'Visado de Planos - ADA', category: 'fase2', mandatory: true, requirements: reqs.visado_ada },
  { id: 'o-2-3', name: 'Aprobación DPOUT', category: 'fase2', mandatory: true, requirements: reqs.dpout },
  { id: 'o-2-4', name: 'Aprobación Municipal del Proyecto', category: 'fase2', mandatory: true, requirements: reqs.aprobacion_muni },
  { id: 'o-2-5', name: 'Permisos de Recursos Hídricos - ADA', category: 'fase2', mandatory: true, requirements: reqs.permisos_ada },
  { id: 'o-3-1', name: 'Registración en Catastro - ARBA', category: 'fase3', mandatory: true, requirements: reqs.registracion_arba },
  { id: 'o-3-2', name: 'Inscripción Registral', category: 'fase3', mandatory: true, requirements: reqs.inscripcion_registral },
  { id: 'o-3-3', name: 'Habilitaciones ADA', category: 'fase3', mandatory: true, requirements: reqs.hab_ada },
  { id: 'o-3-4', name: 'Habilitación Municipal Final', category: 'fase3', mandatory: true, requirements: reqs.hab_muni },
];

const CLUB_CAMPO_PROCEDURES: ProcedureTemplate[] = [
  { id: 'cc-1-1', name: 'Documentación del Titular y Estatuto', category: 'fase1', mandatory: true, requirements: reqs.titular },
  { id: 'cc-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true, requirements: reqs.catastro },
  { id: 'cc-1-3', name: 'Prefactibilidad Municipal (Dec. 9404/86)', category: 'fase1', mandatory: true, requirements: reqs.prefact_muni },
  { id: 'cc-1-4', name: 'Prefactibilidad Hidráulica - ADA', category: 'fase1', mandatory: true, requirements: reqs.ada },
  { id: 'cc-1-5', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true, requirements: reqs.servicios },
  { id: 'cc-1-6', name: 'Evaluación de Impacto Ambiental (OPDS)', category: 'fase1', mandatory: true, requirements: reqs.opds },
  { id: 'cc-2-1', name: 'Proyecto de Subdivisión (Club de Campo)', category: 'fase2', mandatory: true, requirements: reqs.subdivision },
  { id: 'cc-2-2', name: 'Visado de Planos - ADA', category: 'fase2', mandatory: true, requirements: reqs.visado_ada },
  { id: 'cc-2-3', name: 'Aprobación DPOUT (Dec. 9404/86)', category: 'fase2', mandatory: true, requirements: reqs.dpout },
  { id: 'cc-2-4', name: 'Aprobación Municipal del Proyecto', category: 'fase2', mandatory: true, requirements: reqs.aprobacion_muni },
  { id: 'cc-2-5', name: 'Permisos de Recursos Hídricos - ADA', category: 'fase2', mandatory: true, requirements: reqs.permisos_ada },
  { id: 'cc-2-6', name: 'Infraestructura Deportiva y Recreativa', category: 'fase2', mandatory: true, requirements: reqs.infra_cerrada },
  { id: 'cc-3-1', name: 'Registración en Catastro - ARBA', category: 'fase3', mandatory: true, requirements: reqs.registracion_arba },
  { id: 'cc-3-2', name: 'Inscripción Registral', category: 'fase3', mandatory: true, requirements: reqs.inscripcion_registral },
  { id: 'cc-3-3', name: 'Habilitación Municipal Final', category: 'fase3', mandatory: true, requirements: reqs.hab_muni },
  { id: 'cc-3-4', name: 'Constitución de Entidad Jurídica (Consorcio/Sociedad)', category: 'fase3', mandatory: true, requirements: reqs.consorcio },
];

const PARQUE_INDUSTRIAL_PROCEDURES: ProcedureTemplate[] = [
  { id: 'pi-1-1', name: 'Documentación del Titular', category: 'fase1', mandatory: true, requirements: reqs.titular },
  { id: 'pi-1-2', name: 'Consultas ARBA - Catastro', category: 'fase1', mandatory: true, requirements: reqs.catastro },
  { id: 'pi-1-3', name: 'Prefactibilidad Municipal', category: 'fase1', mandatory: true, requirements: reqs.prefact_muni },
  { id: 'pi-1-4', name: 'Requisitos Específicos Industriales', category: 'fase1', mandatory: true, requirements: reqs.industrial },
  { id: 'pi-1-5', name: 'Prefactibilidad Hidráulica - ADA', category: 'fase1', mandatory: true, requirements: reqs.ada },
  { id: 'pi-1-6', name: 'Prefactibilidad de Servicios', category: 'fase1', mandatory: true, requirements: reqs.servicios },
  { id: 'pi-2-1', name: 'Proyecto de Subdivisión Industrial', category: 'fase2', mandatory: true, requirements: reqs.subdivision },
  { id: 'pi-2-2', name: 'Aprobación DPOUT', category: 'fase2', mandatory: true, requirements: reqs.dpout },
  { id: 'pi-2-3', name: 'Aprobación Municipal del Proyecto', category: 'fase2', mandatory: true, requirements: reqs.aprobacion_muni },
  { id: 'pi-3-1', name: 'Registración en Catastro - ARBA', category: 'fase3', mandatory: true, requirements: reqs.registracion_arba },
  { id: 'pi-3-2', name: 'Inscripción Registral', category: 'fase3', mandatory: true, requirements: reqs.inscripcion_registral },
  { id: 'pi-3-3', name: 'Habilitación Municipal Final', category: 'fase3', mandatory: true, requirements: reqs.hab_muni },
];

const TEMPLATES: Record<DevelopmentType, ProcedureTemplate[]> = {
  'loteo_social': SOCIAL_PROCEDURES,
  'barrio_cerrado': GENERIC_PRIVATE_PROCEDURES,
  'club_campo': CLUB_CAMPO_PROCEDURES,
  'condominio': CONDOMINIO_PROCEDURES,
  'loteo_abierto': GENERIC_OPEN_PROCEDURES,
  'ph_horizontal': CONDOMINIO_PROCEDURES,
  'parque_industrial': PARQUE_INDUSTRIAL_PROCEDURES
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
