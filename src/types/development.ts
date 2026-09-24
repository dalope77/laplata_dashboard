export type DevelopmentType = 
  | "barrio_cerrado" 
  | "condominio" 
  | "club_campo" 
  | "loteo_abierto" 
  | "loteo_social" 
  | "ph_horizontal"
  | "parque_industrial";

export interface ProcedureRequirement {
  id: string;
  name: string;
  estimatedDays: number;
  isCompleted: boolean;
  documentUrl?: string;
}

export interface ProcedureStep {
  id: string;
  name: string;
  category: "fase1" | "fase2" | "fase3";
  status: "faltante" | "documentacion_subida" | "aprobado" | "observado";
  documentUrl?: string;
  mandatory: boolean;
  requirements?: ProcedureRequirement[];
}

export interface MarketComparable {
  id: string;
  address: string;
  priceUsd: number;
  sqMeters: number;
  sourceUrl?: string;
}

export interface FinancialMetrics {
  marketValueIrregularUsd: number;
  marketValueRegularizedUsd: number;
  regularizationCostUsd: number;
  requiredCessionsSqM: number;
  plusvaliaAmountUsd: number;
  comparables: MarketComparable[];
}

export interface PropertyOffer {
  id: string;
  date: string;
  amountUsd: number;
  fileName?: string;
}

export interface TechnicalData {
  parcels: string[];
  totalAreaSqM: number;
  executedUnits: number; // Will reflect the length of executedUnitsPoints
  executedUnitsPoints: { lat: number; lng: number }[];
  physicalState?: 'abandonado_sin_desarrollo' | 'con_apertura_calles' | 'con_obras_comunes' | 'con_movimiento_suelos' | 'con_viviendas_construccion' | 'con_viviendas_terminadas' | 'con_personas_habitando';
  landRestrictions?: string[]; // array of selected restrictions
  indicators: {
    fos: number;
    fot: number;
    density: number;
    minFront?: number;
    minArea: number;
    maxHeight: string;
    zoning: string;
    description: string;
    allowedUses: string;
    complementaryUses: string;
  };
  hydroRisk: boolean;
  hasMaterialization: boolean;
  hasPartialViability: boolean;
  zonaTerritorialidad: 'urbana' | 'periferica' | 'periurbana_rural' | 'fuera';
  ley14449: boolean;
  nearIndustry: boolean;
  pasivosAmbientales: 'ninguno' | 'proximo' | 'dentro';
  inDpoutRegistry?: boolean;
  ordenanza12638_caso?: 'A' | 'B' | 'C' | 'D' | 'none';
}

export interface UrbanDevelopment {
  id: string;
  name: string;
  type: DevelopmentType;
  polygon: Array<{ lat: number; lng: number }>;
  complianceStatus: "verde" | "amarillo" | "rojo";
  isRegularized?: boolean;
  procedures: ProcedureStep[];
  financials: FinancialMetrics;
  ordinanceViolations: string[];
  technicalData: TechnicalData;
  offers: PropertyOffer[];
  inBudgetList?: boolean;
}
