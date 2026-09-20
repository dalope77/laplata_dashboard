import type { UrbanDevelopment } from "../types/development";

export const mockDevelopments: UrbanDevelopment[] = [
  {
    "id": "5383F8CD08000004",
    "name": "POTREROS DE CASTELLS",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0595259999959,
        "lat": -35.0784069999929
      },
      {
        "lng": -58.04685999999569,
        "lat": -35.0879119999929
      },
      {
        "lng": -58.0429549999957,
        "lat": -35.0843989999929
      },
      {
        "lng": -58.0557889999958,
        "lat": -35.0750499999929
      },
      {
        "lng": -58.0595259999959,
        "lat": -35.0784069999929
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 500000,
      "marketValueRegularizedUsd": 800000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05510000000000000000000000000000000330300E",
        "Nomenclatura: 05510000000000000000000000000000000330300M",
        "Nomenclatura: 05510000000000000000000000000000000330300K"
      ],
      "totalAreaSqM": 1469095,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 30000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR RE",
        "description": "AREA RURAL/  RURAL EXTENSIVO",
        "allowedUses": "PRODUCTIVO AGROPECUARIO EXTENSIVO",
        "complementaryUses": "HABITACIONAL UNIFAMILIAR, COMERCIO, SERVICIOS, PRODUCTIVO INDUSTRIAL, EXTRACTIVO"
      },
      "hydroRisk": true,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": true,
      "nearIndustry": true,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-0-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000013",
    "name": "SIN NOMBRE 1",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.1238283999965,
        "lat": -35.0429143999929
      },
      {
        "lng": -58.12152039999651,
        "lat": -35.0445763999929
      },
      {
        "lng": -58.1214233999965,
        "lat": -35.0447253999929
      },
      {
        "lng": -58.11926239999651,
        "lat": -35.0463433999929
      },
      {
        "lng": -58.1181453999965,
        "lat": -35.0471793999929
      },
      {
        "lng": -58.1169793999965,
        "lat": -35.0479343999929
      },
      {
        "lng": -58.1157753999965,
        "lat": -35.0468683999929
      },
      {
        "lng": -58.1133193999964,
        "lat": -35.0446473999929
      },
      {
        "lng": -58.11208939999641,
        "lat": -35.0435353999929
      },
      {
        "lng": -58.1164743999965,
        "lat": -35.0402753999929
      },
      {
        "lng": -58.1167123999965,
        "lat": -35.0401633999929
      },
      {
        "lng": -58.1154373999965,
        "lat": -35.0389933999929
      },
      {
        "lng": -58.1177283999965,
        "lat": -35.0373163999929
      },
      {
        "lng": -58.1201183999965,
        "lat": -35.0356363999929
      },
      {
        "lng": -58.1213163999965,
        "lat": -35.0367393999929
      },
      {
        "lng": -58.1225823999965,
        "lat": -35.0379463999929
      },
      {
        "lng": -58.12379839999661,
        "lat": -35.0390233999929
      },
      {
        "lng": -58.1250623999966,
        "lat": -35.0401863999929
      },
      {
        "lng": -58.1261843999966,
        "lat": -35.0412183999929
      },
      {
        "lng": -58.1238283999965,
        "lat": -35.0429143999929
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 510000,
      "marketValueRegularizedUsd": 810000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05508000000000000000000000000000000257300A",
        "Nomenclatura: 05508000000000000000000000000000000257800D",
        "Nomenclatura: 05508000000000000000000000000000000257800C",
        "Nomenclatura: 05508000000000000000000000000000000258000A",
        "Nomenclatura: 05508000000000000000000000000000000258400A",
        "Nomenclatura: 05508000000000000000000000000000000258200C",
        "Nomenclatura: 05508000000000000000000000000000000258200A",
        "Nomenclatura: 05508000000000000000000000000000000258000C",
        "Nomenclatura: 05508000000000000000000000000000000258200D",
        "Nomenclatura: 05508000000000000000000000000000000258200B",
        "Nomenclatura: 05508000000000000000000000000000000258000B",
        "Nomenclatura: 05508000000000000000000000000000000258000D",
        "Nomenclatura: 05508000000000000000000000000000000258100A",
        "Nomenclatura: 05508000000000000000000000000000000258100C",
        "Nomenclatura: 05508000000000000000000000000000000258100D",
        "Nomenclatura: 05508000000000000000000000000000000258300A",
        "Nomenclatura: 05508000000000000000000000000000000258300B",
        "Nomenclatura: 05508000000000000000000000000000000258300C",
        "Nomenclatura: 05508000000000000000000000000000000258100B"
      ],
      "totalAreaSqM": 2099116,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 30000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR RE",
        "description": "AREA RURAL/  RURAL EXTENSIVO",
        "allowedUses": "PRODUCTIVO AGROPECUARIO EXTENSIVO",
        "complementaryUses": "HABITACIONAL UNIFAMILIAR, COMERCIO, SERVICIOS, PRODUCTIVO INDUSTRIAL, EXTRACTIVO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-1-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0800001C",
    "name": "HARAS DE ACLHO",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.05043379999579,
        "lat": -34.8964767999928
      },
      {
        "lng": -58.0497197999958,
        "lat": -34.8944597999928
      },
      {
        "lng": -58.0513537999958,
        "lat": -34.8940717999928
      },
      {
        "lng": -58.0514457999958,
        "lat": -34.8943447999928
      },
      {
        "lng": -58.0517607999958,
        "lat": -34.8952147999928
      },
      {
        "lng": -58.0517997999958,
        "lat": -34.8953237999928
      },
      {
        "lng": -58.0520627999958,
        "lat": -34.8960887999928
      },
      {
        "lng": -58.05043379999579,
        "lat": -34.8964767999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 520000,
      "marketValueRegularizedUsd": 820000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000101500B",
        "Nomenclatura: 05506000000000000000000000000000000101500D",
        "Nomenclatura: 055060T0000000000000000000000040000000100B",
        "Nomenclatura: 05506000000000000000000000000000000094100E"
      ],
      "totalAreaSqM": 160678,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-2-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000022",
    "name": "SIN NOMBRE 2",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0450069999957,
        "lat": -34.8956089999928
      },
      {
        "lng": -58.0456999999957,
        "lat": -34.8976189999928
      },
      {
        "lng": -58.04412399999569,
        "lat": -34.8979999999928
      },
      {
        "lng": -58.04401499999571,
        "lat": -34.8976919999928
      },
      {
        "lng": -58.0439519999957,
        "lat": -34.8975169999928
      },
      {
        "lng": -58.04384699999569,
        "lat": -34.8972229999928
      },
      {
        "lng": -58.04378899999569,
        "lat": -34.8970769999928
      },
      {
        "lng": -58.0436879999957,
        "lat": -34.8967899999928
      },
      {
        "lng": -58.04365699999569,
        "lat": -34.8967049999928
      },
      {
        "lng": -58.0436269999957,
        "lat": -34.8966189999928
      },
      {
        "lng": -58.0435959999957,
        "lat": -34.8965319999928
      },
      {
        "lng": -58.0435649999957,
        "lat": -34.8964459999928
      },
      {
        "lng": -58.0434639999957,
        "lat": -34.8961599999928
      },
      {
        "lng": -58.0434279999957,
        "lat": -34.8960439999928
      },
      {
        "lng": -58.0434089999957,
        "lat": -34.8959889999928
      },
      {
        "lng": -58.0450069999957,
        "lat": -34.8956089999928
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 530000,
      "marketValueRegularizedUsd": 830000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060T0000000000000000000000183000000900A",
        "Nomenclatura: 055060T00000000000000000000001830000001000",
        "Nomenclatura: 055060T00000000000000000000001830000003000",
        "Nomenclatura: 055060T00000000000000000000001830000002000",
        "Nomenclatura: 055060T00000000000000000000001830000005000",
        "Nomenclatura: 055060T00000000000000000000001830000004000",
        "Nomenclatura: 055060T00000000000000000000001830000008000",
        "Nomenclatura: 055060T00000000000000000000001830000007000",
        "Nomenclatura: 055060T00000000000000000000001830000006000",
        "Nomenclatura: 055060T00000000000000000000000730000021000",
        "Nomenclatura: 055060T00000000000000000000000730000020000",
        "Nomenclatura: 055060T00000000000000000000000730000019000",
        "Nomenclatura: 055060T0000000000000000000000073000002200A",
        "Nomenclatura: 055060T00000000000000000000000730000002000",
        "Nomenclatura: 055060T00000000000000000000001770000005000",
        "Nomenclatura: 055060T00000000000000000000000710000021000",
        "Nomenclatura: 055060T00000000000000000000000730000001000",
        "Nomenclatura: 055060T00000000000000000000000710000020000",
        "Nomenclatura: 055060T00000000000000000000000710000019000",
        "Nomenclatura: 055060T00000000000000000000000710000018000",
        "Nomenclatura: 055060T00000000000000000000000710000013000",
        "Nomenclatura: 055060T00000000000000000000000730000007000",
        "Nomenclatura: 055060T00000000000000000000000730000003000",
        "Nomenclatura: 055060T0000000000000000000000073000001200A",
        "Nomenclatura: 055060T0000000000000000000000073000001700A",
        "Nomenclatura: 055060T00000000000000000000000710000012000",
        "Nomenclatura: 055060T00000000000000000000000710000011000",
        "Nomenclatura: 055060T00000000000000000000000710000010000",
        "Nomenclatura: 055060T00000000000000000000000710000008000",
        "Nomenclatura: 055060T00000000000000000000000690000020000",
        "Nomenclatura: 055060T00000000000000000000000710000003000",
        "Nomenclatura: 055060T00000000000000000000000710000022000",
        "Nomenclatura: 055060T0000000000000000000000071000002300A",
        "Nomenclatura: 055060T00000000000000000000000710000002000",
        "Nomenclatura: 055060T00000000000000000000000710000001000",
        "Nomenclatura: 055060T00000000000000000000001770000004000",
        "Nomenclatura: 055060T00000000000000000000001770000003000",
        "Nomenclatura: 055060T00000000000000000000001770000002000",
        "Nomenclatura: 055060T00000000000000000000001770000001000",
        "Nomenclatura: 055060T00000000000000000000001770000009000",
        "Nomenclatura: 055060T00000000000000000000001770000008000",
        "Nomenclatura: 055060T00000000000000000000001770000006000",
        "Nomenclatura: 055060T00000000000000000000001770000007000"
      ],
      "totalAreaSqM": 32552,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-3-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000023",
    "name": "QUINTAS DE MITRE",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0494307999958,
        "lat": -34.8967883999928
      },
      {
        "lng": -58.0501857999958,
        "lat": -34.8989773999928
      },
      {
        "lng": -58.0491437999958,
        "lat": -34.8992233999928
      },
      {
        "lng": -58.0491117999957,
        "lat": -34.8991413999928
      },
      {
        "lng": -58.0483637999957,
        "lat": -34.8970293999928
      },
      {
        "lng": -58.0494307999958,
        "lat": -34.8967883999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 540000,
      "marketValueRegularizedUsd": 840000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060T00000000000000000000001950000010000",
        "Nomenclatura: 055060T00000000000000000000001950000013000",
        "Nomenclatura: 055060T00000000000000000000001950000012000",
        "Nomenclatura: 055060T00000000000000000000001950000011000",
        "Nomenclatura: 055060T00000000000000000000001950000009000",
        "Nomenclatura: 055060T00000000000000000000001950000008000",
        "Nomenclatura: 055060T00000000000000000000001950000007000",
        "Nomenclatura: 055060T00000000000000000000001950000004000",
        "Nomenclatura: 055060T00000000000000000000001950000005000",
        "Nomenclatura: 055060T00000000000000000000001950000003000",
        "Nomenclatura: 055060T00000000000000000000001870000013000",
        "Nomenclatura: 055060T00000000000000000000001870000011000",
        "Nomenclatura: 055060T00000000000000000000001870000012000",
        "Nomenclatura: 055060T00000000000000000000001870000004000",
        "Nomenclatura: 055060T00000000000000000000001870000003000",
        "Nomenclatura: 05506000000000000000000000000000000102100B",
        "Nomenclatura: 055060T00000000000000000000001870000005000",
        "Nomenclatura: 055060T00000000000000000000001870000006000",
        "Nomenclatura: 055060T00000000000000000000001870000007000",
        "Nomenclatura: 055060T00000000000000000000001870000008000",
        "Nomenclatura: 055060T00000000000000000000001870000009000",
        "Nomenclatura: 055060T0000000000000000000000187000001000A",
        "Nomenclatura: 055060T00000000000000000000001950000006000"
      ],
      "totalAreaSqM": 60882,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-4-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000024",
    "name": "QUINTAS DEL OASIS",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0490603765409,
        "lat": -34.8903496461038
      },
      {
        "lng": -58.04871147449941,
        "lat": -34.8901134490952
      },
      {
        "lng": -58.0486173630863,
        "lat": -34.890060694531
      },
      {
        "lng": -58.04849886962019,
        "lat": -34.8899870510081
      },
      {
        "lng": -58.0482491267975,
        "lat": -34.8898532236359
      },
      {
        "lng": -58.04974799999579,
        "lat": -34.8894809999928
      },
      {
        "lng": -58.0500229999958,
        "lat": -34.8903179999928
      },
      {
        "lng": -58.0491641765581,
        "lat": -34.8905187074273
      },
      {
        "lng": -58.0490603765409,
        "lat": -34.8903496461038
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 550000,
      "marketValueRegularizedUsd": 850000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060T0000000000000000000000079000001600A",
        "Nomenclatura: 055060G00000000000000000000000790000015000",
        "Nomenclatura: 055060T0000000000000000000000079000000300A",
        "Nomenclatura: 055060G00000000000000000000000790000008000",
        "Nomenclatura: 05506000000000000000000000000000000101200C",
        "Nomenclatura: 055060G00000000000000000000000790000009000"
      ],
      "totalAreaSqM": 47767,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-5-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000028",
    "name": "LAS GARZAS",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0203639999954,
        "lat": -34.8949129999928
      },
      {
        "lng": -58.0202149999954,
        "lat": -34.8950259999928
      },
      {
        "lng": -58.0200629999954,
        "lat": -34.8951419999928
      },
      {
        "lng": -58.0198526819974,
        "lat": -34.8953030264978
      },
      {
        "lng": -58.0197589810236,
        "lat": -34.8952193991113
      },
      {
        "lng": -58.0196117759099,
        "lat": -34.8950909205201
      },
      {
        "lng": -58.0191743213011,
        "lat": -34.8947008652358
      },
      {
        "lng": -58.0187282753102,
        "lat": -34.8943043598588
      },
      {
        "lng": -58.01898950624351,
        "lat": -34.8941071982601
      },
      {
        "lng": -58.019799402928,
        "lat": -34.893512802474
      },
      {
        "lng": -58.0209098029435,
        "lat": -34.8944981636379
      },
      {
        "lng": -58.0203639999954,
        "lat": -34.8949129999928
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 560000,
      "marketValueRegularizedUsd": 860000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A002600000000000000000002600A0004000",
        "Nomenclatura: 055030A002600000000000000000002600A0012000",
        "Nomenclatura: 055030A0026000000000000000000000000000400A",
        "Nomenclatura: 055030A002600000000000000000002600B0004000",
        "Nomenclatura: 055030A0026000000000000000000000000000700A"
      ],
      "totalAreaSqM": 44087,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-6-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000032",
    "name": "CITY BELL CHICO",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0116999999953,
        "lat": -34.8971229999928
      },
      {
        "lng": -58.0120129999953,
        "lat": -34.8968939999928
      },
      {
        "lng": -58.0121649999953,
        "lat": -34.8967869999928
      },
      {
        "lng": -58.01265799999531,
        "lat": -34.8964229999928
      },
      {
        "lng": -58.0131519999953,
        "lat": -34.8960589999928
      },
      {
        "lng": -58.0134619999953,
        "lat": -34.8963469999928
      },
      {
        "lng": -58.0125079999953,
        "lat": -34.8970529999928
      },
      {
        "lng": -58.0120249999953,
        "lat": -34.8974139999928
      },
      {
        "lng": -58.0116999999953,
        "lat": -34.8971229999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 570000,
      "marketValueRegularizedUsd": 870000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A0022000000000000010000000000000700C",
        "Nomenclatura: 055030A00220000000000000100000000000010000",
        "Nomenclatura: 055030A00220000000000000100000000000006000"
      ],
      "totalAreaSqM": 42550,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.6,
        "fot": 0.8,
        "density": 250,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R4",
        "description": "AREA URBANA / RESIDENCIAL 4",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-7-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000039",
    "name": "VILLAGE EL MOLINO",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.069311999996,
        "lat": -34.8953139999928
      },
      {
        "lng": -58.066633999996,
        "lat": -34.8959469999928
      },
      {
        "lng": -58.066328999996,
        "lat": -34.8953449999928
      },
      {
        "lng": -58.069102999996,
        "lat": -34.8947069999928
      },
      {
        "lng": -58.069311999996,
        "lat": -34.8953139999928
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 580000,
      "marketValueRegularizedUsd": 880000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060000000000000000000000000000000891000",
        "Nomenclatura: 055060000000000000000000000000000000888000"
      ],
      "totalAreaSqM": 56798,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.2,
        "fot": 0.3,
        "density": 150,
        "minFront": 20,
        "minArea": 40000,
        "maxHeight": "6 MTS (2 NIV)",
        "zoning": "AC RU",
        "description": "AREA COMPLEMENTARIA/ RESERVA PARA AMPLIACIÓN URBANA",
        "allowedUses": "PRODUCTIVO - AGROPECUARIO",
        "complementaryUses": "HABITACIONAL, COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-8-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0800003F",
    "name": "CAMPOS DE LA ENRIQUETA",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0664175102226,
        "lat": -35.1273138352519
      },
      {
        "lng": -58.06268636243999,
        "lat": -35.1300860369638
      },
      {
        "lng": -58.0624141178549,
        "lat": -35.1302888665415
      },
      {
        "lng": -58.0566723188959,
        "lat": -35.1249152202464
      },
      {
        "lng": -58.056236361847,
        "lat": -35.1245067476829
      },
      {
        "lng": -58.0564053152938,
        "lat": -35.1240760766211
      },
      {
        "lng": -58.0568658641277,
        "lat": -35.1229000228949
      },
      {
        "lng": -58.0570420228915,
        "lat": -35.1224843358987
      },
      {
        "lng": -58.05704859380761,
        "lat": -35.1224339747055
      },
      {
        "lng": -58.0572518915751,
        "lat": -35.121914635234
      },
      {
        "lng": -58.0583839606682,
        "lat": -35.1200149610142
      },
      {
        "lng": -58.0603820342716,
        "lat": -35.116661552571
      },
      {
        "lng": -58.0604650714612,
        "lat": -35.1165222960784
      },
      {
        "lng": -58.0696840545443,
        "lat": -35.1248871085341
      },
      {
        "lng": -58.0664175102226,
        "lat": -35.1273138352519
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 590000,
      "marketValueRegularizedUsd": 890000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055100D00000000000000002600000000000007000",
        "Nomenclatura: 055100D00000000000000002900000000000001000",
        "Nomenclatura: 055100D00000000000000003400000000000002000",
        "Nomenclatura: 055100D00000000000000001900000000000005000",
        "Nomenclatura: 055100D00000000000000003400000000000001000",
        "Nomenclatura: 055100D00000000000000003300000000000012000",
        "Nomenclatura: 055100D00000000000000003300000000000011000",
        "Nomenclatura: 055100D00000000000000003300000000000010000",
        "Nomenclatura: 055100D00000000000000003300000000000003000",
        "Nomenclatura: 055100D00000000000000003300000000000001000",
        "Nomenclatura: 055100D00000000000000003900000000000026000",
        "Nomenclatura: 055100D00000000000000003900000000000028000",
        "Nomenclatura: 055100D00000000000000003200000000000012000",
        "Nomenclatura: 055100D00000000000000003200000000000013000",
        "Nomenclatura: 055100D00000000000000003200000000000008000",
        "Nomenclatura: 055100D00000000000000003900000000000029000",
        "Nomenclatura: 055100D00000000000000003900000000000031000",
        "Nomenclatura: 055100D00000000000000003900000000000033000",
        "Nomenclatura: 055100D00000000000000003200000000000006000",
        "Nomenclatura: 055100D00000000000000002000000000000015000",
        "Nomenclatura: 055100D00000000000000003300000000000007000",
        "Nomenclatura: 055100D00000000000000003300000000000005000",
        "Nomenclatura: 055100D00000000000000003300000000000008000",
        "Nomenclatura: 055100D00000000000000001900000000000004000",
        "Nomenclatura: 055100D00000000000000001900000000000002000",
        "Nomenclatura: 055100D00000000000000002000000000000027000",
        "Nomenclatura: 055100D00000000000000002000000000000019000",
        "Nomenclatura: 055100D00000000000000001900000000000012000",
        "Nomenclatura: 055100D00000000000000001900000000000014000",
        "Nomenclatura: 055100D00000000000000001900000000000022000",
        "Nomenclatura: 055100D00000000000000001900000000000024000",
        "Nomenclatura: 055100D00000000000000001900000000000026000",
        "Nomenclatura: 055100D00000000000000001900000000000010000",
        "Nomenclatura: 055100D00000000000000001900000000000008000",
        "Nomenclatura: 055100D00000000000000001900000000000006000",
        "Nomenclatura: 055100D0000000000000000190000000000003700A",
        "Nomenclatura: 055100D00000000000000001900000000000039000",
        "Nomenclatura: 055100D00000000000000001800000000000034000",
        "Nomenclatura: 055100D00000000000000001800000000000028000",
        "Nomenclatura: 055100D00000000000000001800000000000025000",
        "Nomenclatura: 055100D00000000000000001800000000000026000",
        "Nomenclatura: 055100D00000000000000001900000000000019000",
        "Nomenclatura: 055100D00000000000000001900000000000016000",
        "Nomenclatura: 055100D00000000000000001900000000000017000",
        "Nomenclatura: 055100D00000000000000001800000000000005000",
        "Nomenclatura: 055100D00000000000000001800000000000008000",
        "Nomenclatura: 055100D00000000000000001800000000000010000",
        "Nomenclatura: 055100D00000000000000001800000000000012000",
        "Nomenclatura: 055100D00000000000000001800000000000004000",
        "Nomenclatura: 055100D00000000000000001800000000000003000",
        "Nomenclatura: 055100D00000000000000001700000000000013000",
        "Nomenclatura: 055100D00000000000000001800000000000016000",
        "Nomenclatura: 055100D00000000000000001800000000000015000",
        "Nomenclatura: 055100D00000000000000001800000000000020000",
        "Nomenclatura: 055100D00000000000000001800000000000022000",
        "Nomenclatura: 055100D00000000000000001800000000000031000",
        "Nomenclatura: 055100D00000000000000001800000000000029000",
        "Nomenclatura: 055100D00000000000000001700000000000009000",
        "Nomenclatura: 055100D00000000000000001800000000000018000",
        "Nomenclatura: 055100D00000000000000001700000000000012000",
        "Nomenclatura: 055100D00000000000000001700000000000011000",
        "Nomenclatura: 055100D00000000000000001700000000000001000",
        "Nomenclatura: 055100D00000000000000002100000000000001000",
        "Nomenclatura: 055100D00000000000000001600000000000020000",
        "Nomenclatura: 055100D00000000000000001600000000000018000",
        "Nomenclatura: 055100D00000000000000001600000000000016000",
        "Nomenclatura: 055100D00000000000000001700000000000003000",
        "Nomenclatura: 055100D00000000000000001700000000000007000",
        "Nomenclatura: 055100D00000000000000001600000000000012000",
        "Nomenclatura: 055100D00000000000000001600000000000013000",
        "Nomenclatura: 055100D00000000000000001600000000000015000",
        "Nomenclatura: 055100D00000000000000001600000000000005000",
        "Nomenclatura: 055100D00000000000000002300000000000001000",
        "Nomenclatura: 055100D00000000000000001600000000000006000",
        "Nomenclatura: 055100D00000000000000001600000000000008000",
        "Nomenclatura: 055100D00000000000000001500000000000006000",
        "Nomenclatura: 055100D00000000000000001500000000000008000",
        "Nomenclatura: 055100D00000000000000001400000000000029000",
        "Nomenclatura: 055100D00000000000000001400000000000027000",
        "Nomenclatura: 055100D00000000000000002000000000000001000",
        "Nomenclatura: 055100D00000000000000002000000000000002000",
        "Nomenclatura: 055100D00000000000000002300000000000004000",
        "Nomenclatura: 055100D00000000000000001600000000000002000",
        "Nomenclatura: 055100D00000000000000002300000000000005000",
        "Nomenclatura: 055100D00000000000000002300000000000007000",
        "Nomenclatura: 055100D00000000000000002200000000000002000",
        "Nomenclatura: 055100D00000000000000002300000000000008000",
        "Nomenclatura: 055100D00000000000000002000000000000004000",
        "Nomenclatura: 055100D00000000000000002000000000000006000",
        "Nomenclatura: 055100D00000000000000002000000000000009000",
        "Nomenclatura: 055100D00000000000000002000000000000010000",
        "Nomenclatura: 055100D00000000000000002300000000000014000",
        "Nomenclatura: 055100D00000000000000002300000000000012000",
        "Nomenclatura: 055100D00000000000000002300000000000010000",
        "Nomenclatura: 055100D00000000000000002200000000000004000",
        "Nomenclatura: 055100D00000000000000002100000000000003000",
        "Nomenclatura: 055100D00000000000000002100000000000019000",
        "Nomenclatura: 055100D00000000000000002100000000000017000",
        "Nomenclatura: 055100D00000000000000002100000000000015000",
        "Nomenclatura: 055100D00000000000000002100000000000007000",
        "Nomenclatura: 055100D00000000000000002100000000000005000",
        "Nomenclatura: 055100D00000000000000002200000000000008000",
        "Nomenclatura: 055100D00000000000000002200000000000010000",
        "Nomenclatura: 055100D00000000000000002100000000000009000",
        "Nomenclatura: 055100D00000000000000002100000000000013000",
        "Nomenclatura: 055100D00000000000000002100000000000011000",
        "Nomenclatura: 055100D00000000000000002000000000000022000",
        "Nomenclatura: 055100D00000000000000002000000000000024000",
        "Nomenclatura: 055100D00000000000000002000000000000021000",
        "Nomenclatura: 055100D00000000000000002000000000000013000",
        "Nomenclatura: 055100D00000000000000002000000000000012000",
        "Nomenclatura: 055100D00000000000000003200000000000001000",
        "Nomenclatura: 055100D00000000000000003200000000000003000",
        "Nomenclatura: 055100D00000000000000003100000000000001000",
        "Nomenclatura: 055100D00000000000000001400000000000024000",
        "Nomenclatura: 055100D00000000000000003900000000000034000",
        "Nomenclatura: 055100D00000000000000002700000000000002000",
        "Nomenclatura: 055100D00000000000000003900000000000004000",
        "Nomenclatura: 055100D00000000000000003900000000000017000",
        "Nomenclatura: 055100D00000000000000003900000000000016000",
        "Nomenclatura: 055100D00000000000000003700000000000013000",
        "Nomenclatura: 055100D00000000000000003700000000000012000",
        "Nomenclatura: 055100D00000000000000003700000000000014000",
        "Nomenclatura: 055100D00000000000000001400000000000026000",
        "Nomenclatura: 055100D00000000000000001400000000000025000",
        "Nomenclatura: 055100D00000000000000003900000000000035000",
        "Nomenclatura: 055100D00000000000000003200000000000004000",
        "Nomenclatura: 055100D00000000000000003700000000000011000",
        "Nomenclatura: 055100D00000000000000003700000000000010000",
        "Nomenclatura: 055100D00000000000000003700000000000009000",
        "Nomenclatura: 055100D00000000000000003700000000000006000",
        "Nomenclatura: 055100D00000000000000003700000000000007000",
        "Nomenclatura: 055100D00000000000000003700000000000008000",
        "Nomenclatura: 055100D00000000000000003900000000000018000",
        "Nomenclatura: 055100D00000000000000003900000000000019000",
        "Nomenclatura: 055100D00000000000000003900000000000021000",
        "Nomenclatura: 055100D00000000000000003900000000000020000",
        "Nomenclatura: 055100D00000000000000003900000000000022000",
        "Nomenclatura: 055100D00000000000000003700000000000003000",
        "Nomenclatura: 055100D00000000000000003700000000000004000",
        "Nomenclatura: 055100D00000000000000003700000000000005000",
        "Nomenclatura: 055100D00000000000000003600000000000003000",
        "Nomenclatura: 055100D00000000000000003600000000000007000",
        "Nomenclatura: 055100D00000000000000003600000000000006000",
        "Nomenclatura: 055100D00000000000000003600000000000004000",
        "Nomenclatura: 055100D00000000000000003600000000000005000",
        "Nomenclatura: 055100D00000000000000003500000000000002000",
        "Nomenclatura: 055100D00000000000000003500000000000001000",
        "Nomenclatura: 055100D00000000000000003600000000000009000",
        "Nomenclatura: 055100D00000000000000003600000000000008000",
        "Nomenclatura: 055100D00000000000000003600000000000001000",
        "Nomenclatura: 055100D00000000000000003600000000000002000",
        "Nomenclatura: 055100D00000000000000003700000000000001000",
        "Nomenclatura: 055100D00000000000000003700000000000002000",
        "Nomenclatura: 055100D00000000000000003900000000000024000",
        "Nomenclatura: 055100D00000000000000003900000000000023000",
        "Nomenclatura: 055100D00000000000000003300000000000004000",
        "Nomenclatura: 055100D00000000000000003300000000000002000",
        "Nomenclatura: 055100D00000000000000003900000000000025000",
        "Nomenclatura: 055100D00000000000000003900000000000027000",
        "Nomenclatura: 055100D00000000000000003200000000000011000",
        "Nomenclatura: 055100D00000000000000003200000000000014000",
        "Nomenclatura: 055100D00000000000000003200000000000009000",
        "Nomenclatura: 055100D00000000000000003200000000000010000",
        "Nomenclatura: 055100D00000000000000003900000000000030000",
        "Nomenclatura: 055100D00000000000000003900000000000032000",
        "Nomenclatura: 055100D00000000000000003200000000000005000",
        "Nomenclatura: 055100D00000000000000003200000000000007000",
        "Nomenclatura: 055100D00000000000000002000000000000016000",
        "Nomenclatura: 055100D00000000000000003300000000000006000",
        "Nomenclatura: 055100D00000000000000003300000000000009000",
        "Nomenclatura: 055100D00000000000000002000000000000017000",
        "Nomenclatura: 055100D00000000000000001900000000000003000",
        "Nomenclatura: 055100D00000000000000001900000000000001000",
        "Nomenclatura: 055100D00000000000000002000000000000018000",
        "Nomenclatura: 055100D00000000000000002000000000000026000",
        "Nomenclatura: 055100D00000000000000002100000000000020000",
        "Nomenclatura: 055100D00000000000000001700000000000002000",
        "Nomenclatura: 055100D00000000000000001600000000000021000",
        "Nomenclatura: 055100D00000000000000001600000000000019000",
        "Nomenclatura: 055100D00000000000000001600000000000017000",
        "Nomenclatura: 055100D00000000000000001700000000000004000",
        "Nomenclatura: 055100D00000000000000001700000000000005000",
        "Nomenclatura: 055100D00000000000000001700000000000006000",
        "Nomenclatura: 055100D00000000000000001600000000000011000",
        "Nomenclatura: 055100D00000000000000001600000000000014000",
        "Nomenclatura: 055100D00000000000000001600000000000004000",
        "Nomenclatura: 055100D00000000000000002300000000000002000",
        "Nomenclatura: 055100D00000000000000001500000000000009000",
        "Nomenclatura: 055100D00000000000000001600000000000007000",
        "Nomenclatura: 055100D00000000000000001600000000000009000",
        "Nomenclatura: 055100D00000000000000001500000000000007000",
        "Nomenclatura: 055100D00000000000000001400000000000030000",
        "Nomenclatura: 055100D00000000000000001400000000000028000",
        "Nomenclatura: 055100D00000000000000002000000000000003000",
        "Nomenclatura: 055100D00000000000000002300000000000003000",
        "Nomenclatura: 055100D00000000000000001600000000000003000",
        "Nomenclatura: 055100D00000000000000001600000000000001000",
        "Nomenclatura: 055100D00000000000000002300000000000006000",
        "Nomenclatura: 055100D00000000000000002200000000000001000",
        "Nomenclatura: 055100D00000000000000002200000000000003000",
        "Nomenclatura: 055100D00000000000000002300000000000009000",
        "Nomenclatura: 055100D00000000000000002000000000000005000",
        "Nomenclatura: 055100D00000000000000002000000000000007000",
        "Nomenclatura: 055100D00000000000000002000000000000008000",
        "Nomenclatura: 055100D00000000000000002300000000000013000",
        "Nomenclatura: 055100D00000000000000002200000000000006000",
        "Nomenclatura: 055100D00000000000000002300000000000011000",
        "Nomenclatura: 055100D00000000000000002200000000000005000",
        "Nomenclatura: 055100D00000000000000002100000000000004000",
        "Nomenclatura: 055100D00000000000000002100000000000002000",
        "Nomenclatura: 055100D00000000000000002100000000000018000",
        "Nomenclatura: 055100D00000000000000002100000000000016000",
        "Nomenclatura: 055100D00000000000000002100000000000014000",
        "Nomenclatura: 055100D00000000000000002100000000000006000",
        "Nomenclatura: 055100D00000000000000002200000000000007000",
        "Nomenclatura: 055100D00000000000000002200000000000009000",
        "Nomenclatura: 055100D00000000000000002200000000000011000",
        "Nomenclatura: 055100D00000000000000002100000000000008000",
        "Nomenclatura: 055100D00000000000000002100000000000012000",
        "Nomenclatura: 055100D00000000000000002100000000000010000",
        "Nomenclatura: 055100D00000000000000002000000000000023000",
        "Nomenclatura: 055100D00000000000000002000000000000025000",
        "Nomenclatura: 055100D00000000000000002000000000000020000",
        "Nomenclatura: 055100D00000000000000002000000000000014000",
        "Nomenclatura: 055100D00000000000000002000000000000011000",
        "Nomenclatura: 055100D00000000000000003200000000000002000",
        "Nomenclatura: 055100D00000000000000001900000000000013000",
        "Nomenclatura: 055100D00000000000000001900000000000021000",
        "Nomenclatura: 055100D00000000000000001900000000000023000",
        "Nomenclatura: 055100D00000000000000001900000000000025000",
        "Nomenclatura: 055100D00000000000000001900000000000009000",
        "Nomenclatura: 055100D00000000000000001900000000000011000",
        "Nomenclatura: 055100D00000000000000001900000000000007000",
        "Nomenclatura: 055100D0000000000000000190000000000002700A",
        "Nomenclatura: 055100D00000000000000001900000000000038000",
        "Nomenclatura: 055100D00000000000000001900000000000040000",
        "Nomenclatura: 055100D00000000000000001800000000000033000",
        "Nomenclatura: 055100D00000000000000001800000000000027000",
        "Nomenclatura: 055100D00000000000000001800000000000024000",
        "Nomenclatura: 055100D00000000000000001900000000000020000",
        "Nomenclatura: 055100D00000000000000001900000000000018000",
        "Nomenclatura: 055100D00000000000000001900000000000015000",
        "Nomenclatura: 055100D00000000000000001800000000000007000",
        "Nomenclatura: 055100D00000000000000001800000000000006000",
        "Nomenclatura: 055100D00000000000000001800000000000009000",
        "Nomenclatura: 055100D00000000000000001800000000000011000",
        "Nomenclatura: 055100D00000000000000001800000000000013000",
        "Nomenclatura: 055100D00000000000000001800000000000002000",
        "Nomenclatura: 055100D00000000000000001800000000000001000",
        "Nomenclatura: 055100D00000000000000001700000000000014000",
        "Nomenclatura: 055100D00000000000000001800000000000014000",
        "Nomenclatura: 055100D00000000000000001800000000000019000",
        "Nomenclatura: 055100D00000000000000001800000000000021000",
        "Nomenclatura: 055100D00000000000000001800000000000023000",
        "Nomenclatura: 055100D00000000000000001800000000000030000",
        "Nomenclatura: 055100D00000000000000001800000000000032000",
        "Nomenclatura: 055100D00000000000000001700000000000008000",
        "Nomenclatura: 055100D00000000000000001800000000000017000",
        "Nomenclatura: 055100D00000000000000001700000000000010000",
        "Nomenclatura: 055100D00000000000000001400000000000012000",
        "Nomenclatura: 055100D00000000000000001400000000000033000",
        "Nomenclatura: 055100D00000000000000001500000000000001000",
        "Nomenclatura: 055100D00000000000000001500000000000002000",
        "Nomenclatura: 055100000000000000000000000000000003305000",
        "Nomenclatura: 055100D00000000000000002700000000000001000",
        "Nomenclatura: 055100D00000000000000002800000000000001000",
        "Nomenclatura: 055100D00000000000000001400000000000001000",
        "Nomenclatura: 055100D00000000000000001400000000000032000",
        "Nomenclatura: 055100D00000000000000001400000000000031000",
        "Nomenclatura: 055100D00000000000000001500000000000003000",
        "Nomenclatura: 055100D00000000000000001500000000000004000",
        "Nomenclatura: 055100D00000000000000001500000000000005000",
        "Nomenclatura: 055100D00000000000000001600000000000010000",
        "Nomenclatura: 055100D00000000000000001900000000000042000",
        "Nomenclatura: 055100D00000000000000001900000000000041000",
        "Nomenclatura: 055100D00000000000000002600000000000008000",
        "Nomenclatura: 055100D00000000000000002600000000000009000",
        "Nomenclatura: 055100D00000000000000002600000000000005000",
        "Nomenclatura: 055100D00000000000000002600000000000006000",
        "Nomenclatura: 055100D00000000000000002500000000000007000",
        "Nomenclatura: 055100D00000000000000002500000000000006000",
        "Nomenclatura: 055100D00000000000000002500000000000009000",
        "Nomenclatura: 055100D00000000000000002500000000000010000",
        "Nomenclatura: 055100D00000000000000002500000000000011000",
        "Nomenclatura: 055100D00000000000000002500000000000012000",
        "Nomenclatura: 055100D00000000000000002500000000000013000",
        "Nomenclatura: 055100D00000000000000002500000000000003000",
        "Nomenclatura: 055100D00000000000000002500000000000004000",
        "Nomenclatura: 055100D00000000000000002500000000000008000",
        "Nomenclatura: 055100D00000000000000002500000000000005000",
        "Nomenclatura: 055100D00000000000000002600000000000004000",
        "Nomenclatura: 055100D00000000000000002600000000000003000",
        "Nomenclatura: 055100D00000000000000002600000000000002000",
        "Nomenclatura: 055100D00000000000000002600000000000001000",
        "Nomenclatura: 055100D00000000000000002500000000000001000",
        "Nomenclatura: 055100D00000000000000002500000000000002000",
        "Nomenclatura: 055100D00000000000000002500000000000014000",
        "Nomenclatura: 055100D00000000000000002500000000000015000",
        "Nomenclatura: 055100D00000000000000001400000000000006000",
        "Nomenclatura: 055100D00000000000000001400000000000005000",
        "Nomenclatura: 055100D00000000000000001400000000000004000",
        "Nomenclatura: 055100D00000000000000001400000000000003000",
        "Nomenclatura: 055100D00000000000000001400000000000002000",
        "Nomenclatura: 055100D00000000000000001400000000000009000",
        "Nomenclatura: 055100D00000000000000001400000000000008000",
        "Nomenclatura: 055100D00000000000000001400000000000007000",
        "Nomenclatura: 055100D00000000000000001400000000000010000",
        "Nomenclatura: 055100D00000000000000001400000000000011000",
        "Nomenclatura: 055100D00000000000000002400000000000009000",
        "Nomenclatura: 055100D00000000000000001400000000000013000",
        "Nomenclatura: 055100D00000000000000002400000000000003000",
        "Nomenclatura: 055100D00000000000000002400000000000002000",
        "Nomenclatura: 055100D00000000000000002400000000000011000",
        "Nomenclatura: 055100D00000000000000001400000000000014000",
        "Nomenclatura: 055100D00000000000000002400000000000012000",
        "Nomenclatura: 055100D00000000000000002400000000000010000",
        "Nomenclatura: 055100D00000000000000002800000000000002000",
        "Nomenclatura: 055100D00000000000000004500000000000011000",
        "Nomenclatura: 055100D00000000000000004400000000000007000",
        "Nomenclatura: 055100D00000000000000004400000000000008000",
        "Nomenclatura: 055100D00000000000000004400000000000009000",
        "Nomenclatura: 055100D00000000000000004400000000000010000",
        "Nomenclatura: 055100D00000000000000004400000000000011000",
        "Nomenclatura: 055100D00000000000000004200000000000027000",
        "Nomenclatura: 055100D00000000000000004400000000000012000",
        "Nomenclatura: 055100D00000000000000004400000000000013000",
        "Nomenclatura: 055100D00000000000000004400000000000014000",
        "Nomenclatura: 055100D00000000000000004200000000000023000",
        "Nomenclatura: 055100D00000000000000004200000000000024000",
        "Nomenclatura: 055100D00000000000000004200000000000025000",
        "Nomenclatura: 055100D00000000000000004200000000000026000",
        "Nomenclatura: 055100D00000000000000004200000000000028000",
        "Nomenclatura: 055100D00000000000000004200000000000004000",
        "Nomenclatura: 055100D00000000000000004200000000000022000",
        "Nomenclatura: 055100D00000000000000004200000000000021000",
        "Nomenclatura: 055100D00000000000000004300000000000002000",
        "Nomenclatura: 055100D00000000000000004300000000000001000",
        "Nomenclatura: 055100D00000000000000004200000000000020000",
        "Nomenclatura: 055100D00000000000000004200000000000019000",
        "Nomenclatura: 055100D00000000000000004200000000000018000",
        "Nomenclatura: 055100D00000000000000002800000000000004000",
        "Nomenclatura: 055100D00000000000000004300000000000005000",
        "Nomenclatura: 055100D00000000000000004300000000000004000",
        "Nomenclatura: 055100D00000000000000004300000000000003000",
        "Nomenclatura: 055100D00000000000000004400000000000018000",
        "Nomenclatura: 055100D00000000000000004400000000000017000",
        "Nomenclatura: 055100D00000000000000004400000000000016000",
        "Nomenclatura: 055100D00000000000000004400000000000015000",
        "Nomenclatura: 055100D00000000000000002800000000000003000",
        "Nomenclatura: 055100D00000000000000004500000000000010000",
        "Nomenclatura: 055100D00000000000000004500000000000009000",
        "Nomenclatura: 055100D00000000000000004000000000000019000",
        "Nomenclatura: 055100D00000000000000004100000000000014000",
        "Nomenclatura: 055100D00000000000000004100000000000009000",
        "Nomenclatura: 055100D00000000000000004100000000000011000",
        "Nomenclatura: 055100D00000000000000004100000000000012000",
        "Nomenclatura: 055100D00000000000000004100000000000013000",
        "Nomenclatura: 055100D00000000000000004100000000000010000",
        "Nomenclatura: 055100D00000000000000004100000000000007000",
        "Nomenclatura: 055100D00000000000000004100000000000008000",
        "Nomenclatura: 055100D00000000000000004200000000000009000",
        "Nomenclatura: 055100D00000000000000004200000000000008000",
        "Nomenclatura: 055100D00000000000000004100000000000003000",
        "Nomenclatura: 055100D00000000000000004100000000000004000",
        "Nomenclatura: 055100D00000000000000004100000000000005000",
        "Nomenclatura: 055100D00000000000000004100000000000006000",
        "Nomenclatura: 055100D00000000000000004100000000000015000",
        "Nomenclatura: 055100D00000000000000003000000000000005000",
        "Nomenclatura: 055100D00000000000000004100000000000001000",
        "Nomenclatura: 055100D00000000000000004100000000000002000",
        "Nomenclatura: 055100D00000000000000004200000000000007000",
        "Nomenclatura: 055100D00000000000000004200000000000006000",
        "Nomenclatura: 055100D00000000000000004200000000000005000",
        "Nomenclatura: 055100D00000000000000003000000000000001000",
        "Nomenclatura: 055100D00000000000000003000000000000002000",
        "Nomenclatura: 055100D00000000000000003000000000000003000",
        "Nomenclatura: 055100D00000000000000003000000000000004000",
        "Nomenclatura: 055100D00000000000000002900000000000018000",
        "Nomenclatura: 055100D00000000000000002900000000000017000",
        "Nomenclatura: 055100D00000000000000004200000000000003000",
        "Nomenclatura: 055100D00000000000000004200000000000002000",
        "Nomenclatura: 055100D00000000000000004200000000000001000",
        "Nomenclatura: 055100D00000000000000004200000000000031000",
        "Nomenclatura: 055100D00000000000000004200000000000030000",
        "Nomenclatura: 055100D00000000000000004200000000000029000",
        "Nomenclatura: 055100D00000000000000004200000000000016000",
        "Nomenclatura: 055100D00000000000000004200000000000017000",
        "Nomenclatura: 055100D00000000000000004000000000000026000",
        "Nomenclatura: 055100D00000000000000004000000000000023000",
        "Nomenclatura: 055100D00000000000000004000000000000024000",
        "Nomenclatura: 055100D00000000000000004000000000000022000",
        "Nomenclatura: 055100D00000000000000004000000000000025000",
        "Nomenclatura: 055100D00000000000000004000000000000020000",
        "Nomenclatura: 055100D00000000000000004000000000000021000",
        "Nomenclatura: 055100D00000000000000004000000000000018000",
        "Nomenclatura: 055100D00000000000000004000000000000017000",
        "Nomenclatura: 055100D00000000000000004000000000000016000",
        "Nomenclatura: 055100D00000000000000004000000000000015000",
        "Nomenclatura: 055100D00000000000000004000000000000013000",
        "Nomenclatura: 055100D00000000000000004000000000000014000",
        "Nomenclatura: 055100D00000000000000004200000000000013000",
        "Nomenclatura: 055100D00000000000000004200000000000014000",
        "Nomenclatura: 055100D00000000000000004200000000000015000",
        "Nomenclatura: 055100D00000000000000004200000000000010000",
        "Nomenclatura: 055100D00000000000000004200000000000011000",
        "Nomenclatura: 055100D00000000000000004200000000000012000",
        "Nomenclatura: 055100D00000000000000004000000000000001000",
        "Nomenclatura: 055100D00000000000000003900000000000006000",
        "Nomenclatura: 055100D00000000000000003900000000000007000",
        "Nomenclatura: 055100D00000000000000003900000000000005000",
        "Nomenclatura: 055100D00000000000000003900000000000003000",
        "Nomenclatura: 055100D00000000000000003900000000000002000",
        "Nomenclatura: 055100D00000000000000003900000000000001000",
        "Nomenclatura: 055100D00000000000000003900000000000008000",
        "Nomenclatura: 055100D00000000000000004000000000000002000",
        "Nomenclatura: 055100D00000000000000004000000000000003000",
        "Nomenclatura: 055100D00000000000000004000000000000004000",
        "Nomenclatura: 055100D00000000000000004000000000000012000",
        "Nomenclatura: 055100D00000000000000004000000000000005000",
        "Nomenclatura: 055100D00000000000000004000000000000007000",
        "Nomenclatura: 055100D00000000000000004000000000000006000",
        "Nomenclatura: 055100D00000000000000004000000000000009000",
        "Nomenclatura: 055100D00000000000000004000000000000008000",
        "Nomenclatura: 055100D00000000000000004000000000000010000",
        "Nomenclatura: 055100D00000000000000004000000000000011000",
        "Nomenclatura: 055100D00000000000000003900000000000012000",
        "Nomenclatura: 055100D00000000000000003900000000000013000",
        "Nomenclatura: 055100D00000000000000003900000000000014000",
        "Nomenclatura: 055100D00000000000000003900000000000011000",
        "Nomenclatura: 055100D00000000000000003900000000000010000",
        "Nomenclatura: 055100D00000000000000003900000000000009000",
        "Nomenclatura: 055100D00000000000000003900000000000015000",
        "Nomenclatura: 055100D00000000000000003800000000000003000",
        "Nomenclatura: 055100D00000000000000003800000000000002000",
        "Nomenclatura: 055100D00000000000000003800000000000001000",
        "Nomenclatura: 055100D00000000000000003800000000000004000",
        "Nomenclatura: 055100D00000000000000001400000000000015000",
        "Nomenclatura: 055100D00000000000000002400000000000001000",
        "Nomenclatura: 055100D00000000000000002400000000000004000",
        "Nomenclatura: 055100D00000000000000002400000000000013000",
        "Nomenclatura: 055100D00000000000000002400000000000008000",
        "Nomenclatura: 055100D00000000000000001400000000000016000",
        "Nomenclatura: 055100D00000000000000002400000000000014000",
        "Nomenclatura: 055100D00000000000000002900000000000002000",
        "Nomenclatura: 055100D00000000000000002400000000000007000",
        "Nomenclatura: 055100D00000000000000001400000000000017000",
        "Nomenclatura: 055100D00000000000000002900000000000003000",
        "Nomenclatura: 055100D00000000000000002400000000000005000",
        "Nomenclatura: 055100D00000000000000002400000000000015000",
        "Nomenclatura: 055100D00000000000000004600000000000009000",
        "Nomenclatura: 055100D00000000000000002900000000000004000",
        "Nomenclatura: 055100D00000000000000001400000000000018000",
        "Nomenclatura: 055100D00000000000000002400000000000016000",
        "Nomenclatura: 055100D00000000000000002900000000000005000",
        "Nomenclatura: 055100D00000000000000004600000000000010000",
        "Nomenclatura: 055100D00000000000000001400000000000019000",
        "Nomenclatura: 055100D00000000000000002400000000000006000",
        "Nomenclatura: 055100D00000000000000002900000000000006000",
        "Nomenclatura: 055100D00000000000000002400000000000017000",
        "Nomenclatura: 055100D00000000000000004600000000000008000",
        "Nomenclatura: 055100D00000000000000002900000000000007000",
        "Nomenclatura: 055100D00000000000000004600000000000007000",
        "Nomenclatura: 055100D00000000000000002400000000000018000",
        "Nomenclatura: 055100D00000000000000004600000000000001000",
        "Nomenclatura: 055100D00000000000000002900000000000008000",
        "Nomenclatura: 055100D00000000000000001400000000000020000",
        "Nomenclatura: 055100D00000000000000004600000000000002000",
        "Nomenclatura: 055100D00000000000000004600000000000003000",
        "Nomenclatura: 055100D00000000000000004600000000000004000",
        "Nomenclatura: 055100D00000000000000002900000000000009000",
        "Nomenclatura: 055100D00000000000000004600000000000005000",
        "Nomenclatura: 055100D00000000000000001400000000000021000",
        "Nomenclatura: 055100D00000000000000002900000000000010000",
        "Nomenclatura: 055100D00000000000000001400000000000022000",
        "Nomenclatura: 055100D00000000000000001400000000000023000",
        "Nomenclatura: 055100D00000000000000004600000000000006000",
        "Nomenclatura: 055100D00000000000000002900000000000011000",
        "Nomenclatura: 055100D00000000000000004500000000000001000",
        "Nomenclatura: 055100D00000000000000004500000000000002000",
        "Nomenclatura: 055100D00000000000000004500000000000003000",
        "Nomenclatura: 055100D00000000000000002900000000000012000",
        "Nomenclatura: 055100D00000000000000004500000000000004000",
        "Nomenclatura: 055100D00000000000000004500000000000005000",
        "Nomenclatura: 055100D00000000000000002900000000000013000",
        "Nomenclatura: 055100D00000000000000004500000000000006000",
        "Nomenclatura: 055100D00000000000000002900000000000014000",
        "Nomenclatura: 055100D00000000000000004500000000000007000",
        "Nomenclatura: 055100D00000000000000004400000000000001000",
        "Nomenclatura: 055100D00000000000000004400000000000002000",
        "Nomenclatura: 055100D00000000000000004400000000000003000",
        "Nomenclatura: 055100D00000000000000004500000000000008000",
        "Nomenclatura: 055100D00000000000000004400000000000004000",
        "Nomenclatura: 055100D00000000000000002900000000000015000",
        "Nomenclatura: 055100D00000000000000004400000000000005000",
        "Nomenclatura: 055100D00000000000000004400000000000006000",
        "Nomenclatura: 055100D00000000000000002900000000000016000"
      ],
      "totalAreaSqM": 2584820,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 0,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR CC",
        "description": "AREA RURAL/ CLUB DE CAMPO",
        "allowedUses": "VIVIENDA UNIFAMILIAR",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "dentro",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-9-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0800005F",
    "name": "SAN JORGE",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0916179999962,
        "lat": -35.0826819999929
      },
      {
        "lng": -58.08901080999681,
        "lat": -35.084665670083
      },
      {
        "lng": -58.0835609999961,
        "lat": -35.0888959999929
      },
      {
        "lng": -58.0770277634731,
        "lat": -35.083130054866
      },
      {
        "lng": -58.075732234834,
        "lat": -35.0819864250398
      },
      {
        "lng": -58.0756661884694,
        "lat": -35.0813024492686
      },
      {
        "lng": -58.0773249778828,
        "lat": -35.0794494112113
      },
      {
        "lng": -58.07756844651791,
        "lat": -35.0791744416437
      },
      {
        "lng": -58.07786672669201,
        "lat": -35.0789181843294
      },
      {
        "lng": -58.0779072916878,
        "lat": -35.078810593589
      },
      {
        "lng": -58.0786838556545,
        "lat": -35.0777463317966
      },
      {
        "lng": -58.0791911325457,
        "lat": -35.0772537543481
      },
      {
        "lng": -58.0795742541297,
        "lat": -35.0771890797846
      },
      {
        "lng": -58.0800651233885,
        "lat": -35.077606809816
      },
      {
        "lng": -58.0832629999961,
        "lat": -35.0751309999929
      },
      {
        "lng": -58.0916179999962,
        "lat": -35.0826819999929
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 600000,
      "marketValueRegularizedUsd": 900000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055100000000000000000000000000000003272000",
        "Nomenclatura: 05510000000000000000000000000000000320700M",
        "Nomenclatura: 05510000000000000000000000000000000320700N",
        "Nomenclatura: 055100000000000000000000000000000003268000",
        "Nomenclatura: 055100000000000000000000000000000003269000"
      ],
      "totalAreaSqM": 2108872,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 0,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR CC",
        "description": "AREA RURAL/ CLUB DE CAMPO",
        "allowedUses": "VIVIENDA UNIFAMILIAR",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-10-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000060",
    "name": "SAINT JOHN",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.09620299999629,
        "lat": -35.0791859999929
      },
      {
        "lng": -58.0916179999962,
        "lat": -35.0826819999929
      },
      {
        "lng": -58.0832629999961,
        "lat": -35.0751309999929
      },
      {
        "lng": -58.0878109999962,
        "lat": -35.0716089999929
      },
      {
        "lng": -58.09620299999629,
        "lat": -35.0791859999929
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 610000,
      "marketValueRegularizedUsd": 910000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05510000000000000000000000000000000320700F",
        "Nomenclatura: 05510000000000000000000000000000000320700N"
      ],
      "totalAreaSqM": 1651252,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 0,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR CC",
        "description": "AREA RURAL/ CLUB DE CAMPO",
        "allowedUses": "VIVIENDA UNIFAMILIAR",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-11-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000061",
    "name": "HAMILTON",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.10078799999631,
        "lat": -35.0757029999929
      },
      {
        "lng": -58.09620299999629,
        "lat": -35.0791859999929
      },
      {
        "lng": -58.0878109999962,
        "lat": -35.0716089999929
      },
      {
        "lng": -58.0923589999962,
        "lat": -35.0680869999929
      },
      {
        "lng": -58.10078799999631,
        "lat": -35.0757029999929
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 620000,
      "marketValueRegularizedUsd": 920000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05510000000000000000000000000000000320700F",
        "Nomenclatura: 05510000000000000000000000000000000320600E"
      ],
      "totalAreaSqM": 1296664,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 0,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR CC",
        "description": "AREA RURAL/ CLUB DE CAMPO",
        "allowedUses": "VIVIENDA UNIFAMILIAR",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-12-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000062",
    "name": "ANTIGUA",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0224259999954,
        "lat": -34.9013829999928
      },
      {
        "lng": -58.0215369999954,
        "lat": -34.9005879999928
      },
      {
        "lng": -58.0214449999954,
        "lat": -34.9004889999928
      },
      {
        "lng": -58.0206539999954,
        "lat": -34.8997779999928
      },
      {
        "lng": -58.0214600275554,
        "lat": -34.8991964750181
      },
      {
        "lng": -58.0222748852374,
        "lat": -34.8999362339562
      },
      {
        "lng": -58.02306847235879,
        "lat": -34.8993536118431
      },
      {
        "lng": -58.0240089999955,
        "lat": -34.9002169999928
      },
      {
        "lng": -58.0224259999954,
        "lat": -34.9013829999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 630000,
      "marketValueRegularizedUsd": 930000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A002700000000000000000002700T0015000",
        "Nomenclatura: 055030A002700000000000000000002700T0014000",
        "Nomenclatura: 055030A002700000000000000000002700T0022000",
        "Nomenclatura: 055030A002700000000000000000002700T000600A",
        "Nomenclatura: 055030A002700000000000000000002700T000500E",
        "Nomenclatura: 055030A002700000000000000000002700T000500A",
        "Nomenclatura: 055030A002700000000000000000002700T000400B",
        "Nomenclatura: 055030A002700000000000000000002700T000400C",
        "Nomenclatura: 055030A002700000000000000000002700N0004000",
        "Nomenclatura: 055030A002700000000000000000002700N0005000",
        "Nomenclatura: 055030A002700000000000000000002700P0027000",
        "Nomenclatura: 055030A002700000000000000000002700P0026000",
        "Nomenclatura: 055030A002700000000000000000002700P0023000",
        "Nomenclatura: 055030A002700000000000000000002700P0025000",
        "Nomenclatura: 055030A002700000000000000000002700P0024000",
        "Nomenclatura: 055030A002700000000000000000002700N0006000",
        "Nomenclatura: 055030A002700000000000000000002700T000400D",
        "Nomenclatura: 055030A002700000000000000000002700T000400E",
        "Nomenclatura: 055030A002700000000000000000002700T000600E",
        "Nomenclatura: 055030A002700000000000000000002700T000600D",
        "Nomenclatura: 055030A002700000000000000000002700T000600C",
        "Nomenclatura: 055030A002700000000000000000002700T000600B",
        "Nomenclatura: 055030A002700000000000000000002700T0007000",
        "Nomenclatura: 055030A002700000000000000000002700P0012000",
        "Nomenclatura: 055030A002700000000000000000002700P0014000",
        "Nomenclatura: 055030A002700000000000000000002700P0013000",
        "Nomenclatura: 055030A002700000000000000000002700P0015000",
        "Nomenclatura: 055030A002700000000000000000002700P0016000",
        "Nomenclatura: 055030A002700000000000000000002700P0028000",
        "Nomenclatura: 055030A002700000000000000000002700T000500B",
        "Nomenclatura: 055030A002700000000000000000002700T000400A",
        "Nomenclatura: 055030A002700000000000000000002700T000300F",
        "Nomenclatura: 055030A002700000000000000000002700T000500C",
        "Nomenclatura: 055030A002700000000000000000002700T000300D",
        "Nomenclatura: 055030A002700000000000000000002700T000300E",
        "Nomenclatura: 055030A002700000000000000000002700T000200C",
        "Nomenclatura: 055030A002700000000000000000002700T000100D",
        "Nomenclatura: 055030A002700000000000000000002700T000200D",
        "Nomenclatura: 055030A002700000000000000000002700T000300A",
        "Nomenclatura: 055030A002700000000000000000002700T000200E",
        "Nomenclatura: 055030A002700000000000000000002700T000100F",
        "Nomenclatura: 055030A002700000000000000000002700T000100B",
        "Nomenclatura: 055030A002700000000000000000002700T000100C",
        "Nomenclatura: 055030A002700000000000000000002700T000100E",
        "Nomenclatura: 055030A002700000000000000000002700T000200A",
        "Nomenclatura: 055030A002700000000000000000002700T000200B"
      ],
      "totalAreaSqM": 35762,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-13-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000063",
    "name": "SWAN",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0141952999953,
        "lat": -34.8969706999928
      },
      {
        "lng": -58.0132385999953,
        "lat": -34.8976853999928
      },
      {
        "lng": -58.0131972999953,
        "lat": -34.8977594999928
      },
      {
        "lng": -58.0133400999953,
        "lat": -34.8979166999928
      },
      {
        "lng": -58.0132178999953,
        "lat": -34.8980285999928
      },
      {
        "lng": -58.0130808999953,
        "lat": -34.8978872999928
      },
      {
        "lng": -58.0130160999953,
        "lat": -34.8978949999928
      },
      {
        "lng": -58.0127190999953,
        "lat": -34.8981117999928
      },
      {
        "lng": -58.0122150999953,
        "lat": -34.8976249999928
      },
      {
        "lng": -58.0125161999953,
        "lat": -34.8973919999928
      },
      {
        "lng": -58.0123341999953,
        "lat": -34.8972160999928
      },
      {
        "lng": -58.01249549999531,
        "lat": -34.8970929999928
      },
      {
        "lng": -58.0126792999953,
        "lat": -34.8972781999928
      },
      {
        "lng": -58.0137173999953,
        "lat": -34.8965133999928
      },
      {
        "lng": -58.0139288999953,
        "lat": -34.8966981999928
      },
      {
        "lng": -58.0141952999953,
        "lat": -34.8969706999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 640000,
      "marketValueRegularizedUsd": 940000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A0022000000000000010000000000000700C",
        "Nomenclatura: 055030A00220000000000000100000000000006000"
      ],
      "totalAreaSqM": 34891,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.6,
        "fot": 0.8,
        "density": 250,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R4",
        "description": "AREA URBANA / RESIDENCIAL 4",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-14-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0800006F",
    "name": "EL FRESNO",
    "type": "condominio",
    "polygon": [
      {
        "lng": -57.9434216169894,
        "lat": -34.9745942116898
      },
      {
        "lng": -57.9435598356511,
        "lat": -34.9747236207387
      },
      {
        "lng": -57.9454499756474,
        "lat": -34.9764507607175
      },
      {
        "lng": -57.94555964947641,
        "lat": -34.9766405144968
      },
      {
        "lng": -57.9471851295551,
        "lat": -34.9780912604748
      },
      {
        "lng": -57.9490239195527,
        "lat": -34.9797322258394
      },
      {
        "lng": -57.9478346786794,
        "lat": -34.9806466550731
      },
      {
        "lng": -57.9466704159807,
        "lat": -34.98154193888
      },
      {
        "lng": -57.94517196238411,
        "lat": -34.9801978738416
      },
      {
        "lng": -57.9441585644517,
        "lat": -34.9792888093356
      },
      {
        "lng": -57.9439770113422,
        "lat": -34.9792413056165
      },
      {
        "lng": -57.9415963378687,
        "lat": -34.9810610021598
      },
      {
        "lng": -57.9407275721403,
        "lat": -34.9802845836192
      },
      {
        "lng": -57.9406030194515,
        "lat": -34.9800815060396
      },
      {
        "lng": -57.9386516154108,
        "lat": -34.9783358584061
      },
      {
        "lng": -57.9385312663498,
        "lat": -34.978209991622
      },
      {
        "lng": -57.9365969958201,
        "lat": -34.9764438757521
      },
      {
        "lng": -57.93946899244709,
        "lat": -34.9743232401325
      },
      {
        "lng": -57.94148611468361,
        "lat": -34.9728281516899
      },
      {
        "lng": -57.9434216169894,
        "lat": -34.9745942116898
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 650000,
      "marketValueRegularizedUsd": 950000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055090W00000000003000000000000000000016000",
        "Nomenclatura: 055090W00000000003000000000000000000017000",
        "Nomenclatura: 055090W00000000003000000000000000000015000",
        "Nomenclatura: 055090W00000000003000000000000000000014000",
        "Nomenclatura: 055090W00000000003000000000000000000011000",
        "Nomenclatura: 055090W00000000003000000000000000000018000",
        "Nomenclatura: 055090W00000000003000000000000000000019000",
        "Nomenclatura: 055090W00000000003000000000000000000020000",
        "Nomenclatura: 055090W00000000003000000000000000000021000",
        "Nomenclatura: 055090W00000000003000000000000000000022000",
        "Nomenclatura: 055090W00000000003000000000000000000023000",
        "Nomenclatura: 055090W00000000003000000000000000000002000",
        "Nomenclatura: 055090W00000000003000000000000000000001000",
        "Nomenclatura: 055090W00000000003000000000000000000024000",
        "Nomenclatura: 055090W0000000000200000000000000000001600A",
        "Nomenclatura: 055090W00000000003000000000000000000006000",
        "Nomenclatura: 055090W00000000003000000000000000000003000",
        "Nomenclatura: 055090W00000000003000000000000000000007000",
        "Nomenclatura: 055090W00000000003000000000000000000008000",
        "Nomenclatura: 055090W00000000003000000000000000000009000",
        "Nomenclatura: 055090W00000000003000000000000000000010000",
        "Nomenclatura: 055090W0000000000200000000000000000000200A",
        "Nomenclatura: 055090W00000000004000000000000000000003000",
        "Nomenclatura: 055090W00000000004000000000000000000002000",
        "Nomenclatura: 055090W00000000004000000000000000000001000",
        "Nomenclatura: 055090W00000000002000000000000000000010000",
        "Nomenclatura: 055090W00000000002000000000000000000009000",
        "Nomenclatura: 055090W00000000002000000000000000000008000",
        "Nomenclatura: 055090W00000000001000000000000000000011000",
        "Nomenclatura: 055090W00000000001000000000000000000009000",
        "Nomenclatura: 055090W00000000001000000000000000000012000",
        "Nomenclatura: 055090W00000000001000000000000000000013000",
        "Nomenclatura: 055090W00000000001000000000000000000014000",
        "Nomenclatura: 055090W00000000002000000000000000000005000",
        "Nomenclatura: 055090W00000000002000000000000000000007000",
        "Nomenclatura: 055090W00000000002000000000000000000006000",
        "Nomenclatura: 055090W0000000000200000000000000000001100A",
        "Nomenclatura: 055090W0000000000200000000000000000001300A",
        "Nomenclatura: 055090W0000000000200000000000000000000300A",
        "Nomenclatura: 055090W00000000001000000000000000000020000",
        "Nomenclatura: 055090W0000000000100000000000000000001800A",
        "Nomenclatura: 055090W0000000000100000000000000000000300A",
        "Nomenclatura: 055090W0000000000100000000000000000002100A",
        "Nomenclatura: 055090W00000000001000000000000000000002000",
        "Nomenclatura: 055090W0000000000100000000000000000001500A",
        "Nomenclatura: 055090W0000000000100000000000000000000600A",
        "Nomenclatura: 055090W00000000001000000000000000000008000",
        "Nomenclatura: 055090W0000000000100000000000000000000400A",
        "Nomenclatura: 055090W0000000000100000000000000000000100A",
        "Nomenclatura: 055090W0000000000200000000000000000000100A",
        "Nomenclatura: 055090W00000000003000000000000000000005000",
        "Nomenclatura: 055090W00000000003000000000000000000004000",
        "Nomenclatura: 055090000000000000000000000000000002859000",
        "Nomenclatura: 055090W00000000003000000000000000000012000",
        "Nomenclatura: 055090W00000000003000000000000000000013000",
        "Nomenclatura: 055090W00000000001000000000000000000010000"
      ],
      "totalAreaSqM": 588626,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": true,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-15-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000079",
    "name": "SOLARES II",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.1848799999971,
        "lat": -34.9861589999929
      },
      {
        "lng": -58.1893689999972,
        "lat": -34.9901059999929
      },
      {
        "lng": -58.1841729999971,
        "lat": -34.9921119999929
      },
      {
        "lng": -58.17979999999711,
        "lat": -34.9881849999929
      },
      {
        "lng": -58.1848799999971,
        "lat": -34.9861589999929
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 660000,
      "marketValueRegularizedUsd": 960000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05508000000000000000000000000000000243200H",
        "Nomenclatura: 05508000000000000000000000000000000243200E"
      ],
      "totalAreaSqM": 563034,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 30000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR RE",
        "description": "AREA RURAL/  RURAL EXTENSIVO",
        "allowedUses": "PRODUCTIVO AGROPECUARIO EXTENSIVO",
        "complementaryUses": "HABITACIONAL UNIFAMILIAR, COMERCIO, SERVICIOS, PRODUCTIVO INDUSTRIAL, EXTRACTIVO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-16-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD08000096",
    "name": "BARRIO ARANA Y 140",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0728653470967,
        "lat": -35.0901788994387
      },
      {
        "lng": -58.07307098373419,
        "lat": -35.0903628583664
      },
      {
        "lng": -58.0811833548122,
        "lat": -35.0976333531431
      },
      {
        "lng": -58.0882696855956,
        "lat": -35.1039476418057
      },
      {
        "lng": -58.0884872223339,
        "lat": -35.1041414959463
      },
      {
        "lng": -58.0889631242861,
        "lat": -35.1045654441741
      },
      {
        "lng": -58.0814515449828,
        "lat": -35.1095827650397
      },
      {
        "lng": -58.0753142805647,
        "lat": -35.1041032458978
      },
      {
        "lng": -58.0690525301822,
        "lat": -35.0984827476844
      },
      {
        "lng": -58.07228733060839,
        "lat": -35.0901082468201
      },
      {
        "lng": -58.0726577809633,
        "lat": -35.0899931071009
      },
      {
        "lng": -58.0728653470967,
        "lat": -35.0901788994387
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 670000,
      "marketValueRegularizedUsd": 970000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055100E00000000000000001700000000000001000",
        "Nomenclatura: 055100E00000000000000002200000000000001000",
        "Nomenclatura: 055100E00000000000000002100000000000001000",
        "Nomenclatura: 055100E00000000000000002100000000000002000",
        "Nomenclatura: 055100E00000000000000002100000000000004000",
        "Nomenclatura: 055100E00000000000000002100000000000003000",
        "Nomenclatura: 055100E00000000000000002100000000000006000",
        "Nomenclatura: 055100E00000000000000002100000000000005000",
        "Nomenclatura: 055100E00000000000000002100000000000007000",
        "Nomenclatura: 055100E00000000000000002100000000000008000",
        "Nomenclatura: 055100E00000000000000002100000000000012000",
        "Nomenclatura: 055100E00000000000000002100000000000011000",
        "Nomenclatura: 055100E00000000000000002100000000000014000",
        "Nomenclatura: 055100E00000000000000002100000000000013000",
        "Nomenclatura: 055100E00000000000000002100000000000015000",
        "Nomenclatura: 055100E00000000000000002100000000000016000",
        "Nomenclatura: 055100E00000000000000002100000000000020000",
        "Nomenclatura: 055100E0000000000000000300000000000000200B",
        "Nomenclatura: 055100E00000000000000003000000000000001000",
        "Nomenclatura: 055100E0000000000000000300000000000000200A",
        "Nomenclatura: 055100E0000000000000000310000000000000100A",
        "Nomenclatura: 055100E00000000000000002100000000000019000",
        "Nomenclatura: 055100E00000000000000002100000000000018000",
        "Nomenclatura: 055100E00000000000000002100000000000017000",
        "Nomenclatura: 055100E0000000000000000260000000000000100B",
        "Nomenclatura: 055100E0000000000000000260000000000000100A",
        "Nomenclatura: 055100E00000000000000002300000000000008000",
        "Nomenclatura: 055100E00000000000000002300000000000007000",
        "Nomenclatura: 055100E00000000000000002600000000000002000",
        "Nomenclatura: 055100E00000000000000002600000000000003000",
        "Nomenclatura: 055100E00000000000000002600000000000004000",
        "Nomenclatura: 055100E00000000000000002600000000000005000",
        "Nomenclatura: 055100E00000000000000001200000000000000000",
        "Nomenclatura: 055100E00000000000000002300000000000006000",
        "Nomenclatura: 055100E00000000000000002300000000000005000",
        "Nomenclatura: 055100E00000000000000002300000000000004000",
        "Nomenclatura: 055100E00000000000000002100000000000010000",
        "Nomenclatura: 055100E00000000000000002100000000000009000",
        "Nomenclatura: 055100E00000000000000002300000000000003000",
        "Nomenclatura: 055100E00000000000000002300000000000002000",
        "Nomenclatura: 055100E00000000000000001400000000000000000",
        "Nomenclatura: 055100E00000000000000002300000000000001000",
        "Nomenclatura: 055100E00000000000000002500000000000001000",
        "Nomenclatura: 055100E00000000000000002500000000000003000",
        "Nomenclatura: 055100E00000000000000002500000000000002000",
        "Nomenclatura: 055100E00000000000000002800000000000001000",
        "Nomenclatura: 055100E00000000000000002700000000000003000",
        "Nomenclatura: 055100E00000000000000002800000000000003000",
        "Nomenclatura: 055100E00000000000000002800000000000002000",
        "Nomenclatura: 055100E00000000000000002800000000000004000",
        "Nomenclatura: 055100E00000000000000002800000000000005000",
        "Nomenclatura: 055100E00000000000000002800000000000006000",
        "Nomenclatura: 055100E00000000000000002700000000000004000",
        "Nomenclatura: 055100E00000000000000002900000000000001000",
        "Nomenclatura: 055100E00000000000000002900000000000002000",
        "Nomenclatura: 055100E00000000000000002900000000000004000",
        "Nomenclatura: 055100E00000000000000002900000000000003000",
        "Nomenclatura: 055100E00000000000000002800000000000010000",
        "Nomenclatura: 055100E00000000000000002800000000000009000",
        "Nomenclatura: 055100E00000000000000002800000000000008000",
        "Nomenclatura: 055100E00000000000000002800000000000007000",
        "Nomenclatura: 055100E00000000000000002800000000000011000",
        "Nomenclatura: 055100E00000000000000002900000000000008000",
        "Nomenclatura: 055100E00000000000000002900000000000010000",
        "Nomenclatura: 055100E00000000000000002900000000000009000",
        "Nomenclatura: 055100E00000000000000002900000000000011000",
        "Nomenclatura: 055100E00000000000000002400000000000001000",
        "Nomenclatura: 055100E00000000000000002400000000000002000",
        "Nomenclatura: 055100E00000000000000002400000000000003000",
        "Nomenclatura: 055100E00000000000000002500000000000004000",
        "Nomenclatura: 055100E00000000000000002500000000000005000",
        "Nomenclatura: 055100E00000000000000002500000000000006000",
        "Nomenclatura: 055100E00000000000000002800000000000014000",
        "Nomenclatura: 055100E00000000000000002800000000000013000",
        "Nomenclatura: 055100E00000000000000002800000000000012000",
        "Nomenclatura: 055100E00000000000000002800000000000015000",
        "Nomenclatura: 055100E00000000000000002900000000000013000",
        "Nomenclatura: 055100E00000000000000002900000000000014000",
        "Nomenclatura: 055100E00000000000000002900000000000015000",
        "Nomenclatura: 055100E00000000000000002900000000000016000",
        "Nomenclatura: 055100E00000000000000003200000000000015000",
        "Nomenclatura: 055100E00000000000000003200000000000014000",
        "Nomenclatura: 055100E00000000000000003200000000000016000",
        "Nomenclatura: 055100E00000000000000003200000000000017000",
        "Nomenclatura: 055100E00000000000000003500000000000019000",
        "Nomenclatura: 055100E00000000000000003500000000000018000",
        "Nomenclatura: 055100E00000000000000003200000000000018000",
        "Nomenclatura: 055100E00000000000000000300000000000011000",
        "Nomenclatura: 055100E00000000000000000300000000000010000",
        "Nomenclatura: 055100E00000000000000000300000000000009000",
        "Nomenclatura: 055100E00000000000000000300000000000008000",
        "Nomenclatura: 055100E00000000000000001800000000000010000",
        "Nomenclatura: 055100E00000000000000001800000000000008000",
        "Nomenclatura: 055100E00000000000000001800000000000007000",
        "Nomenclatura: 055100E00000000000000001900000000000008000",
        "Nomenclatura: 055100E00000000000000001800000000000009000",
        "Nomenclatura: 055100E00000000000000001900000000000009000",
        "Nomenclatura: 055100E00000000000000001900000000000010000",
        "Nomenclatura: 055100E00000000000000001900000000000011000",
        "Nomenclatura: 055100E00000000000000001800000000000011000",
        "Nomenclatura: 055100E00000000000000001800000000000012000",
        "Nomenclatura: 055100E00000000000000001800000000000013000",
        "Nomenclatura: 055100E00000000000000001800000000000014000",
        "Nomenclatura: 055100E00000000000000001900000000000014000",
        "Nomenclatura: 055100E00000000000000001900000000000013000",
        "Nomenclatura: 055100E00000000000000001900000000000012000",
        "Nomenclatura: 055100E00000000000000002000000000000015000",
        "Nomenclatura: 055100E00000000000000002000000000000016000",
        "Nomenclatura: 055100E00000000000000002000000000000018000",
        "Nomenclatura: 055100E00000000000000002000000000000017000",
        "Nomenclatura: 055100E00000000000000002000000000000019000",
        "Nomenclatura: 055100E00000000000000002000000000000020000",
        "Nomenclatura: 055100E00000000000000001900000000000015000",
        "Nomenclatura: 055100E00000000000000001800000000000015000",
        "Nomenclatura: 055100E00000000000000001800000000000016000",
        "Nomenclatura: 055100E00000000000000002400000000000023000",
        "Nomenclatura: 055100E00000000000000002400000000000022000",
        "Nomenclatura: 055100E00000000000000002400000000000020000",
        "Nomenclatura: 055100E00000000000000002400000000000019000",
        "Nomenclatura: 055100E00000000000000002400000000000018000",
        "Nomenclatura: 055100E00000000000000002500000000000015000",
        "Nomenclatura: 055100E00000000000000002500000000000016000",
        "Nomenclatura: 055100E00000000000000002500000000000017000",
        "Nomenclatura: 055100E00000000000000002500000000000018000",
        "Nomenclatura: 055100E00000000000000002400000000000021000",
        "Nomenclatura: 055100E00000000000000002500000000000020000",
        "Nomenclatura: 055100E00000000000000002500000000000019000",
        "Nomenclatura: 055100E0000000000000000280000000000001900A",
        "Nomenclatura: 055100E00000000000000002800000000000021000",
        "Nomenclatura: 055100E00000000000000002800000000000022000",
        "Nomenclatura: 055100E00000000000000002900000000000020000",
        "Nomenclatura: 055100E00000000000000002900000000000019000",
        "Nomenclatura: 055100E00000000000000002900000000000018000",
        "Nomenclatura: 055100E00000000000000002900000000000017000",
        "Nomenclatura: 055100E00000000000000002800000000000017000",
        "Nomenclatura: 055100E00000000000000002800000000000016000",
        "Nomenclatura: 055100E00000000000000002800000000000018000",
        "Nomenclatura: 055100E00000000000000002500000000000014000",
        "Nomenclatura: 055100E00000000000000002500000000000013000",
        "Nomenclatura: 055100E00000000000000002500000000000012000",
        "Nomenclatura: 055100E00000000000000002500000000000010000",
        "Nomenclatura: 055100E00000000000000002500000000000009000",
        "Nomenclatura: 055100E00000000000000002500000000000008000",
        "Nomenclatura: 055100E00000000000000002500000000000007000",
        "Nomenclatura: 055100E00000000000000002400000000000011000",
        "Nomenclatura: 055100E00000000000000002400000000000012000",
        "Nomenclatura: 055100E00000000000000002400000000000013000",
        "Nomenclatura: 055100E00000000000000002400000000000014000",
        "Nomenclatura: 055100E00000000000000002500000000000011000",
        "Nomenclatura: 055100E0000000000000000240000000000001500A",
        "Nomenclatura: 055100E00000000000000002400000000000017000",
        "Nomenclatura: 055100E00000000000000002000000000000014000",
        "Nomenclatura: 055100E00000000000000002000000000000013000",
        "Nomenclatura: 055100E0000000000000000200000000000000900B",
        "Nomenclatura: 055100E00000000000000002000000000000010000",
        "Nomenclatura: 055100E00000000000000002000000000000011000",
        "Nomenclatura: 055100E00000000000000002000000000000012000",
        "Nomenclatura: 055100E00000000000000001900000000000007000",
        "Nomenclatura: 055100E00000000000000001900000000000006000",
        "Nomenclatura: 055100E0000000000000000200000000000000900A",
        "Nomenclatura: 055100E00000000000000002000000000000008000",
        "Nomenclatura: 055100E00000000000000002000000000000007000",
        "Nomenclatura: 055100E00000000000000002400000000000010000",
        "Nomenclatura: 055100E00000000000000002400000000000008000",
        "Nomenclatura: 055100E00000000000000002400000000000009000",
        "Nomenclatura: 055100E00000000000000002400000000000006000",
        "Nomenclatura: 055100E00000000000000002400000000000007000",
        "Nomenclatura: 055100E00000000000000002400000000000005000",
        "Nomenclatura: 055100E00000000000000002400000000000004000",
        "Nomenclatura: 055100E00000000000000002000000000000005000",
        "Nomenclatura: 055100E00000000000000002000000000000004000",
        "Nomenclatura: 055100E00000000000000002000000000000002000",
        "Nomenclatura: 055100E00000000000000002000000000000003000",
        "Nomenclatura: 055100E0000000000000000200000000000000100A",
        "Nomenclatura: 055100E0000000000000000200000000000000100B",
        "Nomenclatura: 055100E00000000000000002200000000000010000",
        "Nomenclatura: 055100E0000000000000000220000000000000700A",
        "Nomenclatura: 055100E00000000000000002200000000000009000",
        "Nomenclatura: 055100E00000000000000001700000000000011000",
        "Nomenclatura: 055100E00000000000000001500000000000000000",
        "Nomenclatura: 055100E00000000000000001800000000000002000",
        "Nomenclatura: 055100E00000000000000001800000000000003000",
        "Nomenclatura: 055100E00000000000000001800000000000001000",
        "Nomenclatura: 055100E00000000000000001900000000000001000",
        "Nomenclatura: 055100E00000000000000001900000000000002000",
        "Nomenclatura: 055100E00000000000000002000000000000006000",
        "Nomenclatura: 055100E00000000000000001900000000000005000",
        "Nomenclatura: 055100E00000000000000001900000000000004000",
        "Nomenclatura: 055100E00000000000000001900000000000003000",
        "Nomenclatura: 055100E00000000000000001800000000000004000",
        "Nomenclatura: 055100E00000000000000001800000000000006000",
        "Nomenclatura: 055100E00000000000000001800000000000005000",
        "Nomenclatura: 055100E00000000000000000300000000000003000",
        "Nomenclatura: 055100E00000000000000000300000000000004000",
        "Nomenclatura: 055100E00000000000000000300000000000005000",
        "Nomenclatura: 055100E00000000000000000300000000000006000",
        "Nomenclatura: 055100E00000000000000000300000000000007000",
        "Nomenclatura: 055100E00000000000000000300000000000016000",
        "Nomenclatura: 055100E00000000000000000300000000000015000",
        "Nomenclatura: 055100E00000000000000000300000000000014000",
        "Nomenclatura: 055100E00000000000000000300000000000018000",
        "Nomenclatura: 055100E00000000000000000300000000000017000",
        "Nomenclatura: 055100E00000000000000000300000000000019000",
        "Nomenclatura: 055100E00000000000000000300000000000023000",
        "Nomenclatura: 055100E00000000000000000300000000000022000",
        "Nomenclatura: 055100E00000000000000000300000000000021000",
        "Nomenclatura: 055100E00000000000000000300000000000020000",
        "Nomenclatura: 055100E00000000000000000300000000000002000",
        "Nomenclatura: 055100E00000000000000000300000000000001000",
        "Nomenclatura: 055100E00000000000000000400000000000028000",
        "Nomenclatura: 055100E00000000000000000400000000000027000",
        "Nomenclatura: 055100E00000000000000000400000000000026000",
        "Nomenclatura: 055100E00000000000000000400000000000031000",
        "Nomenclatura: 055100E00000000000000000200000000000000000",
        "Nomenclatura: 055100E00000000000000000300000000000024000",
        "Nomenclatura: 055100E00000000000000000300000000000025000",
        "Nomenclatura: 055100E00000000000000000400000000000063000",
        "Nomenclatura: 055100E00000000000000000400000000000029000",
        "Nomenclatura: 055100E00000000000000000400000000000030000",
        "Nomenclatura: 055100E00000000000000000400000000000061000",
        "Nomenclatura: 055100E00000000000000000400000000000062000",
        "Nomenclatura: 055100E00000000000000000400000000000060000",
        "Nomenclatura: 055100E00000000000000000400000000000059000",
        "Nomenclatura: 055100E00000000000000000400000000000058000",
        "Nomenclatura: 055100E00000000000000000400000000000057000",
        "Nomenclatura: 055100E00000000000000000400000000000036000",
        "Nomenclatura: 055100E00000000000000000400000000000035000",
        "Nomenclatura: 055100E00000000000000000400000000000034000",
        "Nomenclatura: 055100E00000000000000000400000000000033000",
        "Nomenclatura: 055100E00000000000000000400000000000032000",
        "Nomenclatura: 055100E00000000000000000400000000000019000",
        "Nomenclatura: 055100E00000000000000000400000000000018000",
        "Nomenclatura: 055100E00000000000000000400000000000020000",
        "Nomenclatura: 055100E00000000000000000400000000000007000",
        "Nomenclatura: 055100E00000000000000000400000000000006000",
        "Nomenclatura: 055100E00000000000000000400000000000021000",
        "Nomenclatura: 055100E00000000000000000400000000000022000",
        "Nomenclatura: 055100E00000000000000000400000000000023000",
        "Nomenclatura: 055100E00000000000000000400000000000024000",
        "Nomenclatura: 055100E00000000000000000400000000000025000",
        "Nomenclatura: 055100E00000000000000000400000000000003000",
        "Nomenclatura: 055100E00000000000000000400000000000001000",
        "Nomenclatura: 055100E00000000000000000400000000000002000",
        "Nomenclatura: 055100E00000000000000001600000000000014000",
        "Nomenclatura: 055100E00000000000000001600000000000013000",
        "Nomenclatura: 055100E00000000000000001600000000000012000",
        "Nomenclatura: 055100E00000000000000000400000000000004000",
        "Nomenclatura: 055100E00000000000000000400000000000005000",
        "Nomenclatura: 055100E00000000000000001600000000000008000",
        "Nomenclatura: 055100E00000000000000001600000000000009000",
        "Nomenclatura: 055100E00000000000000001600000000000010000",
        "Nomenclatura: 055100E00000000000000001600000000000011000",
        "Nomenclatura: 055100E00000000000000001700000000000010000",
        "Nomenclatura: 055100E00000000000000001700000000000009000",
        "Nomenclatura: 055100E00000000000000002200000000000006000",
        "Nomenclatura: 055100E00000000000000001700000000000008000",
        "Nomenclatura: 055100E00000000000000001700000000000007000",
        "Nomenclatura: 055100E00000000000000001700000000000006000",
        "Nomenclatura: 055100E00000000000000001700000000000005000",
        "Nomenclatura: 055100E00000000000000001600000000000004000",
        "Nomenclatura: 055100E00000000000000001600000000000005000",
        "Nomenclatura: 055100E00000000000000001600000000000006000",
        "Nomenclatura: 055100E00000000000000001600000000000007000",
        "Nomenclatura: 055100E00000000000000000400000000000008000",
        "Nomenclatura: 055100E00000000000000000400000000000010000",
        "Nomenclatura: 055100E00000000000000000400000000000009000",
        "Nomenclatura: 055100E00000000000000000400000000000011000",
        "Nomenclatura: 055100E00000000000000000400000000000012000",
        "Nomenclatura: 055100E00000000000000001600000000000003000",
        "Nomenclatura: 055100E00000000000000000400000000000013000",
        "Nomenclatura: 055100E00000000000000000400000000000014000",
        "Nomenclatura: 055100E00000000000000000400000000000015000",
        "Nomenclatura: 055100E00000000000000000400000000000016000",
        "Nomenclatura: 055100E00000000000000000400000000000017000",
        "Nomenclatura: 055100E00000000000000000400000000000040000",
        "Nomenclatura: 055100E00000000000000000400000000000042000",
        "Nomenclatura: 055100E00000000000000000400000000000041000",
        "Nomenclatura: 055100E00000000000000000400000000000044000",
        "Nomenclatura: 055100E00000000000000000400000000000043000",
        "Nomenclatura: 055100E00000000000000000400000000000045000",
        "Nomenclatura: 055100E00000000000000000400000000000049000",
        "Nomenclatura: 055100E00000000000000000400000000000048000",
        "Nomenclatura: 055100E00000000000000000400000000000047000",
        "Nomenclatura: 055100E00000000000000000400000000000046000",
        "Nomenclatura: 055100E00000000000000000400000000000081000",
        "Nomenclatura: 055100E00000000000000000400000000000082000",
        "Nomenclatura: 055100E00000000000000000400000000000083000",
        "Nomenclatura: 055100E00000000000000000400000000000084000",
        "Nomenclatura: 055100E00000000000000000600000000000017000",
        "Nomenclatura: 055100E00000000000000000400000000000086000",
        "Nomenclatura: 055100E00000000000000000400000000000085000",
        "Nomenclatura: 055100E00000000000000000400000000000087000",
        "Nomenclatura: 055100E00000000000000000400000000000089000",
        "Nomenclatura: 055100E00000000000000000400000000000090000",
        "Nomenclatura: 055100E00000000000000000400000000000091000",
        "Nomenclatura: 055100E00000000000000000400000000000088000",
        "Nomenclatura: 055100E00000000000000000500000000000012000",
        "Nomenclatura: 055100E00000000000000000500000000000011000",
        "Nomenclatura: 055100E00000000000000000600000000000018000",
        "Nomenclatura: 055100E00000000000000000600000000000009000",
        "Nomenclatura: 055100E00000000000000000600000000000010000",
        "Nomenclatura: 055100E00000000000000000600000000000011000",
        "Nomenclatura: 055100E00000000000000000600000000000012000",
        "Nomenclatura: 055100E00000000000000000600000000000021000",
        "Nomenclatura: 055100E00000000000000000600000000000020000",
        "Nomenclatura: 055100E00000000000000000600000000000019000",
        "Nomenclatura: 055100E00000000000000000600000000000013000",
        "Nomenclatura: 055100E00000000000000000400000000000119000",
        "Nomenclatura: 055100E00000000000000000400000000000118000",
        "Nomenclatura: 055100E00000000000000000400000000000120000",
        "Nomenclatura: 055100E00000000000000000400000000000121000",
        "Nomenclatura: 055100E00000000000000000400000000000122000",
        "Nomenclatura: 055100E00000000000000000400000000000095000",
        "Nomenclatura: 055100E00000000000000000700000000000000000",
        "Nomenclatura: 055100E00000000000000000400000000000102000",
        "Nomenclatura: 055100E00000000000000000400000000000098000",
        "Nomenclatura: 055100E00000000000000000400000000000096000",
        "Nomenclatura: 055100E00000000000000000400000000000097000",
        "Nomenclatura: 055100E00000000000000000500000000000022000",
        "Nomenclatura: 055100E00000000000000000400000000000099000",
        "Nomenclatura: 055100E00000000000000000400000000000100000",
        "Nomenclatura: 055100E00000000000000000400000000000101000",
        "Nomenclatura: 055100E00000000000000000500000000000023000",
        "Nomenclatura: 055100E00000000000000000500000000000024000",
        "Nomenclatura: 055100E00000000000000000500000000000026000",
        "Nomenclatura: 055100E00000000000000000500000000000025000",
        "Nomenclatura: 055100E00000000000000000400000000000110000",
        "Nomenclatura: 055100E00000000000000000400000000000111000",
        "Nomenclatura: 055100E00000000000000000400000000000112000",
        "Nomenclatura: 055100E00000000000000000400000000000109000",
        "Nomenclatura: 055100E00000000000000000400000000000108000",
        "Nomenclatura: 055100E00000000000000000400000000000107000",
        "Nomenclatura: 055100E00000000000000000400000000000123000",
        "Nomenclatura: 055100E00000000000000000400000000000124000",
        "Nomenclatura: 055100E00000000000000000400000000000126000",
        "Nomenclatura: 055100E00000000000000000400000000000125000",
        "Nomenclatura: 055100E00000000000000000400000000000106000",
        "Nomenclatura: 055100E00000000000000000400000000000104000",
        "Nomenclatura: 055100E00000000000000000400000000000105000",
        "Nomenclatura: 055100E00000000000000000400000000000103000",
        "Nomenclatura: 055100E00000000000000000300000000000013000",
        "Nomenclatura: 055100E00000000000000000300000000000012000",
        "Nomenclatura: 055100E00000000000000000300000000000030000",
        "Nomenclatura: 055100E00000000000000000300000000000029000",
        "Nomenclatura: 055100E00000000000000000300000000000028000",
        "Nomenclatura: 055100E00000000000000000300000000000027000",
        "Nomenclatura: 055100E00000000000000000300000000000026000",
        "Nomenclatura: 055100E00000000000000000300000000000051000",
        "Nomenclatura: 055100E00000000000000000300000000000052000",
        "Nomenclatura: 055100E00000000000000000400000000000064000",
        "Nomenclatura: 055100E00000000000000000400000000000066000",
        "Nomenclatura: 055100E00000000000000000400000000000067000",
        "Nomenclatura: 055100E00000000000000000400000000000068000",
        "Nomenclatura: 055100E00000000000000000400000000000092000",
        "Nomenclatura: 055100E00000000000000000400000000000093000",
        "Nomenclatura: 055100E00000000000000000400000000000094000",
        "Nomenclatura: 055100E00000000000000000500000000000015000",
        "Nomenclatura: 055100E00000000000000000500000000000014000",
        "Nomenclatura: 055100E00000000000000000500000000000013000",
        "Nomenclatura: 055100E00000000000000000400000000000127000",
        "Nomenclatura: 055100E00000000000000000500000000000010000",
        "Nomenclatura: 055100E00000000000000000500000000000009000",
        "Nomenclatura: 055100E00000000000000000500000000000008000",
        "Nomenclatura: 055100E00000000000000000600000000000022000",
        "Nomenclatura: 055100E00000000000000000600000000000023000",
        "Nomenclatura: 055100E00000000000000000600000000000024000",
        "Nomenclatura: 055100E00000000000000000600000000000031000",
        "Nomenclatura: 055100E00000000000000000600000000000008000",
        "Nomenclatura: 055100E00000000000000000600000000000007000",
        "Nomenclatura: 055100E00000000000000000600000000000006000",
        "Nomenclatura: 055100E00000000000000000600000000000005000",
        "Nomenclatura: 055100E00000000000000000400000000000069000",
        "Nomenclatura: 055100E00000000000000000600000000000002000",
        "Nomenclatura: 055100E00000000000000000600000000000003000",
        "Nomenclatura: 055100E00000000000000000600000000000004000",
        "Nomenclatura: 055100E00000000000000000600000000000029000",
        "Nomenclatura: 055100E00000000000000000600000000000030000",
        "Nomenclatura: 055100E00000000000000000300000000000082000",
        "Nomenclatura: 055100E00000000000000000300000000000081000",
        "Nomenclatura: 055100E00000000000000000300000000000083000",
        "Nomenclatura: 055100E00000000000000000300000000000084000",
        "Nomenclatura: 055100E00000000000000000300000000000107000",
        "Nomenclatura: 055100E00000000000000000300000000000109000",
        "Nomenclatura: 055100E00000000000000000300000000000108000",
        "Nomenclatura: 055100E00000000000000000300000000000113000",
        "Nomenclatura: 055100E00000000000000000300000000000110000",
        "Nomenclatura: 055100E00000000000000000300000000000163000",
        "Nomenclatura: 055100E00000000000000000500000000000001000",
        "Nomenclatura: 055100E00000000000000000300000000000111000",
        "Nomenclatura: 055100E00000000000000000300000000000112000",
        "Nomenclatura: 055100E00000000000000000300000000000139000",
        "Nomenclatura: 055100E00000000000000000300000000000138000",
        "Nomenclatura: 055100E00000000000000000300000000000137000",
        "Nomenclatura: 055100E00000000000000000500000000000004000",
        "Nomenclatura: 055100E00000000000000000500000000000003000",
        "Nomenclatura: 055100E00000000000000000500000000000002000",
        "Nomenclatura: 055100E00000000000000000600000000000028000",
        "Nomenclatura: 055100E00000000000000000600000000000027000",
        "Nomenclatura: 055100E00000000000000000600000000000025000",
        "Nomenclatura: 055100E00000000000000000600000000000026000",
        "Nomenclatura: 055100E00000000000000000500000000000005000",
        "Nomenclatura: 055100E00000000000000000500000000000006000",
        "Nomenclatura: 055100E00000000000000000500000000000007000",
        "Nomenclatura: 055100E00000000000000000500000000000016000",
        "Nomenclatura: 055100E00000000000000000500000000000018000",
        "Nomenclatura: 055100E00000000000000000500000000000017000",
        "Nomenclatura: 055100E00000000000000000500000000000020000",
        "Nomenclatura: 055100E00000000000000000500000000000019000",
        "Nomenclatura: 055100E00000000000000000500000000000021000",
        "Nomenclatura: 055100E00000000000000000500000000000033000",
        "Nomenclatura: 055100E00000000000000000500000000000029000",
        "Nomenclatura: 055100E00000000000000000500000000000027000",
        "Nomenclatura: 055100E00000000000000000500000000000028000",
        "Nomenclatura: 055100E00000000000000000400000000000113000",
        "Nomenclatura: 055100E00000000000000000400000000000114000",
        "Nomenclatura: 055100E00000000000000000500000000000030000",
        "Nomenclatura: 055100E00000000000000000500000000000031000",
        "Nomenclatura: 055100E00000000000000000500000000000032000",
        "Nomenclatura: 055100E00000000000000000300000000000157000",
        "Nomenclatura: 055100E00000000000000000300000000000140000",
        "Nomenclatura: 055100E00000000000000000300000000000141000",
        "Nomenclatura: 055100E00000000000000000300000000000155000",
        "Nomenclatura: 055100E00000000000000000300000000000154000",
        "Nomenclatura: 055100E00000000000000000300000000000151000",
        "Nomenclatura: 055100E00000000000000000300000000000152000",
        "Nomenclatura: 055100E00000000000000000300000000000153000",
        "Nomenclatura: 055100E00000000000000000300000000000159000",
        "Nomenclatura: 055100E00000000000000000300000000000160000",
        "Nomenclatura: 055100E00000000000000000300000000000156000",
        "Nomenclatura: 055100E00000000000000000300000000000158000",
        "Nomenclatura: 055100E00000000000000000300000000000162000",
        "Nomenclatura: 055100E00000000000000000400000000000116000",
        "Nomenclatura: 055100E00000000000000000400000000000115000",
        "Nomenclatura: 055100E00000000000000000400000000000117000",
        "Nomenclatura: 055100E00000000000000000300000000000161000",
        "Nomenclatura: 055100E00000000000000000300000000000150000",
        "Nomenclatura: 055100E00000000000000000300000000000149000",
        "Nomenclatura: 055100E00000000000000000300000000000148000",
        "Nomenclatura: 055100E00000000000000000300000000000146000",
        "Nomenclatura: 055100E00000000000000000300000000000145000",
        "Nomenclatura: 055100E00000000000000000300000000000144000",
        "Nomenclatura: 055100E00000000000000000300000000000143000",
        "Nomenclatura: 055100E00000000000000000300000000000142000",
        "Nomenclatura: 055100E00000000000000000300000000000134000",
        "Nomenclatura: 055100E00000000000000000300000000000135000",
        "Nomenclatura: 055100E00000000000000000300000000000136000",
        "Nomenclatura: 055100E00000000000000000300000000000133000",
        "Nomenclatura: 055100E00000000000000000300000000000147000",
        "Nomenclatura: 055100E00000000000000000300000000000132000",
        "Nomenclatura: 055100E00000000000000000300000000000116000",
        "Nomenclatura: 055100E00000000000000000300000000000114000",
        "Nomenclatura: 055100E00000000000000000300000000000115000",
        "Nomenclatura: 055100E00000000000000000300000000000106000",
        "Nomenclatura: 055100E00000000000000000300000000000105000",
        "Nomenclatura: 055100E00000000000000000300000000000104000",
        "Nomenclatura: 055100E00000000000000000300000000000117000",
        "Nomenclatura: 055100E00000000000000000300000000000118000",
        "Nomenclatura: 055100E00000000000000000300000000000119000",
        "Nomenclatura: 055100E00000000000000000300000000000127000",
        "Nomenclatura: 055100E00000000000000000300000000000131000",
        "Nomenclatura: 055100E00000000000000000300000000000130000",
        "Nomenclatura: 055100E00000000000000000300000000000129000",
        "Nomenclatura: 055100E00000000000000000300000000000128000",
        "Nomenclatura: 055100E00000000000000000300000000000126000",
        "Nomenclatura: 055100E00000000000000000300000000000121000",
        "Nomenclatura: 055100E00000000000000000300000000000120000",
        "Nomenclatura: 055100E00000000000000000300000000000122000",
        "Nomenclatura: 055100E00000000000000000300000000000099000",
        "Nomenclatura: 055100E00000000000000000300000000000098000",
        "Nomenclatura: 055100E00000000000000000300000000000123000",
        "Nomenclatura: 055100E00000000000000000300000000000124000",
        "Nomenclatura: 055100E00000000000000000300000000000125000",
        "Nomenclatura: 055100E00000000000000000300000000000096000",
        "Nomenclatura: 055100E00000000000000000300000000000097000",
        "Nomenclatura: 055100E00000000000000000300000000000091000",
        "Nomenclatura: 055100E00000000000000000300000000000092000",
        "Nomenclatura: 055100E00000000000000000300000000000093000",
        "Nomenclatura: 055100E00000000000000000300000000000095000",
        "Nomenclatura: 055100E00000000000000000300000000000094000",
        "Nomenclatura: 055100E00000000000000000300000000000089000",
        "Nomenclatura: 055100E00000000000000000300000000000090000",
        "Nomenclatura: 055100E00000000000000000300000000000100000",
        "Nomenclatura: 055100E00000000000000000300000000000101000",
        "Nomenclatura: 055100E00000000000000000300000000000102000",
        "Nomenclatura: 055100E00000000000000000300000000000103000",
        "Nomenclatura: 055100E00000000000000000300000000000088000",
        "Nomenclatura: 055100E00000000000000000300000000000087000",
        "Nomenclatura: 055100E00000000000000000300000000000086000",
        "Nomenclatura: 055100E00000000000000000300000000000085000",
        "Nomenclatura: 055100E00000000000000000300000000000076000",
        "Nomenclatura: 055100E00000000000000000300000000000077000",
        "Nomenclatura: 055100E00000000000000000300000000000078000",
        "Nomenclatura: 055100E00000000000000000300000000000079000",
        "Nomenclatura: 055100E00000000000000000300000000000080000",
        "Nomenclatura: 055100E00000000000000000600000000000001000",
        "Nomenclatura: 055100E00000000000000000400000000000065000",
        "Nomenclatura: 055100E00000000000000000300000000000053000",
        "Nomenclatura: 055100E00000000000000000300000000000054000",
        "Nomenclatura: 055100E00000000000000000300000000000056000",
        "Nomenclatura: 055100E00000000000000000300000000000057000",
        "Nomenclatura: 055100E00000000000000000300000000000055000",
        "Nomenclatura: 055100E00000000000000000300000000000050000",
        "Nomenclatura: 055100E00000000000000000300000000000049000",
        "Nomenclatura: 055100E00000000000000000300000000000059000",
        "Nomenclatura: 055100E00000000000000000300000000000060000",
        "Nomenclatura: 055100E00000000000000000300000000000058000",
        "Nomenclatura: 055100E00000000000000000300000000000075000",
        "Nomenclatura: 055100E00000000000000000300000000000073000",
        "Nomenclatura: 055100E00000000000000000300000000000074000",
        "Nomenclatura: 055100E00000000000000000300000000000072000",
        "Nomenclatura: 055100E00000000000000000300000000000071000",
        "Nomenclatura: 055100E00000000000000000300000000000070000",
        "Nomenclatura: 055100E00000000000000000300000000000069000",
        "Nomenclatura: 055100E00000000000000000300000000000065000",
        "Nomenclatura: 055100E00000000000000000300000000000064000",
        "Nomenclatura: 055100E00000000000000000300000000000063000",
        "Nomenclatura: 055100E00000000000000000300000000000062000",
        "Nomenclatura: 055100E00000000000000000300000000000061000",
        "Nomenclatura: 055100E00000000000000000300000000000048000",
        "Nomenclatura: 055100E00000000000000000300000000000047000",
        "Nomenclatura: 055100E00000000000000000300000000000046000",
        "Nomenclatura: 055100E00000000000000000300000000000031000",
        "Nomenclatura: 055100E00000000000000000300000000000043000",
        "Nomenclatura: 055100E00000000000000000300000000000044000",
        "Nomenclatura: 055100E00000000000000000300000000000045000",
        "Nomenclatura: 055100E00000000000000000300000000000042000",
        "Nomenclatura: 055100E00000000000000000300000000000041000",
        "Nomenclatura: 055100E00000000000000000300000000000032000",
        "Nomenclatura: 055100E00000000000000000300000000000033000",
        "Nomenclatura: 055100E00000000000000000300000000000034000",
        "Nomenclatura: 055100E00000000000000000300000000000035000",
        "Nomenclatura: 055100E00000000000000000300000000000036000",
        "Nomenclatura: 055100E00000000000000000300000000000037000",
        "Nomenclatura: 055100E00000000000000000300000000000038000",
        "Nomenclatura: 055100E00000000000000000300000000000039000",
        "Nomenclatura: 055100E00000000000000000300000000000040000",
        "Nomenclatura: 055100E00000000000000000300000000000066000",
        "Nomenclatura: 055100E00000000000000000300000000000067000",
        "Nomenclatura: 055100E00000000000000000300000000000068000",
        "Nomenclatura: 055100E00000000000000000400000000000073000",
        "Nomenclatura: 055100E00000000000000000600000000000014000",
        "Nomenclatura: 055100E00000000000000000600000000000015000",
        "Nomenclatura: 055100E00000000000000000600000000000016000",
        "Nomenclatura: 055100E00000000000000000400000000000080000",
        "Nomenclatura: 055100E00000000000000000400000000000078000",
        "Nomenclatura: 055100E00000000000000000400000000000079000",
        "Nomenclatura: 055100E00000000000000000400000000000076000",
        "Nomenclatura: 055100E00000000000000000400000000000077000",
        "Nomenclatura: 055100E00000000000000000400000000000075000",
        "Nomenclatura: 055100E00000000000000000400000000000074000",
        "Nomenclatura: 055100E00000000000000000400000000000053000",
        "Nomenclatura: 055100E0000000000000000040000000000005100B",
        "Nomenclatura: 055100E0000000000000000040000000000005100A",
        "Nomenclatura: 055100E00000000000000000400000000000050000",
        "Nomenclatura: 055100E00000000000000000400000000000052000",
        "Nomenclatura: 055100E00000000000000000400000000000039000",
        "Nomenclatura: 055100E00000000000000000400000000000038000",
        "Nomenclatura: 055100E00000000000000000400000000000037000",
        "Nomenclatura: 055100E00000000000000000400000000000054000",
        "Nomenclatura: 055100E00000000000000000400000000000055000",
        "Nomenclatura: 055100E00000000000000000400000000000056000",
        "Nomenclatura: 055100E00000000000000000400000000000070000",
        "Nomenclatura: 055100E00000000000000000400000000000071000",
        "Nomenclatura: 055100E00000000000000000400000000000072000",
        "Nomenclatura: 055100E00000000000000001600000000000001000",
        "Nomenclatura: 055100E00000000000000001600000000000002000",
        "Nomenclatura: 055100E00000000000000001700000000000002000",
        "Nomenclatura: 055100E00000000000000001700000000000003000",
        "Nomenclatura: 055100E00000000000000001700000000000004000",
        "Nomenclatura: 055100E00000000000000002200000000000002000",
        "Nomenclatura: 055100E00000000000000002200000000000004000",
        "Nomenclatura: 055100E00000000000000002200000000000005000",
        "Nomenclatura: 055100E00000000000000002200000000000003000",
        "Nomenclatura: 055100E00000000000000002900000000000012000",
        "Nomenclatura: 055100E00000000000000003200000000000011000",
        "Nomenclatura: 055100E00000000000000003200000000000010000",
        "Nomenclatura: 055100E00000000000000003200000000000005000",
        "Nomenclatura: 055100E00000000000000003200000000000006000",
        "Nomenclatura: 055100E00000000000000003200000000000007000",
        "Nomenclatura: 055100E00000000000000003200000000000008000",
        "Nomenclatura: 055100E00000000000000003200000000000009000",
        "Nomenclatura: 055100E00000000000000003500000000000007000",
        "Nomenclatura: 055100E00000000000000003500000000000006000",
        "Nomenclatura: 055100E00000000000000003500000000000005000",
        "Nomenclatura: 055100E00000000000000003500000000000004000",
        "Nomenclatura: 055100E00000000000000003200000000000004000",
        "Nomenclatura: 055100E00000000000000003200000000000002000",
        "Nomenclatura: 055100E00000000000000003200000000000001000",
        "Nomenclatura: 055100E00000000000000003200000000000003000",
        "Nomenclatura: 055100E00000000000000002900000000000007000",
        "Nomenclatura: 055100E00000000000000001100000000000000000",
        "Nomenclatura: 055100E00000000000000002900000000000006000",
        "Nomenclatura: 055100E00000000000000002900000000000005000",
        "Nomenclatura: 055100E00000000000000003100000000000016000",
        "Nomenclatura: 055100E00000000000000003100000000000015000",
        "Nomenclatura: 055100E0000000000000000310000000000001300A",
        "Nomenclatura: 055100E00000000000000003400000000000010000",
        "Nomenclatura: 055100E00000000000000003400000000000011000",
        "Nomenclatura: 055100E00000000000000003400000000000012000",
        "Nomenclatura: 055100E00000000000000003400000000000014000",
        "Nomenclatura: 055100E00000000000000003400000000000013000",
        "Nomenclatura: 055100E0000000000000000340000000000001500B",
        "Nomenclatura: 055100E0000000000000000340000000000001500A",
        "Nomenclatura: 055100E00000000000000003500000000000001000",
        "Nomenclatura: 055100E00000000000000003500000000000002000",
        "Nomenclatura: 055100E00000000000000003500000000000003000",
        "Nomenclatura: 055100E00000000000000004000000000000006000",
        "Nomenclatura: 055100E00000000000000004000000000000005000",
        "Nomenclatura: 055100E00000000000000004000000000000004000",
        "Nomenclatura: 055100E00000000000000003900000000000019000",
        "Nomenclatura: 055100E00000000000000004000000000000003000",
        "Nomenclatura: 055100E00000000000000004000000000000002000",
        "Nomenclatura: 055100E00000000000000004000000000000001000",
        "Nomenclatura: 055100E00000000000000003900000000000018000",
        "Nomenclatura: 055100E00000000000000003900000000000017000",
        "Nomenclatura: 055100E00000000000000003900000000000016000",
        "Nomenclatura: 055100E00000000000000003900000000000015000",
        "Nomenclatura: 055100E00000000000000003900000000000014000",
        "Nomenclatura: 055100E00000000000000003900000000000013000",
        "Nomenclatura: 055100E00000000000000003800000000000014000",
        "Nomenclatura: 055100E00000000000000003800000000000013000",
        "Nomenclatura: 055100E00000000000000003800000000000012000",
        "Nomenclatura: 055100E00000000000000003800000000000011000",
        "Nomenclatura: 055100E00000000000000003800000000000010000",
        "Nomenclatura: 055100E00000000000000003800000000000009000",
        "Nomenclatura: 055100E00000000000000003800000000000008000",
        "Nomenclatura: 055100E0000000000000000370000000000000100B",
        "Nomenclatura: 055100E00000000000000003400000000000006000",
        "Nomenclatura: 055100E00000000000000003400000000000005000",
        "Nomenclatura: 055100E00000000000000003400000000000004000",
        "Nomenclatura: 055100E00000000000000003400000000000007000",
        "Nomenclatura: 055100E00000000000000003400000000000008000",
        "Nomenclatura: 055100E00000000000000003400000000000009000",
        "Nomenclatura: 055100E00000000000000003100000000000010000",
        "Nomenclatura: 055100E0000000000000000310000000000001100A",
        "Nomenclatura: 055100E00000000000000003100000000000009000",
        "Nomenclatura: 055100E00000000000000003100000000000008000",
        "Nomenclatura: 055100E00000000000000003100000000000007000",
        "Nomenclatura: 055100E00000000000000003100000000000006000",
        "Nomenclatura: 055100E00000000000000003100000000000005000",
        "Nomenclatura: 055100E00000000000000001300000000000000000",
        "Nomenclatura: 055100E00000000000000002700000000000002000",
        "Nomenclatura: 055100E00000000000000002700000000000001000",
        "Nomenclatura: 055100E00000000000000002600000000000006000",
        "Nomenclatura: 055100E00000000000000003100000000000002000",
        "Nomenclatura: 055100E0000000000000000310000000000000100B",
        "Nomenclatura: 055100E00000000000000003100000000000003000",
        "Nomenclatura: 055100E00000000000000003100000000000004000",
        "Nomenclatura: 055100E0000000000000000340000000000000100A",
        "Nomenclatura: 055100E0000000000000000340000000000000100B",
        "Nomenclatura: 055100E00000000000000003400000000000002000",
        "Nomenclatura: 055100E00000000000000003400000000000003000",
        "Nomenclatura: 055100E0000000000000000330000000000000300A",
        "Nomenclatura: 055100E0000000000000000330000000000000300B",
        "Nomenclatura: 055100E00000000000000003300000000000001000",
        "Nomenclatura: 055100E00000000000000003300000000000002000",
        "Nomenclatura: 055100E00000000000000003600000000000001000",
        "Nomenclatura: 055100E00000000000000003600000000000005000",
        "Nomenclatura: 055100E00000000000000003600000000000004000",
        "Nomenclatura: 055100E00000000000000003600000000000003000",
        "Nomenclatura: 055100E00000000000000003600000000000002000",
        "Nomenclatura: 055100E00000000000000003700000000000004000",
        "Nomenclatura: 055100E00000000000000003700000000000003000",
        "Nomenclatura: 055100E00000000000000003800000000000006000",
        "Nomenclatura: 055100E00000000000000003800000000000005000",
        "Nomenclatura: 055100E00000000000000003800000000000004000",
        "Nomenclatura: 055100E00000000000000003800000000000002000",
        "Nomenclatura: 055100E00000000000000003800000000000003000",
        "Nomenclatura: 055100E00000000000000003800000000000001000",
        "Nomenclatura: 055100E00000000000000003900000000000004000",
        "Nomenclatura: 055100E00000000000000003900000000000003000",
        "Nomenclatura: 055100E00000000000000003900000000000002000",
        "Nomenclatura: 055100E00000000000000003900000000000001000",
        "Nomenclatura: 055100E00000000000000003900000000000005000",
        "Nomenclatura: 055100E0000000000000000390000000000000600A",
        "Nomenclatura: 055100E00000000000000003900000000000008000",
        "Nomenclatura: 055100E00000000000000003800000000000007000",
        "Nomenclatura: 055100E00000000000000003900000000000009000",
        "Nomenclatura: 055100E00000000000000003900000000000010000",
        "Nomenclatura: 055100E00000000000000003900000000000011000",
        "Nomenclatura: 055100E00000000000000003900000000000012000",
        "Nomenclatura: 055100E00000000000000003900000000000020000",
        "Nomenclatura: 055100E00000000000000003900000000000021000",
        "Nomenclatura: 055100E00000000000000003900000000000022000",
        "Nomenclatura: 055100E00000000000000004000000000000007000",
        "Nomenclatura: 055100E00000000000000003900000000000024000",
        "Nomenclatura: 055100E00000000000000003900000000000023000",
        "Nomenclatura: 055100E00000000000000003900000000000028000",
        "Nomenclatura: 055100E00000000000000003900000000000029000",
        "Nomenclatura: 055100E00000000000000004000000000000013000",
        "Nomenclatura: 055100E00000000000000003900000000000027000",
        "Nomenclatura: 055100E00000000000000003900000000000025000",
        "Nomenclatura: 055100E00000000000000003900000000000026000",
        "Nomenclatura: 055100E00000000000000004000000000000010000",
        "Nomenclatura: 055100E00000000000000004000000000000009000",
        "Nomenclatura: 055100E00000000000000004000000000000008000",
        "Nomenclatura: 055100E00000000000000003500000000000008000",
        "Nomenclatura: 055100E00000000000000003500000000000009000",
        "Nomenclatura: 055100E00000000000000003500000000000010000",
        "Nomenclatura: 055100E00000000000000003500000000000011000",
        "Nomenclatura: 055100E00000000000000003500000000000012000",
        "Nomenclatura: 055100E0000000000000000400000000000001100A",
        "Nomenclatura: 055100E00000000000000003500000000000016000",
        "Nomenclatura: 055100E00000000000000003500000000000015000",
        "Nomenclatura: 055100E00000000000000003500000000000014000",
        "Nomenclatura: 055100E00000000000000003500000000000013000",
        "Nomenclatura: 055100E00000000000000003200000000000012000",
        "Nomenclatura: 055100E00000000000000003200000000000013000",
        "Nomenclatura: 055100E00000000000000003500000000000017000",
        "Nomenclatura: 055100E00000000000000004000000000000014000",
        "Nomenclatura: 055100E00000000000000004000000000000015000",
        "Nomenclatura: 055100E00000000000000003900000000000030000"
      ],
      "totalAreaSqM": 1502602,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 0,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR CC",
        "description": "AREA RURAL/ CLUB DE CAMPO",
        "allowedUses": "VIVIENDA UNIFAMILIAR",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-17-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD090000CE",
    "name": "BUONA TERRA",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0566719999958,
        "lat": -34.9200409999928
      },
      {
        "lng": -58.0558869999958,
        "lat": -34.9180129999928
      },
      {
        "lng": -58.0572819999959,
        "lat": -34.9177029999928
      },
      {
        "lng": -58.05732999999579,
        "lat": -34.9178069999928
      },
      {
        "lng": -58.0575539999959,
        "lat": -34.9179149999928
      },
      {
        "lng": -58.0575739999959,
        "lat": -34.9181639999928
      },
      {
        "lng": -58.0575619999958,
        "lat": -34.9186419999928
      },
      {
        "lng": -58.0572469999958,
        "lat": -34.9191979999928
      },
      {
        "lng": -58.0580679999958,
        "lat": -34.9207279999928
      },
      {
        "lng": -58.05834099999589,
        "lat": -34.9209399999928
      },
      {
        "lng": -58.0588279999959,
        "lat": -34.9216749999928
      },
      {
        "lng": -58.0590789999959,
        "lat": -34.9216999999928
      },
      {
        "lng": -58.0595619999959,
        "lat": -34.9215619999928
      },
      {
        "lng": -58.0597639999959,
        "lat": -34.9215649999928
      },
      {
        "lng": -58.0602359999959,
        "lat": -34.9214959999928
      },
      {
        "lng": -58.0660349999959,
        "lat": -34.9255649999928
      },
      {
        "lng": -58.0615379999959,
        "lat": -34.9266229999928
      },
      {
        "lng": -58.0607219999959,
        "lat": -34.9268139999928
      },
      {
        "lng": -58.0550689999958,
        "lat": -34.9281169999928
      },
      {
        "lng": -58.0482739999957,
        "lat": -34.9220869999928
      },
      {
        "lng": -58.0566719999958,
        "lat": -34.9200409999928
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 680000,
      "marketValueRegularizedUsd": 980000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506YY00000000013000000000000000000001000",
        "Nomenclatura: 05506YY00000000013000000000000000000001000",
        "Nomenclatura: 05506YY00000000012000000000000000000001000",
        "Nomenclatura: 05506YY00000000012000000000000000000001000",
        "Nomenclatura: 05506YY00000000020000000000000000000001000",
        "Nomenclatura: 05506YY00000000020000000000000000000001000",
        "Nomenclatura: 05506YY00000000013000000000000000000002000",
        "Nomenclatura: 05506YY00000000013000000000000000000002000",
        "Nomenclatura: 05506YY00000000021000000000000000000001000",
        "Nomenclatura: 05506YY00000000021000000000000000000001000"
      ],
      "totalAreaSqM": 1729662,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "dentro",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-18-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD090000F3",
    "name": "LA FLORIDA I",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.00903775567931,
        "lat": -34.9018449958137
      },
      {
        "lng": -58.00928109186599,
        "lat": -34.9020648225352
      },
      {
        "lng": -58.0103823093288,
        "lat": -34.9030582390424
      },
      {
        "lng": -58.01113788101479,
        "lat": -34.90383538100938
      },
      {
        "lng": -58.01028092019818,
        "lat": -34.90444502120762
      },
      {
        "lng": -58.00798529603311,
        "lat": -34.9022624878197
      },
      {
        "lng": -58.0079911023277,
        "lat": -34.9022259038348
      },
      {
        "lng": -58.008780129819,
        "lat": -34.9016462029536
      },
      {
        "lng": -58.0088204981416,
        "lat": -34.9016460534481
      },
      {
        "lng": -58.00903775567931,
        "lat": -34.9018449958137
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 690000,
      "marketValueRegularizedUsd": 990000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A0029000000000000000000000000000700B"
      ],
      "totalAreaSqM": 42375,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.6,
        "fot": 1,
        "density": 300,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU RM",
        "description": "AREA URBANA / RESIDENCIAL MIXTA",
        "allowedUses": "HABITACIONAL, SERVICIOS",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-19-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD09000100",
    "name": "NUEVOS AIRES",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.10078799999631,
        "lat": -35.0757029999929
      },
      {
        "lng": -58.0923589999962,
        "lat": -35.0680869999929
      },
      {
        "lng": -58.0968369999963,
        "lat": -35.0646179999929
      },
      {
        "lng": -58.1053009999964,
        "lat": -35.0722459999929
      },
      {
        "lng": -58.10078799999631,
        "lat": -35.0757029999929
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 700000,
      "marketValueRegularizedUsd": 1000000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05510000000000000000000000000000000320600D",
        "Nomenclatura: 05510000000000000000000000000000000320600E",
        "Nomenclatura: 05510000000000000000000000000000000320600C"
      ],
      "totalAreaSqM": 1273033,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 0,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR CC",
        "description": "AREA RURAL/ CLUB DE CAMPO",
        "allowedUses": "VIVIENDA UNIFAMILIAR",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-20-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0900010C",
    "name": "SIN NOMBRE 3",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.1693388599594,
        "lat": -34.9083418292072
      },
      {
        "lng": -58.1682078035772,
        "lat": -34.9092407085032
      },
      {
        "lng": -58.167076722557,
        "lat": -34.9101395763729
      },
      {
        "lng": -58.1645373515268,
        "lat": -34.9079424182625
      },
      {
        "lng": -58.165722102677,
        "lat": -34.9070601556476
      },
      {
        "lng": -58.16688148452641,
        "lat": -34.906151632691
      },
      {
        "lng": -58.1684378452281,
        "lat": -34.9075480488589
      },
      {
        "lng": -58.1693388599594,
        "lat": -34.9083418292072
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 710000,
      "marketValueRegularizedUsd": 1010000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05508000000000000000000000000000000219500A"
      ],
      "totalAreaSqM": 96345,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 100000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR RI",
        "description": "AREA RURAL/ RURAL INTENSIVO",
        "allowedUses": "PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-21-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD09000122",
    "name": "LA ELVIRA BARRIO CERRADO",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0166883372645,
        "lat": -34.8975615819905
      },
      {
        "lng": -58.0157871378566,
        "lat": -34.8967333457648
      },
      {
        "lng": -58.0156770465117,
        "lat": -34.8966354788664
      },
      {
        "lng": -58.0164197628412,
        "lat": -34.8960666854061
      },
      {
        "lng": -58.0166812187712,
        "lat": -34.8962973374849
      },
      {
        "lng": -58.01779589658239,
        "lat": -34.8973321829289
      },
      {
        "lng": -58.0181678077525,
        "lat": -34.8976779159974
      },
      {
        "lng": -58.0177339309846,
        "lat": -34.8979943730908
      },
      {
        "lng": -58.0175259558038,
        "lat": -34.8981459881925
      },
      {
        "lng": -58.0174083834731,
        "lat": -34.8982317576226
      },
      {
        "lng": -58.0166883372645,
        "lat": -34.8975615819905
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 720000,
      "marketValueRegularizedUsd": 1020000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A0027000000000000000000000000000400B",
        "Nomenclatura: 055030A00270000000000000000000000000005000"
      ],
      "totalAreaSqM": 33609,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-22-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD09000138",
    "name": "LA VICTORIA",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.1284309999966,
        "lat": -34.9799949999929
      },
      {
        "lng": -58.1283849999966,
        "lat": -34.9799929999929
      },
      {
        "lng": -58.1268849999966,
        "lat": -34.9786949999929
      },
      {
        "lng": -58.1284899999966,
        "lat": -34.9774059999929
      },
      {
        "lng": -58.13000099999659,
        "lat": -34.9787179999929
      },
      {
        "lng": -58.12999899999661,
        "lat": -34.9787569999929
      },
      {
        "lng": -58.1284309999966,
        "lat": -34.9799949999929
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 730000,
      "marketValueRegularizedUsd": 1030000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055080K0000000017400000000000000000000300A",
        "Nomenclatura: 055080K00000000174000000000000000000001000"
      ],
      "totalAreaSqM": 52087,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 30000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR RE",
        "description": "AREA RURAL/  RURAL EXTENSIVO",
        "allowedUses": "PRODUCTIVO AGROPECUARIO EXTENSIVO",
        "complementaryUses": "HABITACIONAL UNIFAMILIAR, COMERCIO, SERVICIOS, PRODUCTIVO INDUSTRIAL, EXTRACTIVO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-23-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0900013A",
    "name": "LA FLORIDA I (2)",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.01930600383869,
        "lat": -34.8957171450842
      },
      {
        "lng": -58.0195145583144,
        "lat": -34.8955592276775
      },
      {
        "lng": -58.0196860166181,
        "lat": -34.8954292737238
      },
      {
        "lng": -58.0198526819974,
        "lat": -34.8953030264978
      },
      {
        "lng": -58.0200629999954,
        "lat": -34.8951419999928
      },
      {
        "lng": -58.0202149999954,
        "lat": -34.8950259999928
      },
      {
        "lng": -58.0203639999954,
        "lat": -34.8949129999928
      },
      {
        "lng": -58.0209098029435,
        "lat": -34.8944981636379
      },
      {
        "lng": -58.0209831278756,
        "lat": -34.8945648759928
      },
      {
        "lng": -58.0210562428954,
        "lat": -34.8946312244014
      },
      {
        "lng": -58.0211298040284,
        "lat": -34.8946972195478
      },
      {
        "lng": -58.0212034724555,
        "lat": -34.8947633065195
      },
      {
        "lng": -58.0212828257021,
        "lat": -34.8948340822027
      },
      {
        "lng": -58.0217130931286,
        "lat": -34.8952186958998
      },
      {
        "lng": -58.0217224772576,
        "lat": -34.8952287620131
      },
      {
        "lng": -58.0200955831848,
        "lat": -34.8964345805096
      },
      {
        "lng": -58.01930600383869,
        "lat": -34.8957171450842
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 740000,
      "marketValueRegularizedUsd": 1040000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A0026000000000000000000000000000700A",
        "Nomenclatura: 055030A0026000000000000000000000000000700D"
      ],
      "totalAreaSqM": 34787,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": true
    },
    "offers": [
      {
        "id": "o-24-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0900013D",
    "name": "Solar del Parque",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0955786999963,
        "lat": -34.8470447999928
      },
      {
        "lng": -58.0958526999963,
        "lat": -34.8472717999928
      },
      {
        "lng": -58.09582369999629,
        "lat": -34.8478607999928
      },
      {
        "lng": -58.0951856999963,
        "lat": -34.8483747999928
      },
      {
        "lng": -58.09457669999631,
        "lat": -34.8478437999928
      },
      {
        "lng": -58.0955786999963,
        "lat": -34.8470447999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 750000,
      "marketValueRegularizedUsd": 1050000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000017000U",
        "Nomenclatura: 0550600000000000000000000000000000001700DD"
      ],
      "totalAreaSqM": 19557,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-25-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0900015B",
    "name": "San Joaquín (55)",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0453441272017,
        "lat": -34.9065014256349
      },
      {
        "lng": -58.0450312425695,
        "lat": -34.9055975196234
      },
      {
        "lng": -58.04712857642631,
        "lat": -34.9051078238792
      },
      {
        "lng": -58.04725042315781,
        "lat": -34.9050855396446
      },
      {
        "lng": -58.04847626490361,
        "lat": -34.904795938752
      },
      {
        "lng": -58.0487002214573,
        "lat": -34.9047486171547
      },
      {
        "lng": -58.0500579479824,
        "lat": -34.9044327298668
      },
      {
        "lng": -58.0502797412833,
        "lat": -34.9043842891415
      },
      {
        "lng": -58.0516361307543,
        "lat": -34.9040643070445
      },
      {
        "lng": -58.0516767163826,
        "lat": -34.9040828019655
      },
      {
        "lng": -58.05195021554,
        "lat": -34.9048693531763
      },
      {
        "lng": -58.0520155673202,
        "lat": -34.9050481208609
      },
      {
        "lng": -58.0522437894291,
        "lat": -34.9057047110371
      },
      {
        "lng": -58.0522213392154,
        "lat": -34.9057381467313
      },
      {
        "lng": -58.0508649238357,
        "lat": -34.9060581344456
      },
      {
        "lng": -58.050638286307,
        "lat": -34.9061169525371
      },
      {
        "lng": -58.0492865822689,
        "lat": -34.906431500559
      },
      {
        "lng": -58.04906178554941,
        "lat": -34.9064817836747
      },
      {
        "lng": -58.04784185953761,
        "lat": -34.9067700431289
      },
      {
        "lng": -58.0477654956903,
        "lat": -34.9068949862225
      },
      {
        "lng": -58.0456500463105,
        "lat": -34.9073948548179
      },
      {
        "lng": -58.0453441272017,
        "lat": -34.9065014256349
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 760000,
      "marketValueRegularizedUsd": 1060000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000104600A",
        "Nomenclatura: 055060000000000000000000000000000001047000",
        "Nomenclatura: 055060T000000000000000000000002000S0001000",
        "Nomenclatura: 055060T000000000000000000000002000K0001000",
        "Nomenclatura: 055060T000000000000000000000002000K0002000",
        "Nomenclatura: 055060T000000000000000000000002000M0001000",
        "Nomenclatura: 055060T000000000000000000000002000N0001000",
        "Nomenclatura: 055060T000000000000000000000002000R0001000",
        "Nomenclatura: 055060T000000000000000000000002000E0001000"
      ],
      "totalAreaSqM": 111177,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-26-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD09000168",
    "name": "San Facundo",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0374519999956,
        "lat": -34.8924779999928
      },
      {
        "lng": -58.0386609999956,
        "lat": -34.8921939999928
      },
      {
        "lng": -58.03906099999559,
        "lat": -34.8920999999928
      },
      {
        "lng": -58.0396289999956,
        "lat": -34.8919669999928
      },
      {
        "lng": -58.0401019999956,
        "lat": -34.8918559999928
      },
      {
        "lng": -58.0403929999956,
        "lat": -34.8926969999928
      },
      {
        "lng": -58.0404379999957,
        "lat": -34.8928269999928
      },
      {
        "lng": -58.0412279999957,
        "lat": -34.8951109999928
      },
      {
        "lng": -58.0416479999957,
        "lat": -34.8963249999928
      },
      {
        "lng": -58.0423729999957,
        "lat": -34.8984239999928
      },
      {
        "lng": -58.0421829999957,
        "lat": -34.8984689999928
      },
      {
        "lng": -58.0420679999957,
        "lat": -34.8984959999928
      },
      {
        "lng": -58.03972299999559,
        "lat": -34.8990459999928
      },
      {
        "lng": -58.0374519999956,
        "lat": -34.8924779999928
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 770000,
      "marketValueRegularizedUsd": 1070000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060Z00000000000000000000000820000001000",
        "Nomenclatura: 055060Z0000000000000000000000081000000800A",
        "Nomenclatura: 055060Z00000000000000000000000810000001000",
        "Nomenclatura: 055060Z00000000000000000000000810000007000",
        "Nomenclatura: 055060Z00000000000000000000000810000006000",
        "Nomenclatura: 055060Z00000000000000000000000810000005000",
        "Nomenclatura: 055060Z00000000000000000000000800000017000",
        "Nomenclatura: 055060Z00000000000000000000000800000016000",
        "Nomenclatura: 055060Z00000000000000000000000800000018000",
        "Nomenclatura: 055060Z00000000000000000000000800000019000",
        "Nomenclatura: 055060Z00000000000000000000000810000002000",
        "Nomenclatura: 055060Z00000000000000000000000810000003000",
        "Nomenclatura: 055060Z00000000000000000000000810000004000",
        "Nomenclatura: 055060Z00000000000000000000000800000020000",
        "Nomenclatura: 055060Z00000000000000000000000800000021000",
        "Nomenclatura: 055060Z00000000000000000000000800000023000",
        "Nomenclatura: 055060Z00000000000000000000000800000022000",
        "Nomenclatura: 055060Z00000000000000000000000800000025000",
        "Nomenclatura: 055060Z00000000000000000000000800000024000",
        "Nomenclatura: 055060Z00000000000000000000000800000002000",
        "Nomenclatura: 055060Z00000000000000000000000800000001000",
        "Nomenclatura: 055060Z00000000000000000000000780000018000",
        "Nomenclatura: 055060Z00000000000000000000000770000001000",
        "Nomenclatura: 055060Z00000000000000000000000770000004000",
        "Nomenclatura: 055060Z00000000000000000000000770000005000",
        "Nomenclatura: 055060Z00000000000000000000000770000011000",
        "Nomenclatura: 055060Z00000000000000000000000770000012000",
        "Nomenclatura: 055060Z00000000000000000000000770000013000",
        "Nomenclatura: 055060Z00000000000000000000000760000007000",
        "Nomenclatura: 055060Z00000000000000000000000760000008000",
        "Nomenclatura: 055060Z00000000000000000000000760000006000",
        "Nomenclatura: 055060Z00000000000000000000000760000005000",
        "Nomenclatura: 055060Z00000000000000000000000760000004000",
        "Nomenclatura: 055060Z00000000000000000000000760000003000",
        "Nomenclatura: 055060Z00000000000000000000000760000011000",
        "Nomenclatura: 055060Z00000000000000000000000760000012000",
        "Nomenclatura: 055060Z00000000000000000000000760000001000",
        "Nomenclatura: 055060Z00000000000000000000000760000010000",
        "Nomenclatura: 055060Z00000000000000000000000780000001000",
        "Nomenclatura: 055060Z00000000000000000000000780000002000",
        "Nomenclatura: 055060Z00000000000000000000000760000009000",
        "Nomenclatura: 055060Z00000000000000000000000780000006000",
        "Nomenclatura: 055060Z00000000000000000000000780000023000",
        "Nomenclatura: 055060Z00000000000000000000000780000021000",
        "Nomenclatura: 055060Z00000000000000000000000780000022000",
        "Nomenclatura: 055060Z00000000000000000000000780000020000",
        "Nomenclatura: 055060Z00000000000000000000000780000019000",
        "Nomenclatura: 055060Z00000000000000000000000780000003000",
        "Nomenclatura: 055060Z00000000000000000000000780000008000",
        "Nomenclatura: 055060Z00000000000000000000000780000007000",
        "Nomenclatura: 055060Z0000000000000000000000078000000500B",
        "Nomenclatura: 055060Z0000000000000000000000078000000500A",
        "Nomenclatura: 055060Z00000000000000000000000780000004000",
        "Nomenclatura: 055060Z00000000000000000000000770000010000",
        "Nomenclatura: 055060Z00000000000000000000000770000009000",
        "Nomenclatura: 055060Z00000000000000000000000770000008000",
        "Nomenclatura: 055060Z00000000000000000000000770000006000",
        "Nomenclatura: 055060Z00000000000000000000000770000007000",
        "Nomenclatura: 055060Z00000000000000000000000790000001000",
        "Nomenclatura: 055060Z00000000000000000000000790000002000",
        "Nomenclatura: 055060Z00000000000000000000000770000003000",
        "Nomenclatura: 055060Z00000000000000000000000770000002000",
        "Nomenclatura: 055060Z00000000000000000000000790000003000",
        "Nomenclatura: 055060Z00000000000000000000000790000004000",
        "Nomenclatura: 055060Z00000000000000000000000790000005000",
        "Nomenclatura: 055060Z00000000000000000000000790000006000",
        "Nomenclatura: 055060Z00000000000000000000000790000007000",
        "Nomenclatura: 055060Z00000000000000000000000790000008000",
        "Nomenclatura: 055060Z00000000000000000000000780000012000",
        "Nomenclatura: 055060Z00000000000000000000000780000013000",
        "Nomenclatura: 055060Z00000000000000000000000780000009000",
        "Nomenclatura: 055060Z0000000000000000000000078000001000A",
        "Nomenclatura: 055060Z00000000000000000000000780000014000",
        "Nomenclatura: 055060Z00000000000000000000000780000017000",
        "Nomenclatura: 055060Z00000000000000000000000780000016000",
        "Nomenclatura: 055060Z00000000000000000000000780000015000",
        "Nomenclatura: 055060Z00000000000000000000000800000004000",
        "Nomenclatura: 055060Z00000000000000000000000800000003000",
        "Nomenclatura: 055060Z00000000000000000000000800000005000",
        "Nomenclatura: 055060Z0000000000000000000000080000000700A",
        "Nomenclatura: 055060Z00000000000000000000000800000009000",
        "Nomenclatura: 055060Z00000000000000000000000800000011000",
        "Nomenclatura: 055060Z00000000000000000000000800000010000",
        "Nomenclatura: 055060Z00000000000000000400000000000000000",
        "Nomenclatura: 055060Z00000000000000000000000800000006000",
        "Nomenclatura: 055060Z00000000000000000000000800000014000",
        "Nomenclatura: 055060Z00000000000000000000000800000013000",
        "Nomenclatura: 055060Z00000000000000000000000800000012000",
        "Nomenclatura: 055060Z00000000000000000000000790000014000",
        "Nomenclatura: 055060Z00000000000000000000000790000012000",
        "Nomenclatura: 055060Z00000000000000000000000790000013000",
        "Nomenclatura: 055060Z00000000000000000000000790000010000",
        "Nomenclatura: 055060Z00000000000000000000000790000009000",
        "Nomenclatura: 055060Z00000000000000000000000790000011000",
        "Nomenclatura: 055060Z00000000000000000000000790000016000",
        "Nomenclatura: 055060Z00000000000000000000000790000015000",
        "Nomenclatura: 055060Z00000000000000000000000820000002000",
        "Nomenclatura: 055060Z00000000000000000000000800000015000",
        "Nomenclatura: 055060Z00000000000000000000000820000006000",
        "Nomenclatura: 055060Z00000000000000000000000820000005000",
        "Nomenclatura: 055060Z00000000000000000000000820000004000",
        "Nomenclatura: 055060Z00000000000000000000000820000003000",
        "Nomenclatura: 055060Z00000000000000000000000820000009000",
        "Nomenclatura: 055060Z0000000000000000000000082000000700A",
        "Nomenclatura: 055060Z00000000000000000000000790000017000",
        "Nomenclatura: 055060Z00000000000000000000000820000011000",
        "Nomenclatura: 055060Z00000000000000000000000820000010000",
        "Nomenclatura: 055060Z00000000000000000000000760000002000"
      ],
      "totalAreaSqM": 191009,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "dentro",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-27-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0A000180",
    "name": "La Elisa",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.1145759999965,
        "lat": -34.8700399999928
      },
      {
        "lng": -58.1160469999965,
        "lat": -34.8712999999928
      },
      {
        "lng": -58.1144899999965,
        "lat": -34.8725479999928
      },
      {
        "lng": -58.11301599999651,
        "lat": -34.8712749999928
      },
      {
        "lng": -58.1145759999965,
        "lat": -34.8700399999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 780000,
      "marketValueRegularizedUsd": 1080000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060K002600000000000000000002600B0000000"
      ],
      "totalAreaSqM": 38512,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.2,
        "fot": 0.3,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "6 MTS (2 NIV)",
        "zoning": "AC RU",
        "description": "AREA COMPLEMENTARIA/ RESERVA PARA AMPLIACIÓN URBANA",
        "allowedUses": "PRODUCTIVO - AGROPECUARIO",
        "complementaryUses": "HABITACIONAL, COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-28-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0A0001F6",
    "name": "Los Ceibos (55)",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.07478410022631,
        "lat": -34.8981836115978
      },
      {
        "lng": -58.074538269873,
        "lat": -34.8974824412818
      },
      {
        "lng": -58.0743743872507,
        "lat": -34.8970149040726
      },
      {
        "lng": -58.0741284540843,
        "lat": -34.8963137312947
      },
      {
        "lng": -58.07396457371279,
        "lat": -34.8958462836884
      },
      {
        "lng": -58.0737173203052,
        "lat": -34.895141033651
      },
      {
        "lng": -58.07345440851531,
        "lat": -34.8943851565593
      },
      {
        "lng": -58.0732139948173,
        "lat": -34.8936871335848
      },
      {
        "lng": -58.07281092180299,
        "lat": -34.8925169038499
      },
      {
        "lng": -58.0725690822904,
        "lat": -34.89181480148
      },
      {
        "lng": -58.072388999996,
        "lat": -34.8913049999928
      },
      {
        "lng": -58.072324999996,
        "lat": -34.8910809999928
      },
      {
        "lng": -58.0785839999961,
        "lat": -34.8896759999928
      },
      {
        "lng": -58.0786699999961,
        "lat": -34.8897179999928
      },
      {
        "lng": -58.0800279999961,
        "lat": -34.8938559999928
      },
      {
        "lng": -58.08000899999611,
        "lat": -34.8938889999928
      },
      {
        "lng": -58.0794799999961,
        "lat": -34.8940059999928
      },
      {
        "lng": -58.0792859999961,
        "lat": -34.8940569999928
      },
      {
        "lng": -58.07769299999611,
        "lat": -34.8944009999928
      },
      {
        "lng": -58.0779686042092,
        "lat": -34.8952477366668
      },
      {
        "lng": -58.0779454081536,
        "lat": -34.895280895231
      },
      {
        "lng": -58.07766590438081,
        "lat": -34.8953432543423
      },
      {
        "lng": -58.0774341760833,
        "lat": -34.8953925800172
      },
      {
        "lng": -58.076797756888,
        "lat": -34.8955346351875
      },
      {
        "lng": -58.0760147624063,
        "lat": -34.8957142002361
      },
      {
        "lng": -58.0762789999961,
        "lat": -34.8965229999928
      },
      {
        "lng": -58.0762549999961,
        "lat": -34.8965569999928
      },
      {
        "lng": -58.0752627899819,
        "lat": -34.8967767279142
      },
      {
        "lng": -58.0756999179777,
        "lat": -34.8981070953913
      },
      {
        "lng": -58.0756683932545,
        "lat": -34.8981595879636
      },
      {
        "lng": -58.0748746492335,
        "lat": -34.8983486179536
      },
      {
        "lng": -58.0748258850633,
        "lat": -34.898324233336
      },
      {
        "lng": -58.07478410022631,
        "lat": -34.8981836115978
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 790000,
      "marketValueRegularizedUsd": 1090000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060I00000000000000003300000000000002000",
        "Nomenclatura: 055060I00000000000000003300000000000001000",
        "Nomenclatura: 055060I00000000000000003300000000000003000",
        "Nomenclatura: 055060I00000000000000003300000000000004000",
        "Nomenclatura: 055060I00000000000000002900000000000002000",
        "Nomenclatura: 055060I00000000000000002900000000000003000",
        "Nomenclatura: 055060I00000000000000002900000000000001000",
        "Nomenclatura: 055060I00000000000000003300000000000005000",
        "Nomenclatura: 055060I00000000000000003300000000000006000",
        "Nomenclatura: 055060I00000000000000003300000000000007000",
        "Nomenclatura: 055060I00000000000000003300000000000008000",
        "Nomenclatura: 055060I00000000000000003300000000000009000",
        "Nomenclatura: 055060I00000000000000002900000000000005000",
        "Nomenclatura: 055060I00000000000000002900000000000004000",
        "Nomenclatura: 055060I00000000000000003000000000000003000",
        "Nomenclatura: 055060I0000000000000000300000000000000100A",
        "Nomenclatura: 055060I00000000000000003300000000000010000",
        "Nomenclatura: 055060I00000000000000003000000000000019000",
        "Nomenclatura: 055060I00000000000000003000000000000018000",
        "Nomenclatura: 055060I00000000000000003000000000000017000",
        "Nomenclatura: 055060I00000000000000003000000000000016000",
        "Nomenclatura: 055060I00000000000000003000000000000006000",
        "Nomenclatura: 055060I00000000000000003000000000000005000",
        "Nomenclatura: 055060I00000000000000003000000000000004000",
        "Nomenclatura: 055060I00000000000000002600000000000008000",
        "Nomenclatura: 055060I00000000000000002600000000000007000",
        "Nomenclatura: 055060I00000000000000002600000000000002000",
        "Nomenclatura: 055060I00000000000000002600000000000001000",
        "Nomenclatura: 055060I00000000000000001800000000000001000",
        "Nomenclatura: 055060I00000000000000001800000000000002000",
        "Nomenclatura: 055060I00000000000000001800000000000004000",
        "Nomenclatura: 055060I00000000000000001800000000000003000",
        "Nomenclatura: 055060I00000000000000001800000000000006000",
        "Nomenclatura: 055060I00000000000000001800000000000005000",
        "Nomenclatura: 055060I00000000000000002400000000000007000",
        "Nomenclatura: 055060I00000000000000002400000000000006000",
        "Nomenclatura: 055060I00000000000000002400000000000005000",
        "Nomenclatura: 055060I00000000000000002400000000000004000",
        "Nomenclatura: 055060I00000000000000002400000000000003000",
        "Nomenclatura: 055060I00000000000000002700000000000002000",
        "Nomenclatura: 055060I00000000000000002700000000000001000",
        "Nomenclatura: 055060I00000000000000002400000000000002000",
        "Nomenclatura: 055060I00000000000000002400000000000001000",
        "Nomenclatura: 055060I00000000000000002300000000000000000",
        "Nomenclatura: 055060I00000000000000002600000000000004000",
        "Nomenclatura: 055060I00000000000000002600000000000003000",
        "Nomenclatura: 055060I00000000000000002600000000000006000",
        "Nomenclatura: 055060I00000000000000002600000000000005000",
        "Nomenclatura: 055060I00000000000000002700000000000011000",
        "Nomenclatura: 055060I00000000000000002700000000000012000",
        "Nomenclatura: 055060I00000000000000002700000000000013000",
        "Nomenclatura: 055060I00000000000000003000000000000011000",
        "Nomenclatura: 055060I00000000000000003000000000000010000",
        "Nomenclatura: 055060I00000000000000002200000000000000000",
        "Nomenclatura: 055060I00000000000000003000000000000009000",
        "Nomenclatura: 055060I00000000000000003000000000000007000",
        "Nomenclatura: 055060I00000000000000003000000000000008000",
        "Nomenclatura: 055060I00000000000000003000000000000015000",
        "Nomenclatura: 055060I00000000000000003000000000000014000",
        "Nomenclatura: 055060I00000000000000003200000000000000000",
        "Nomenclatura: 055060I00000000000000003100000000000007000",
        "Nomenclatura: 055060I00000000000000003100000000000008000",
        "Nomenclatura: 055060I00000000000000003000000000000013000",
        "Nomenclatura: 055060I00000000000000003000000000000012000",
        "Nomenclatura: 055060I00000000000000003100000000000001000",
        "Nomenclatura: 055060I00000000000000003100000000000002000",
        "Nomenclatura: 055060I00000000000000003100000000000004000",
        "Nomenclatura: 055060I00000000000000003100000000000003000",
        "Nomenclatura: 055060I00000000000000002800000000000011000",
        "Nomenclatura: 055060I00000000000000002800000000000012000",
        "Nomenclatura: 055060I00000000000000002800000000000013000",
        "Nomenclatura: 055060I00000000000000002800000000000014000",
        "Nomenclatura: 055060I00000000000000002800000000000015000",
        "Nomenclatura: 055060I00000000000000002800000000000001000",
        "Nomenclatura: 055060I00000000000000002100000000000000000",
        "Nomenclatura: 055060I00000000000000002700000000000007000",
        "Nomenclatura: 055060I00000000000000002700000000000008000",
        "Nomenclatura: 055060I00000000000000002700000000000010000",
        "Nomenclatura: 055060I00000000000000002700000000000009000",
        "Nomenclatura: 055060I00000000000000002700000000000005000",
        "Nomenclatura: 055060I00000000000000002700000000000004000",
        "Nomenclatura: 055060I00000000000000002700000000000003000",
        "Nomenclatura: 055060I00000000000000002700000000000006000",
        "Nomenclatura: 055060I00000000000000002400000000000008000",
        "Nomenclatura: 055060I00000000000000002400000000000009000",
        "Nomenclatura: 055060I00000000000000002000000000000000000",
        "Nomenclatura: 055060I00000000000000002500000000000003000",
        "Nomenclatura: 055060I00000000000000002500000000000002000",
        "Nomenclatura: 055060I00000000000000002500000000000001000",
        "Nomenclatura: 055060I00000000000000002800000000000002000",
        "Nomenclatura: 055060I00000000000000002800000000000004000",
        "Nomenclatura: 055060I00000000000000002800000000000003000",
        "Nomenclatura: 055060I00000000000000002800000000000005000",
        "Nomenclatura: 055060I00000000000000002800000000000006000",
        "Nomenclatura: 055060I00000000000000002500000000000006000",
        "Nomenclatura: 055060I00000000000000002500000000000007000",
        "Nomenclatura: 055060I00000000000000002500000000000008000",
        "Nomenclatura: 055060I00000000000000002500000000000005000",
        "Nomenclatura: 055060I00000000000000002500000000000004000",
        "Nomenclatura: 055060I00000000000000001900000000000000000",
        "Nomenclatura: 055060I00000000000000001800000000000012000",
        "Nomenclatura: 055060I00000000000000001800000000000011000",
        "Nomenclatura: 055060I00000000000000001800000000000010000",
        "Nomenclatura: 055060I00000000000000001800000000000009000",
        "Nomenclatura: 055060I00000000000000001800000000000008000",
        "Nomenclatura: 055060I00000000000000001800000000000007000",
        "Nomenclatura: 055060I00000000000000001800000000000013000",
        "Nomenclatura: 055060I00000000000000001800000000000014000",
        "Nomenclatura: 055060I00000000000000001800000000000015000",
        "Nomenclatura: 055060I00000000000000002500000000000011000",
        "Nomenclatura: 055060I00000000000000002500000000000009000",
        "Nomenclatura: 055060I00000000000000002500000000000010000",
        "Nomenclatura: 055060I00000000000000002800000000000007000",
        "Nomenclatura: 055060I00000000000000002800000000000008000",
        "Nomenclatura: 055060I00000000000000003400000000000012000",
        "Nomenclatura: 055060I00000000000000003400000000000011000",
        "Nomenclatura: 055060I00000000000000003400000000000013000",
        "Nomenclatura: 055060I00000000000000003400000000000014000",
        "Nomenclatura: 055060I0000000000000000340000000000000900A",
        "Nomenclatura: 055060I00000000000000003400000000000008000",
        "Nomenclatura: 055060I00000000000000002800000000000009000",
        "Nomenclatura: 055060I00000000000000002800000000000010000",
        "Nomenclatura: 055060I00000000000000003100000000000005000",
        "Nomenclatura: 055060I00000000000000003400000000000006000",
        "Nomenclatura: 055060I00000000000000003400000000000007000",
        "Nomenclatura: 055060I00000000000000003400000000000004000",
        "Nomenclatura: 055060I00000000000000003400000000000005000",
        "Nomenclatura: 055060I00000000000000003100000000000006000",
        "Nomenclatura: 055060I00000000000000003400000000000003000",
        "Nomenclatura: 055060I00000000000000003400000000000002000",
        "Nomenclatura: 055060I00000000000000003400000000000001000",
        "Nomenclatura: 055060I00000000000000003300000000000014000",
        "Nomenclatura: 055060I00000000000000003300000000000013000",
        "Nomenclatura: 055060I00000000000000003300000000000012000",
        "Nomenclatura: 055060I00000000000000003300000000000011000"
      ],
      "totalAreaSqM": 354573,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.3,
        "fot": 0.6,
        "density": 80,
        "minFront": 20,
        "minArea": 600,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AC REX 2",
        "description": "AREA COMPLEMENTARIA/ RESIDENCIAL EXTRA URBANO 2",
        "allowedUses": "VIVIENDA UNIFAMILIAR",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-29-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0A00020F",
    "name": "Lomas de City Bell",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0582939422574,
        "lat": -34.9155003586382
      },
      {
        "lng": -58.0575317179327,
        "lat": -34.9132567619195
      },
      {
        "lng": -58.0604354167796,
        "lat": -34.9125845259147
      },
      {
        "lng": -58.0605734720146,
        "lat": -34.9125525738437
      },
      {
        "lng": -58.06149068211539,
        "lat": -34.9123403767554
      },
      {
        "lng": -58.06213211433419,
        "lat": -34.9121918157971
      },
      {
        "lng": -58.0661075959731,
        "lat": -34.9112713058769
      },
      {
        "lng": -58.0688850405074,
        "lat": -34.9194335693648
      },
      {
        "lng": -58.060315842813,
        "lat": -34.921417420248
      },
      {
        "lng": -58.05835831186399,
        "lat": -34.9156799184017
      },
      {
        "lng": -58.0582939422574,
        "lat": -34.9155003586382
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 800000,
      "marketValueRegularizedUsd": 1100000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506YY00000000000000004500000000000001000",
        "Nomenclatura: 05506YY00000000000000004000000000000006000",
        "Nomenclatura: 05506YY00000000000000004000000000000007000",
        "Nomenclatura: 05506YY00000000000000004600000000000001000",
        "Nomenclatura: 05506YY00000000000000004600000000000027000",
        "Nomenclatura: 05506YY00000000000000004600000000000026000",
        "Nomenclatura: 05506YY00000000000000004600000000000025000",
        "Nomenclatura: 05506YY00000000000000004600000000000024000",
        "Nomenclatura: 05506YY00000000000000004600000000000003000",
        "Nomenclatura: 05506YY00000000000000004600000000000002000",
        "Nomenclatura: 05506YY00000000000000004100000000000005000",
        "Nomenclatura: 05506YY00000000000000004100000000000006000",
        "Nomenclatura: 05506YY00000000000000004100000000000004000",
        "Nomenclatura: 05506YY00000000000000004200000000000002000",
        "Nomenclatura: 05506YY00000000000000004200000000000003000",
        "Nomenclatura: 05506YY00000000000000004200000000000004000",
        "Nomenclatura: 05506YY00000000000000004300000000000006000",
        "Nomenclatura: 05506YY00000000000000004200000000000006000",
        "Nomenclatura: 05506YY00000000000000004200000000000005000",
        "Nomenclatura: 05506YY00000000000000004100000000000007000",
        "Nomenclatura: 05506YY00000000000000004700000000000001000",
        "Nomenclatura: 05506YY00000000000000004800000000000001000",
        "Nomenclatura: 05506YY00000000000000004800000000000002000",
        "Nomenclatura: 05506YY00000000000000004800000000000003000",
        "Nomenclatura: 05506YY00000000000000004900000000000001000",
        "Nomenclatura: 05506YY00000000000000004900000000000002000",
        "Nomenclatura: 05506YY00000000000000004900000000000003000",
        "Nomenclatura: 05506YY00000000000000004800000000000005000",
        "Nomenclatura: 05506YY00000000000000004800000000000004000",
        "Nomenclatura: 05506YY00000000000000004700000000000006000",
        "Nomenclatura: 05506YY00000000000000004700000000000007000",
        "Nomenclatura: 05506YY00000000000000004700000000000008000",
        "Nomenclatura: 05506YY00000000000000005500000000000004000",
        "Nomenclatura: 05506YY00000000000000004700000000000009000",
        "Nomenclatura: 05506YY00000000000000005400000000000003000",
        "Nomenclatura: 05506YY00000000000000004600000000000013000",
        "Nomenclatura: 05506YY00000000000000004600000000000014000",
        "Nomenclatura: 05506YY00000000000000004600000000000012000",
        "Nomenclatura: 05506YY00000000000000004600000000000008000",
        "Nomenclatura: 05506YY00000000000000004600000000000009000",
        "Nomenclatura: 05506YY00000000000000004600000000000010000",
        "Nomenclatura: 05506YY00000000000000004600000000000011000",
        "Nomenclatura: 05506YY00000000000000004700000000000005000",
        "Nomenclatura: 05506YY00000000000000004700000000000004000",
        "Nomenclatura: 05506YY00000000000000004700000000000003000",
        "Nomenclatura: 05506YY00000000000000004700000000000002000",
        "Nomenclatura: 05506YY00000000000000004600000000000007000",
        "Nomenclatura: 05506YY00000000000000004600000000000006000",
        "Nomenclatura: 05506YY00000000000000004600000000000004000",
        "Nomenclatura: 05506YY00000000000000004600000000000005000",
        "Nomenclatura: 05506YY00000000000000004600000000000023000",
        "Nomenclatura: 05506YY00000000000000004600000000000022000",
        "Nomenclatura: 05506YY00000000000000004600000000000021000",
        "Nomenclatura: 05506YY00000000000000004600000000000020000",
        "Nomenclatura: 05506YY00000000000000004600000000000019000",
        "Nomenclatura: 05506YY00000000000000004600000000000017000",
        "Nomenclatura: 05506YY00000000000000004600000000000018000",
        "Nomenclatura: 05506YY00000000000000004500000000000005000",
        "Nomenclatura: 05506YY00000000000000004500000000000006000",
        "Nomenclatura: 05506YY00000000000000004500000000000007000",
        "Nomenclatura: 05506YY00000000000000004500000000000008000",
        "Nomenclatura: 05506YY00000000000000004500000000000004000",
        "Nomenclatura: 05506YY00000000000000004500000000000003000",
        "Nomenclatura: 05506YY00000000000000004500000000000002000",
        "Nomenclatura: 05506YY00000000000000005300000000000003000",
        "Nomenclatura: 05506YY00000000000000005300000000000004000",
        "Nomenclatura: 05506YY00000000000000005400000000000014000",
        "Nomenclatura: 05506YY00000000000000005300000000000002000",
        "Nomenclatura: 05506YY00000000000000005300000000000001000",
        "Nomenclatura: 05506YY00000000000000004500000000000009000",
        "Nomenclatura: 05506YY00000000000000004600000000000015000",
        "Nomenclatura: 05506YY00000000000000004600000000000016000",
        "Nomenclatura: 05506YY00000000000000005400000000000001000",
        "Nomenclatura: 05506YY00000000000000005400000000000015000",
        "Nomenclatura: 05506YY00000000000000005400000000000004000",
        "Nomenclatura: 05506YY00000000000000005400000000000005000",
        "Nomenclatura: 05506YY00000000000000005400000000000002000",
        "Nomenclatura: 05506YY00000000000000005400000000000006000",
        "Nomenclatura: 05506YY00000000000000005400000000000007000",
        "Nomenclatura: 05506YY00000000000000005400000000000008000",
        "Nomenclatura: 05506YY00000000000000005400000000000010000",
        "Nomenclatura: 05506YY00000000000000005400000000000009000",
        "Nomenclatura: 05506YY00000000000000005400000000000011000",
        "Nomenclatura: 05506YY00000000000000005400000000000012000",
        "Nomenclatura: 05506YY00000000000000005400000000000013000",
        "Nomenclatura: 05506YY00000000000000005300000000000005000",
        "Nomenclatura: 05506YY00000000000000005300000000000006000",
        "Nomenclatura: 05506YY00000000000000005300000000000007000",
        "Nomenclatura: 05506YY00000000000000005300000000000008000",
        "Nomenclatura: 05506YY00000000000000005800000000000002000",
        "Nomenclatura: 05506YY00000000000000005800000000000001000",
        "Nomenclatura: 05506YY00000000000000005800000000000004000",
        "Nomenclatura: 05506YY00000000000000005800000000000003000",
        "Nomenclatura: 05506YY00000000000000005800000000000005000",
        "Nomenclatura: 05506YY00000000000000005800000000000006000",
        "Nomenclatura: 05506YY00000000000000005800000000000007000",
        "Nomenclatura: 05506YY00000000000000005800000000000008000",
        "Nomenclatura: 05506YY00000000000000005900000000000024000",
        "Nomenclatura: 05506YY00000000000000005900000000000023000",
        "Nomenclatura: 05506YY00000000000000005900000000000022000",
        "Nomenclatura: 05506YY00000000000000005900000000000008000",
        "Nomenclatura: 05506YY00000000000000005900000000000007000",
        "Nomenclatura: 05506YY00000000000000005900000000000025000",
        "Nomenclatura: 05506YY00000000000000005900000000000026000",
        "Nomenclatura: 05506YY00000000000000005900000000000027000",
        "Nomenclatura: 05506YY00000000000000005900000000000001000",
        "Nomenclatura: 05506YY00000000000000005900000000000005000",
        "Nomenclatura: 05506YY00000000000000005900000000000004000",
        "Nomenclatura: 05506YY00000000000000005900000000000003000",
        "Nomenclatura: 05506YY00000000000000006000000000000004000",
        "Nomenclatura: 05506YY00000000000000005900000000000006000",
        "Nomenclatura: 05506YY00000000000000006000000000000005000",
        "Nomenclatura: 05506YY00000000000000006000000000000003000",
        "Nomenclatura: 05506YY00000000000000006100000000000003000",
        "Nomenclatura: 05506YY00000000000000006100000000000002000",
        "Nomenclatura: 05506YY00000000000000006200000000000004000",
        "Nomenclatura: 05506YY00000000000000006200000000000003000",
        "Nomenclatura: 05506YY00000000000000006100000000000001000",
        "Nomenclatura: 05506YY00000000000000006000000000000001000",
        "Nomenclatura: 05506YY00000000000000006000000000000002000",
        "Nomenclatura: 05506YY00000000000000005500000000000010000",
        "Nomenclatura: 05506YY00000000000000005500000000000011000",
        "Nomenclatura: 05506YY00000000000000005500000000000012000",
        "Nomenclatura: 05506YY00000000000000005500000000000002000",
        "Nomenclatura: 05506YY00000000000000005500000000000003000",
        "Nomenclatura: 05506YY00000000000000005500000000000005000",
        "Nomenclatura: 05506YY00000000000000005500000000000009000",
        "Nomenclatura: 05506YY00000000000000005500000000000008000",
        "Nomenclatura: 05506YY00000000000000007600000000000000000",
        "Nomenclatura: 05506YY00000000000000007800000000000000000",
        "Nomenclatura: 05506YY00000000000000005500000000000007000",
        "Nomenclatura: 05506YY00000000000000005500000000000006000",
        "Nomenclatura: 05506YY00000000000000006200000000000001000",
        "Nomenclatura: 05506YY00000000000000006200000000000002000",
        "Nomenclatura: 05506YY00000000000000006300000000000002000",
        "Nomenclatura: 05506YY00000000000000006300000000000003000",
        "Nomenclatura: 05506YY00000000000000006300000000000001000",
        "Nomenclatura: 05506YY00000000000000006400000000000001000",
        "Nomenclatura: 05506YY00000000000000006400000000000002000",
        "Nomenclatura: 05506YY00000000000000006400000000000003000",
        "Nomenclatura: 05506YY00000000000000006400000000000006000",
        "Nomenclatura: 05506YY00000000000000006400000000000005000",
        "Nomenclatura: 05506YY00000000000000006400000000000004000",
        "Nomenclatura: 05506YY00000000000000006300000000000008000",
        "Nomenclatura: 05506YY00000000000000006300000000000007000",
        "Nomenclatura: 05506YY00000000000000006300000000000006000",
        "Nomenclatura: 05506YY00000000000000006300000000000005000",
        "Nomenclatura: 05506YY00000000000000006300000000000004000",
        "Nomenclatura: 05506YY00000000000000006200000000000005000",
        "Nomenclatura: 05506YY00000000000000006200000000000006000",
        "Nomenclatura: 05506YY00000000000000006100000000000004000",
        "Nomenclatura: 05506YY00000000000000006100000000000006000",
        "Nomenclatura: 05506YY00000000000000006100000000000005000",
        "Nomenclatura: 05506YY00000000000000006100000000000007000",
        "Nomenclatura: 05506YY00000000000000007000000000000001000",
        "Nomenclatura: 05506YY00000000000000006200000000000008000",
        "Nomenclatura: 05506YY00000000000000006200000000000007000",
        "Nomenclatura: 05506YY00000000000000007200000000000003000",
        "Nomenclatura: 05506YY00000000000000007100000000000003000",
        "Nomenclatura: 05506YY00000000000000007100000000000002000",
        "Nomenclatura: 05506YY00000000000000007100000000000001000",
        "Nomenclatura: 05506YY00000000000000007000000000000002000",
        "Nomenclatura: 05506YY00000000000000007000000000000003000",
        "Nomenclatura: 05506YY00000000000000007100000000000004000",
        "Nomenclatura: 05506YY00000000000000007200000000000002000",
        "Nomenclatura: 05506YY00000000000000007200000000000001000",
        "Nomenclatura: 05506YY00000000000000007300000000000002000",
        "Nomenclatura: 05506YY00000000000000007300000000000001000",
        "Nomenclatura: 05506YY00000000000000006400000000000007000",
        "Nomenclatura: 05506YY00000000000000007400000000000001000",
        "Nomenclatura: 05506YY00000000000000006800000000000005000",
        "Nomenclatura: 05506YY00000000000000006800000000000006000",
        "Nomenclatura: 05506YY00000000000000006800000000000007000",
        "Nomenclatura: 05506YY00000000000000006900000000000007000",
        "Nomenclatura: 05506YY00000000000000007000000000000005000",
        "Nomenclatura: 05506YY00000000000000007000000000000004000",
        "Nomenclatura: 05506YY00000000000000006900000000000003000",
        "Nomenclatura: 05506YY00000000000000006900000000000004000",
        "Nomenclatura: 05506YY00000000000000006900000000000005000",
        "Nomenclatura: 05506YY00000000000000006900000000000006000",
        "Nomenclatura: 05506YY00000000000000005900000000000015000",
        "Nomenclatura: 05506YY00000000000000005900000000000014000",
        "Nomenclatura: 05506YY00000000000000005900000000000013000",
        "Nomenclatura: 05506YY00000000000000005900000000000012000",
        "Nomenclatura: 05506YY00000000000000006900000000000002000",
        "Nomenclatura: 05506YY00000000000000006900000000000001000",
        "Nomenclatura: 05506YY00000000000000006000000000000009000",
        "Nomenclatura: 05506YY00000000000000006000000000000008000",
        "Nomenclatura: 05506YY00000000000000006000000000000007000",
        "Nomenclatura: 05506YY00000000000000006000000000000006000",
        "Nomenclatura: 05506YY00000000000000005900000000000009000",
        "Nomenclatura: 05506YY00000000000000005900000000000010000",
        "Nomenclatura: 05506YY00000000000000005900000000000011000",
        "Nomenclatura: 05506YY00000000000000005900000000000002000",
        "Nomenclatura: 05506YY00000000000000005900000000000020000",
        "Nomenclatura: 05506YY00000000000000005900000000000021000",
        "Nomenclatura: 05506YY00000000000000005900000000000019000",
        "Nomenclatura: 05506YY00000000000000005900000000000016000",
        "Nomenclatura: 05506YY00000000000000005900000000000017000",
        "Nomenclatura: 05506YY00000000000000005900000000000018000",
        "Nomenclatura: 05506YY00000000000000006800000000000004000",
        "Nomenclatura: 05506YY00000000000000006800000000000003000",
        "Nomenclatura: 05506YY00000000000000006800000000000001000",
        "Nomenclatura: 05506YY00000000000000006800000000000002000",
        "Nomenclatura: 05506YY00000000000000005800000000000009000",
        "Nomenclatura: 05506YY00000000000000004000000000000001000",
        "Nomenclatura: 05506YY00000000000000004000000000000002000",
        "Nomenclatura: 05506YY00000000000000004000000000000003000",
        "Nomenclatura: 05506YY00000000000000004100000000000001000",
        "Nomenclatura: 05506YY00000000000000004000000000000004000",
        "Nomenclatura: 05506YY00000000000000004100000000000002000",
        "Nomenclatura: 05506YY00000000000000004200000000000001000",
        "Nomenclatura: 05506YY00000000000000004000000000000005000",
        "Nomenclatura: 05506YY00000000000000004100000000000003000",
        "Nomenclatura: 05506YY00000000000000007100000000000005000",
        "Nomenclatura: 05506YY00000000000000007100000000000007000",
        "Nomenclatura: 05506YY00000000000000007100000000000006000",
        "Nomenclatura: 05506YY00000000000000007200000000000004000",
        "Nomenclatura: 05506YY00000000000000007200000000000005000",
        "Nomenclatura: 05506YY00000000000000007300000000000005000",
        "Nomenclatura: 05506YY00000000000000007300000000000004000",
        "Nomenclatura: 05506YY00000000000000007300000000000003000",
        "Nomenclatura: 05506YY00000000000000007400000000000002000",
        "Nomenclatura: 05506YY00000000000000007400000000000003000",
        "Nomenclatura: 05506YY00000000000000007400000000000004000",
        "Nomenclatura: 05506YY00000000000000007400000000000005000",
        "Nomenclatura: 05506YY00000000000000007300000000000007000",
        "Nomenclatura: 05506YY00000000000000007300000000000006000",
        "Nomenclatura: 05506YY00000000000000007200000000000007000",
        "Nomenclatura: 05506YY00000000000000007200000000000006000",
        "Nomenclatura: 05506YY00000000000000007000000000000007000",
        "Nomenclatura: 05506YY00000000000000007000000000000006000",
        "Nomenclatura: 05506YY00000000000000007700000000000000000",
        "Nomenclatura: 05506YY00000000000000005200000000000004000",
        "Nomenclatura: 05506YY00000000000000005200000000000005000",
        "Nomenclatura: 05506YY00000000000000005200000000000006000",
        "Nomenclatura: 05506YY00000000000000005200000000000007000",
        "Nomenclatura: 05506YY00000000000000005500000000000001000",
        "Nomenclatura: 05506YY00000000000000005000000000000004000",
        "Nomenclatura: 05506YY00000000000000005000000000000002000",
        "Nomenclatura: 05506YY00000000000000005000000000000003000",
        "Nomenclatura: 05506YY00000000000000005000000000000007000",
        "Nomenclatura: 05506YY00000000000000005000000000000008000",
        "Nomenclatura: 05506YY00000000000000005000000000000006000",
        "Nomenclatura: 05506YY00000000000000005000000000000005000",
        "Nomenclatura: 05506YY00000000000000005100000000000007000",
        "Nomenclatura: 05506YY00000000000000005100000000000008000",
        "Nomenclatura: 05506YY00000000000000005100000000000003000",
        "Nomenclatura: 05506YY00000000000000005100000000000004000",
        "Nomenclatura: 05506YY00000000000000005100000000000005000",
        "Nomenclatura: 05506YY00000000000000005100000000000006000",
        "Nomenclatura: 05506YY00000000000000005000000000000013000",
        "Nomenclatura: 05506YY00000000000000005000000000000014000",
        "Nomenclatura: 05506YY00000000000000005000000000000015000",
        "Nomenclatura: 05506YY00000000000000004400000000000004000",
        "Nomenclatura: 05506YY00000000000000004400000000000005000",
        "Nomenclatura: 05506YY00000000000000004400000000000006000",
        "Nomenclatura: 05506YY00000000000000005000000000000012000",
        "Nomenclatura: 05506YY00000000000000005000000000000011000",
        "Nomenclatura: 05506YY00000000000000005000000000000010000",
        "Nomenclatura: 05506YY00000000000000005000000000000009000",
        "Nomenclatura: 05506YY00000000000000004400000000000007000",
        "Nomenclatura: 05506YY00000000000000005000000000000001000",
        "Nomenclatura: 05506YY00000000000000004300000000000005000",
        "Nomenclatura: 05506YY00000000000000004300000000000004000",
        "Nomenclatura: 05506YY00000000000000004300000000000003000",
        "Nomenclatura: 05506YY00000000000000004300000000000002000",
        "Nomenclatura: 05506YY00000000000000004400000000000003000",
        "Nomenclatura: 05506YY00000000000000004400000000000002000",
        "Nomenclatura: 05506YY00000000000000004300000000000001000",
        "Nomenclatura: 05506YY00000000000000004400000000000001000",
        "Nomenclatura: 05506YY00000000000000005200000000000002000",
        "Nomenclatura: 05506YY00000000000000005200000000000001000",
        "Nomenclatura: 05506YY00000000000000005100000000000014000",
        "Nomenclatura: 05506YY00000000000000005100000000000015000",
        "Nomenclatura: 05506YY00000000000000005100000000000016000",
        "Nomenclatura: 05506YY00000000000000005100000000000017000",
        "Nomenclatura: 05506YY00000000000000005200000000000003000",
        "Nomenclatura: 05506YY00000000000000005100000000000009000",
        "Nomenclatura: 05506YY00000000000000005100000000000013000",
        "Nomenclatura: 05506YY00000000000000005100000000000011000",
        "Nomenclatura: 05506YY00000000000000005100000000000010000",
        "Nomenclatura: 05506YY00000000000000005100000000000012000",
        "Nomenclatura: 05506YY00000000000000005100000000000002000",
        "Nomenclatura: 05506YY00000000000000005100000000000001000",
        "Nomenclatura: 05506YY00000000000000007500000000000005000",
        "Nomenclatura: 05506YY00000000000000007500000000000002000",
        "Nomenclatura: 05506YY00000000000000007500000000000003000",
        "Nomenclatura: 05506YY00000000000000007500000000000004000",
        "Nomenclatura: 05506YY00000000000000006600000000000016000",
        "Nomenclatura: 05506YY00000000000000006600000000000015000",
        "Nomenclatura: 05506YY00000000000000007500000000000006000",
        "Nomenclatura: 05506YY00000000000000007500000000000007000",
        "Nomenclatura: 05506YY00000000000000007400000000000007000",
        "Nomenclatura: 05506YY00000000000000007400000000000006000",
        "Nomenclatura: 05506YY00000000000000006600000000000017000",
        "Nomenclatura: 05506YY00000000000000006600000000000020000",
        "Nomenclatura: 05506YY00000000000000006600000000000019000",
        "Nomenclatura: 05506YY00000000000000006600000000000018000",
        "Nomenclatura: 05506YY00000000000000006600000000000014000",
        "Nomenclatura: 05506YY00000000000000006600000000000013000",
        "Nomenclatura: 05506YY00000000000000006600000000000021000",
        "Nomenclatura: 05506YY00000000000000006600000000000022000",
        "Nomenclatura: 05506YY00000000000000006600000000000023000",
        "Nomenclatura: 05506YY00000000000000006500000000000011000",
        "Nomenclatura: 05506YY00000000000000006500000000000010000",
        "Nomenclatura: 05506YY00000000000000006500000000000009000",
        "Nomenclatura: 05506YY00000000000000006500000000000007000",
        "Nomenclatura: 05506YY00000000000000006500000000000008000",
        "Nomenclatura: 05506YY00000000000000006500000000000004000",
        "Nomenclatura: 05506YY00000000000000006500000000000005000",
        "Nomenclatura: 05506YY00000000000000006500000000000006000",
        "Nomenclatura: 05506YY00000000000000006600000000000029000",
        "Nomenclatura: 05506YY00000000000000006600000000000028000",
        "Nomenclatura: 05506YY00000000000000006600000000000027000",
        "Nomenclatura: 05506YY00000000000000006600000000000026000",
        "Nomenclatura: 05506YY00000000000000006600000000000025000",
        "Nomenclatura: 05506YY00000000000000006600000000000024000",
        "Nomenclatura: 05506YY00000000000000006600000000000001000",
        "Nomenclatura: 05506YY00000000000000006600000000000008000",
        "Nomenclatura: 05506YY00000000000000006600000000000007000",
        "Nomenclatura: 05506YY00000000000000006600000000000006000",
        "Nomenclatura: 05506YY00000000000000006600000000000003000",
        "Nomenclatura: 05506YY00000000000000006600000000000004000",
        "Nomenclatura: 05506YY00000000000000006600000000000005000",
        "Nomenclatura: 05506YY00000000000000006700000000000002000",
        "Nomenclatura: 05506YY00000000000000006700000000000003000",
        "Nomenclatura: 05506YY00000000000000006700000000000004000",
        "Nomenclatura: 05506YY00000000000000006700000000000006000",
        "Nomenclatura: 05506YY00000000000000006700000000000005000",
        "Nomenclatura: 05506YY00000000000000006700000000000007000",
        "Nomenclatura: 05506YY00000000000000006700000000000011000",
        "Nomenclatura: 05506YY00000000000000006700000000000010000",
        "Nomenclatura: 05506YY00000000000000006700000000000009000",
        "Nomenclatura: 05506YY00000000000000006700000000000008000",
        "Nomenclatura: 05506YY00000000000000006600000000000009000",
        "Nomenclatura: 05506YY00000000000000006600000000000010000",
        "Nomenclatura: 05506YY00000000000000006600000000000011000",
        "Nomenclatura: 05506YY00000000000000006600000000000012000",
        "Nomenclatura: 05506YY00000000000000007500000000000001000",
        "Nomenclatura: 05506YY00000000000000006700000000000012000",
        "Nomenclatura: 05506YY00000000000000005700000000000007000",
        "Nomenclatura: 05506YY00000000000000006700000000000001000",
        "Nomenclatura: 05506YY00000000000000005700000000000006000",
        "Nomenclatura: 05506YY00000000000000005600000000000001000",
        "Nomenclatura: 05506YY00000000000000005600000000000007000",
        "Nomenclatura: 05506YY00000000000000006600000000000002000",
        "Nomenclatura: 05506YY00000000000000006600000000000031000",
        "Nomenclatura: 05506YY00000000000000006600000000000030000",
        "Nomenclatura: 05506YY00000000000000006500000000000001000",
        "Nomenclatura: 05506YY00000000000000006500000000000002000",
        "Nomenclatura: 05506YY00000000000000006500000000000003000",
        "Nomenclatura: 05506YY00000000000000005700000000000005000",
        "Nomenclatura: 05506YY00000000000000005700000000000004000",
        "Nomenclatura: 05506YY00000000000000005600000000000003000",
        "Nomenclatura: 05506YY00000000000000005700000000000003000",
        "Nomenclatura: 05506YY00000000000000005700000000000002000",
        "Nomenclatura: 05506YY00000000000000005700000000000001000",
        "Nomenclatura: 05506YY00000000000000005600000000000002000",
        "Nomenclatura: 05506YY00000000000000005600000000000004000",
        "Nomenclatura: 05506YY00000000000000005600000000000005000",
        "Nomenclatura: 05506YY00000000000000005600000000000006000"
      ],
      "totalAreaSqM": 759477,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": true,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-30-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0A000220",
    "name": "Las Muñecas",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.10041399999629,
        "lat": -34.8604399999928
      },
      {
        "lng": -58.1000339999963,
        "lat": -34.8601229999928
      },
      {
        "lng": -58.0999569999963,
        "lat": -34.8600589999928
      },
      {
        "lng": -58.0996499999963,
        "lat": -34.8598039999928
      },
      {
        "lng": -58.0996469999963,
        "lat": -34.8598009999928
      },
      {
        "lng": -58.10041699999631,
        "lat": -34.8591779999928
      },
      {
        "lng": -58.1007209999963,
        "lat": -34.8594349999928
      },
      {
        "lng": -58.10149399999639,
        "lat": -34.8588169999928
      },
      {
        "lng": -58.1014979999964,
        "lat": -34.8588209999928
      },
      {
        "lng": -58.1016459999964,
        "lat": -34.8589479999928
      },
      {
        "lng": -58.10164999999629,
        "lat": -34.8589509999928
      },
      {
        "lng": -58.1017979999964,
        "lat": -34.8590779999928
      },
      {
        "lng": -58.1018009999964,
        "lat": -34.8590809999928
      },
      {
        "lng": -58.1019479999964,
        "lat": -34.8592079999928
      },
      {
        "lng": -58.10194999999639,
        "lat": -34.8592099999928
      },
      {
        "lng": -58.10116999999631,
        "lat": -34.8598359999928
      },
      {
        "lng": -58.1004159999963,
        "lat": -34.8604419999928
      },
      {
        "lng": -58.10041399999629,
        "lat": -34.8604399999928
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 810000,
      "marketValueRegularizedUsd": 1110000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060K00020000000000000000000000000005000",
        "Nomenclatura: 055060K0002000000000000000000000000000200C",
        "Nomenclatura: 055060K0002000000000000000000000000000200B"
      ],
      "totalAreaSqM": 35124,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-31-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0A00022C",
    "name": "Prados de La Vega",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.1244899999966,
        "lat": -35.0654749999929
      },
      {
        "lng": -58.1262479999966,
        "lat": -35.0666189999929
      },
      {
        "lng": -58.1286099999966,
        "lat": -35.0681489999929
      },
      {
        "lng": -58.1240659999966,
        "lat": -35.0716149999929
      },
      {
        "lng": -58.1205849999965,
        "lat": -35.0684489999929
      },
      {
        "lng": -58.1244899999966,
        "lat": -35.0654749999929
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 820000,
      "marketValueRegularizedUsd": 1120000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055080000000000000000000000000000002657000",
        "Nomenclatura: 055080000000000000000000000000000002658000",
        "Nomenclatura: 055080000000000000000000000000000002654000",
        "Nomenclatura: 055080000000000000000000000000000002652000",
        "Nomenclatura: 055080000000000000000000000000000002653000",
        "Nomenclatura: 055080000000000000000000000000000002655000"
      ],
      "totalAreaSqM": 1109565,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 30000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR RE",
        "description": "AREA RURAL/  RURAL EXTENSIVO",
        "allowedUses": "PRODUCTIVO AGROPECUARIO EXTENSIVO",
        "complementaryUses": "HABITACIONAL UNIFAMILIAR, COMERCIO, SERVICIOS, PRODUCTIVO INDUSTRIAL, EXTRACTIVO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-32-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0A000232",
    "name": "Las Araucarias (55)",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0359069999956,
        "lat": -34.8657829999928
      },
      {
        "lng": -58.0363509999956,
        "lat": -34.8664679999928
      },
      {
        "lng": -58.0360309999956,
        "lat": -34.8666099999928
      },
      {
        "lng": -58.03605627096551,
        "lat": -34.8666520056649
      },
      {
        "lng": -58.0354899318022,
        "lat": -34.8669068208686
      },
      {
        "lng": -58.035268673776,
        "lat": -34.8665644768494
      },
      {
        "lng": -58.0350852267502,
        "lat": -34.8662874511255
      },
      {
        "lng": -58.0350017986753,
        "lat": -34.8661633565726
      },
      {
        "lng": -58.0347203593129,
        "lat": -34.8657448771136
      },
      {
        "lng": -58.0344453564096,
        "lat": -34.865327131956
      },
      {
        "lng": -58.0361225226558,
        "lat": -34.8645835178715
      },
      {
        "lng": -58.036193543552,
        "lat": -34.8646040414623
      },
      {
        "lng": -58.0367269999956,
        "lat": -34.8654139999928
      },
      {
        "lng": -58.0359069999956,
        "lat": -34.8657829999928
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 830000,
      "marketValueRegularizedUsd": 1130000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055040F00000000000000000000000830000015000",
        "Nomenclatura: 055040F00000000000000000000000830000006000",
        "Nomenclatura: 055040F0000000000000000000000090000000100A",
        "Nomenclatura: 055040F0000000000000000000000083000001000C",
        "Nomenclatura: 055040F00000000000000000000000830000008000",
        "Nomenclatura: 055040F00000000000000000000000830000007000",
        "Nomenclatura: 055040F00000000000000000000000830000005000",
        "Nomenclatura: 055040F0000000000000000000000090000000200A",
        "Nomenclatura: 055040F0000000000000000030000000000000400A",
        "Nomenclatura: 055040F0000000000000000030000000000000100A"
      ],
      "totalAreaSqM": 67559,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-33-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0A00023B",
    "name": "La Torre",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.091705522889,
        "lat": -34.9650175436321
      },
      {
        "lng": -58.09173275803889,
        "lat": -34.9649949907218
      },
      {
        "lng": -58.0935145587192,
        "lat": -34.9635881581217
      },
      {
        "lng": -58.0954112827946,
        "lat": -34.9652347102606
      },
      {
        "lng": -58.09480002772769,
        "lat": -34.965695464144
      },
      {
        "lng": -58.0964576630431,
        "lat": -34.9671316895241
      },
      {
        "lng": -58.0961375850043,
        "lat": -34.967853861717
      },
      {
        "lng": -58.09420299845409,
        "lat": -34.9661750932914
      },
      {
        "lng": -58.0936099999962,
        "lat": -34.9666529999929
      },
      {
        "lng": -58.091705522889,
        "lat": -34.9650175436321
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 840000,
      "marketValueRegularizedUsd": 1140000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055080L0000000000000000330000000000001000A",
        "Nomenclatura: 055080L00000000000000003300000000000013000",
        "Nomenclatura: 055080L00000000000000003300000000000015000"
      ],
      "totalAreaSqM": 110860,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 100000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR RI",
        "description": "AREA RURAL/ RURAL INTENSIVO",
        "allowedUses": "PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-34-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0B00024D",
    "name": "La Lula",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0374748624452,
        "lat": -34.9059513551511
      },
      {
        "lng": -58.038271112766,
        "lat": -34.9057416148733
      },
      {
        "lng": -58.0388135877176,
        "lat": -34.9055951838519
      },
      {
        "lng": -58.0391247370714,
        "lat": -34.9064863696087
      },
      {
        "lng": -58.03948123113081,
        "lat": -34.9075043660993
      },
      {
        "lng": -58.0397196040574,
        "lat": -34.9081901608915
      },
      {
        "lng": -58.0383545999451,
        "lat": -34.9085180695939
      },
      {
        "lng": -58.0383136980346,
        "lat": -34.9084991145294
      },
      {
        "lng": -58.03745404017651,
        "lat": -34.9059850846695
      },
      {
        "lng": -58.0374748624452,
        "lat": -34.9059513551511
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 850000,
      "marketValueRegularizedUsd": 1150000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060Z00000000000000000300000000000000000"
      ],
      "totalAreaSqM": 39370,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 1.2,
        "density": 300,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU CLo3",
        "description": "AREA URBANA/  CENTRAL LOCALIDADES",
        "allowedUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS",
        "complementaryUses": "HABITACIONAL"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-35-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0B00026F",
    "name": "La Candida",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.1640607484244,
        "lat": -34.9439172459209
      },
      {
        "lng": -58.16256251057631,
        "lat": -34.9430682475074
      },
      {
        "lng": -58.16035011197791,
        "lat": -34.9418149373728
      },
      {
        "lng": -58.16194845611911,
        "lat": -34.9406630318686
      },
      {
        "lng": -58.16297758478539,
        "lat": -34.9399212981418
      },
      {
        "lng": -58.1640066950005,
        "lat": -34.9391795550286
      },
      {
        "lng": -58.1648712807083,
        "lat": -34.9385563524049
      },
      {
        "lng": -58.1658518995502,
        "lat": -34.9394105736547
      },
      {
        "lng": -58.1667502948743,
        "lat": -34.9401933400512
      },
      {
        "lng": -58.1676308882293,
        "lat": -34.9409604203082
      },
      {
        "lng": -58.1682923573292,
        "lat": -34.9415369134687
      },
      {
        "lng": -58.1684047397579,
        "lat": -34.941936322308
      },
      {
        "lng": -58.1675330008098,
        "lat": -34.9447149183368
      },
      {
        "lng": -58.1673458913135,
        "lat": -34.9453224089763
      },
      {
        "lng": -58.1671674139546,
        "lat": -34.9459009197295
      },
      {
        "lng": -58.1652337997423,
        "lat": -34.9445814277819
      },
      {
        "lng": -58.1640607484244,
        "lat": -34.9439172459209
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 860000,
      "marketValueRegularizedUsd": 1160000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055080C00000000000000001600000000000053000",
        "Nomenclatura: 055080C00000000000000001600000000000054000",
        "Nomenclatura: 055080C00000000000000001600000000000055000",
        "Nomenclatura: 055080C00000000000000001600000000000050000",
        "Nomenclatura: 055080C00000000000000001600000000000052000",
        "Nomenclatura: 055080C00000000000000001600000000000040000",
        "Nomenclatura: 055080C00000000000000001600000000000041000",
        "Nomenclatura: 055080C00000000000000001600000000000051000",
        "Nomenclatura: 055080C00000000000000001600000000000042000",
        "Nomenclatura: 055080C00000000000000001600000000000037000",
        "Nomenclatura: 055080C00000000000000001600000000000044000",
        "Nomenclatura: 055080C00000000000000001600000000000043000",
        "Nomenclatura: 055080C00000000000000001600000000000049000",
        "Nomenclatura: 055080C00000000000000001600000000000048000",
        "Nomenclatura: 055080C00000000000000001600000000000046000",
        "Nomenclatura: 055080C00000000000000001600000000000047000",
        "Nomenclatura: 055080C00000000000000001600000000000059000",
        "Nomenclatura: 055080C00000000000000001600000000000058000",
        "Nomenclatura: 055080C00000000000000001600000000000057000",
        "Nomenclatura: 055080C00000000000000001600000000000056000",
        "Nomenclatura: 055080C00000000000000001600000000000060000",
        "Nomenclatura: 055080C00000000000000001600000000000061000",
        "Nomenclatura: 055080C00000000000000001600000000000062000",
        "Nomenclatura: 055080C00000000000000001600000000000083000",
        "Nomenclatura: 055080C00000000000000001600000000000086000",
        "Nomenclatura: 055080C00000000000000001600000000000085000",
        "Nomenclatura: 055080C00000000000000001600000000000084000",
        "Nomenclatura: 055080C00000000000000001600000000000082000",
        "Nomenclatura: 055080C00000000000000001600000000000087000",
        "Nomenclatura: 055080C00000000000000001600000000000102000",
        "Nomenclatura: 055080C00000000000000001600000000000101000",
        "Nomenclatura: 055080C00000000000000001600000000000100000",
        "Nomenclatura: 055080C00000000000000001600000000000109000",
        "Nomenclatura: 055080C00000000000000001600000000000108000",
        "Nomenclatura: 055080C00000000000000001600000000000107000",
        "Nomenclatura: 055080C00000000000000001600000000000106000",
        "Nomenclatura: 055080C00000000000000001600000000000118000",
        "Nomenclatura: 055080C00000000000000001600000000000119000",
        "Nomenclatura: 055080C00000000000000001600000000000105000",
        "Nomenclatura: 055080C00000000000000001600000000000104000",
        "Nomenclatura: 055080C00000000000000001600000000000103000",
        "Nomenclatura: 055080C00000000000000001800000000000000000",
        "Nomenclatura: 055080C00000000000000001600000000000120000",
        "Nomenclatura: 055080C00000000000000001600000000000121000",
        "Nomenclatura: 055080C00000000000000001700000000000000000",
        "Nomenclatura: 055080C00000000000000001600000000000021000",
        "Nomenclatura: 055080C00000000000000001600000000000032000",
        "Nomenclatura: 055080C00000000000000001600000000000034000",
        "Nomenclatura: 055080C00000000000000001600000000000045000",
        "Nomenclatura: 055080C00000000000000001600000000000036000",
        "Nomenclatura: 055080C00000000000000001600000000000035000",
        "Nomenclatura: 055080C00000000000000001600000000000033000",
        "Nomenclatura: 055080C00000000000000001600000000000031000",
        "Nomenclatura: 055080C00000000000000001600000000000030000",
        "Nomenclatura: 055080C00000000000000001600000000000029000",
        "Nomenclatura: 055080C00000000000000001600000000000024000",
        "Nomenclatura: 055080C00000000000000001600000000000025000",
        "Nomenclatura: 055080C00000000000000001600000000000026000",
        "Nomenclatura: 055080C00000000000000001600000000000014000",
        "Nomenclatura: 055080C00000000000000001600000000000015000",
        "Nomenclatura: 055080C00000000000000001600000000000016000",
        "Nomenclatura: 055080C00000000000000001600000000000012000",
        "Nomenclatura: 055080C00000000000000001600000000000011000",
        "Nomenclatura: 055080C00000000000000001600000000000018000",
        "Nomenclatura: 055080C00000000000000001600000000000017000",
        "Nomenclatura: 055080C00000000000000001600000000000023000",
        "Nomenclatura: 055080C00000000000000001600000000000022000",
        "Nomenclatura: 055080C00000000000000001600000000000020000",
        "Nomenclatura: 055080C00000000000000001600000000000019000",
        "Nomenclatura: 055080C00000000000000001600000000000008000",
        "Nomenclatura: 055080C00000000000000001600000000000006000",
        "Nomenclatura: 055080C00000000000000001900000000000006000",
        "Nomenclatura: 055080C00000000000000001900000000000007000",
        "Nomenclatura: 055080C00000000000000001600000000000005000",
        "Nomenclatura: 055080C00000000000000001600000000000007000",
        "Nomenclatura: 055080C00000000000000001600000000000009000",
        "Nomenclatura: 055080C00000000000000001600000000000010000",
        "Nomenclatura: 055080C00000000000000001600000000000004000",
        "Nomenclatura: 055080C00000000000000001600000000000003000",
        "Nomenclatura: 055080C00000000000000001900000000000002000",
        "Nomenclatura: 055080C00000000000000001900000000000003000",
        "Nomenclatura: 055080C00000000000000001900000000000004000",
        "Nomenclatura: 055080C00000000000000001900000000000005000",
        "Nomenclatura: 055080C00000000000000001600000000000002000",
        "Nomenclatura: 055080C00000000000000001600000000000001000",
        "Nomenclatura: 055080C00000000000000001600000000000013000",
        "Nomenclatura: 055080C00000000000000001600000000000027000",
        "Nomenclatura: 055080C00000000000000001600000000000028000",
        "Nomenclatura: 055080C00000000000000001600000000000038000",
        "Nomenclatura: 055080C00000000000000001600000000000039000",
        "Nomenclatura: 055080C00000000000000001900000000000001000",
        "Nomenclatura: 055080C00000000000000001900000000000008000",
        "Nomenclatura: 055080C00000000000000001600000000000146000",
        "Nomenclatura: 055080C00000000000000001600000000000091000",
        "Nomenclatura: 055080C00000000000000001600000000000099000",
        "Nomenclatura: 055080C00000000000000001600000000000089000",
        "Nomenclatura: 055080C00000000000000001600000000000088000",
        "Nomenclatura: 055080C00000000000000001600000000000079000",
        "Nomenclatura: 055080C00000000000000001600000000000090000",
        "Nomenclatura: 055080C00000000000000001600000000000077000",
        "Nomenclatura: 055080C00000000000000001600000000000078000",
        "Nomenclatura: 055080C00000000000000001600000000000076000",
        "Nomenclatura: 055080C00000000000000001600000000000092000",
        "Nomenclatura: 055080C00000000000000001600000000000075000",
        "Nomenclatura: 055080C00000000000000001600000000000073000",
        "Nomenclatura: 055080C00000000000000001600000000000072000",
        "Nomenclatura: 055080C00000000000000001600000000000071000",
        "Nomenclatura: 055080C00000000000000001600000000000070000",
        "Nomenclatura: 055080C00000000000000001600000000000069000",
        "Nomenclatura: 055080C00000000000000001600000000000068000",
        "Nomenclatura: 055080C00000000000000001600000000000067000",
        "Nomenclatura: 055080C00000000000000001600000000000066000",
        "Nomenclatura: 055080C00000000000000001600000000000080000",
        "Nomenclatura: 055080C00000000000000001600000000000081000",
        "Nomenclatura: 055080C00000000000000001600000000000064000",
        "Nomenclatura: 055080C00000000000000001600000000000065000",
        "Nomenclatura: 055080C00000000000000001600000000000063000",
        "Nomenclatura: 055080C00000000000000001600000000000094000",
        "Nomenclatura: 055080C00000000000000001600000000000096000",
        "Nomenclatura: 055080C00000000000000001600000000000110000",
        "Nomenclatura: 055080C00000000000000001600000000000098000",
        "Nomenclatura: 055080C00000000000000001600000000000097000",
        "Nomenclatura: 055080C00000000000000001600000000000093000",
        "Nomenclatura: 055080C00000000000000001600000000000074000",
        "Nomenclatura: 055080C00000000000000001600000000000145000",
        "Nomenclatura: 055080C00000000000000001600000000000142000",
        "Nomenclatura: 055080C00000000000000001600000000000143000",
        "Nomenclatura: 055080C00000000000000001600000000000144000",
        "Nomenclatura: 055080C00000000000000001600000000000135000",
        "Nomenclatura: 055080C00000000000000001600000000000136000",
        "Nomenclatura: 055080C00000000000000001600000000000133000",
        "Nomenclatura: 055080C00000000000000001600000000000134000",
        "Nomenclatura: 055080C00000000000000001600000000000132000",
        "Nomenclatura: 055080C00000000000000001600000000000137000",
        "Nomenclatura: 055080C00000000000000001600000000000138000",
        "Nomenclatura: 055080C00000000000000001600000000000139000",
        "Nomenclatura: 055080C00000000000000001600000000000140000",
        "Nomenclatura: 055080C00000000000000001600000000000128000",
        "Nomenclatura: 055080C00000000000000001600000000000129000",
        "Nomenclatura: 055080C00000000000000001600000000000130000",
        "Nomenclatura: 055080C00000000000000001600000000000131000",
        "Nomenclatura: 055080C00000000000000001600000000000123000",
        "Nomenclatura: 055080C00000000000000001600000000000124000",
        "Nomenclatura: 055080C00000000000000001600000000000125000",
        "Nomenclatura: 055080C00000000000000001600000000000115000",
        "Nomenclatura: 055080C00000000000000001600000000000116000",
        "Nomenclatura: 055080C00000000000000001600000000000114000",
        "Nomenclatura: 055080C00000000000000001600000000000113000",
        "Nomenclatura: 055080C00000000000000001600000000000126000",
        "Nomenclatura: 055080C00000000000000001600000000000127000",
        "Nomenclatura: 055080C00000000000000001600000000000141000",
        "Nomenclatura: 05508000000000000000000000000000000241000B",
        "Nomenclatura: 055080C00000000000000001600000000000095000",
        "Nomenclatura: 055080C00000000000000001600000000000112000",
        "Nomenclatura: 055080C00000000000000001600000000000111000",
        "Nomenclatura: 055080C00000000000000001600000000000117000",
        "Nomenclatura: 055080C00000000000000001600000000000122000"
      ],
      "totalAreaSqM": 788895,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 100000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR RI",
        "description": "AREA RURAL/ RURAL INTENSIVO",
        "allowedUses": "PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "dentro",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-36-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0B0002B3",
    "name": "Haras del Sur I",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0478151177747,
        "lat": -35.1339465463364
      },
      {
        "lng": -58.0473632383584,
        "lat": -35.1335570710721
      },
      {
        "lng": -58.0448313247792,
        "lat": -35.1313612315341
      },
      {
        "lng": -58.0439494496364,
        "lat": -35.1305963090719
      },
      {
        "lng": -58.04354136755281,
        "lat": -35.130239248793
      },
      {
        "lng": -58.0431222883707,
        "lat": -35.1298972395796
      },
      {
        "lng": -58.0425955615661,
        "lat": -35.1294102914883
      },
      {
        "lng": -58.0439713121576,
        "lat": -35.1281966253042
      },
      {
        "lng": -58.0453001533062,
        "lat": -35.1270117446724
      },
      {
        "lng": -58.0465084379175,
        "lat": -35.1259403468376
      },
      {
        "lng": -58.04794392568531,
        "lat": -35.124672984174
      },
      {
        "lng": -58.0491010083974,
        "lat": -35.123652912738
      },
      {
        "lng": -58.0504271839121,
        "lat": -35.1224861336323
      },
      {
        "lng": -58.0507126457916,
        "lat": -35.1222350596047
      },
      {
        "lng": -58.0508643425702,
        "lat": -35.1221244910902
      },
      {
        "lng": -58.0513747962049,
        "lat": -35.1217569964056
      },
      {
        "lng": -58.0528090157794,
        "lat": -35.1207254834433
      },
      {
        "lng": -58.05419854630409,
        "lat": -35.1197267593023
      },
      {
        "lng": -58.0554753461832,
        "lat": -35.1188041622904
      },
      {
        "lng": -58.0575452188317,
        "lat": -35.1173221923135
      },
      {
        "lng": -58.058246568823,
        "lat": -35.1168203861216
      },
      {
        "lng": -58.0583303517746,
        "lat": -35.1167838787252
      },
      {
        "lng": -58.0584249992307,
        "lat": -35.1167794474665
      },
      {
        "lng": -58.0585131609943,
        "lat": -35.1168079858764
      },
      {
        "lng": -58.05857872857639,
        "lat": -35.1168642793389
      },
      {
        "lng": -58.0586096664285,
        "lat": -35.1169378614992
      },
      {
        "lng": -58.0586002587259,
        "lat": -35.1170153933168
      },
      {
        "lng": -58.05818437995969,
        "lat": -35.1177214802472
      },
      {
        "lng": -58.05805552064291,
        "lat": -35.1179519220272
      },
      {
        "lng": -58.05736277151409,
        "lat": -35.1191394894534
      },
      {
        "lng": -58.05693969779499,
        "lat": -35.1198751052953
      },
      {
        "lng": -58.0566259999958,
        "lat": -35.1204149999929
      },
      {
        "lng": -58.0564089999958,
        "lat": -35.1207859999929
      },
      {
        "lng": -58.0563719999958,
        "lat": -35.1208489999929
      },
      {
        "lng": -58.05643399999579,
        "lat": -35.1209909999929
      },
      {
        "lng": -58.05617099999581,
        "lat": -35.1214949999929
      },
      {
        "lng": -58.05598899999579,
        "lat": -35.1219129999929
      },
      {
        "lng": -58.05463299999581,
        "lat": -35.1254409999929
      },
      {
        "lng": -58.05455799999579,
        "lat": -35.1256089999929
      },
      {
        "lng": -58.05060299999581,
        "lat": -35.1360489999929
      },
      {
        "lng": -58.05018199999569,
        "lat": -35.1361409999929
      },
      {
        "lng": -58.04802299999571,
        "lat": -35.1342859999929
      },
      {
        "lng": -58.0478151177747,
        "lat": -35.1339465463364
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 870000,
      "marketValueRegularizedUsd": 1170000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055100D00000000000000000100000000000013000",
        "Nomenclatura: 055100D0000000000000000010000000000001200C",
        "Nomenclatura: 055100D0000000000000000010000000000001200B",
        "Nomenclatura: 055100D00000000000000000100000000000005000",
        "Nomenclatura: 055100D00000000000000000100000000000009000",
        "Nomenclatura: 055100D00000000000000000100000000000010000",
        "Nomenclatura: 055100D00000000000000000100000000000008000",
        "Nomenclatura: 055100D00000000000000000100000000000018000",
        "Nomenclatura: 055100D00000000000000000100000000000007000",
        "Nomenclatura: 055100D00000000000000000100000000000006000",
        "Nomenclatura: 055100D00000000000000000100000000000021000",
        "Nomenclatura: 055100D00000000000000000100000000000020000",
        "Nomenclatura: 055100D00000000000000000100000000000019000",
        "Nomenclatura: 055100D00000000000000000100000000000022000",
        "Nomenclatura: 055100D00000000000000000100000000000023000",
        "Nomenclatura: 055100D0000000000000000010000000000000300B",
        "Nomenclatura: 055100D0000000000000000010000000000000300A",
        "Nomenclatura: 055100D00000000000000000100000000000004000",
        "Nomenclatura: 055100D00000000000000000100000000000002000",
        "Nomenclatura: 055100D00000000000000001100000000000004000",
        "Nomenclatura: 055100D00000000000000001100000000000005000",
        "Nomenclatura: 055100D00000000000000000200000000000022000",
        "Nomenclatura: 055100D00000000000000000200000000000019000",
        "Nomenclatura: 055100D00000000000000000200000000000017000",
        "Nomenclatura: 055100D00000000000000000200000000000018000",
        "Nomenclatura: 055100D00000000000000001100000000000007000",
        "Nomenclatura: 055100D00000000000000001100000000000006000",
        "Nomenclatura: 055100D00000000000000000500000000000001000",
        "Nomenclatura: 055100D00000000000000001100000000000001000",
        "Nomenclatura: 055100D00000000000000000700000000000020000",
        "Nomenclatura: 055100D00000000000000000700000000000019000",
        "Nomenclatura: 055100D00000000000000000700000000000018000",
        "Nomenclatura: 055100D00000000000000000700000000000017000",
        "Nomenclatura: 055100D00000000000000000700000000000015000",
        "Nomenclatura: 055100D00000000000000000700000000000016000",
        "Nomenclatura: 055100D00000000000000001100000000000008000",
        "Nomenclatura: 055100D00000000000000000700000000000014000",
        "Nomenclatura: 055100D00000000000000000700000000000013000",
        "Nomenclatura: 055100D00000000000000000700000000000012000",
        "Nomenclatura: 055100D00000000000000000700000000000011000",
        "Nomenclatura: 055100D00000000000000000700000000000009000",
        "Nomenclatura: 055100D00000000000000000700000000000010000",
        "Nomenclatura: 055100D00000000000000000700000000000008000",
        "Nomenclatura: 055100D00000000000000001000000000000004000",
        "Nomenclatura: 055100D00000000000000000700000000000007000",
        "Nomenclatura: 055100D00000000000000000700000000000024000",
        "Nomenclatura: 055100D00000000000000000700000000000006000",
        "Nomenclatura: 055100D00000000000000000700000000000005000",
        "Nomenclatura: 055100D00000000000000000700000000000004000",
        "Nomenclatura: 055100D00000000000000000700000000000023000",
        "Nomenclatura: 055100D00000000000000000700000000000022000",
        "Nomenclatura: 055100D00000000000000000700000000000021000",
        "Nomenclatura: 055100D00000000000000000700000000000002000",
        "Nomenclatura: 055100D00000000000000000700000000000001000",
        "Nomenclatura: 055100D00000000000000000700000000000003000",
        "Nomenclatura: 055100D00000000000000000600000000000008000",
        "Nomenclatura: 055100D00000000000000000900000000000012000",
        "Nomenclatura: 055100D00000000000000000900000000000011000",
        "Nomenclatura: 055100D00000000000000001000000000000001000",
        "Nomenclatura: 055100D00000000000000001000000000000002000",
        "Nomenclatura: 055100D00000000000000001000000000000003000",
        "Nomenclatura: 055100D00000000000000000900000000000010000",
        "Nomenclatura: 055100D00000000000000000900000000000008000",
        "Nomenclatura: 055100D00000000000000000900000000000009000",
        "Nomenclatura: 055100D00000000000000000900000000000013000",
        "Nomenclatura: 055100D00000000000000000900000000000014000",
        "Nomenclatura: 055100D00000000000000000900000000000015000",
        "Nomenclatura: 055100D00000000000000000900000000000007000",
        "Nomenclatura: 055100D00000000000000000900000000000002000",
        "Nomenclatura: 055100D00000000000000000900000000000003000",
        "Nomenclatura: 055100D00000000000000000900000000000004000",
        "Nomenclatura: 055100D00000000000000000800000000000006000",
        "Nomenclatura: 055100D00000000000000000100000000000162000",
        "Nomenclatura: 055100D0000000000000000010000000000015900A",
        "Nomenclatura: 055100D00000000000000000800000000000004000",
        "Nomenclatura: 055100D00000000000000000800000000000003000",
        "Nomenclatura: 055100D00000000000000000800000000000007000",
        "Nomenclatura: 055100D00000000000000000800000000000005000",
        "Nomenclatura: 055100D00000000000000000800000000000009000",
        "Nomenclatura: 055100D00000000000000000800000000000010000",
        "Nomenclatura: 055100D00000000000000000800000000000008000",
        "Nomenclatura: 055100D00000000000000000800000000000002000",
        "Nomenclatura: 055100D00000000000000000800000000000001000",
        "Nomenclatura: 055100D00000000000000000100000000000119000",
        "Nomenclatura: 055100D00000000000000000800000000000011000",
        "Nomenclatura: 055100D00000000000000000900000000000001000",
        "Nomenclatura: 055100D00000000000000000900000000000017000",
        "Nomenclatura: 055100D00000000000000000900000000000016000",
        "Nomenclatura: 055100D00000000000000000600000000000002000",
        "Nomenclatura: 055100D00000000000000000600000000000005000",
        "Nomenclatura: 055100D00000000000000000600000000000006000",
        "Nomenclatura: 055100D00000000000000000600000000000007000",
        "Nomenclatura: 055100D00000000000000000100000000000113000",
        "Nomenclatura: 055100D00000000000000000100000000000114000",
        "Nomenclatura: 055100D0000000000000000010000000000011000B",
        "Nomenclatura: 055100D0000000000000000010000000000011000A",
        "Nomenclatura: 055100D00000000000000000100000000000109000",
        "Nomenclatura: 055100D00000000000000000600000000000004000",
        "Nomenclatura: 055100D00000000000000000600000000000003000",
        "Nomenclatura: 055100D00000000000000000100000000000106000",
        "Nomenclatura: 055100D00000000000000000100000000000107000",
        "Nomenclatura: 055100D0000000000000000010000000000010400A",
        "Nomenclatura: 055100D00000000000000000100000000000103000",
        "Nomenclatura: 055100D00000000000000000300000000000009000",
        "Nomenclatura: 055100D00000000000000000600000000000001000",
        "Nomenclatura: 055100D00000000000000000600000000000009000",
        "Nomenclatura: 055100D00000000000000000300000000000011000",
        "Nomenclatura: 055100D00000000000000000300000000000012000",
        "Nomenclatura: 055100D00000000000000000300000000000013000",
        "Nomenclatura: 055100D00000000000000000300000000000010000",
        "Nomenclatura: 055100D00000000000000000300000000000008000",
        "Nomenclatura: 055100D00000000000000000300000000000014000",
        "Nomenclatura: 055100D00000000000000000300000000000015000",
        "Nomenclatura: 055100D00000000000000000300000000000016000",
        "Nomenclatura: 055100D00000000000000000400000000000005000",
        "Nomenclatura: 055100D00000000000000000400000000000006000",
        "Nomenclatura: 055100D00000000000000000400000000000019000",
        "Nomenclatura: 055100D00000000000000000400000000000009000",
        "Nomenclatura: 055100D00000000000000000400000000000008000",
        "Nomenclatura: 055100D00000000000000000400000000000007000",
        "Nomenclatura: 055100D00000000000000000400000000000010000",
        "Nomenclatura: 055100D0000000000000000040000000000001100A",
        "Nomenclatura: 055100D0000000000000000040000000000001600A",
        "Nomenclatura: 055100D00000000000000000400000000000014000",
        "Nomenclatura: 055100D00000000000000000400000000000015000",
        "Nomenclatura: 055100D00000000000000000400000000000013000",
        "Nomenclatura: 055100D00000000000000000400000000000001000",
        "Nomenclatura: 055100D0000000000000000040000000000001600B",
        "Nomenclatura: 055100D00000000000000000400000000000017000",
        "Nomenclatura: 055100D00000000000000000400000000000018000",
        "Nomenclatura: 055100D00000000000000000400000000000004000",
        "Nomenclatura: 055100D00000000000000000400000000000003000",
        "Nomenclatura: 055100D00000000000000000400000000000002000",
        "Nomenclatura: 055100D00000000000000000200000000000015000",
        "Nomenclatura: 055100D00000000000000000300000000000020000",
        "Nomenclatura: 055100D00000000000000000300000000000019000",
        "Nomenclatura: 055100D00000000000000000300000000000001000",
        "Nomenclatura: 055100D0000000000000000020000000000001300A",
        "Nomenclatura: 055100D0000000000000000010000000000008700A",
        "Nomenclatura: 055100D00000000000000000100000000000088000",
        "Nomenclatura: 055100D00000000000000000100000000000078000",
        "Nomenclatura: 055100D00000000000000000100000000000077000",
        "Nomenclatura: 055100D00000000000000000100000000000086000",
        "Nomenclatura: 055100D00000000000000000100000000000085000",
        "Nomenclatura: 055100D00000000000000000100000000000084000",
        "Nomenclatura: 055100D00000000000000000100000000000091000",
        "Nomenclatura: 055100D00000000000000000100000000000092000",
        "Nomenclatura: 055100D0000000000000000010000000000009300C",
        "Nomenclatura: 055100D0000000000000000010000000000009500A",
        "Nomenclatura: 055100D00000000000000000100000000000090000",
        "Nomenclatura: 055100D0000000000000000010000000000009400A",
        "Nomenclatura: 055100D0000000000000000010000000000009900A",
        "Nomenclatura: 055100D0000000000000000010000000000009700A",
        "Nomenclatura: 055100D0000000000000000010000000000009700B",
        "Nomenclatura: 055100D0000000000000000010000000000009500B",
        "Nomenclatura: 055100D0000000000000000010000000000009500C",
        "Nomenclatura: 055100D00000000000000000300000000000003000",
        "Nomenclatura: 055100D00000000000000000300000000000002000",
        "Nomenclatura: 055100D00000000000000000300000000000018000",
        "Nomenclatura: 055100D00000000000000000300000000000017000",
        "Nomenclatura: 055100D00000000000000000300000000000004000",
        "Nomenclatura: 055100D00000000000000000300000000000005000",
        "Nomenclatura: 055100D00000000000000000300000000000006000",
        "Nomenclatura: 055100D00000000000000000300000000000007000",
        "Nomenclatura: 055100D0000000000000000010000000000009900B",
        "Nomenclatura: 055100D00000000000000000100000000000100000",
        "Nomenclatura: 055100D00000000000000000100000000000101000",
        "Nomenclatura: 055100D00000000000000000100000000000102000",
        "Nomenclatura: 055100D00000000000000000100000000000098000",
        "Nomenclatura: 055100D00000000000000000100000000000089000",
        "Nomenclatura: 055100D00000000000000000100000000000082000",
        "Nomenclatura: 055100D00000000000000000100000000000083000",
        "Nomenclatura: 055100D00000000000000000100000000000075000",
        "Nomenclatura: 055100D00000000000000000100000000000076000",
        "Nomenclatura: 055100D00000000000000000100000000000053000",
        "Nomenclatura: 055100D00000000000000000100000000000054000",
        "Nomenclatura: 055100D00000000000000000100000000000062000",
        "Nomenclatura: 055100D00000000000000000100000000000061000",
        "Nomenclatura: 055100D00000000000000000100000000000060000",
        "Nomenclatura: 055100D00000000000000000100000000000067000",
        "Nomenclatura: 055100D00000000000000000100000000000068000",
        "Nomenclatura: 055100D00000000000000000100000000000079000",
        "Nomenclatura: 055100D00000000000000000100000000000071000",
        "Nomenclatura: 055100D00000000000000000100000000000070000",
        "Nomenclatura: 055100D00000000000000000100000000000069000",
        "Nomenclatura: 055100D00000000000000000100000000000063000",
        "Nomenclatura: 055100D00000000000000000100000000000072000",
        "Nomenclatura: 055100D00000000000000000200000000000008000",
        "Nomenclatura: 055100D00000000000000000100000000000081000",
        "Nomenclatura: 055100D00000000000000000100000000000080000",
        "Nomenclatura: 055100D00000000000000000200000000000011000",
        "Nomenclatura: 055100D00000000000000000200000000000012000",
        "Nomenclatura: 055100D00000000000000000200000000000016000",
        "Nomenclatura: 055100D00000000000000000200000000000020000",
        "Nomenclatura: 055100D00000000000000000200000000000021000",
        "Nomenclatura: 055100D00000000000000000200000000000024000",
        "Nomenclatura: 055100D00000000000000000200000000000025000",
        "Nomenclatura: 055100D00000000000000000200000000000010000",
        "Nomenclatura: 055100D00000000000000000200000000000009000",
        "Nomenclatura: 055100D0000000000000000020000000000002300A",
        "Nomenclatura: 055100D00000000000000000200000000000007000",
        "Nomenclatura: 055100D00000000000000000100000000000040000",
        "Nomenclatura: 055100D00000000000000000100000000000041000",
        "Nomenclatura: 055100D00000000000000000100000000000042000",
        "Nomenclatura: 055100D00000000000000000100000000000043000",
        "Nomenclatura: 055100D0000000000000000010000000000004700A",
        "Nomenclatura: 055100D00000000000000000100000000000044000",
        "Nomenclatura: 055100D0000000000000000010000000000004700B",
        "Nomenclatura: 055100D00000000000000000100000000000048000",
        "Nomenclatura: 055100D00000000000000000100000000000049000",
        "Nomenclatura: 055100D00000000000000000100000000000055000",
        "Nomenclatura: 055100D00000000000000000100000000000050000",
        "Nomenclatura: 055100D00000000000000000100000000000056000",
        "Nomenclatura: 055100D00000000000000000100000000000051000",
        "Nomenclatura: 055100D00000000000000000100000000000052000",
        "Nomenclatura: 055100D00000000000000000100000000000057000",
        "Nomenclatura: 055100D00000000000000000100000000000058000",
        "Nomenclatura: 055100D00000000000000000100000000000059000",
        "Nomenclatura: 055100D00000000000000000100000000000064000",
        "Nomenclatura: 055100D00000000000000000100000000000065000",
        "Nomenclatura: 055100D00000000000000000100000000000066000",
        "Nomenclatura: 055100D00000000000000000100000000000073000",
        "Nomenclatura: 055100D00000000000000000100000000000074000",
        "Nomenclatura: 055100D0000000000000000010000000000000100G",
        "Nomenclatura: 055100D00000000000000000100000000000033000",
        "Nomenclatura: 055100D0000000000000000010000000000000100E",
        "Nomenclatura: 055100D00000000000000000100000000000036000",
        "Nomenclatura: 055100D00000000000000000100000000000037000",
        "Nomenclatura: 055100D00000000000000000100000000000038000",
        "Nomenclatura: 055100D00000000000000000100000000000026000",
        "Nomenclatura: 055100D00000000000000000100000000000027000",
        "Nomenclatura: 055100D00000000000000000100000000000024000",
        "Nomenclatura: 055100D00000000000000000100000000000025000",
        "Nomenclatura: 055100D00000000000000000100000000000029000",
        "Nomenclatura: 055100D0000000000000000010000000000003400A",
        "Nomenclatura: 055100D0000000000000000010000000000003400B",
        "Nomenclatura: 055100D00000000000000000100000000000017000",
        "Nomenclatura: 055100D00000000000000000100000000000108000",
        "Nomenclatura: 055100D00000000000000000100000000000111000",
        "Nomenclatura: 055100D00000000000000000100000000000112000",
        "Nomenclatura: 055100D00000000000000000100000000000116000",
        "Nomenclatura: 055100D00000000000000000100000000000115000",
        "Nomenclatura: 055100D00000000000000000100000000000126000",
        "Nomenclatura: 055100D00000000000000000100000000000120000",
        "Nomenclatura: 055100D00000000000000000100000000000121000",
        "Nomenclatura: 055100D00000000000000000100000000000122000",
        "Nomenclatura: 055100D00000000000000000100000000000117000",
        "Nomenclatura: 055100D00000000000000000100000000000118000",
        "Nomenclatura: 055100D00000000000000000100000000000123000",
        "Nomenclatura: 055100D00000000000000000100000000000124000",
        "Nomenclatura: 055100D00000000000000000100000000000125000",
        "Nomenclatura: 055100D00000000000000000100000000000131000",
        "Nomenclatura: 055100D00000000000000000100000000000130000",
        "Nomenclatura: 055100D00000000000000000100000000000129000",
        "Nomenclatura: 055100D0000000000000000010000000000012700A",
        "Nomenclatura: 055100D00000000000000000100000000000135000",
        "Nomenclatura: 055100D00000000000000000100000000000136000",
        "Nomenclatura: 055100D00000000000000000100000000000137000",
        "Nomenclatura: 055100D00000000000000000100000000000132000",
        "Nomenclatura: 055100D00000000000000000100000000000138000",
        "Nomenclatura: 055100D0000000000000000010000000000014100A",
        "Nomenclatura: 055100D0000000000000000010000000000013300A",
        "Nomenclatura: 055100D0000000000000000010000000000013900A",
        "Nomenclatura: 055100D00000000000000000100000000000145000",
        "Nomenclatura: 055100D00000000000000000100000000000144000",
        "Nomenclatura: 055100D00000000000000000100000000000146000",
        "Nomenclatura: 055100D00000000000000000100000000000147000",
        "Nomenclatura: 055100D00000000000000000100000000000148000",
        "Nomenclatura: 055100D00000000000000000100000000000151000",
        "Nomenclatura: 055100D00000000000000000100000000000152000",
        "Nomenclatura: 055100D00000000000000000100000000000149000",
        "Nomenclatura: 055100D00000000000000000100000000000150000",
        "Nomenclatura: 055100D00000000000000000100000000000158000",
        "Nomenclatura: 055100D00000000000000000100000000000157000",
        "Nomenclatura: 055100D00000000000000000100000000000155000",
        "Nomenclatura: 055100D00000000000000000100000000000156000",
        "Nomenclatura: 055100D00000000000000000100000000000154000",
        "Nomenclatura: 055100D00000000000000000100000000000153000",
        "Nomenclatura: 055100D00000000000000000100000000000174000",
        "Nomenclatura: 055100D00000000000000000100000000000175000",
        "Nomenclatura: 055100D0000000000000000010000000000017900A",
        "Nomenclatura: 055100D00000000000000000100000000000181000",
        "Nomenclatura: 055100D00000000000000000100000000000178000",
        "Nomenclatura: 055100D00000000000000000100000000000177000",
        "Nomenclatura: 055100D00000000000000000100000000000176000",
        "Nomenclatura: 055100D00000000000000000100000000000169000",
        "Nomenclatura: 055100D00000000000000000100000000000163000",
        "Nomenclatura: 055100D0000000000000000010000000000016400A",
        "Nomenclatura: 055100D00000000000000000100000000000167000",
        "Nomenclatura: 055100D00000000000000000100000000000168000",
        "Nomenclatura: 055100D00000000000000001000000000000021000",
        "Nomenclatura: 055100D00000000000000000900000000000006000",
        "Nomenclatura: 055100D00000000000000000900000000000005000",
        "Nomenclatura: 055100D00000000000000001000000000000022000",
        "Nomenclatura: 055100D00000000000000001000000000000020000",
        "Nomenclatura: 055100D00000000000000001000000000000023000",
        "Nomenclatura: 055100D0000000000000000100000000000002600B",
        "Nomenclatura: 055100D0000000000000000100000000000001600A",
        "Nomenclatura: 055100D0000000000000000100000000000001800A",
        "Nomenclatura: 055100D0000000000000000010000000000017000A",
        "Nomenclatura: 055100D00000000000000000100000000000173000",
        "Nomenclatura: 055100D00000000000000000100000000000172000",
        "Nomenclatura: 055100D00000000000000001000000000000014000",
        "Nomenclatura: 055100D00000000000000001000000000000013000",
        "Nomenclatura: 055100D00000000000000001000000000000015000",
        "Nomenclatura: 055100D00000000000000001000000000000012000",
        "Nomenclatura: 055100D00000000000000001000000000000011000",
        "Nomenclatura: 055100D00000000000000001000000000000009000",
        "Nomenclatura: 055100D00000000000000001000000000000010000",
        "Nomenclatura: 055100D00000000000000001000000000000028000",
        "Nomenclatura: 055100D00000000000000001000000000000007000",
        "Nomenclatura: 055100D00000000000000001000000000000005000",
        "Nomenclatura: 055100D00000000000000001000000000000006000",
        "Nomenclatura: 055100D00000000000000001000000000000008000",
        "Nomenclatura: 055100D0000000000000000010000000000001200A",
        "Nomenclatura: 055100D00000000000000000100000000000011000",
        "Nomenclatura: 055100D0000000000000000010000000000001400A",
        "Nomenclatura: 055100D0000000000000000010000000000001400B",
        "Nomenclatura: 055100D00000000000000000100000000000015000",
        "Nomenclatura: 055100D00000000000000000100000000000016000",
        "Nomenclatura: 055100D00000000000000001100000000000002000",
        "Nomenclatura: 055100D00000000000000001100000000000003000",
        "Nomenclatura: 055100D00000000000000000200000000000001000",
        "Nomenclatura: 055100D00000000000000000200000000000003000",
        "Nomenclatura: 055100D00000000000000000200000000000002000",
        "Nomenclatura: 055100D00000000000000000200000000000029000",
        "Nomenclatura: 055100D00000000000000000200000000000028000",
        "Nomenclatura: 055100D0000000000000000020000000000002700A",
        "Nomenclatura: 055100D00000000000000000200000000000031000",
        "Nomenclatura: 055100D00000000000000000200000000000032000",
        "Nomenclatura: 055100D00000000000000000200000000000033000",
        "Nomenclatura: 055100D00000000000000000200000000000006000",
        "Nomenclatura: 055100D00000000000000000200000000000005000",
        "Nomenclatura: 055100D00000000000000000200000000000004000",
        "Nomenclatura: 055100D00000000000000000200000000000034000",
        "Nomenclatura: 055100D00000000000000000200000000000035000",
        "Nomenclatura: 055100D00000000000000000200000000000036000",
        "Nomenclatura: 055100D0000000000000000010000000000000100A",
        "Nomenclatura: 055100D00000000000000000100000000000039000",
        "Nomenclatura: 055100D00000000000000000100000000000045000",
        "Nomenclatura: 055100D0000000000000000010000000000004600A",
        "Nomenclatura: 055100D0000000000000000010000000000004600B",
        "Nomenclatura: 055100D00000000000000000100000000000032000",
        "Nomenclatura: 055100D0000000000000000010000000000000100F",
        "Nomenclatura: 055100D00000000000000000100000000000035000",
        "Nomenclatura: 055100D0000000000000000010000000000000100D",
        "Nomenclatura: 055100D0000000000000000010000000000000100C",
        "Nomenclatura: 055100D0000000000000000010000000000000100B",
        "Nomenclatura: 055100D0000000000000000010000000000000100H",
        "Nomenclatura: 055100D00000000000000000100000000000028000",
        "Nomenclatura: 055100D00000000000000000100000000000031000",
        "Nomenclatura: 055100D00000000000000000100000000000030000",
        "Nomenclatura: 055100D0000000000000000010000000000000100M"
      ],
      "totalAreaSqM": 853276,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 0,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR CC",
        "description": "AREA RURAL/ CLUB DE CAMPO",
        "allowedUses": "VIVIENDA UNIFAMILIAR",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-37-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0B0002B7",
    "name": "Gonnet I",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0206972142041,
        "lat": -34.8928369215812
      },
      {
        "lng": -58.0209454517951,
        "lat": -34.893066988814
      },
      {
        "lng": -58.0210859407422,
        "lat": -34.8931972489668
      },
      {
        "lng": -58.0211912257404,
        "lat": -34.8932949426475
      },
      {
        "lng": -58.02128731120731,
        "lat": -34.8933840150406
      },
      {
        "lng": -58.02157299999541,
        "lat": -34.8936449999928
      },
      {
        "lng": -58.0216889999954,
        "lat": -34.8937539999928
      },
      {
        "lng": -58.0217809999954,
        "lat": -34.8938399999928
      },
      {
        "lng": -58.0215299999954,
        "lat": -34.8940269999928
      },
      {
        "lng": -58.0213943010837,
        "lat": -34.8941311497129
      },
      {
        "lng": -58.0209098029435,
        "lat": -34.8944981636379
      },
      {
        "lng": -58.019799402928,
        "lat": -34.893512802474
      },
      {
        "lng": -58.0206972142041,
        "lat": -34.8928369215812
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 880000,
      "marketValueRegularizedUsd": 1180000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A002600000000000000000002600E0007000",
        "Nomenclatura: 055030A0026000000000000000000000000000200A",
        "Nomenclatura: 055030A0026000000000000000000000000000400A",
        "Nomenclatura: 055030A0026000000000000000000000000000700A",
        "Nomenclatura: 055030A002600000000000000000002600F0029000"
      ],
      "totalAreaSqM": 58767,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-38-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0B0002B8",
    "name": "Grand Bell",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0606683218114,
        "lat": -34.9093206110329
      },
      {
        "lng": -58.060633419736,
        "lat": -34.9092230828993
      },
      {
        "lng": -58.0606361016761,
        "lat": -34.9090672151059
      },
      {
        "lng": -58.0604855441227,
        "lat": -34.9087798466997
      },
      {
        "lng": -58.0604700417757,
        "lat": -34.9086203540985
      },
      {
        "lng": -58.060285231024,
        "lat": -34.9085288138842
      },
      {
        "lng": -58.0602327366499,
        "lat": -34.9083792748798
      },
      {
        "lng": -58.0596302831634,
        "lat": -34.9066635597244
      },
      {
        "lng": -58.06105133305941,
        "lat": -34.906324858639
      },
      {
        "lng": -58.0603544502404,
        "lat": -34.9043401580249
      },
      {
        "lng": -58.06322340296361,
        "lat": -34.9036563892725
      },
      {
        "lng": -58.06331298979799,
        "lat": -34.9036147390743
      },
      {
        "lng": -58.0696555088842,
        "lat": -34.9021146563299
      },
      {
        "lng": -58.06970356055061,
        "lat": -34.9022068935674
      },
      {
        "lng": -58.06976428168269,
        "lat": -34.9023093356037
      },
      {
        "lng": -58.069837999996,
        "lat": -34.9024279999928
      },
      {
        "lng": -58.07064900488591,
        "lat": -34.9040221873697
      },
      {
        "lng": -58.0706621911155,
        "lat": -34.9040477210413
      },
      {
        "lng": -58.0706265737651,
        "lat": -34.9041954061179
      },
      {
        "lng": -58.07104399999599,
        "lat": -34.9049749999928
      },
      {
        "lng": -58.071162999996,
        "lat": -34.9052089999928
      },
      {
        "lng": -58.071277999996,
        "lat": -34.9054699999928
      },
      {
        "lng": -58.07137109954471,
        "lat": -34.9056738721184
      },
      {
        "lng": -58.0714524882828,
        "lat": -34.9058423403381
      },
      {
        "lng": -58.0731371563373,
        "lat": -34.9093313766801
      },
      {
        "lng": -58.0629844399977,
        "lat": -34.9117514654544
      },
      {
        "lng": -58.0628202208799,
        "lat": -34.9117888610242
      },
      {
        "lng": -58.0606444737884,
        "lat": -34.9123015468233
      },
      {
        "lng": -58.0605701145937,
        "lat": -34.912104705545
      },
      {
        "lng": -58.0605083909956,
        "lat": -34.9119102288678
      },
      {
        "lng": -58.0605429998724,
        "lat": -34.9117505450039
      },
      {
        "lng": -58.0606781323614,
        "lat": -34.9114846802984
      },
      {
        "lng": -58.0606290020172,
        "lat": -34.9111873955834
      },
      {
        "lng": -58.0606510941254,
        "lat": -34.9109133276375
      },
      {
        "lng": -58.0607085436214,
        "lat": -34.9105918793313
      },
      {
        "lng": -58.0608521948287,
        "lat": -34.9103404796829
      },
      {
        "lng": -58.0611043739313,
        "lat": -34.9100982920478
      },
      {
        "lng": -58.0611905430541,
        "lat": -34.9099464602852
      },
      {
        "lng": -58.0611790371423,
        "lat": -34.9097751354834
      },
      {
        "lng": -58.0606683218114,
        "lat": -34.9093206110329
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 890000,
      "marketValueRegularizedUsd": 1190000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506YY00000000000000001700000000000002000",
        "Nomenclatura: 05506YY00000000000000001700000000000004000",
        "Nomenclatura: 05506YY00000000000000001700000000000003000",
        "Nomenclatura: 05506YY00000000000000001600000000000003000",
        "Nomenclatura: 05506YY00000000000000001600000000000002000",
        "Nomenclatura: 05506YY00000000000000001600000000000011000",
        "Nomenclatura: 05506YY00000000000000001600000000000012000",
        "Nomenclatura: 05506YY00000000000000001700000000000006000",
        "Nomenclatura: 05506YY00000000000000001700000000000005000",
        "Nomenclatura: 05506YY00000000000000001700000000000011000",
        "Nomenclatura: 05506YY00000000000000001700000000000017000",
        "Nomenclatura: 05506YY00000000000000001700000000000012000",
        "Nomenclatura: 05506YY00000000000000001700000000000013000",
        "Nomenclatura: 05506YY00000000000000001700000000000014000",
        "Nomenclatura: 05506YY00000000000000001700000000000015000",
        "Nomenclatura: 05506YY00000000000000001700000000000026000",
        "Nomenclatura: 05506YY00000000000000001700000000000027000",
        "Nomenclatura: 05506YY00000000000000001700000000000016000",
        "Nomenclatura: 05506YY00000000000000001700000000000025000",
        "Nomenclatura: 05506YY00000000000000001700000000000029000",
        "Nomenclatura: 05506YY00000000000000001700000000000030000",
        "Nomenclatura: 05506YY00000000000000001700000000000032000",
        "Nomenclatura: 05506YY00000000000000001700000000000031000",
        "Nomenclatura: 05506YY00000000000000001700000000000028000",
        "Nomenclatura: 05506YY00000000000000001700000000000042000",
        "Nomenclatura: 05506YY00000000000000001700000000000043000",
        "Nomenclatura: 05506YY00000000000000001700000000000044000",
        "Nomenclatura: 05506YY00000000000000001700000000000041000",
        "Nomenclatura: 05506YY00000000000000001700000000000033000",
        "Nomenclatura: 05506YY00000000000000001700000000000034000",
        "Nomenclatura: 05506YY00000000000000001700000000000040000",
        "Nomenclatura: 05506YY00000000000000001700000000000039000",
        "Nomenclatura: 05506YY00000000000000001700000000000035000",
        "Nomenclatura: 05506YY00000000000000001700000000000037000",
        "Nomenclatura: 05506YY00000000000000001700000000000038000",
        "Nomenclatura: 05506YY00000000000000001700000000000046000",
        "Nomenclatura: 05506YY00000000000000001700000000000045000",
        "Nomenclatura: 05506YY00000000000000001700000000000047000",
        "Nomenclatura: 05506YY00000000000000001700000000000058000",
        "Nomenclatura: 05506YY00000000000000001700000000000001000",
        "Nomenclatura: 05506YY00000000000000001700000000000068000",
        "Nomenclatura: 05506YY00000000000000001700000000000067000",
        "Nomenclatura: 05506YY00000000000000001700000000000066000",
        "Nomenclatura: 05506YY00000000000000001700000000000065000",
        "Nomenclatura: 05506YY00000000000000001700000000000060000",
        "Nomenclatura: 05506YY00000000000000001700000000000059000",
        "Nomenclatura: 05506YY00000000000000001700000000000057000",
        "Nomenclatura: 05506YY00000000000000001700000000000056000",
        "Nomenclatura: 05506YY00000000000000001700000000000048000",
        "Nomenclatura: 05506YY00000000000000001700000000000086000",
        "Nomenclatura: 05506YY00000000000000001700000000000085000",
        "Nomenclatura: 05506YY0000000000000000170000000000008800A",
        "Nomenclatura: 05506YY0000000000000000170000000000008800B",
        "Nomenclatura: 05506YY00000000000000001700000000000084000",
        "Nomenclatura: 05506YY0000000000000000170000000000004900A",
        "Nomenclatura: 05506YY00000000000000001700000000000051000",
        "Nomenclatura: 05506YY00000000000000001700000000000083000",
        "Nomenclatura: 05506YY00000000000000001700000000000082000",
        "Nomenclatura: 05506YY00000000000000001700000000000052000",
        "Nomenclatura: 05506YY00000000000000001700000000000081000",
        "Nomenclatura: 05506YY00000000000000001700000000000089000",
        "Nomenclatura: 05506YY00000000000000001700000000000090000",
        "Nomenclatura: 05506YY00000000000000001700000000000091000",
        "Nomenclatura: 05506YY00000000000000002200000000000133000",
        "Nomenclatura: 05506YY00000000000000002200000000000132000",
        "Nomenclatura: 05506YY00000000000000002400000000000009000",
        "Nomenclatura: 05506YY00000000000000002400000000000008000",
        "Nomenclatura: 05506YY00000000000000002400000000000006000",
        "Nomenclatura: 05506YY00000000000000002400000000000007000",
        "Nomenclatura: 05506YY00000000000000002400000000000010000",
        "Nomenclatura: 05506YY00000000000000002400000000000017000",
        "Nomenclatura: 05506YY00000000000000002400000000000018000",
        "Nomenclatura: 05506YY00000000000000002400000000000019000",
        "Nomenclatura: 05506YY00000000000000002400000000000022000",
        "Nomenclatura: 05506YY00000000000000002400000000000021000",
        "Nomenclatura: 05506YY00000000000000002400000000000029000",
        "Nomenclatura: 05506YY00000000000000002400000000000020000",
        "Nomenclatura: 05506YY00000000000000002400000000000005000",
        "Nomenclatura: 05506YY00000000000000002400000000000004000",
        "Nomenclatura: 05506YY00000000000000001700000000000076000",
        "Nomenclatura: 05506YY00000000000000001700000000000077000",
        "Nomenclatura: 05506YY00000000000000001700000000000080000",
        "Nomenclatura: 05506YY00000000000000001700000000000079000",
        "Nomenclatura: 05506YY0000000000000000170000000000007800A",
        "Nomenclatura: 05506YY0000000000000000170000000000007800B",
        "Nomenclatura: 05506YY00000000000000001700000000000053000",
        "Nomenclatura: 05506YY00000000000000001700000000000055000",
        "Nomenclatura: 05506YY00000000000000001700000000000054000",
        "Nomenclatura: 05506YY00000000000000001700000000000061000",
        "Nomenclatura: 05506YY00000000000000001700000000000062000",
        "Nomenclatura: 05506YY00000000000000001700000000000063000",
        "Nomenclatura: 05506YY00000000000000001700000000000075000",
        "Nomenclatura: 05506YY00000000000000001700000000000074000",
        "Nomenclatura: 05506YY00000000000000001700000000000073000",
        "Nomenclatura: 05506YY00000000000000002000000000000018000",
        "Nomenclatura: 05506YY00000000000000002400000000000001000",
        "Nomenclatura: 05506YY00000000000000002400000000000002000",
        "Nomenclatura: 05506YY00000000000000002400000000000003000",
        "Nomenclatura: 05506YY00000000000000002400000000000030000",
        "Nomenclatura: 05506YY00000000000000002400000000000031000",
        "Nomenclatura: 05506YY00000000000000002400000000000028000",
        "Nomenclatura: 05506YY00000000000000002400000000000027000",
        "Nomenclatura: 05506YY00000000000000002400000000000026000",
        "Nomenclatura: 05506YY00000000000000002400000000000032000",
        "Nomenclatura: 05506YY00000000000000002400000000000033000",
        "Nomenclatura: 05506YY00000000000000002400000000000037000",
        "Nomenclatura: 05506YY00000000000000002400000000000038000",
        "Nomenclatura: 05506YY00000000000000002400000000000039000",
        "Nomenclatura: 05506YY00000000000000002400000000000040000",
        "Nomenclatura: 05506YY00000000000000002300000000000007000",
        "Nomenclatura: 05506YY00000000000000002300000000000008000",
        "Nomenclatura: 05506YY00000000000000002400000000000036000",
        "Nomenclatura: 05506YY00000000000000002300000000000010000",
        "Nomenclatura: 05506YY00000000000000002300000000000009000",
        "Nomenclatura: 05506YY00000000000000002300000000000011000",
        "Nomenclatura: 05506YY00000000000000002300000000000012000",
        "Nomenclatura: 05506YY00000000000000002300000000000013000",
        "Nomenclatura: 05506YY00000000000000002300000000000014000",
        "Nomenclatura: 05506YY00000000000000002300000000000015000",
        "Nomenclatura: 05506YY00000000000000002300000000000018000",
        "Nomenclatura: 05506YY00000000000000002300000000000017000",
        "Nomenclatura: 05506YY00000000000000002300000000000003000",
        "Nomenclatura: 05506YY00000000000000002300000000000016000",
        "Nomenclatura: 05506YY00000000000000002300000000000006000",
        "Nomenclatura: 05506YY00000000000000002300000000000005000",
        "Nomenclatura: 05506YY00000000000000002300000000000004000",
        "Nomenclatura: 05506YY00000000000000002000000000000019000",
        "Nomenclatura: 05506YY00000000000000002000000000000020000",
        "Nomenclatura: 05506YY00000000000000002000000000000021000",
        "Nomenclatura: 05506YY00000000000000002300000000000002000",
        "Nomenclatura: 05506YY00000000000000002000000000000022000",
        "Nomenclatura: 05506YY00000000000000002000000000000006000",
        "Nomenclatura: 05506YY00000000000000002000000000000005000",
        "Nomenclatura: 05506YY00000000000000002000000000000024000",
        "Nomenclatura: 05506YY00000000000000002000000000000023000",
        "Nomenclatura: 05506YY00000000000000002000000000000025000",
        "Nomenclatura: 05506YY00000000000000002000000000000026000",
        "Nomenclatura: 05506YY00000000000000002000000000000004000",
        "Nomenclatura: 05506YY00000000000000002000000000000003000",
        "Nomenclatura: 05506YY0000000000000000200000000000000900A",
        "Nomenclatura: 05506YY00000000000000002000000000000008000",
        "Nomenclatura: 05506YY00000000000000002000000000000007000",
        "Nomenclatura: 05506YY00000000000000002000000000000017000",
        "Nomenclatura: 05506YY00000000000000002000000000000016000",
        "Nomenclatura: 05506YY00000000000000002000000000000015000",
        "Nomenclatura: 05506YY00000000000000001700000000000072000",
        "Nomenclatura: 05506YY00000000000000001700000000000064000",
        "Nomenclatura: 05506YY00000000000000001700000000000071000",
        "Nomenclatura: 05506YY00000000000000001700000000000070000",
        "Nomenclatura: 05506YY00000000000000001700000000000069000",
        "Nomenclatura: 05506YY00000000000000002000000000000013000",
        "Nomenclatura: 05506YY00000000000000002000000000000014000",
        "Nomenclatura: 05506YY00000000000000002000000000000012000",
        "Nomenclatura: 05506YY00000000000000002000000000000011000",
        "Nomenclatura: 05506YY00000000000000001700000000000020000",
        "Nomenclatura: 05506YY00000000000000001700000000000021000",
        "Nomenclatura: 05506YY00000000000000001700000000000036000",
        "Nomenclatura: 05506YY00000000000000001700000000000022000",
        "Nomenclatura: 05506YY00000000000000001700000000000023000",
        "Nomenclatura: 05506YY00000000000000001700000000000024000",
        "Nomenclatura: 05506YY00000000000000001700000000000018000",
        "Nomenclatura: 05506YY00000000000000001700000000000019000",
        "Nomenclatura: 05506YY00000000000000001700000000000010000",
        "Nomenclatura: 05506YY00000000000000001700000000000007000",
        "Nomenclatura: 05506YY00000000000000001700000000000008000",
        "Nomenclatura: 05506YY00000000000000001700000000000009000",
        "Nomenclatura: 05506YY00000000000000002000000000000002000",
        "Nomenclatura: 05506YY00000000000000002000000000000001000",
        "Nomenclatura: 05506YY00000000000000002000000000000027000",
        "Nomenclatura: 05506YY00000000000000001600000000000013000",
        "Nomenclatura: 05506YY00000000000000001600000000000014000",
        "Nomenclatura: 05506YY00000000000000001600000000000015000",
        "Nomenclatura: 05506YY0000000000000000160000000000002300A",
        "Nomenclatura: 05506YY00000000000000001600000000000026000",
        "Nomenclatura: 05506YY00000000000000001600000000000022000",
        "Nomenclatura: 05506YY00000000000000001600000000000021000",
        "Nomenclatura: 05506YY00000000000000001600000000000027000",
        "Nomenclatura: 05506YY00000000000000001600000000000020000",
        "Nomenclatura: 05506YY00000000000000001600000000000001000",
        "Nomenclatura: 05506YY00000000000000001600000000000018000",
        "Nomenclatura: 05506YY00000000000000001600000000000019000",
        "Nomenclatura: 05506YY00000000000000001600000000000029000",
        "Nomenclatura: 05506YY00000000000000001600000000000028000",
        "Nomenclatura: 05506YY0000000000000000160000000000003100A",
        "Nomenclatura: 05506YY00000000000000001600000000000030000",
        "Nomenclatura: 05506YY00000000000000002100000000000001000",
        "Nomenclatura: 05506YY00000000000000001600000000000033000",
        "Nomenclatura: 05506YY00000000000000001600000000000034000",
        "Nomenclatura: 05506YY00000000000000001600000000000035000",
        "Nomenclatura: 05506YY00000000000000001600000000000025000",
        "Nomenclatura: 05506YY00000000000000002300000000000001000",
        "Nomenclatura: 05506YY0000000000000000220000000000000300A",
        "Nomenclatura: 05506YY0000000000000000220000000000000200B",
        "Nomenclatura: 05506YY00000000000000002200000000000015000",
        "Nomenclatura: 05506YY00000000000000002300000000000025000",
        "Nomenclatura: 05506YY00000000000000002300000000000026000",
        "Nomenclatura: 05506YY00000000000000002300000000000027000",
        "Nomenclatura: 05506YY00000000000000002300000000000019000",
        "Nomenclatura: 05506YY00000000000000002300000000000024000",
        "Nomenclatura: 05506YY00000000000000002300000000000023000",
        "Nomenclatura: 05506YY00000000000000002300000000000020000",
        "Nomenclatura: 05506YY00000000000000002300000000000021000",
        "Nomenclatura: 05506YY00000000000000002300000000000022000",
        "Nomenclatura: 05506YY00000000000000002200000000000053000",
        "Nomenclatura: 05506YY00000000000000002200000000000031000",
        "Nomenclatura: 05506YY00000000000000002200000000000017000",
        "Nomenclatura: 05506YY00000000000000002200000000000016000",
        "Nomenclatura: 05506YY00000000000000002200000000000019000",
        "Nomenclatura: 05506YY00000000000000002200000000000018000",
        "Nomenclatura: 05506YY00000000000000002200000000000030000",
        "Nomenclatura: 05506YY00000000000000002200000000000029000",
        "Nomenclatura: 05506YY00000000000000002200000000000028000",
        "Nomenclatura: 05506YY00000000000000002200000000000027000",
        "Nomenclatura: 05506YY00000000000000002200000000000020000",
        "Nomenclatura: 05506YY00000000000000002200000000000021000",
        "Nomenclatura: 05506YY00000000000000002200000000000010000",
        "Nomenclatura: 05506YY00000000000000002200000000000011000",
        "Nomenclatura: 05506YY00000000000000002200000000000012000",
        "Nomenclatura: 05506YY00000000000000002200000000000013000",
        "Nomenclatura: 05506YY00000000000000002200000000000014000",
        "Nomenclatura: 05506YY00000000000000002200000000000005000",
        "Nomenclatura: 05506YY00000000000000002200000000000004000",
        "Nomenclatura: 05506YY00000000000000002200000000000006000",
        "Nomenclatura: 05506YY00000000000000002200000000000007000",
        "Nomenclatura: 05506YY00000000000000002200000000000008000",
        "Nomenclatura: 05506YY00000000000000002200000000000022000",
        "Nomenclatura: 05506YY00000000000000002200000000000009000",
        "Nomenclatura: 05506YY00000000000000002200000000000023000",
        "Nomenclatura: 05506YY0000000000000000220000000000002400A",
        "Nomenclatura: 05506YY00000000000000002200000000000037000",
        "Nomenclatura: 05506YY00000000000000002200000000000026000",
        "Nomenclatura: 05506YY00000000000000002200000000000038000",
        "Nomenclatura: 05506YY00000000000000002200000000000039000",
        "Nomenclatura: 05506YY00000000000000001600000000000017000",
        "Nomenclatura: 05506YY00000000000000001600000000000016000",
        "Nomenclatura: 05506YY00000000000000001600000000000009000",
        "Nomenclatura: 05506YY00000000000000001600000000000010000",
        "Nomenclatura: 05506YY00000000000000001600000000000008000",
        "Nomenclatura: 05506YY00000000000000001600000000000004000",
        "Nomenclatura: 05506YY00000000000000001600000000000005000",
        "Nomenclatura: 05506YY00000000000000001600000000000006000",
        "Nomenclatura: 05506YY00000000000000001600000000000007000",
        "Nomenclatura: 05506YY00000000000000003400000000000000000",
        "Nomenclatura: 05506YY00000000000000001700000000000087000",
        "Nomenclatura: 05506YY00000000000000001900000000000001000",
        "Nomenclatura: 05506YY00000000000000001800000000000001000",
        "Nomenclatura: 05506YY00000000000000002200000000000001000",
        "Nomenclatura: 05506YY00000000000000002500000000000000000",
        "Nomenclatura: 05506YY00000000000000002200000000000040000",
        "Nomenclatura: 05506YY00000000000000002200000000000041000",
        "Nomenclatura: 05506YY00000000000000002200000000000042000",
        "Nomenclatura: 05506YY0000000000000000220000000000004300A",
        "Nomenclatura: 05506YY00000000000000002200000000000036000",
        "Nomenclatura: 05506YY00000000000000002200000000000035000",
        "Nomenclatura: 05506YY00000000000000002200000000000034000",
        "Nomenclatura: 05506YY00000000000000002200000000000032000",
        "Nomenclatura: 05506YY00000000000000002200000000000033000",
        "Nomenclatura: 05506YY00000000000000002200000000000047000",
        "Nomenclatura: 05506YY00000000000000002200000000000049000",
        "Nomenclatura: 05506YY00000000000000002200000000000058000",
        "Nomenclatura: 05506YY00000000000000002200000000000050000",
        "Nomenclatura: 05506YY00000000000000002200000000000052000",
        "Nomenclatura: 05506YY00000000000000002200000000000051000",
        "Nomenclatura: 05506YY00000000000000002200000000000055000",
        "Nomenclatura: 05506YY00000000000000002200000000000054000",
        "Nomenclatura: 05506YY00000000000000002200000000000056000",
        "Nomenclatura: 05506YY00000000000000002200000000000057000",
        "Nomenclatura: 05506YY00000000000000002200000000000062000",
        "Nomenclatura: 05506YY00000000000000002200000000000061000",
        "Nomenclatura: 05506YY00000000000000002200000000000071000",
        "Nomenclatura: 05506YY00000000000000002200000000000060000",
        "Nomenclatura: 05506YY00000000000000002200000000000059000",
        "Nomenclatura: 05506YY00000000000000002200000000000048000",
        "Nomenclatura: 05506YY00000000000000002200000000000074000",
        "Nomenclatura: 05506YY00000000000000002200000000000076000",
        "Nomenclatura: 05506YY00000000000000002200000000000077000",
        "Nomenclatura: 05506YY00000000000000002200000000000073000",
        "Nomenclatura: 05506YY00000000000000002200000000000072000",
        "Nomenclatura: 05506YY00000000000000002200000000000070000",
        "Nomenclatura: 05506YY0000000000000000220000000000006300A",
        "Nomenclatura: 05506YY00000000000000002200000000000065000",
        "Nomenclatura: 05506YY00000000000000002200000000000066000",
        "Nomenclatura: 05506YY00000000000000002200000000000067000",
        "Nomenclatura: 05506YY00000000000000002200000000000080000",
        "Nomenclatura: 05506YY00000000000000002200000000000079000",
        "Nomenclatura: 05506YY00000000000000002200000000000078000",
        "Nomenclatura: 05506YY00000000000000002200000000000084000",
        "Nomenclatura: 05506YY00000000000000002200000000000083000",
        "Nomenclatura: 05506YY00000000000000002200000000000082000",
        "Nomenclatura: 05506YY00000000000000002200000000000081000",
        "Nomenclatura: 05506YY00000000000000002200000000000001000",
        "Nomenclatura: 05506YY00000000000000002400000000000035000",
        "Nomenclatura: 05506YY00000000000000002400000000000034000",
        "Nomenclatura: 05506YY00000000000000002400000000000025000",
        "Nomenclatura: 05506YY00000000000000002200000000000093000",
        "Nomenclatura: 05506YY00000000000000002200000000000092000",
        "Nomenclatura: 05506YY00000000000000002200000000000091000",
        "Nomenclatura: 05506YY00000000000000002200000000000094000",
        "Nomenclatura: 05506YY00000000000000002200000000000095000",
        "Nomenclatura: 05506YY00000000000000002200000000000096000",
        "Nomenclatura: 05506YY00000000000000002200000000000090000",
        "Nomenclatura: 05506YY00000000000000002200000000000085000",
        "Nomenclatura: 05506YY0000000000000000220000000000008800A",
        "Nomenclatura: 05506YY00000000000000002200000000000107000",
        "Nomenclatura: 05506YY00000000000000002200000000000108000",
        "Nomenclatura: 05506YY00000000000000002200000000000102000",
        "Nomenclatura: 05506YY00000000000000002200000000000103000",
        "Nomenclatura: 05506YY00000000000000002200000000000104000",
        "Nomenclatura: 05506YY00000000000000002200000000000105000",
        "Nomenclatura: 05506YY00000000000000002400000000000024000",
        "Nomenclatura: 05506YY00000000000000002400000000000023000",
        "Nomenclatura: 05506YY00000000000000002400000000000016000",
        "Nomenclatura: 05506YY00000000000000002400000000000015000",
        "Nomenclatura: 05506YY00000000000000002400000000000014000",
        "Nomenclatura: 05506YY00000000000000002400000000000011000",
        "Nomenclatura: 05506YY00000000000000002400000000000012000",
        "Nomenclatura: 05506YY00000000000000002400000000000013000",
        "Nomenclatura: 05506YY00000000000000002200000000000106000",
        "Nomenclatura: 05506YY00000000000000002200000000000128000",
        "Nomenclatura: 05506YY0000000000000000220000000000013000A",
        "Nomenclatura: 05506YY00000000000000002200000000000129000",
        "Nomenclatura: 05506YY0000000000000000220000000000012600A",
        "Nomenclatura: 05506YY00000000000000002200000000000119000",
        "Nomenclatura: 05506YY00000000000000002200000000000118000",
        "Nomenclatura: 05506YY0000000000000000220000000000011600A",
        "Nomenclatura: 05506YY00000000000000002200000000000120000",
        "Nomenclatura: 05506YY00000000000000002200000000000123000",
        "Nomenclatura: 05506YY00000000000000002200000000000112000",
        "Nomenclatura: 05506YY00000000000000002200000000000113000",
        "Nomenclatura: 05506YY00000000000000002200000000000122000",
        "Nomenclatura: 05506YY00000000000000002200000000000086000",
        "Nomenclatura: 05506YY00000000000000002200000000000075000",
        "Nomenclatura: 05506YY00000000000000002200000000000087000",
        "Nomenclatura: 05506YY00000000000000002200000000000098000",
        "Nomenclatura: 05506YY00000000000000002200000000000097000",
        "Nomenclatura: 05506YY00000000000000002200000000000099000",
        "Nomenclatura: 05506YY00000000000000002200000000000100000",
        "Nomenclatura: 05506YY00000000000000002200000000000101000",
        "Nomenclatura: 05506YY00000000000000002200000000000109000",
        "Nomenclatura: 05506YY00000000000000002200000000000110000",
        "Nomenclatura: 05506YY00000000000000002200000000000111000",
        "Nomenclatura: 05506YY00000000000000002200000000000115000",
        "Nomenclatura: 05506YY00000000000000002200000000000121000",
        "Nomenclatura: 05506YY00000000000000002200000000000114000",
        "Nomenclatura: 05506YY00000000000000002200000000000124000",
        "Nomenclatura: 05506YY00000000000000002200000000000125000"
      ],
      "totalAreaSqM": 727917,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-39-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0B0002CF",
    "name": "Elida IV",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0082579999952,
        "lat": -34.8927439999928
      },
      {
        "lng": -58.0082169999952,
        "lat": -34.8927739999928
      },
      {
        "lng": -58.0085669999952,
        "lat": -34.8931069999928
      },
      {
        "lng": -58.0083199999952,
        "lat": -34.8932919999928
      },
      {
        "lng": -58.0079429999952,
        "lat": -34.8929369999928
      },
      {
        "lng": -58.0076019999952,
        "lat": -34.8931199999928
      },
      {
        "lng": -58.0072289999952,
        "lat": -34.8926499999928
      },
      {
        "lng": -58.00727899999519,
        "lat": -34.8926119999928
      },
      {
        "lng": -58.00814399999519,
        "lat": -34.8923979999928
      },
      {
        "lng": -58.0082579999952,
        "lat": -34.8927439999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 900000,
      "marketValueRegularizedUsd": 1200000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A002200000000000000000002200M0005000",
        "Nomenclatura: 055030A002200000000000000000002200M0012000",
        "Nomenclatura: 055030A002200000000000000000002200M0018000",
        "Nomenclatura: 055030A002200000000000000000002200M000600B",
        "Nomenclatura: 055030A002200000000000000000002200M001300A"
      ],
      "totalAreaSqM": 8959,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.6,
        "fot": 0.8,
        "density": 250,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R4",
        "description": "AREA URBANA / RESIDENCIAL 4",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-40-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0B0002D0",
    "name": "Elida III",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0146822999953,
        "lat": -34.8945633999928
      },
      {
        "lng": -58.0142772999953,
        "lat": -34.8948673999928
      },
      {
        "lng": -58.0138322999953,
        "lat": -34.8944733999928
      },
      {
        "lng": -58.0138332999953,
        "lat": -34.8944333999928
      },
      {
        "lng": -58.0142122999953,
        "lat": -34.8941503999928
      },
      {
        "lng": -58.0146822999953,
        "lat": -34.8945633999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 910000,
      "marketValueRegularizedUsd": 1210000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A002100000000000000000002100B000300A",
        "Nomenclatura: 055030A002100000000000000000002100B000500A",
        "Nomenclatura: 055030A002100000000000000000002100B0008000",
        "Nomenclatura: 055030A002100000000000000000002100B001100A"
      ],
      "totalAreaSqM": 7373,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.6,
        "fot": 0.8,
        "density": 250,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R4",
        "description": "AREA URBANA / RESIDENCIAL 4",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-41-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0B0002DD",
    "name": "El Quimilar",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0494335999958,
        "lat": -34.8587456999928
      },
      {
        "lng": -58.0473253999957,
        "lat": -34.8558036999928
      },
      {
        "lng": -58.04940139999579,
        "lat": -34.8547810999928
      },
      {
        "lng": -58.0560905999958,
        "lat": -34.8535469999928
      },
      {
        "lng": -58.0575890999959,
        "lat": -34.8542004999928
      },
      {
        "lng": -58.0589588999959,
        "lat": -34.8551707999928
      },
      {
        "lng": -58.05985319999589,
        "lat": -34.8563367999928
      },
      {
        "lng": -58.05747899999591,
        "lat": -34.8579291999928
      },
      {
        "lng": -58.0486979999958,
        "lat": -34.8622239999928
      },
      {
        "lng": -58.0469926999957,
        "lat": -34.8598915999928
      },
      {
        "lng": -58.0494335999958,
        "lat": -34.8587456999928
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 920000,
      "marketValueRegularizedUsd": 1220000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055040U00000000000000000000001260000007000",
        "Nomenclatura: 055040U00000000000000000000001260000008000",
        "Nomenclatura: 055040U00000000000000000000001260000009000",
        "Nomenclatura: 055040U00000000000000000000001260000010000",
        "Nomenclatura: 055040U00000000000000000000001270000001000",
        "Nomenclatura: 055040U00000000000000000000001270000002000",
        "Nomenclatura: 055040U00000000000000000000001270000014000",
        "Nomenclatura: 055040U00000000000000000000001270000003000",
        "Nomenclatura: 055040U00000000000000000000001270000004000",
        "Nomenclatura: 055040U00000000000000000000001290000001000",
        "Nomenclatura: 055040U00000000000000000000001290000002000",
        "Nomenclatura: 055040U00000000000000000000001290000014000",
        "Nomenclatura: 055040U00000000000000000000001290000013000",
        "Nomenclatura: 055040U00000000000000000000001270000006000",
        "Nomenclatura: 055040U00000000000000000000001270000005000",
        "Nomenclatura: 055040U00000000000000000000001270000007000",
        "Nomenclatura: 055040U00000000000000000000001290000011000",
        "Nomenclatura: 055040U00000000000000000000001270000008000",
        "Nomenclatura: 055040U00000000000000000000001290000010000",
        "Nomenclatura: 055040U00000000000000000000001290000012000",
        "Nomenclatura: 055040U00000000000000000000001290000007000",
        "Nomenclatura: 055040U00000000000000000000001290000009000",
        "Nomenclatura: 055040U00000000000000000000001290000008000",
        "Nomenclatura: 055040U00000000000000000000001310000013000",
        "Nomenclatura: 055040U00000000000000000000001290000006000",
        "Nomenclatura: 055040U00000000000000000000001290000005000",
        "Nomenclatura: 055040U00000000000000000000001290000003000",
        "Nomenclatura: 055040U00000000000000000000001290000004000",
        "Nomenclatura: 055040U000000000000000000000013000B0008000",
        "Nomenclatura: 055040U000000000000000000000013000B0007000",
        "Nomenclatura: 055040U00000000000000000000001310000003000",
        "Nomenclatura: 055040U00000000000000000000001310000002000",
        "Nomenclatura: 055040U00000000000000000000001310000001000",
        "Nomenclatura: 055040U00000000000000000000001310000014000",
        "Nomenclatura: 055040U00000000000000000000001310000005000",
        "Nomenclatura: 055040U00000000000000000000001310000004000",
        "Nomenclatura: 055040U00000000000000000000001330000001000",
        "Nomenclatura: 055040U000000000000000000000013000B0004000",
        "Nomenclatura: 055040U000000000000000000000013000B0005000",
        "Nomenclatura: 055040U000000000000000000000013000B0006000",
        "Nomenclatura: 055040U000000000000000000000013000B0002000",
        "Nomenclatura: 055040U000000000000000000000013000B0003000",
        "Nomenclatura: 055040U000000000000000000000013000A0006000",
        "Nomenclatura: 055040U000000000000000000000013000A0008000",
        "Nomenclatura: 055040U000000000000000000000013000A0001000",
        "Nomenclatura: 055040U000000000000000000000013000A0002000",
        "Nomenclatura: 055040U000000000000000000000013000A0007000",
        "Nomenclatura: 055040U00000000000000000000001500000017000",
        "Nomenclatura: 055040U00000000000000000000001500000006000",
        "Nomenclatura: 055040U00000000000000000000001500000007000",
        "Nomenclatura: 055040U00000000000000000000001500000008000",
        "Nomenclatura: 055040U00000000000000000000001500000015000",
        "Nomenclatura: 055040U00000000000000000000001500000014000",
        "Nomenclatura: 055040U00000000000000000000001500000016000",
        "Nomenclatura: 055040U00000000000000000000001500000018000",
        "Nomenclatura: 055040U00000000000000000000001500000002000",
        "Nomenclatura: 055040U00000000000000000000001500000001000",
        "Nomenclatura: 055040U00000000000000000000001480000003000",
        "Nomenclatura: 055040U00000000000000000000001330000008000",
        "Nomenclatura: 055040U00000000000000000000001330000009000",
        "Nomenclatura: 055040U00000000000000000000001330000011000",
        "Nomenclatura: 055040U00000000000000000000001330000007000",
        "Nomenclatura: 055040U00000000000000000000001330000006000",
        "Nomenclatura: 055040U00000000000000000000001330000014000",
        "Nomenclatura: 055040U00000000000000000000001330000005000",
        "Nomenclatura: 055040U00000000000000000000001330000013000",
        "Nomenclatura: 055040U00000000000000000000001330000012000",
        "Nomenclatura: 055040U00000000000000000000001310000006000",
        "Nomenclatura: 055040U00000000000000000000001310000007000",
        "Nomenclatura: 055040U00000000000000000000001310000009000",
        "Nomenclatura: 055040U00000000000000000000001310000008000",
        "Nomenclatura: 055040U00000000000000000000001330000010000",
        "Nomenclatura: 055040U00000000000000000000001480000001000",
        "Nomenclatura: 055040U00000000000000000000001460000002000",
        "Nomenclatura: 055040U00000000000000000000001460000001000",
        "Nomenclatura: 055040U00000000000000000000001310000010000",
        "Nomenclatura: 055040U00000000000000000000001310000012000",
        "Nomenclatura: 055040U00000000000000000000001310000011000",
        "Nomenclatura: 055040U00000000000000000000001440000002000",
        "Nomenclatura: 055040U00000000000000000000001440000001000",
        "Nomenclatura: 055040U00000000000000000000001440000006000",
        "Nomenclatura: 055040U00000000000000000000001440000003000",
        "Nomenclatura: 055040U00000000000000000000001440000004000",
        "Nomenclatura: 055040U00000000000000000000001460000007000",
        "Nomenclatura: 055040U00000000000000000000001460000006000",
        "Nomenclatura: 055040U00000000000000000000001470000006000",
        "Nomenclatura: 055040U00000000000000000000001470000001000",
        "Nomenclatura: 055040U00000000000000000000001470000002000",
        "Nomenclatura: 055040U00000000000000000000001490000001000",
        "Nomenclatura: 055040U00000000000000000000001480000010000",
        "Nomenclatura: 055040U00000000000000000000001460000005000",
        "Nomenclatura: 055040U0000000000000000000000146000000300A",
        "Nomenclatura: 055040U00000000000000000000001480000011000",
        "Nomenclatura: 055040U00000000000000000000001480000012000",
        "Nomenclatura: 055040U00000000000000000000001480000013000",
        "Nomenclatura: 055040U00000000000000000000001480000014000",
        "Nomenclatura: 055040U00000000000000000000001480000002000",
        "Nomenclatura: 055040U00000000000000000000001480000004000",
        "Nomenclatura: 055040U00000000000000000000001480000005000",
        "Nomenclatura: 055040U00000000000000000000001480000006000",
        "Nomenclatura: 055040U00000000000000000000001480000009000",
        "Nomenclatura: 055040U00000000000000000000001480000007000",
        "Nomenclatura: 055040U00000000000000000000001480000008000",
        "Nomenclatura: 055040U00000000000000000000001500000013000",
        "Nomenclatura: 055040U00000000000000000000001490000003000",
        "Nomenclatura: 055040U00000000000000000000001530000017000",
        "Nomenclatura: 055040U00000000000000000000001530000018000",
        "Nomenclatura: 055040U00000000000000000000001530000001000",
        "Nomenclatura: 055040U0000000000000000000000153000000200A",
        "Nomenclatura: 055040U0000000000000000000000153000000200B",
        "Nomenclatura: 055040U00000000000000000000001530000004000",
        "Nomenclatura: 055040U0000000000000000000000153000000500A",
        "Nomenclatura: 055040U00000000000000000000001530000007000",
        "Nomenclatura: 055040U00000000000000000000001530000008000",
        "Nomenclatura: 055040U00000000000000000000001530000015000",
        "Nomenclatura: 055040U0000000000000000000000153000001600A",
        "Nomenclatura: 055040U00000000000000000000001530000014000",
        "Nomenclatura: 055040U00000000000000000000001530000013000",
        "Nomenclatura: 055040U00000000000000000000001490000008000",
        "Nomenclatura: 055040U00000000000000000000001490000007000",
        "Nomenclatura: 055040U00000000000000000000001490000006000",
        "Nomenclatura: 055040U00000000000000000000001490000005000",
        "Nomenclatura: 055040U00000000000000000000001490000004000",
        "Nomenclatura: 055040U00000000000000000000001490000002000",
        "Nomenclatura: 055040U00000000000000000000001490000014000",
        "Nomenclatura: 055040U00000000000000000000001490000013000",
        "Nomenclatura: 055040U00000000000000000000001490000012000",
        "Nomenclatura: 055040U00000000000000000000001470000003000",
        "Nomenclatura: 055040U00000000000000000000001470000005000",
        "Nomenclatura: 055040U00000000000000000000001470000004000",
        "Nomenclatura: 055040U00000000000000000000001490000010000",
        "Nomenclatura: 055040U00000000000000000000001490000011000",
        "Nomenclatura: 055040U00000000000000000000001490000009000",
        "Nomenclatura: 055040U00000000000000000000001530000012000",
        "Nomenclatura: 055040U00000000000000000000001530000011000",
        "Nomenclatura: 055040U00000000000000000000001530000009000",
        "Nomenclatura: 055040U00000000000000000000001530000010000",
        "Nomenclatura: 055040U0000000000000000000000154000001200A",
        "Nomenclatura: 055040U00000000000000000000001540000010000",
        "Nomenclatura: 055040U0000000000000000000000155000001100A",
        "Nomenclatura: 055040U00000000000000000000001540000007000",
        "Nomenclatura: 055040U00000000000000000000001540000008000",
        "Nomenclatura: 055040U00000000000000000000001540000009000",
        "Nomenclatura: 055040U00000000000000000000001540000011000",
        "Nomenclatura: 055040U00000000000000000000001540000014000",
        "Nomenclatura: 055040U00000000000000000000001540000015000",
        "Nomenclatura: 055040U0000000000000000000000154000001700B",
        "Nomenclatura: 055040U0000000000000000000000154000001700A",
        "Nomenclatura: 055040U00000000000000000000001540000016000",
        "Nomenclatura: 055040U0000000000000000000000154000000500A",
        "Nomenclatura: 055040U00000000000000000000001540000018000",
        "Nomenclatura: 055040U00000000000000000000001540000002000",
        "Nomenclatura: 055040U00000000000000000000001540000001000",
        "Nomenclatura: 055040U00000000000000000000001530000003000",
        "Nomenclatura: 055040U00000000000000000000001500000012000",
        "Nomenclatura: 055040U00000000000000000000001500000011000",
        "Nomenclatura: 055040U00000000000000000000001500000010000",
        "Nomenclatura: 055040U00000000000000000000001500000009000",
        "Nomenclatura: 055040U00000000000000000000001330000002000",
        "Nomenclatura: 055040U00000000000000000000001510000012000",
        "Nomenclatura: 055040U0000000000000000060000000000000600E",
        "Nomenclatura: 055040U00000000000000000000001240000003000",
        "Nomenclatura: 055040U00000000000000000000001240000004000",
        "Nomenclatura: 055040U00000000000000000000001240000005000",
        "Nomenclatura: 055040U00000000000000000000001240000006000",
        "Nomenclatura: 055040U00000000000000000000001260000011000",
        "Nomenclatura: 055040U00000000000000000000001260000012000",
        "Nomenclatura: 055040U00000000000000000000001260000001000",
        "Nomenclatura: 055040U00000000000000000000001260000002000",
        "Nomenclatura: 055040U00000000000000000000001260000003000",
        "Nomenclatura: 055040U00000000000000000000001260000005000",
        "Nomenclatura: 055040U000000000000000000000012800A0001000",
        "Nomenclatura: 055040U00000000000000000000001260000004000",
        "Nomenclatura: 055040U000000000000000000000012800A0002000",
        "Nomenclatura: 055040U000000000000000000000012800A0003000",
        "Nomenclatura: 055040U000000000000000000000012800A0004000",
        "Nomenclatura: 055040U000000000000000000000012800A0007000",
        "Nomenclatura: 055040U000000000000000000000012800A0006000",
        "Nomenclatura: 055040U000000000000000000000012800A0005000",
        "Nomenclatura: 055040U000000000000000000000013000B0001000",
        "Nomenclatura: 055040U000000000000000000000012800B0005000",
        "Nomenclatura: 055040U000000000000000000000012800B0004000",
        "Nomenclatura: 055040U000000000000000000000012800B0003000",
        "Nomenclatura: 055040U000000000000000000000012800B0006000",
        "Nomenclatura: 055040U000000000000000000000012800B0007000",
        "Nomenclatura: 055040U000000000000000000000012800B0008000",
        "Nomenclatura: 055040U000000000000000000000012800B0001000",
        "Nomenclatura: 055040U000000000000000000000012800B0002000",
        "Nomenclatura: 055040U000000000000000000000012800A0008000",
        "Nomenclatura: 055040U00000000000000000000001260000006000",
        "Nomenclatura: 055040U00000000000000000000001430000007000",
        "Nomenclatura: 055040U00000000000000000000001430000008000",
        "Nomenclatura: 055040U00000000000000000000001430000005000",
        "Nomenclatura: 055040U00000000000000000000001430000006000",
        "Nomenclatura: 055040U00000000000000000000001450000007000",
        "Nomenclatura: 055040U00000000000000000000001450000008000",
        "Nomenclatura: 055040U00000000000000000000001450000004000",
        "Nomenclatura: 055040U00000000000000000000001450000005000",
        "Nomenclatura: 055040U00000000000000000000001450000010000",
        "Nomenclatura: 055040U00000000000000000000001450000003000",
        "Nomenclatura: 055040U00000000000000000000001450000002000",
        "Nomenclatura: 055040U00000000000000000000001450000001000",
        "Nomenclatura: 055040U00000000000000000000001450000009000",
        "Nomenclatura: 055040U00000000000000000000001430000004000",
        "Nomenclatura: 055040U00000000000000000000001430000003000",
        "Nomenclatura: 055040U00000000000000000000001430000002000",
        "Nomenclatura: 055040U00000000000000000000001440000005000",
        "Nomenclatura: 055040U00000000000000000000001420000006000",
        "Nomenclatura: 055040U00000000000000000000001420000005000",
        "Nomenclatura: 055040U00000000000000000000001420000007000",
        "Nomenclatura: 055040U00000000000000000000001420000008000",
        "Nomenclatura: 055040U00000000000000000000001430000001000",
        "Nomenclatura: 055040U00000000000000000000001430000010000",
        "Nomenclatura: 055040U00000000000000000000001430000009000",
        "Nomenclatura: 055040U00000000000000000000001410000003000",
        "Nomenclatura: 055040U00000000000000000000001410000004000",
        "Nomenclatura: 055040U00000000000000000000001410000005000",
        "Nomenclatura: 055040U00000000000000000000001410000006000",
        "Nomenclatura: 055040U00000000000000000000001410000010000",
        "Nomenclatura: 055040U00000000000000000000001410000002000",
        "Nomenclatura: 055040U00000000000000000000001410000001000",
        "Nomenclatura: 055040U00000000000000000000001410000009000",
        "Nomenclatura: 055040U00000000000000000000001390000007000",
        "Nomenclatura: 055040U00000000000000000000001390000009000",
        "Nomenclatura: 055040U00000000000000000000001390000008000",
        "Nomenclatura: 055040U00000000000000000000001410000007000",
        "Nomenclatura: 055040U00000000000000000000001410000008000",
        "Nomenclatura: 055040U00000000000000000000001390000010000",
        "Nomenclatura: 055040U00000000000000000000001390000011000",
        "Nomenclatura: 055040U00000000000000000000001390000006000",
        "Nomenclatura: 055040U00000000000000000000001390000012000",
        "Nomenclatura: 055040U000000000000000000000013700D0012000",
        "Nomenclatura: 055040U000000000000000000000013700D0011000",
        "Nomenclatura: 055040U000000000000000000000013700D0010000",
        "Nomenclatura: 055040U000000000000000000000013700D0009000",
        "Nomenclatura: 055040U000000000000000000000013700D0007000",
        "Nomenclatura: 055040U000000000000000000000013700D0008000",
        "Nomenclatura: 055040U00000000000000000000001400000004000",
        "Nomenclatura: 055040U00000000000000000000001400000006000",
        "Nomenclatura: 055040U00000000000000000000001400000005000",
        "Nomenclatura: 055040U00000000000000000000001420000001000",
        "Nomenclatura: 055040U00000000000000000000001420000011000",
        "Nomenclatura: 055040U0000000000000000000000142000000900A",
        "Nomenclatura: 055040U00000000000000000000001420000004000",
        "Nomenclatura: 055040U00000000000000000000001420000003000",
        "Nomenclatura: 055040U00000000000000000000001420000002000",
        "Nomenclatura: 055040U000000000000000000000013700D0013000",
        "Nomenclatura: 055040U00000000000000000000001380000008000",
        "Nomenclatura: 055040U00000000000000000000001390000002000",
        "Nomenclatura: 055040U00000000000000000000001390000001000",
        "Nomenclatura: 055040U00000000000000000000001390000014000",
        "Nomenclatura: 055040U00000000000000000000001390000013000",
        "Nomenclatura: 055040U00000000000000000000001390000005000",
        "Nomenclatura: 055040U00000000000000000000001390000004000",
        "Nomenclatura: 055040U00000000000000000000001390000003000",
        "Nomenclatura: 055040U00000000000000000000001400000007000",
        "Nomenclatura: 055040U00000000000000000000001400000008000",
        "Nomenclatura: 055040U00000000000000000000001400000003000",
        "Nomenclatura: 055040U00000000000000000000001450000006000",
        "Nomenclatura: 055040U000000000000000000000013200B0005000",
        "Nomenclatura: 055040U000000000000000000000013200B0004000",
        "Nomenclatura: 055040U000000000000000000000013200B0006000",
        "Nomenclatura: 055040U000000000000000000000013200B0008000",
        "Nomenclatura: 055040U000000000000000000000013200B0007000",
        "Nomenclatura: 055040U000000000000000000000013200B0001000",
        "Nomenclatura: 055040U000000000000000000000013000A0003000",
        "Nomenclatura: 055040U000000000000000000000013000A0004000",
        "Nomenclatura: 055040U000000000000000000000013000A0005000",
        "Nomenclatura: 055040U000000000000000000000013200A0006000",
        "Nomenclatura: 055040U000000000000000000000013200A0004000",
        "Nomenclatura: 055040U000000000000000000000013200A0003000",
        "Nomenclatura: 055040U000000000000000000000013200A0007000",
        "Nomenclatura: 055040U000000000000000000000013200A0008000",
        "Nomenclatura: 055040U000000000000000000000013200A0001000",
        "Nomenclatura: 055040U000000000000000000000013200A0002000",
        "Nomenclatura: 055040U000000000000000000000013200A0005000",
        "Nomenclatura: 055040U000000000000000000000013200B0002000",
        "Nomenclatura: 055040U000000000000000000000013200B0003000",
        "Nomenclatura: 055040U0000000000000000060000000000000500F",
        "Nomenclatura: 055040U0000000000000000000000152000000100A",
        "Nomenclatura: 055040U00000000000000000000001510000004000",
        "Nomenclatura: 055040U00000000000000000000001510000005000",
        "Nomenclatura: 055040U00000000000000000000001510000002000",
        "Nomenclatura: 055040U00000000000000000000001510000003000",
        "Nomenclatura: 055040U00000000000000000000001500000003000",
        "Nomenclatura: 055040U00000000000000000000001500000004000",
        "Nomenclatura: 055040U00000000000000000000001510000001000",
        "Nomenclatura: 055040U00000000000000000000001510000017000",
        "Nomenclatura: 055040U00000000000000000000001510000016000",
        "Nomenclatura: 055040U00000000000000000000001510000015000",
        "Nomenclatura: 055040U00000000000000000000001500000005000",
        "Nomenclatura: 055040U00000000000000000000001330000004000",
        "Nomenclatura: 055040U00000000000000000000001330000003000",
        "Nomenclatura: 055040U0000000000000000000000155000000900A",
        "Nomenclatura: 055040U0000000000000000000000155000000800A",
        "Nomenclatura: 055040U0000000000000000000000155000000700A",
        "Nomenclatura: 055040U0000000000000000000000155000000600A",
        "Nomenclatura: 055040U0000000000000000000000155000001000A",
        "Nomenclatura: 055040U0000000000000000000000155000001200A",
        "Nomenclatura: 055040U0000000000000000000000155000001300A",
        "Nomenclatura: 055040U0000000000000000000000155000001400A",
        "Nomenclatura: 055040U0000000000000000000000155000001500A",
        "Nomenclatura: 055040U00000000000000000000001510000011000",
        "Nomenclatura: 055040U00000000000000000000001510000014000",
        "Nomenclatura: 055040U00000000000000000000001510000013000",
        "Nomenclatura: 055040U00000000000000000000001510000008000",
        "Nomenclatura: 055040U0000000000000000000000151000000900A",
        "Nomenclatura: 055040U00000000000000000000001540000004000",
        "Nomenclatura: 055040U0000000000000000000000155000000100A",
        "Nomenclatura: 055040U0000000000000000000000152000000900A",
        "Nomenclatura: 055040U0000000000000000000000152000000800A",
        "Nomenclatura: 055040U0000000000000000000000152000000700A",
        "Nomenclatura: 055040U0000000000000000000000152000001200A",
        "Nomenclatura: 055040U0000000000000000000000152000001000A",
        "Nomenclatura: 055040U0000000000000000000000152000001100A",
        "Nomenclatura: 055040U00000000000000000000001510000007000",
        "Nomenclatura: 055040U00000000000000000000001510000006000",
        "Nomenclatura: 055040U0000000000000000000000152000001500A",
        "Nomenclatura: 055040U0000000000000000000000152000001400A",
        "Nomenclatura: 055040U0000000000000000000000152000001300A",
        "Nomenclatura: 055040U0000000000000000000000152000000500A",
        "Nomenclatura: 055040U0000000000000000000000152000000200A",
        "Nomenclatura: 055040U0000000000000000000000152000000500B",
        "Nomenclatura: 055040U0000000000000000000000152000000600A",
        "Nomenclatura: 055040U0000000000000000000000155000000300A",
        "Nomenclatura: 055040U0000000000000000000000155000000200A",
        "Nomenclatura: 055040U0000000000000000000000155000000400A",
        "Nomenclatura: 055040U0000000000000000000000155000000500A",
        "Nomenclatura: 055040U0000000000000000060000000000000500G",
        "Nomenclatura: 055040U00000000000000000000001540000003000",
        "Nomenclatura: 055040U000000000000000000000013700D0003000",
        "Nomenclatura: 055040U000000000000000000000013700D0016000",
        "Nomenclatura: 055040U000000000000000000000013700D0001000",
        "Nomenclatura: 055040U000000000000000000000013700B0005000",
        "Nomenclatura: 055040U000000000000000000000013700C0011000",
        "Nomenclatura: 055040U000000000000000000000013700D0002000",
        "Nomenclatura: 055040U000000000000000000000013700C0010000",
        "Nomenclatura: 055040U000000000000000000000013700C0009000",
        "Nomenclatura: 055040U000000000000000000000013700C0008000",
        "Nomenclatura: 055040U000000000000000000000013700C0007000",
        "Nomenclatura: 055040U00000000000000000000001380000002000",
        "Nomenclatura: 055040U00000000000000000000001380000013000",
        "Nomenclatura: 055040U00000000000000000000001380000014000",
        "Nomenclatura: 055040U00000000000000000000001380000012000",
        "Nomenclatura: 055040U00000000000000000000001380000011000",
        "Nomenclatura: 055040U00000000000000000000001380000006000",
        "Nomenclatura: 055040U00000000000000000000001400000001000",
        "Nomenclatura: 055040U00000000000000000000001270000012000",
        "Nomenclatura: 055040U00000000000000000000001250000008000",
        "Nomenclatura: 055040U00000000000000000000001250000009000",
        "Nomenclatura: 055040U00000000000000000000001250000010000",
        "Nomenclatura: 055040U00000000000000000000001250000007000",
        "Nomenclatura: 055040U00000000000000000000001270000013000",
        "Nomenclatura: 055040U00000000000000000000001250000006000",
        "Nomenclatura: 055040U0000000000000000060000000000000600F",
        "Nomenclatura: 055040U00000000000000000000001250000011000",
        "Nomenclatura: 055040U00000000000000000000001380000004000",
        "Nomenclatura: 055040U00000000000000000000001380000005000",
        "Nomenclatura: 055040U00000000000000000000001380000003000",
        "Nomenclatura: 055040U000000000000000000000013700B0014000",
        "Nomenclatura: 055040U000000000000000000000013700B0013000",
        "Nomenclatura: 055040U000000000000000000000013700B0012000",
        "Nomenclatura: 055040U000000000000000000000013700B0006000",
        "Nomenclatura: 055040U000000000000000000000013700B0007000",
        "Nomenclatura: 055040U000000000000000000000013700B0008000",
        "Nomenclatura: 055040U000000000000000000000013700B001100A",
        "Nomenclatura: 055040U00000000000000000000001400000009000",
        "Nomenclatura: 055040U00000000000000000000001270000009000",
        "Nomenclatura: 055040U00000000000000000000001380000009000",
        "Nomenclatura: 055040U000000000000000000000013700D0014000",
        "Nomenclatura: 055040U000000000000000000000013700D0006000",
        "Nomenclatura: 055040U000000000000000000000013700D0005000",
        "Nomenclatura: 055040U00000000000000000000001400000010000",
        "Nomenclatura: 055040U000000000000000000000013700B0009000",
        "Nomenclatura: 055040U00000000000000000000001270000010000",
        "Nomenclatura: 055040U00000000000000000000001400000002000",
        "Nomenclatura: 055040U00000000000000000000001380000010000",
        "Nomenclatura: 055040U00000000000000000000001380000007000",
        "Nomenclatura: 055040U000000000000000000000013700D0015000",
        "Nomenclatura: 055040U000000000000000000000013700D0004000",
        "Nomenclatura: 055040U00000000000000000000001270000011000",
        "Nomenclatura: 055040U000000000000000000000013700B0010000",
        "Nomenclatura: 055040U000000000000000000000013700B0004000",
        "Nomenclatura: 055040U000000000000000000000013700A0011000",
        "Nomenclatura: 055040U000000000000000000000013700A0010000",
        "Nomenclatura: 055040U000000000000000000000013700A0008000",
        "Nomenclatura: 055040U000000000000000000000013700A0009000",
        "Nomenclatura: 055040U000000000000000000000013700C0014000",
        "Nomenclatura: 055040U000000000000000000000013700C0013000",
        "Nomenclatura: 055040U000000000000000000000013700C0012000",
        "Nomenclatura: 055040U000000000000000000000013700C0006000",
        "Nomenclatura: 055040U000000000000000000000013700C0015000",
        "Nomenclatura: 055040U000000000000000000000013700C0002000",
        "Nomenclatura: 055040U000000000000000000000013700C0003000",
        "Nomenclatura: 055040U000000000000000000000013700C0005000",
        "Nomenclatura: 055040U000000000000000000000013700C0004000",
        "Nomenclatura: 055040U00000000000000000000001380000001000",
        "Nomenclatura: 055040U00000000000000000000001250000012000",
        "Nomenclatura: 055040U00000000000000000000001250000005000",
        "Nomenclatura: 055040U00000000000000000000001250000003000",
        "Nomenclatura: 055040U00000000000000000000001250000004000",
        "Nomenclatura: 055040U00000000000000000000001250000001000",
        "Nomenclatura: 055040U00000000000000000000001250000002000",
        "Nomenclatura: 055040U00000000000000000000001250000014000",
        "Nomenclatura: 055040U00000000000000000000001250000013000",
        "Nomenclatura: 055040U00000000000000000000001230000006000",
        "Nomenclatura: 055040U00000000000000000000001230000007000",
        "Nomenclatura: 055040U00000000000000000000001230000008000",
        "Nomenclatura: 055040U00000000000000000000001230000010000",
        "Nomenclatura: 055040U00000000000000000000001230000009000",
        "Nomenclatura: 055040U00000000000000000000001230000012000",
        "Nomenclatura: 055040U00000000000000000000001230000011000",
        "Nomenclatura: 055040U00000000000000000000001230000013000",
        "Nomenclatura: 055040U00000000000000000000001230000014000",
        "Nomenclatura: 055040U00000000000000000000001230000001000",
        "Nomenclatura: 055040U00000000000000000000001220000003000",
        "Nomenclatura: 055040U00000000000000000000001220000002000",
        "Nomenclatura: 055040U0000000000000000000000123000000300A",
        "Nomenclatura: 055040U00000000000000000000001230000002000",
        "Nomenclatura: 055040U00000000000000000000001230000005000",
        "Nomenclatura: 055040U00000000000000000000001230000004000",
        "Nomenclatura: 055040U00000000000000000000001240000007000",
        "Nomenclatura: 055040U00000000000000000000001240000008000",
        "Nomenclatura: 055040U00000000000000000000001240000009000",
        "Nomenclatura: 055040U00000000000000000000001240000001000",
        "Nomenclatura: 055040U00000000000000000000001240000002000",
        "Nomenclatura: 055040U00000000000000000000001210000009000",
        "Nomenclatura: 055040U00000000000000000000001210000010000",
        "Nomenclatura: 055040U00000000000000000000001210000002000",
        "Nomenclatura: 055040U00000000000000000000001210000001000",
        "Nomenclatura: 055040U00000000000000000000001220000001000",
        "Nomenclatura: 055040U00000000000000000000001210000003000",
        "Nomenclatura: 055040U00000000000000000000001220000010000",
        "Nomenclatura: 055040U00000000000000000000001220000004000",
        "Nomenclatura: 055040U00000000000000000000001220000005000",
        "Nomenclatura: 055040U00000000000000000000001220000006000",
        "Nomenclatura: 055040U00000000000000000000001220000009000",
        "Nomenclatura: 055040U00000000000000000000001220000008000",
        "Nomenclatura: 055040U00000000000000000000001220000007000",
        "Nomenclatura: 055040U000000000000000000000013700C0001000",
        "Nomenclatura: 055040U00000000000000000000001210000006000",
        "Nomenclatura: 055040U00000000000000000000001210000005000",
        "Nomenclatura: 055040U00000000000000000000001210000004000",
        "Nomenclatura: 055040U00000000000000000000001210000008000",
        "Nomenclatura: 055040U00000000000000000000001210000007000",
        "Nomenclatura: 055040U000000000000000000000013700A0001000",
        "Nomenclatura: 055040U000000000000000000000013700A0002000",
        "Nomenclatura: 055040U000000000000000000000013700A0003000",
        "Nomenclatura: 055040U000000000000000000000013700A0004000",
        "Nomenclatura: 055040U000000000000000000000013700A0005000",
        "Nomenclatura: 055040U000000000000000000000013700A0006000",
        "Nomenclatura: 055040U000000000000000000000013700A0007000",
        "Nomenclatura: 055040U000000000000000000000013700A0016000",
        "Nomenclatura: 055040U000000000000000000000013700A0015000",
        "Nomenclatura: 055040U000000000000000000000013700A0014000",
        "Nomenclatura: 055040U000000000000000000000013700A0012000",
        "Nomenclatura: 055040U000000000000000000000013700A0013000",
        "Nomenclatura: 055040U000000000000000000000013700B0003000",
        "Nomenclatura: 055040U000000000000000000000013700B0002000",
        "Nomenclatura: 055040U000000000000000000000013700B0016000",
        "Nomenclatura: 055040U000000000000000000000013700B0001000",
        "Nomenclatura: 055040U000000000000000000000013700B0015000"
      ],
      "totalAreaSqM": 661459,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": true,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-42-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0B0002F5",
    "name": "El Cedro",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0239544113704,
        "lat": -34.898100202663
      },
      {
        "lng": -58.0253490817799,
        "lat": -34.8970717924036
      },
      {
        "lng": -58.02644051540599,
        "lat": -34.8984019605502
      },
      {
        "lng": -58.0251812435648,
        "lat": -34.8993303862997
      },
      {
        "lng": -58.0238936160457,
        "lat": -34.898144905374
      },
      {
        "lng": -58.0239544113704,
        "lat": -34.898100202663
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 930000,
      "marketValueRegularizedUsd": 1230000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A0026000000000000000000000000000900B"
      ],
      "totalAreaSqM": 29406,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-43-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0C000344",
    "name": "Barrio Parque Ecológico",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0610559999959,
        "lat": -34.8652349999928
      },
      {
        "lng": -58.0609159723913,
        "lat": -34.8648068030648
      },
      {
        "lng": -58.06085454240589,
        "lat": -34.8646429720829
      },
      {
        "lng": -58.060580677265,
        "lat": -34.8638266909359
      },
      {
        "lng": -58.06050734698211,
        "lat": -34.8636528465816
      },
      {
        "lng": -58.0602429024177,
        "lat": -34.8628640220413
      },
      {
        "lng": -58.06018523855,
        "lat": -34.8626796128017
      },
      {
        "lng": -58.0600099999959,
        "lat": -34.8621709999928
      },
      {
        "lng": -58.06003399999591,
        "lat": -34.8621439999928
      },
      {
        "lng": -58.0609316900163,
        "lat": -34.8621023921239
      },
      {
        "lng": -58.061861187242,
        "lat": -34.862059897328
      },
      {
        "lng": -58.0625259112747,
        "lat": -34.8620294878724
      },
      {
        "lng": -58.0625675399771,
        "lat": -34.86205403378
      },
      {
        "lng": -58.0627420305535,
        "lat": -34.8625626716266
      },
      {
        "lng": -58.0628045303761,
        "lat": -34.8627462555926
      },
      {
        "lng": -58.0629261853814,
        "lat": -34.8631068813189
      },
      {
        "lng": -58.06299683863791,
        "lat": -34.8632785187105
      },
      {
        "lng": -58.0632684162888,
        "lat": -34.8640953892602
      },
      {
        "lng": -58.0633681489417,
        "lat": -34.8643745551235
      },
      {
        "lng": -58.0635549999959,
        "lat": -34.8649329999928
      },
      {
        "lng": -58.0635309999959,
        "lat": -34.8649669999928
      },
      {
        "lng": -58.0630555323276,
        "lat": -34.8650742410242
      },
      {
        "lng": -58.0619637593441,
        "lat": -34.8653208077981
      },
      {
        "lng": -58.0617902982331,
        "lat": -34.8653599490081
      },
      {
        "lng": -58.0615794629336,
        "lat": -34.8654075062172
      },
      {
        "lng": -58.0613686252927,
        "lat": -34.8654551531407
      },
      {
        "lng": -58.0611798839896,
        "lat": -34.8654977447895
      },
      {
        "lng": -58.06113954381651,
        "lat": -34.8654788065321
      },
      {
        "lng": -58.0610559999959,
        "lat": -34.8652349999928
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 940000,
      "marketValueRegularizedUsd": 1240000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060N00000000000000000000000110000012000",
        "Nomenclatura: 055060N00000000000000000000000130000003000",
        "Nomenclatura: 055060N0000000000000000000000013000000500A",
        "Nomenclatura: 055060N00000000000000000000000110000013000",
        "Nomenclatura: 055060N00000000000000000000000130000002000",
        "Nomenclatura: 055060N00000000000000000000000170000015000",
        "Nomenclatura: 055060N00000000000000000000000170000014000",
        "Nomenclatura: 055060N00000000000000000000000170000013000",
        "Nomenclatura: 055060N00000000000000000000000170000004000",
        "Nomenclatura: 055060N00000000000000000000000170000005000",
        "Nomenclatura: 055060N00000000000000000000000170000011000",
        "Nomenclatura: 055060N00000000000000000000000170000012000",
        "Nomenclatura: 055060N00000000000000000000000170000009000",
        "Nomenclatura: 055060N00000000000000000000000170000010000",
        "Nomenclatura: 055060N00000000000000000000000170000006000",
        "Nomenclatura: 055060N00000000000000000000000170000007000",
        "Nomenclatura: 055060N00000000000000000000000170000008000",
        "Nomenclatura: 055060N00000000000000000000000160000009000",
        "Nomenclatura: 055060N0000000000000000000000016000000800A",
        "Nomenclatura: 055060N00000000000000000000000160000003000",
        "Nomenclatura: 055060N0000000000000000000000016000000400A",
        "Nomenclatura: 055060N0000000000000000000000016000000500A",
        "Nomenclatura: 055060N0000000000000000000000016000000700A",
        "Nomenclatura: 055060N0000000000000000000000015000000600A",
        "Nomenclatura: 055060N0000000000000000000000015000000300B",
        "Nomenclatura: 055060N00000000000000000000000150000002000",
        "Nomenclatura: 055060N0000000000000000000000013000000800A",
        "Nomenclatura: 055060N00000000000000000000000130000006000",
        "Nomenclatura: 055060N00000000000000000000000130000007000",
        "Nomenclatura: 055060N00000000000000000000000130000001000",
        "Nomenclatura: 055060N00000000000000000000000110000014000",
        "Nomenclatura: 055060N00000000000000000000000110000015000",
        "Nomenclatura: 055060N00000000000000000000000110000016000",
        "Nomenclatura: 055060N00000000000000000000000120000006000",
        "Nomenclatura: 055060N00000000000000000000000110000017000",
        "Nomenclatura: 055060N00000000000000000000000110000018000",
        "Nomenclatura: 055060N00000000000000000000000110000019000",
        "Nomenclatura: 055060N00000000000000000000000110000020000",
        "Nomenclatura: 055060N00000000000000000000000110000021000",
        "Nomenclatura: 055060N00000000000000000000000120000003000",
        "Nomenclatura: 055060N00000000000000000000000120000004000",
        "Nomenclatura: 055060N00000000000000000000000120000005000",
        "Nomenclatura: 055060N00000000000000000000000120000011000",
        "Nomenclatura: 055060N00000000000000000000000120000013000",
        "Nomenclatura: 055060N00000000000000000000000120000012000",
        "Nomenclatura: 055060N0000000000000000000000012000000900A",
        "Nomenclatura: 055060N00000000000000000000000120000008000",
        "Nomenclatura: 055060N00000000000000000000000120000007000",
        "Nomenclatura: 055060N00000000000000000000000140000007000",
        "Nomenclatura: 055060N00000000000000000000000140000008000",
        "Nomenclatura: 055060N00000000000000000000000150000001000",
        "Nomenclatura: 055060N0000000000000000000000015000001000B",
        "Nomenclatura: 055060N0000000000000000000000015000000900A",
        "Nomenclatura: 055060N00000000000000000000000150000007000",
        "Nomenclatura: 055060N00000000000000000000000150000008000",
        "Nomenclatura: 055060N00000000000000000000000140000011000",
        "Nomenclatura: 055060N00000000000000000000000140000010000",
        "Nomenclatura: 055060N00000000000000000000000140000012000",
        "Nomenclatura: 055060N00000000000000000000000140000013000",
        "Nomenclatura: 055060N00000000000000000000000140000009000",
        "Nomenclatura: 055060N00000000000000000000000140000005000",
        "Nomenclatura: 055060N00000000000000000000000140000006000",
        "Nomenclatura: 055060N00000000000000000000000140000004000",
        "Nomenclatura: 055060N00000000000000000000000140000003000",
        "Nomenclatura: 055060N00000000000000000000000140000019000",
        "Nomenclatura: 055060N00000000000000000000000140000018000",
        "Nomenclatura: 055060N00000000000000000000000140000017000",
        "Nomenclatura: 055060N00000000000000000000000140000016000",
        "Nomenclatura: 055060N00000000000000000000000140000015000",
        "Nomenclatura: 055060N00000000000000000000000140000014000",
        "Nomenclatura: 055060N00000000000000000000000170000003000",
        "Nomenclatura: 055060N00000000000000000000000170000002000",
        "Nomenclatura: 055060N00000000000000000000000170000001000",
        "Nomenclatura: 055060N00000000000000000000000170000016000",
        "Nomenclatura: 055060N00000000000000000000000140000001000",
        "Nomenclatura: 055060N00000000000000000000000140000002000",
        "Nomenclatura: 055060N00000000000000000000000120000014000",
        "Nomenclatura: 055060N00000000000000000000000120000015000",
        "Nomenclatura: 055060N00000000000000000000000120000001000",
        "Nomenclatura: 055060N00000000000000000000000120000002000",
        "Nomenclatura: 055060N00000000000000000000000110000022000",
        "Nomenclatura: 055060N00000000000000000000000110000001000",
        "Nomenclatura: 055060N00000000000000000000000110000002000",
        "Nomenclatura: 055060N00000000000000000000000110000004000",
        "Nomenclatura: 055060N00000000000000000000000110000003000",
        "Nomenclatura: 055060N00000000000000000000000110000005000",
        "Nomenclatura: 055060N00000000000000000000000110000006000",
        "Nomenclatura: 055060N00000000000000000000000110000007000",
        "Nomenclatura: 055060N00000000000000000000000110000008000",
        "Nomenclatura: 055060N00000000000000000000000110000009000",
        "Nomenclatura: 055060N00000000000000000000000110000010000",
        "Nomenclatura: 055060N00000000000000000000000110000011000"
      ],
      "totalAreaSqM": 67320,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.6,
        "fot": 1.5,
        "density": 400,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "18MTS / 6N",
        "zoning": "AU CC3",
        "description": "AREA URBANA / CORREDOR DE CENTRALIDAD 3 - CNO. CENTENARIO",
        "allowedUses": "COMERCIO, SERVICIOS",
        "complementaryUses": "HABITACIONAL, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-44-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0C0003AF",
    "name": "Parque Industrial La Plata",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.1133389999965,
        "lat": -35.0088259999929
      },
      {
        "lng": -58.1129979999964,
        "lat": -35.0088709999929
      },
      {
        "lng": -58.1084599999964,
        "lat": -35.0047539999929
      },
      {
        "lng": -58.1086209999964,
        "lat": -35.0046529999929
      },
      {
        "lng": -58.10791199999641,
        "lat": -35.0040159999929
      },
      {
        "lng": -58.10776799999639,
        "lat": -35.0041079999929
      },
      {
        "lng": -58.10433999999641,
        "lat": -35.0009579999929
      },
      {
        "lng": -58.1081649999964,
        "lat": -34.9981279999929
      },
      {
        "lng": -58.1167959999965,
        "lat": -35.0061029999929
      },
      {
        "lng": -58.11687599999651,
        "lat": -35.0062259999929
      },
      {
        "lng": -58.1168679999965,
        "lat": -35.0062849999929
      },
      {
        "lng": -58.1168429999965,
        "lat": -35.0063369999929
      },
      {
        "lng": -58.11565299999651,
        "lat": -35.0072379999929
      },
      {
        "lng": -58.1155329999965,
        "lat": -35.0071329999929
      },
      {
        "lng": -58.1133389999965,
        "lat": -35.0088259999929
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 950000,
      "marketValueRegularizedUsd": 1250000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055080Z0000000000000000010000000000000200A",
        "Nomenclatura: 055080Z0000000000000000010000000000000200B",
        "Nomenclatura: 055080Z00000000000000000100000000000001000",
        "Nomenclatura: 055080Z0000000000000000010000000000000200C",
        "Nomenclatura: 055080Z0000000000000000010000000000000900F",
        "Nomenclatura: 055080Z0000000000000000010000000000000200D",
        "Nomenclatura: 055080Z00000000000000000100000000000016000",
        "Nomenclatura: 055080Z00000000000000000100000000000015000",
        "Nomenclatura: 055080Z0000000000000000010000000000000900E",
        "Nomenclatura: 055080Z0000000000000000010000000000000900D",
        "Nomenclatura: 055080Z00000000000000000400000000000003000",
        "Nomenclatura: 055080Z00000000000000000400000000000004000",
        "Nomenclatura: 055080Z00000000000000000400000000000006000",
        "Nomenclatura: 055080Z00000000000000000400000000000007000",
        "Nomenclatura: 055080Z00000000000000000400000000000002000",
        "Nomenclatura: 055080Z00000000000000000400000000000005000",
        "Nomenclatura: 055080Z00000000000000000300000000000005000",
        "Nomenclatura: 055080Z00000000000000000500000000000002000",
        "Nomenclatura: 055080Z00000000000000000300000000000006000",
        "Nomenclatura: 055080Z00000000000000000300000000000007000",
        "Nomenclatura: 055080Z00000000000000000500000000000001000",
        "Nomenclatura: 055080Z00000000000000000300000000000001000",
        "Nomenclatura: 055080Z00000000000000000300000000000009000",
        "Nomenclatura: 055080Z0000000000000000030000000000000300A",
        "Nomenclatura: 055080Z00000000000000000300000000000004000",
        "Nomenclatura: 055080Z00000000000000000400000000000008000",
        "Nomenclatura: 055080Z00000000000000000400000000000009000",
        "Nomenclatura: 055080Z00000000000000000400000000000010000",
        "Nomenclatura: 055080Z00000000000000000400000000000001000",
        "Nomenclatura: 055080Z00000000000000000200000000000001000",
        "Nomenclatura: 055080Z00000000000000000400000000000011000",
        "Nomenclatura: 055080Z00000000000000000300000000000002000",
        "Nomenclatura: 055080Z00000000000000000100000000000013000",
        "Nomenclatura: 055080Z00000000000000000100000000000014000",
        "Nomenclatura: 055080Z00000000000000000100000000000012000",
        "Nomenclatura: 055080Z00000000000000000100000000000011000",
        "Nomenclatura: 055080Z0000000000000000010000000000001000B",
        "Nomenclatura: 055080Z0000000000000000010000000000000900B",
        "Nomenclatura: 055080Z00000000000000000100000000000008000",
        "Nomenclatura: 055080Z00000000000000000100000000000006000",
        "Nomenclatura: 055080Z00000000000000000100000000000007000",
        "Nomenclatura: 055080Z00000000000000000100000000000005000",
        "Nomenclatura: 055080Z0000000000000000010000000000000300A"
      ],
      "totalAreaSqM": 490070,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.5,
        "fot": 0.8,
        "density": 0,
        "minFront": 40,
        "minArea": 2000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR UE",
        "description": "AREA RURAL / INDUSTRIAL MIXTA",
        "allowedUses": "PRODUCTIVO, SERVICIOS",
        "complementaryUses": "HABITACIONAL, EQUIPAMIENTO, COMERCIO"
      },
      "hydroRisk": true,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "dentro",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-45-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0C0003CB",
    "name": "El Cauce",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0528409999958,
        "lat": -34.8984359999928
      },
      {
        "lng": -58.0520879999958,
        "lat": -34.8962509999928
      },
      {
        "lng": -58.0520439999958,
        "lat": -34.8961239999928
      },
      {
        "lng": -58.05178099999581,
        "lat": -34.8953589999928
      },
      {
        "lng": -58.0526349999958,
        "lat": -34.8951589999928
      },
      {
        "lng": -58.0541599999958,
        "lat": -34.8947989999928
      },
      {
        "lng": -58.0551259999958,
        "lat": -34.8976029999928
      },
      {
        "lng": -58.0551549999958,
        "lat": -34.8976759999928
      },
      {
        "lng": -58.05520899999579,
        "lat": -34.8978359999928
      },
      {
        "lng": -58.0550439999958,
        "lat": -34.8978749999928
      },
      {
        "lng": -58.0531799999958,
        "lat": -34.8983539999928
      },
      {
        "lng": -58.0528409999958,
        "lat": -34.8984359999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 960000,
      "marketValueRegularizedUsd": 1260000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000094100E",
        "Nomenclatura: 055060000000000000000000000000000001020000",
        "Nomenclatura: 05506000000000000000000000000000000102800A",
        "Nomenclatura: 05506000000000000000000000000000000101500B"
      ],
      "totalAreaSqM": 150502,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-46-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0C0003CC",
    "name": "San Benjamin",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0490375999957,
        "lat": -34.8924375999928
      },
      {
        "lng": -58.0502375999958,
        "lat": -34.8921375999928
      },
      {
        "lng": -58.05029259999581,
        "lat": -34.8921275999928
      },
      {
        "lng": -58.0506613999958,
        "lat": -34.8920835999928
      },
      {
        "lng": -58.05107349999579,
        "lat": -34.8931515999928
      },
      {
        "lng": -58.0511554999958,
        "lat": -34.8933515999928
      },
      {
        "lng": -58.0513724999958,
        "lat": -34.8940255999928
      },
      {
        "lng": -58.0497385999958,
        "lat": -34.8944135999928
      },
      {
        "lng": -58.0490375999957,
        "lat": -34.8924375999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 970000,
      "marketValueRegularizedUsd": 1270000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000101500D"
      ],
      "totalAreaSqM": 35975,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-47-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0C0003CD",
    "name": "La Juanita",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0148829999953,
        "lat": -34.8972399999928
      },
      {
        "lng": -58.01567699999529,
        "lat": -34.8966349999928
      },
      {
        "lng": -58.01578699999529,
        "lat": -34.8967329999928
      },
      {
        "lng": -58.01603699999529,
        "lat": -34.8969569999928
      },
      {
        "lng": -58.0162869999954,
        "lat": -34.8971879999928
      },
      {
        "lng": -58.01668799999529,
        "lat": -34.8975619999928
      },
      {
        "lng": -58.01588599999531,
        "lat": -34.8981629999928
      },
      {
        "lng": -58.0148829999953,
        "lat": -34.8972399999928
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 980000,
      "marketValueRegularizedUsd": 1280000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A00270000000000000000000000000005000",
        "Nomenclatura: 055030A00270000000000000000000000000006000",
        "Nomenclatura: 055030A00270000000000000000000000000007000"
      ],
      "totalAreaSqM": 47551,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-48-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D0003E1",
    "name": "San Benito (55)",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0490206789783,
        "lat": -34.8925065903766
      },
      {
        "lng": -58.0497224585809,
        "lat": -34.8945187386369
      },
      {
        "lng": -58.04814586891951,
        "lat": -34.8948920322165
      },
      {
        "lng": -58.04744109876771,
        "lat": -34.8928829817578
      },
      {
        "lng": -58.0490206789783,
        "lat": -34.8925065903766
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 990000,
      "marketValueRegularizedUsd": 1290000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000101500C",
        "Nomenclatura: 05506000000000000000000000000000000101600A",
        "Nomenclatura: 05506000000000000000000000000000000101500E"
      ],
      "totalAreaSqM": 103410,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-49-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D0003E8",
    "name": "Clementina",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0880375999962,
        "lat": -34.8902237999928
      },
      {
        "lng": -58.0872539999962,
        "lat": -34.8879349999928
      },
      {
        "lng": -58.08960399999619,
        "lat": -34.8873629999928
      },
      {
        "lng": -58.0895549999962,
        "lat": -34.8876489999928
      },
      {
        "lng": -58.08969999999619,
        "lat": -34.8878779999928
      },
      {
        "lng": -58.0898019999962,
        "lat": -34.8881689999928
      },
      {
        "lng": -58.0896579999962,
        "lat": -34.8890789999928
      },
      {
        "lng": -58.0897379999962,
        "lat": -34.8894049999928
      },
      {
        "lng": -58.0904590999962,
        "lat": -34.8896203999928
      },
      {
        "lng": -58.0880375999962,
        "lat": -34.8902237999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1000000,
      "marketValueRegularizedUsd": 1300000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000048100M",
        "Nomenclatura: 05506000000000000000000000000000000072300M",
        "Nomenclatura: 05506000000000000000000000000000000072300W",
        "Nomenclatura: 055060000000000000000000000000000000724000",
        "Nomenclatura: 05506000000000000000000000000000000072300X"
      ],
      "totalAreaSqM": 90582,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.2,
        "fot": 0.3,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "6 MTS (2 NIV)",
        "zoning": "AC RU",
        "description": "AREA COMPLEMENTARIA/ RESERVA PARA AMPLIACIÓN URBANA",
        "allowedUses": "PRODUCTIVO - AGROPECUARIO",
        "complementaryUses": "HABITACIONAL, COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-50-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D0003E9",
    "name": "San Efren",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0986725708893,
        "lat": -34.9005435399727
      },
      {
        "lng": -58.09907432102639,
        "lat": -34.9018171292226
      },
      {
        "lng": -58.09664647401129,
        "lat": -34.9023435581723
      },
      {
        "lng": -58.0970484019711,
        "lat": -34.9020013500993
      },
      {
        "lng": -58.09708623067031,
        "lat": -34.901637216792
      },
      {
        "lng": -58.0969013844752,
        "lat": -34.9013516975194
      },
      {
        "lng": -58.0970245795445,
        "lat": -34.9009762841012
      },
      {
        "lng": -58.096975264229,
        "lat": -34.9008806127174
      },
      {
        "lng": -58.0967923108266,
        "lat": -34.9007075057003
      },
      {
        "lng": -58.0965010527535,
        "lat": -34.9006769878927
      },
      {
        "lng": -58.0964444107192,
        "lat": -34.9006902497541
      },
      {
        "lng": -58.09630732844801,
        "lat": -34.9003118406076
      },
      {
        "lng": -58.09623212347319,
        "lat": -34.8999303453117
      },
      {
        "lng": -58.0962076274016,
        "lat": -34.8996788801788
      },
      {
        "lng": -58.0960518334319,
        "lat": -34.8991492223352
      },
      {
        "lng": -58.0958523682134,
        "lat": -34.8986965655327
      },
      {
        "lng": -58.0956717935617,
        "lat": -34.8983307220941
      },
      {
        "lng": -58.0955077634773,
        "lat": -34.8981248348224
      },
      {
        "lng": -58.09512372099779,
        "lat": -34.8975700588059
      },
      {
        "lng": -58.0949626778087,
        "lat": -34.8973391635858
      },
      {
        "lng": -58.0948010024196,
        "lat": -34.8969604573068
      },
      {
        "lng": -58.09456647816809,
        "lat": -34.8962692351457
      },
      {
        "lng": -58.0985356449309,
        "lat": -34.8953418651058
      },
      {
        "lng": -58.09997796568789,
        "lat": -34.900247269275
      },
      {
        "lng": -58.0986725708893,
        "lat": -34.9005435399727
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1010000,
      "marketValueRegularizedUsd": 1310000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000048200M",
        "Nomenclatura: 05506000000000000000000000000000000048200D",
        "Nomenclatura: 05506000000000000000000000000000000048200K"
      ],
      "totalAreaSqM": 724343,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-51-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D0003EB",
    "name": "Fincas de Victoria I",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0170696148423,
        "lat": -34.9521678915204
      },
      {
        "lng": -58.0149734633653,
        "lat": -34.9536678493158
      },
      {
        "lng": -58.014927116759,
        "lat": -34.9536651990788
      },
      {
        "lng": -58.0120799999953,
        "lat": -34.9509749999928
      },
      {
        "lng": -58.0124779024304,
        "lat": -34.950685589169
      },
      {
        "lng": -58.0141823120769,
        "lat": -34.9494659401548
      },
      {
        "lng": -58.0142023601013,
        "lat": -34.9494515784079
      },
      {
        "lng": -58.01424859272069,
        "lat": -34.9494543171384
      },
      {
        "lng": -58.0170728327059,
        "lat": -34.9521297330389
      },
      {
        "lng": -58.0170696148423,
        "lat": -34.9521678915204
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1020000,
      "marketValueRegularizedUsd": 1320000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030B00930000000000000600000000000013000",
        "Nomenclatura: 055030B00930000000000000600000000000012000",
        "Nomenclatura: 055030B00930000000000000800000000000011000",
        "Nomenclatura: 055030B00930000000000000800000000000009000",
        "Nomenclatura: 055030B00930000000000000800000000000012000",
        "Nomenclatura: 055030B00930000000000000800000000000007000",
        "Nomenclatura: 055030B00930000000000000800000000000008000",
        "Nomenclatura: 055030B00930000000000000600000000000010000",
        "Nomenclatura: 055030B00930000000000000800000000000010000",
        "Nomenclatura: 055030B00930000000000000600000000000011000",
        "Nomenclatura: 055030B00930000000000000600000000000009000",
        "Nomenclatura: 055030B00930000000000000600000000000008000",
        "Nomenclatura: 055030B00930000000000000500000000000013000",
        "Nomenclatura: 055030B00930000000000000500000000000012000",
        "Nomenclatura: 055030B00930000000000000500000000000011000",
        "Nomenclatura: 055030B00930000000000000800000000000006000",
        "Nomenclatura: 055030B00930000000000000800000000000005000",
        "Nomenclatura: 055030B00930000000000000500000000000010000",
        "Nomenclatura: 055030B00930000000000000500000000000009000",
        "Nomenclatura: 055030B00930000000000000400000000000011000",
        "Nomenclatura: 055030B00930000000000000400000000000012000",
        "Nomenclatura: 055030B00930000000000000400000000000009000",
        "Nomenclatura: 055030B00930000000000000400000000000013000",
        "Nomenclatura: 055030B00930000000000000400000000000014000",
        "Nomenclatura: 055030B00930000000000000500000000000008000",
        "Nomenclatura: 055030B00930000000000000500000000000007000",
        "Nomenclatura: 055030B00930000000000000500000000000014000",
        "Nomenclatura: 055030B00930000000000000500000000000015000",
        "Nomenclatura: 055030B00930000000000000500000000000006000",
        "Nomenclatura: 055030B00930000000000000500000000000005000",
        "Nomenclatura: 055030B00930000000000000500000000000017000",
        "Nomenclatura: 055030B00930000000000000500000000000018000",
        "Nomenclatura: 055030B00930000000000000600000000000004000",
        "Nomenclatura: 055030B00930000000000000500000000000016000",
        "Nomenclatura: 055030B00930000000000000600000000000006000",
        "Nomenclatura: 055030B00930000000000000600000000000007000",
        "Nomenclatura: 055030B00930000000000000600000000000015000",
        "Nomenclatura: 055030B00930000000000000600000000000014000",
        "Nomenclatura: 055030B00930000000000000600000000000016000",
        "Nomenclatura: 055030B00930000000000000600000000000005000",
        "Nomenclatura: 055030B00930000000000000600000000000017000",
        "Nomenclatura: 055030B00930000000000000600000000000018000",
        "Nomenclatura: 055030B00930000000000000600000000000020000",
        "Nomenclatura: 055030B00930000000000000600000000000019000",
        "Nomenclatura: 055030B00930000000000000600000000000003000",
        "Nomenclatura: 055030B00930000000000000600000000000002000",
        "Nomenclatura: 055030B00930000000000000600000000000001000",
        "Nomenclatura: 055030B00930000000000000500000000000020000",
        "Nomenclatura: 055030B00930000000000000500000000000019000",
        "Nomenclatura: 055030B00930000000000000500000000000002000",
        "Nomenclatura: 055030B00930000000000000500000000000003000",
        "Nomenclatura: 055030B00930000000000000500000000000004000",
        "Nomenclatura: 055030B00930000000000000400000000000019000",
        "Nomenclatura: 055030B00930000000000000500000000000001000",
        "Nomenclatura: 055030B00930000000000000400000000000020000",
        "Nomenclatura: 055030B00930000000000000100000000000001000",
        "Nomenclatura: 055030B00930000000000000300000000000020000",
        "Nomenclatura: 055030B00930000000000000200000000000001000",
        "Nomenclatura: 055030B00930000000000000200000000000001000",
        "Nomenclatura: 055030B00930000000000000200000000000002000",
        "Nomenclatura: 055030B00930000000000000200000000000018000",
        "Nomenclatura: 055030B00930000000000000200000000000019000",
        "Nomenclatura: 055030B00930000000000000200000000000020000",
        "Nomenclatura: 055030B00930000000000000300000000000002000",
        "Nomenclatura: 055030B00930000000000000300000000000003000",
        "Nomenclatura: 055030B00930000000000000300000000000004000",
        "Nomenclatura: 055030B00930000000000000300000000000005000",
        "Nomenclatura: 055030B00930000000000000300000000000015000",
        "Nomenclatura: 055030B00930000000000000300000000000016000",
        "Nomenclatura: 055030B00930000000000000300000000000017000",
        "Nomenclatura: 055030B00930000000000000300000000000019000",
        "Nomenclatura: 055030B00930000000000000300000000000018000",
        "Nomenclatura: 055030B00930000000000000400000000000002000",
        "Nomenclatura: 055030B00930000000000000400000000000001000",
        "Nomenclatura: 055030B00930000000000000400000000000003000",
        "Nomenclatura: 055030B00930000000000000400000000000005000",
        "Nomenclatura: 055030B00930000000000000400000000000004000",
        "Nomenclatura: 055030B00930000000000000400000000000018000",
        "Nomenclatura: 055030B00930000000000000400000000000017000",
        "Nomenclatura: 055030B00930000000000000400000000000016000",
        "Nomenclatura: 055030B00930000000000000400000000000015000",
        "Nomenclatura: 055030B00930000000000000400000000000007000",
        "Nomenclatura: 055030B00930000000000000400000000000006000",
        "Nomenclatura: 055030B00930000000000000900000000000000000",
        "Nomenclatura: 055030B00930000000000000300000000000014000",
        "Nomenclatura: 055030B00930000000000000400000000000008000",
        "Nomenclatura: 055030B00930000000000000300000000000012000",
        "Nomenclatura: 055030B00930000000000000300000000000013000",
        "Nomenclatura: 055030B00930000000000000300000000000008000",
        "Nomenclatura: 055030B00930000000000000300000000000007000",
        "Nomenclatura: 055030B00930000000000000300000000000006000",
        "Nomenclatura: 055030B00930000000000000200000000000015000",
        "Nomenclatura: 055030B00930000000000000200000000000017000",
        "Nomenclatura: 055030B00930000000000000200000000000016000",
        "Nomenclatura: 055030B00930000000000000200000000000004000",
        "Nomenclatura: 055030B00930000000000000200000000000003000",
        "Nomenclatura: 055030B00930000000000000400000000000010000",
        "Nomenclatura: 055030B00930000000000000800000000000002000",
        "Nomenclatura: 055030B00930000000000000800000000000003000",
        "Nomenclatura: 055030B00930000000000000800000000000004000",
        "Nomenclatura: 055030B00930000000000000300000000000009000",
        "Nomenclatura: 055030B00930000000000000300000000000010000",
        "Nomenclatura: 055030B00930000000000000300000000000011000",
        "Nomenclatura: 055030B00930000000000000700000000000005000",
        "Nomenclatura: 055030B00930000000000000700000000000004000",
        "Nomenclatura: 055030B00930000000000000200000000000012000",
        "Nomenclatura: 055030B00930000000000000200000000000011000",
        "Nomenclatura: 055030B00930000000000000200000000000010000",
        "Nomenclatura: 055030B00930000000000000200000000000009000",
        "Nomenclatura: 055030B00930000000000000200000000000008000",
        "Nomenclatura: 055030B00930000000000000200000000000014000",
        "Nomenclatura: 055030B00930000000000000200000000000013000",
        "Nomenclatura: 055030B00930000000000000200000000000006000",
        "Nomenclatura: 055030B00930000000000000200000000000005000",
        "Nomenclatura: 055030B00930000000000000200000000000007000",
        "Nomenclatura: 055030B00930000000000000700000000000007000",
        "Nomenclatura: 055030B00930000000000000700000000000006000",
        "Nomenclatura: 055030B00930000000000000800000000000001000",
        "Nomenclatura: 055030B00930000000000000700000000000001000",
        "Nomenclatura: 055030B00930000000000000700000000000002000",
        "Nomenclatura: 055030B00930000000000000700000000000003000",
        "Nomenclatura: 055030B00930000000000000700000000000008000"
      ],
      "totalAreaSqM": 103739,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.6,
        "fot": 1.2,
        "density": 300,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R3",
        "description": "AREA URBANA / RESIDENCIAL 3",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-52-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D0003EC",
    "name": "Los Cardales (55)",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.02283810401519,
        "lat": -34.8989365718637
      },
      {
        "lng": -58.02163676647,
        "lat": -34.8978445755327
      },
      {
        "lng": -58.0226153403013,
        "lat": -34.8971092547007
      },
      {
        "lng": -58.023822408557,
        "lat": -34.8982087246434
      },
      {
        "lng": -58.02283810401519,
        "lat": -34.8989365718637
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1030000,
      "marketValueRegularizedUsd": 1330000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A0026000000000000000000000000000800C",
        "Nomenclatura: 055030A002600000000000000000002600W0022000",
        "Nomenclatura: 055030A002600000000000000000002600W0023000",
        "Nomenclatura: 055030A002600000000000000000002600W0024000",
        "Nomenclatura: 055030A002600000000000000000002600W0025000",
        "Nomenclatura: 055030A002600000000000000000002600W0028000",
        "Nomenclatura: 055030A002600000000000000000002600W0019000",
        "Nomenclatura: 055030A002600000000000000000002600W0021000",
        "Nomenclatura: 055030A002600000000000000000002600W0020000",
        "Nomenclatura: 055030A002600000000000000000002600W0018000",
        "Nomenclatura: 055030A002600000000000000000002600W0015000"
      ],
      "totalAreaSqM": 23415,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-53-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D0003EF",
    "name": "Santa Martha",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.10932899999641,
        "lat": -34.8976969999929
      },
      {
        "lng": -58.1079129999964,
        "lat": -34.8988319999928
      },
      {
        "lng": -58.1033639999964,
        "lat": -34.8999979999928
      },
      {
        "lng": -58.10135199999641,
        "lat": -34.8968119999928
      },
      {
        "lng": -58.09924899999629,
        "lat": -34.8972659999928
      },
      {
        "lng": -58.0986909999963,
        "lat": -34.8952499999928
      },
      {
        "lng": -58.1109529999964,
        "lat": -34.8924409999928
      },
      {
        "lng": -58.1123699999965,
        "lat": -34.8936599999928
      },
      {
        "lng": -58.10932899999641,
        "lat": -34.8976969999929
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1040000,
      "marketValueRegularizedUsd": 1340000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 0550600000000000000000000000000000004820AU",
        "Nomenclatura: 0550600000000000000000000000000000004820BB",
        "Nomenclatura: 0550600000000000000000000000000000004820AR",
        "Nomenclatura: 0550600000000000000000000000000000004820BC",
        "Nomenclatura: 0550600000000000000000000000000000004820BA",
        "Nomenclatura: 0550600000000000000000000000000000004820AN",
        "Nomenclatura: 0550600000000000000000000000000000004820AM"
      ],
      "totalAreaSqM": 1490833,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "dentro",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-54-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D0003F0",
    "name": "Don Santiago",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.04955836181171,
        "lat": -34.9006996238188
      },
      {
        "lng": -58.0508995064707,
        "lat": -34.9003695808152
      },
      {
        "lng": -58.05160216955521,
        "lat": -34.9024505849416
      },
      {
        "lng": -58.0502826401593,
        "lat": -34.9027672834603
      },
      {
        "lng": -58.04955836181171,
        "lat": -34.9006996238188
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1050000,
      "marketValueRegularizedUsd": 1350000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000103000A",
        "Nomenclatura: 05506000000000000000000000000000000102900B"
      ],
      "totalAreaSqM": 56186,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-55-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D0003F3",
    "name": "La Cantera",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0319835335128,
        "lat": -34.904030452639
      },
      {
        "lng": -58.0316731274936,
        "lat": -34.9039274624149
      },
      {
        "lng": -58.03151689278981,
        "lat": -34.9039604389781
      },
      {
        "lng": -58.0293463345113,
        "lat": -34.9016159855975
      },
      {
        "lng": -58.0293580804028,
        "lat": -34.9015867965799
      },
      {
        "lng": -58.03356198953809,
        "lat": -34.9005791828432
      },
      {
        "lng": -58.0345514770901,
        "lat": -34.9034277187062
      },
      {
        "lng": -58.03217277367879,
        "lat": -34.9039850325921
      },
      {
        "lng": -58.0319835335128,
        "lat": -34.904030452639
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1060000,
      "marketValueRegularizedUsd": 1360000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060Z00000000000000000500000000000004000",
        "Nomenclatura: 055060Z00000000000000000500000000000001000",
        "Nomenclatura: 05506000000000000000000000000000000121400A",
        "Nomenclatura: 05506000000000000000000000000000000121200A",
        "Nomenclatura: 055060Z00000000000000000000000910000001000",
        "Nomenclatura: 055060Z00000000000000000000000910000008000",
        "Nomenclatura: 055060Z00000000000000000000001040000001000",
        "Nomenclatura: 055060Z00000000000000000000001040000007000"
      ],
      "totalAreaSqM": 127313,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-56-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D0003FE",
    "name": "Buona Terra",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.1249869999966,
        "lat": -34.8787729999928
      },
      {
        "lng": -58.1235009999966,
        "lat": -34.8774979999928
      },
      {
        "lng": -58.1247669999966,
        "lat": -34.8764989999928
      },
      {
        "lng": -58.1262689999966,
        "lat": -34.8777989999928
      },
      {
        "lng": -58.1249869999966,
        "lat": -34.8787729999928
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1070000,
      "marketValueRegularizedUsd": 1370000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060K0043000000000000000000000000000200D"
      ],
      "totalAreaSqM": 32939,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.2,
        "fot": 0.3,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "6 MTS (2 NIV)",
        "zoning": "AC RU",
        "description": "AREA COMPLEMENTARIA/ RESERVA PARA AMPLIACIÓN URBANA",
        "allowedUses": "PRODUCTIVO - AGROPECUARIO",
        "complementaryUses": "HABITACIONAL, COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-57-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D0003FF",
    "name": "Altos del Plata",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0080660071051,
        "lat": -34.9435110955561
      },
      {
        "lng": -58.0080198548477,
        "lat": -34.9435097076504
      },
      {
        "lng": -58.0070788700957,
        "lat": -34.9426721910012
      },
      {
        "lng": -58.0091527631737,
        "lat": -34.9411089157599
      },
      {
        "lng": -58.0100811140893,
        "lat": -34.9419576548271
      },
      {
        "lng": -58.0100791209702,
        "lat": -34.9419948418757
      },
      {
        "lng": -58.0080660071051,
        "lat": -34.9435110955561
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1080000,
      "marketValueRegularizedUsd": 1380000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030B00590000000000000300000000000002000"
      ],
      "totalAreaSqM": 33190,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.6,
        "fot": 1.2,
        "density": 300,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "12 MTS (4 NIV)",
        "zoning": "AU CC4",
        "description": "AREA URBANA / CORREDOR DE CENTRALIDAD 4",
        "allowedUses": "COMERCIO, SERVICIOS",
        "complementaryUses": "HABITACIONAL, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-58-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D000405",
    "name": "Las Carolinas",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.06653022326099,
        "lat": -34.9007883857978
      },
      {
        "lng": -58.0686331451281,
        "lat": -34.9002879485822
      },
      {
        "lng": -58.0694034180351,
        "lat": -34.9018552452484
      },
      {
        "lng": -58.0673452130658,
        "lat": -34.9023411757913
      },
      {
        "lng": -58.0652464508008,
        "lat": -34.9028342657642
      },
      {
        "lng": -58.065070023725,
        "lat": -34.9028752554652
      },
      {
        "lng": -58.0646175527262,
        "lat": -34.9016177876908
      },
      {
        "lng": -58.06364395349,
        "lat": -34.8997737921238
      },
      {
        "lng": -58.065748507671,
        "lat": -34.8992826231298
      },
      {
        "lng": -58.06653022326099,
        "lat": -34.9007883857978
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1090000,
      "marketValueRegularizedUsd": 1390000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060T00000000000000000100000000000001000",
        "Nomenclatura: 055060000000000000000000000000000000946000",
        "Nomenclatura: 055060T00000000000000000100000000000002000"
      ],
      "totalAreaSqM": 111166,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.3,
        "fot": 0.6,
        "density": 80,
        "minFront": 20,
        "minArea": 600,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AC REX 2",
        "description": "AREA COMPLEMENTARIA/ RESIDENCIAL EXTRA URBANO 2",
        "allowedUses": "VIVIENDA UNIFAMILIAR",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-59-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D000438",
    "name": "La Cañada",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.08381272599929,
        "lat": -34.9266880310309
      },
      {
        "lng": -58.0816616955391,
        "lat": -34.9271894017667
      },
      {
        "lng": -58.08144065963601,
        "lat": -34.9272409750766
      },
      {
        "lng": -58.07992498779029,
        "lat": -34.9275941848329
      },
      {
        "lng": -58.07970406343749,
        "lat": -34.9276455764593
      },
      {
        "lng": -58.0766088614207,
        "lat": -34.9283669633363
      },
      {
        "lng": -58.0763877123164,
        "lat": -34.9284184354112
      },
      {
        "lng": -58.0749589204675,
        "lat": -34.9287513290441
      },
      {
        "lng": -58.07490896850209,
        "lat": -34.9287629741371
      },
      {
        "lng": -58.0713975621361,
        "lat": -34.9295811788969
      },
      {
        "lng": -58.0646015436277,
        "lat": -34.9313066994716
      },
      {
        "lng": -58.06297842674469,
        "lat": -34.9263456614439
      },
      {
        "lng": -58.0628500270541,
        "lat": -34.9263259249742
      },
      {
        "lng": -58.0712883759812,
        "lat": -34.9243963659631
      },
      {
        "lng": -58.0721102351651,
        "lat": -34.9242047466071
      },
      {
        "lng": -58.0731830444964,
        "lat": -34.9239547383902
      },
      {
        "lng": -58.0747304673267,
        "lat": -34.9235942746932
      },
      {
        "lng": -58.07495204384649,
        "lat": -34.9235427220549
      },
      {
        "lng": -58.0780472979866,
        "lat": -34.9228211947247
      },
      {
        "lng": -58.07826754966929,
        "lat": -34.9227699754814
      },
      {
        "lng": -58.07964748703819,
        "lat": -34.9224484347459
      },
      {
        "lng": -58.0796902863281,
        "lat": -34.9224665048932
      },
      {
        "lng": -58.0798189159932,
        "lat": -34.9227549457615
      },
      {
        "lng": -58.0799584414736,
        "lat": -34.9230688829818
      },
      {
        "lng": -58.0800945536482,
        "lat": -34.9233743847577
      },
      {
        "lng": -58.080230563702,
        "lat": -34.9236796144044
      },
      {
        "lng": -58.08068724899979,
        "lat": -34.9239911730263
      },
      {
        "lng": -58.0831306662063,
        "lat": -34.9260726410844
      },
      {
        "lng": -58.0838215604816,
        "lat": -34.9266610437
      },
      {
        "lng": -58.08381272599929,
        "lat": -34.9266880310309
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1100000,
      "marketValueRegularizedUsd": 1400000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506YY000000000080000000000000800R0005000",
        "Nomenclatura: 05506YY000000000080000000000000800R0010000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0006000",
        "Nomenclatura: 05506YY000000000080000000000000800R0009000",
        "Nomenclatura: 05506YY000000000080000000000000800S0025000",
        "Nomenclatura: 05506YY000000000080000000000000800S0026000",
        "Nomenclatura: 05506YY000000000080000000000000800S0024000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0001000",
        "Nomenclatura: 05506YY000000000080000000000000800S0023000",
        "Nomenclatura: 05506YY000000000080000000000000800S0020000",
        "Nomenclatura: 05506YY000000000080000000000000800S000400A",
        "Nomenclatura: 05506YY000000000080000000000000800S0002000",
        "Nomenclatura: 05506YY000000000080000000000000800S0003000",
        "Nomenclatura: 05506YY00000000008000000200000000000006000",
        "Nomenclatura: 05506YY00000000008000000200000000000007000",
        "Nomenclatura: 05506YY00000000008000000200000000000005000",
        "Nomenclatura: 05506YY000000000080000000000000800S0001000",
        "Nomenclatura: 05506YY000000000080000000000000800S0027000",
        "Nomenclatura: 05506YY000000000080000000000000800R0008000",
        "Nomenclatura: 05506YY000000000080000000000000800R0007000",
        "Nomenclatura: 05506YY000000000080000000000000800R0006000",
        "Nomenclatura: 05506YY00000000008000000100000000000016000",
        "Nomenclatura: 05506YY00000000008000000100000000000013000",
        "Nomenclatura: 05506YY00000000008000000100000000000018000",
        "Nomenclatura: 05506YY00000000008000000100000000000019000",
        "Nomenclatura: 05506YY00000000008000000100000000000017000",
        "Nomenclatura: 05506YY00000000008000000200000000000004000",
        "Nomenclatura: 05506YY00000000008000000200000000000003000",
        "Nomenclatura: 05506YY00000000008000000200000000000008000",
        "Nomenclatura: 05506YY00000000008000000200000000000009000",
        "Nomenclatura: 05506YY00000000008000000200000000000010000",
        "Nomenclatura: 05506YY00000000008000000200000000000001000",
        "Nomenclatura: 05506YY00000000008000000200000000000002000",
        "Nomenclatura: 05506YY00000000008000000100000000000020000",
        "Nomenclatura: 05506YY00000000008000000100000000000012000",
        "Nomenclatura: 05506YY00000000008000000100000000000011000",
        "Nomenclatura: 05506YY00000000008000000100000000000014000",
        "Nomenclatura: 05506YY00000000008000000100000000000015000",
        "Nomenclatura: 05506YY0000000000800000020000000000001100A",
        "Nomenclatura: 05506YY0000000000800000020000000000001100C",
        "Nomenclatura: 05506YY0000000000800000020000000000001200A",
        "Nomenclatura: 05506YY00000000008000000200000000000013000",
        "Nomenclatura: 05506YY00000000008000000200000000000014000",
        "Nomenclatura: 05506YY00000000008000000200000000000015000",
        "Nomenclatura: 05506YY00000000008000000200000000000017000",
        "Nomenclatura: 05506YY00000000008000000200000000000016000",
        "Nomenclatura: 05506YY0000000000800000020000000000001200B",
        "Nomenclatura: 05506YY0000000000800000020000000000001200C",
        "Nomenclatura: 05506YY0000000000800000020000000000001100D",
        "Nomenclatura: 05506YY0000000000800000020000000000001200D",
        "Nomenclatura: 05506YY000000000080000000000000800S000600A",
        "Nomenclatura: 05506YY000000000080000000000000800S000500A",
        "Nomenclatura: 05506YY000000000080000000000000800S0019000",
        "Nomenclatura: 05506YY000000000080000000000000800S001800A",
        "Nomenclatura: 05506YY000000000080000000000000800S000700A",
        "Nomenclatura: 05506YY000000000080000000000000800S000800A",
        "Nomenclatura: 05506YY000000000080000000000000800S000900A",
        "Nomenclatura: 05506YY000000000080000000000000800S001200A",
        "Nomenclatura: 05506YY000000000080000000000000800S001100A",
        "Nomenclatura: 05506YY000000000080000000000000800T0024000",
        "Nomenclatura: 05506YY000000000080000000000000800T0002000",
        "Nomenclatura: 05506YY000000000080000000000000800T0001000",
        "Nomenclatura: 05506YY00000000008000000300000000000005000",
        "Nomenclatura: 05506YY000000000080000000000000800S001000A",
        "Nomenclatura: 05506YY00000000008000000200000000000018000",
        "Nomenclatura: 05506YY00000000008000000200000000000019000",
        "Nomenclatura: 05506YY00000000008000000200000000000020000",
        "Nomenclatura: 05506YY00000000008000000200000000000022000",
        "Nomenclatura: 05506YY00000000008000000200000000000021000",
        "Nomenclatura: 05506YY00000000008000000300000000000003000",
        "Nomenclatura: 05506YY00000000008000000300000000000004000",
        "Nomenclatura: 05506YY00000000008000000300000000000008000",
        "Nomenclatura: 05506YY00000000008000000300000000000002000",
        "Nomenclatura: 05506YY00000000008000000300000000000001000",
        "Nomenclatura: 05506YY00000000008000000300000000000010000",
        "Nomenclatura: 05506YY00000000008000000300000000000009000",
        "Nomenclatura: 05506YY00000000008000000300000000000007000",
        "Nomenclatura: 05506YY00000000008000000300000000000006000",
        "Nomenclatura: 05506YY000000000080000000000000800T0003000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0019000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0012000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0011000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0010000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0013000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0014000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0015000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0016000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0017000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0018000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0021000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0022000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0001000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0002000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0003000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0004000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0005000",
        "Nomenclatura: 05506YY000000000080000000000000800A0009000",
        "Nomenclatura: 05506YY000000000080000000000000800A0005000",
        "Nomenclatura: 05506YY000000000080000000000000800A0007000",
        "Nomenclatura: 05506YY000000000080000000000000800A0006000",
        "Nomenclatura: 05506YY000000000080000000000000800A0008000",
        "Nomenclatura: 05506YY000000000080000000000000800B0001000",
        "Nomenclatura: 05506YY000000000080000000000000800B0030000",
        "Nomenclatura: 05506YY000000000080000000000000800B0029000",
        "Nomenclatura: 05506YY000000000080000000000000800B0028000",
        "Nomenclatura: 05506YY000000000080000000000000800B0027000",
        "Nomenclatura: 05506YY000000000080000000000000800B0026000",
        "Nomenclatura: 05506YY000000000080000000000000800B0025000",
        "Nomenclatura: 05506YY000000000080000000000000800B0007000",
        "Nomenclatura: 05506YY000000000080000000000000800B0008000",
        "Nomenclatura: 05506YY000000000080000000000000800B0009000",
        "Nomenclatura: 05506YY000000000080000000000000800B0010000",
        "Nomenclatura: 05506YY000000000080000000000000800B0011000",
        "Nomenclatura: 05506YY000000000080000000000000800B0021000",
        "Nomenclatura: 05506YY000000000080000000000000800B0022000",
        "Nomenclatura: 05506YY000000000080000000000000800B0023000",
        "Nomenclatura: 05506YY000000000080000000000000800B0024000",
        "Nomenclatura: 05506YY000000000080000000000000800B0020000",
        "Nomenclatura: 05506YY000000000080000000000000800B0019000",
        "Nomenclatura: 05506YY000000000080000000000000800A0004000",
        "Nomenclatura: 05506YY000000000080000000000000800B0017000",
        "Nomenclatura: 05506YY000000000080000000000000800B0018000",
        "Nomenclatura: 05506YY000000000080000000000000800B0015000",
        "Nomenclatura: 05506YY000000000080000000000000800B0014000",
        "Nomenclatura: 05506YY000000000080000000000000800B0013000",
        "Nomenclatura: 05506YY000000000080000000000000800B0012000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0017000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0018000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0003000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0002000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0001000",
        "Nomenclatura: 05506YY000000000080000000000000800R0015000",
        "Nomenclatura: 05506YY000000000080000000000000800R0016000",
        "Nomenclatura: 05506YY000000000080000000000000800R0017000",
        "Nomenclatura: 05506YY000000000080000000000000800R0018000",
        "Nomenclatura: 05506YY000000000080000000000000800R0002000",
        "Nomenclatura: 05506YY000000000080000000000000800R0014000",
        "Nomenclatura: 05506YY000000000080000000000000800R0013000",
        "Nomenclatura: 05506YY000000000080000000000000800R0012000",
        "Nomenclatura: 05506YY000000000080000000000000800R0003000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0004000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0005000",
        "Nomenclatura: 05506YY00000000008000000100000000000001000",
        "Nomenclatura: 05506YY00000000008000000100000000000006000",
        "Nomenclatura: 05506YY00000000008000000100000000000007000",
        "Nomenclatura: 05506YY00000000008000000100000000000008000",
        "Nomenclatura: 05506YY00000000008000000100000000000004000",
        "Nomenclatura: 05506YY00000000008000000100000000000005000",
        "Nomenclatura: 05506YY000000000080000000000000800R0001000",
        "Nomenclatura: 05506YY000000000080000000000000800B0006000",
        "Nomenclatura: 05506YY000000000080000000000000800B0005000",
        "Nomenclatura: 05506YY000000000080000000000000800B0004000",
        "Nomenclatura: 05506YY00000000008000000100000000000003000",
        "Nomenclatura: 05506YY00000000008000000100000000000002000",
        "Nomenclatura: 05506YY000000000080000000000000800B0002000",
        "Nomenclatura: 05506YY000000000080000000000000800B0003000",
        "Nomenclatura: 05506YY000000000080000000000000800R0004000",
        "Nomenclatura: 05506YY000000000080000000000000800R0011000",
        "Nomenclatura: 05506YY00000000008000000100000000000009000",
        "Nomenclatura: 05506YY00000000008000000100000000000010000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0006000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0009000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0008000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0007000",
        "Nomenclatura: 05506YY000000000080000000000000800T0017000",
        "Nomenclatura: 05506YY000000000080000000000000800T0016000",
        "Nomenclatura: 05506YY000000000080000000000000800T0015000",
        "Nomenclatura: 05506YY000000000080000000000000800T0014000",
        "Nomenclatura: 05506YY000000000080000000000000800T0006000",
        "Nomenclatura: 05506YY000000000080000000000000800T0005000",
        "Nomenclatura: 05506YY000000000080000000000000800T0004000",
        "Nomenclatura: 05506YY000000000080000000000000800T0023000",
        "Nomenclatura: 05506YY000000000080000000000000800T0018000",
        "Nomenclatura: 05506YY000000000080000000000000800T0019000",
        "Nomenclatura: 05506YY000000000080000000000000800T0020000",
        "Nomenclatura: 05506YY000000000080000000000000800T0021000",
        "Nomenclatura: 05506YY000000000080000000000000800T0022000",
        "Nomenclatura: 05506YY000000000080000000000000800S001300A",
        "Nomenclatura: 05506YY000000000080000000000000800S001400A",
        "Nomenclatura: 05506YY000000000080000000000000800S001600A",
        "Nomenclatura: 05506YY000000000080000000000000800Z0009000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0011000",
        "Nomenclatura: 05506YY000000000080000000000000800S001500A",
        "Nomenclatura: 05506YY000000000080000000000000800Z0012000",
        "Nomenclatura: 05506YY00000000008000000000000080AA0020000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0014000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0015000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0016000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0013000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0010000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0017000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0018000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0020000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0019000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0005000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0006000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0007000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0008000",
        "Nomenclatura: 05506YY000000000080000000000000800S001700A",
        "Nomenclatura: 05506YY000000000080000000000000800Z0004000",
        "Nomenclatura: 05506YY000000000080000000000000800Z000300A",
        "Nomenclatura: 05506YY000000000080000000000000800Z000200A",
        "Nomenclatura: 05506YY000000000080000000000000800Z0028000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0027000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0026000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0024000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0025000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0023000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0022000",
        "Nomenclatura: 05506YY000000000080000000000000800Z0021000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0010000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0009000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0008000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0007000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0011000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0013000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0012000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0014000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0016000",
        "Nomenclatura: 05506YY000000000080000000000000800Y0015000",
        "Nomenclatura: 05506YY000000000080000000000000800B0016000",
        "Nomenclatura: 05506YY00000000008000000300000000000015000",
        "Nomenclatura: 05506YY00000000008000000300000000000016000",
        "Nomenclatura: 05506YY00000000008000000300000000000014000",
        "Nomenclatura: 05506YY00000000008000000300000000000013000",
        "Nomenclatura: 05506YY00000000008000000300000000000017000",
        "Nomenclatura: 05506YY00000000008000000300000000000018000",
        "Nomenclatura: 05506YY00000000008000000400000000000005000",
        "Nomenclatura: 05506YY00000000008000000400000000000004000",
        "Nomenclatura: 05506YY00000000008000000400000000000007000",
        "Nomenclatura: 05506YY00000000008000000400000000000008000",
        "Nomenclatura: 05506YY00000000008000000400000000000009000",
        "Nomenclatura: 05506YY00000000008000000400000000000002000",
        "Nomenclatura: 05506YY00000000008000000400000000000003000",
        "Nomenclatura: 05506YY00000000008000000400000000000001000",
        "Nomenclatura: 05506YY00000000008000000300000000000020000",
        "Nomenclatura: 05506YY00000000008000000300000000000019000",
        "Nomenclatura: 05506YY00000000008000000300000000000011000",
        "Nomenclatura: 05506YY00000000008000000300000000000012000",
        "Nomenclatura: 05506YY00000000008000000400000000000011000",
        "Nomenclatura: 05506YY00000000008000000400000000000010000",
        "Nomenclatura: 05506YY00000000008000000400000000000013000",
        "Nomenclatura: 05506YY00000000008000000400000000000012000",
        "Nomenclatura: 05506YY00000000008000000400000000000018000",
        "Nomenclatura: 05506YY00000000008000000400000000000019000",
        "Nomenclatura: 05506YY00000000008000000400000000000020000",
        "Nomenclatura: 05506YY000000000080000000000000800W0009000",
        "Nomenclatura: 05506YY000000000080000000000000800W0010000",
        "Nomenclatura: 05506YY000000000080000000000000800W0012000",
        "Nomenclatura: 05506YY000000000080000000000000800W0011000",
        "Nomenclatura: 05506YY000000000080000000000000800W0013000",
        "Nomenclatura: 05506YY000000000080000000000000800W0014000",
        "Nomenclatura: 05506YY000000000080000000000000800W0006000",
        "Nomenclatura: 05506YY000000000080000000000000800W0007000",
        "Nomenclatura: 05506YY000000000080000000000000800W0008000",
        "Nomenclatura: 05506YY00000000008000000400000000000016000",
        "Nomenclatura: 05506YY00000000008000000400000000000017000",
        "Nomenclatura: 05506YY00000000008000000400000000000014000",
        "Nomenclatura: 05506YY00000000008000000400000000000015000",
        "Nomenclatura: 05506YY00000000008000000400000000000006000",
        "Nomenclatura: 05506YY000000000080000000000000800W0005000",
        "Nomenclatura: 05506YY000000000080000000000000800W0004000",
        "Nomenclatura: 05506YY000000000080000000000000800W0002000",
        "Nomenclatura: 05506YY000000000080000000000000800W0003000",
        "Nomenclatura: 05506YY000000000080000000000000800W0001000",
        "Nomenclatura: 05506YY000000000080000000000000800T0008000",
        "Nomenclatura: 05506YY000000000080000000000000800T0007000",
        "Nomenclatura: 05506YY000000000080000000000000800T0009000",
        "Nomenclatura: 05506YY000000000080000000000000800T0010000",
        "Nomenclatura: 05506YY000000000080000000000000800T0011000",
        "Nomenclatura: 05506YY000000000080000000000000800W0024000",
        "Nomenclatura: 05506YY000000000080000000000000800W0023000",
        "Nomenclatura: 05506YY000000000080000000000000800W0022000",
        "Nomenclatura: 05506YY000000000080000000000000800W0020000",
        "Nomenclatura: 05506YY000000000080000000000000800W0021000",
        "Nomenclatura: 05506YY000000000080000000000000800T0012000",
        "Nomenclatura: 05506YY000000000080000000000000800T0013000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0001000",
        "Nomenclatura: 05506YY000000000080000000000000800W0019000",
        "Nomenclatura: 05506YY000000000080000000000000800W0018000",
        "Nomenclatura: 05506YY000000000080000000000000800W0017000",
        "Nomenclatura: 05506YY000000000080000000000000800W0015000",
        "Nomenclatura: 05506YY000000000080000000000000800W0016000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0006000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0007000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0015000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0016000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0005000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0004000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0003000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0002000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0022000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0021000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0020000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0019000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0018000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0017000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0014000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0013000",
        "Nomenclatura: 05506YY00000000008000000500000000000025000",
        "Nomenclatura: 05506YY00000000008000000500000000000024000",
        "Nomenclatura: 05506YY00000000008000000500000000000023000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0012000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0011000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0010000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0009000",
        "Nomenclatura: 05506YY00000000008000000000000080AB0008000",
        "Nomenclatura: 05506YY00000000008000000500000000000021000",
        "Nomenclatura: 05506YY00000000008000000500000000000022000"
      ],
      "totalAreaSqM": 790885,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": true,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-60-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D000439",
    "name": "Senderos",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.05690099999579,
        "lat": -34.9340629999928
      },
      {
        "lng": -58.0536649999958,
        "lat": -34.9309809999928
      },
      {
        "lng": -58.0562124999958,
        "lat": -34.9292750999928
      },
      {
        "lng": -58.0595579999959,
        "lat": -34.9322119999928
      },
      {
        "lng": -58.05690099999579,
        "lat": -34.9340629999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1110000,
      "marketValueRegularizedUsd": 1410000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060Y00000000000000002300000000000031000",
        "Nomenclatura: 055060Y00000000000000001700000000000008000",
        "Nomenclatura: 055060Y00000000000000001700000000000009000",
        "Nomenclatura: 055060Y00000000000000001700000000000005000",
        "Nomenclatura: 055060Y00000000000000001700000000000004000",
        "Nomenclatura: 055060Y00000000000000001700000000000006000",
        "Nomenclatura: 055060Y00000000000000001700000000000007000",
        "Nomenclatura: 055060Y00000000000000001700000000000026000",
        "Nomenclatura: 055060Y00000000000000001700000000000001000",
        "Nomenclatura: 055060Y00000000000000001700000000000002000",
        "Nomenclatura: 055060Y00000000000000001700000000000003000",
        "Nomenclatura: 055060Y00000000000000001800000000000001000",
        "Nomenclatura: 055060Y00000000000000001800000000000027000",
        "Nomenclatura: 055060Y00000000000000001800000000000002000",
        "Nomenclatura: 055060Y00000000000000001700000000000025000",
        "Nomenclatura: 055060Y00000000000000001700000000000019000",
        "Nomenclatura: 055060Y00000000000000001700000000000020000",
        "Nomenclatura: 055060Y00000000000000001700000000000018000",
        "Nomenclatura: 055060Y00000000000000002300000000000003000",
        "Nomenclatura: 055060Y00000000000000001700000000000023000",
        "Nomenclatura: 055060Y00000000000000001700000000000022000",
        "Nomenclatura: 055060Y00000000000000001700000000000021000",
        "Nomenclatura: 055060Y00000000000000002300000000000002000",
        "Nomenclatura: 055060Y00000000000000002300000000000001000",
        "Nomenclatura: 055060Y00000000000000001700000000000015000",
        "Nomenclatura: 055060Y00000000000000002300000000000008000",
        "Nomenclatura: 055060Y00000000000000002300000000000005000",
        "Nomenclatura: 055060Y00000000000000002300000000000004000",
        "Nomenclatura: 055060Y00000000000000002300000000000030000",
        "Nomenclatura: 055060Y00000000000000002300000000000018000",
        "Nomenclatura: 055060Y00000000000000002300000000000017000",
        "Nomenclatura: 055060Y00000000000000002400000000000031000",
        "Nomenclatura: 055060Y00000000000000002400000000000030000",
        "Nomenclatura: 055060Y00000000000000002400000000000019000",
        "Nomenclatura: 055060Y00000000000000002400000000000020000",
        "Nomenclatura: 055060Y0000000000000000240000000000002100A",
        "Nomenclatura: 055060Y00000000000000002400000000000022000",
        "Nomenclatura: 055060Y00000000000000002400000000000023000",
        "Nomenclatura: 055060Y00000000000000002400000000000012000",
        "Nomenclatura: 055060Y00000000000000002400000000000011000",
        "Nomenclatura: 055060Y00000000000000002400000000000018000",
        "Nomenclatura: 055060Y00000000000000002400000000000017000",
        "Nomenclatura: 055060Y00000000000000002400000000000016000",
        "Nomenclatura: 055060Y00000000000000002400000000000014000",
        "Nomenclatura: 055060Y00000000000000002400000000000015000",
        "Nomenclatura: 055060Y00000000000000002400000000000013000",
        "Nomenclatura: 055060Y00000000000000002400000000000005000",
        "Nomenclatura: 055060Y00000000000000002400000000000006000",
        "Nomenclatura: 055060Y00000000000000002400000000000008000",
        "Nomenclatura: 055060Y00000000000000002400000000000007000",
        "Nomenclatura: 055060Y00000000000000002400000000000009000",
        "Nomenclatura: 055060Y00000000000000002400000000000010000",
        "Nomenclatura: 055060Y00000000000000001800000000000015000",
        "Nomenclatura: 055060Y00000000000000001800000000000014000",
        "Nomenclatura: 055060Y00000000000000001800000000000013000",
        "Nomenclatura: 055060Y00000000000000001800000000000016000",
        "Nomenclatura: 055060Y00000000000000001800000000000017000",
        "Nomenclatura: 055060Y00000000000000002300000000000016000",
        "Nomenclatura: 055060Y00000000000000002300000000000009000",
        "Nomenclatura: 055060Y00000000000000002300000000000015000",
        "Nomenclatura: 055060Y00000000000000002300000000000013000",
        "Nomenclatura: 055060Y00000000000000002300000000000014000",
        "Nomenclatura: 055060Y00000000000000002300000000000011000",
        "Nomenclatura: 055060Y00000000000000002300000000000010000",
        "Nomenclatura: 055060Y00000000000000002300000000000012000",
        "Nomenclatura: 055060Y00000000000000001700000000000012000",
        "Nomenclatura: 055060Y00000000000000002400000000000001000",
        "Nomenclatura: 055060Y00000000000000002400000000000002000",
        "Nomenclatura: 055060Y00000000000000001800000000000004000",
        "Nomenclatura: 055060Y00000000000000001800000000000005000",
        "Nomenclatura: 055060Y00000000000000001800000000000006000",
        "Nomenclatura: 055060Y00000000000000001800000000000007000",
        "Nomenclatura: 055060Y00000000000000001800000000000009000",
        "Nomenclatura: 055060Y00000000000000001800000000000010000",
        "Nomenclatura: 055060Y00000000000000001800000000000008000",
        "Nomenclatura: 055060Y00000000000000001800000000000011000",
        "Nomenclatura: 055060Y00000000000000001800000000000012000",
        "Nomenclatura: 055060Y00000000000000002400000000000003000",
        "Nomenclatura: 055060Y00000000000000002400000000000004000",
        "Nomenclatura: 055060Y00000000000000001800000000000018000",
        "Nomenclatura: 055060Y00000000000000001800000000000019000",
        "Nomenclatura: 055060Y00000000000000001800000000000026000",
        "Nomenclatura: 055060Y00000000000000001800000000000020000",
        "Nomenclatura: 055060Y00000000000000001800000000000021000",
        "Nomenclatura: 055060Y00000000000000001800000000000022000",
        "Nomenclatura: 055060Y00000000000000001800000000000023000",
        "Nomenclatura: 055060Y00000000000000001800000000000025000",
        "Nomenclatura: 055060Y00000000000000001800000000000024000",
        "Nomenclatura: 055060Y00000000000000001700000000000010000",
        "Nomenclatura: 055060Y00000000000000001800000000000003000",
        "Nomenclatura: 055060Y00000000000000001700000000000011000",
        "Nomenclatura: 055060Y00000000000000001700000000000013000",
        "Nomenclatura: 055060Y00000000000000001700000000000014000",
        "Nomenclatura: 055060Y00000000000000001700000000000016000",
        "Nomenclatura: 055060Y00000000000000001700000000000017000",
        "Nomenclatura: 055060Y00000000000000002300000000000007000",
        "Nomenclatura: 055060Y00000000000000002300000000000006000"
      ],
      "totalAreaSqM": 129767,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-61-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D00043A",
    "name": "Quintas de Mitre",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0424764132028,
        "lat": -34.904593254962
      },
      {
        "lng": -58.0424873984459,
        "lat": -34.9044300417458
      },
      {
        "lng": -58.0424551634075,
        "lat": -34.9042580212361
      },
      {
        "lng": -58.04242495921561,
        "lat": -34.9041248757886
      },
      {
        "lng": -58.0423955402886,
        "lat": -34.9039632646018
      },
      {
        "lng": -58.0423528827858,
        "lat": -34.9038247815575
      },
      {
        "lng": -58.0423161486798,
        "lat": -34.903598074902
      },
      {
        "lng": -58.0422554419354,
        "lat": -34.9032384132665
      },
      {
        "lng": -58.042254216702,
        "lat": -34.9030780674211
      },
      {
        "lng": -58.04229511316459,
        "lat": -34.903069534004
      },
      {
        "lng": -58.0431371175618,
        "lat": -34.9028753682969
      },
      {
        "lng": -58.0434827154448,
        "lat": -34.9027957692093
      },
      {
        "lng": -58.0438224492827,
        "lat": -34.9037933871498
      },
      {
        "lng": -58.0437749402166,
        "lat": -34.9038039775238
      },
      {
        "lng": -58.0439278109237,
        "lat": -34.9042354171117
      },
      {
        "lng": -58.0424764132028,
        "lat": -34.904593254962
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1120000,
      "marketValueRegularizedUsd": 1420000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000111100C",
        "Nomenclatura: 05506000000000000000000000000000000111100B",
        "Nomenclatura: 05506000000000000000000000000000000111100A"
      ],
      "totalAreaSqM": 29777,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 1.2,
        "density": 300,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU CLo3",
        "description": "AREA URBANA/  CENTRAL LOCALIDADES",
        "allowedUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS",
        "complementaryUses": "HABITACIONAL"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-62-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D00043B",
    "name": "Barrio 609 y 5 bis",
    "type": "condominio",
    "polygon": [
      {
        "lng": -57.8918179999935,
        "lat": -34.9547699999928
      },
      {
        "lng": -57.8913559999935,
        "lat": -34.9543219999928
      },
      {
        "lng": -57.89298199999351,
        "lat": -34.9531079999928
      },
      {
        "lng": -57.8934809999935,
        "lat": -34.9535859999928
      },
      {
        "lng": -57.8918179999935,
        "lat": -34.9547699999928
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1130000,
      "marketValueRegularizedUsd": 1430000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05509000000000000000000000000000000278900B",
        "Nomenclatura: 055090S0000000000000000000000099000000400B",
        "Nomenclatura: 05509000000000000000000000000000000278900D",
        "Nomenclatura: 055090S0000000000000000000000099000000400A"
      ],
      "totalAreaSqM": 51582,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "dentro",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-63-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D00043C",
    "name": "Las Huertas",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0497865365053,
        "lat": -34.9192867954815
      },
      {
        "lng": -58.04645169600539,
        "lat": -34.9200629571417
      },
      {
        "lng": -58.04579699678799,
        "lat": -34.9193738127583
      },
      {
        "lng": -58.0495191900537,
        "lat": -34.9185075490896
      },
      {
        "lng": -58.0497865365053,
        "lat": -34.9192867954815
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1140000,
      "marketValueRegularizedUsd": 1440000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000106200B"
      ],
      "totalAreaSqM": 30124,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-64-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D00043E",
    "name": "Los Ciruelos",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.1120079999965,
        "lat": -34.8874609999928
      },
      {
        "lng": -58.11135399999641,
        "lat": -34.8869269999928
      },
      {
        "lng": -58.1150889999965,
        "lat": -34.8843769999928
      },
      {
        "lng": -58.1156849999965,
        "lat": -34.8848999999928
      },
      {
        "lng": -58.1120079999965,
        "lat": -34.8874609999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1150000,
      "marketValueRegularizedUsd": 1450000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000044200D",
        "Nomenclatura: 055060000000000000000000000000000000439000",
        "Nomenclatura: 055060000000000000000000000000000000443000"
      ],
      "totalAreaSqM": 88199,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.2,
        "fot": 0.3,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "6 MTS (2 NIV)",
        "zoning": "AC RU",
        "description": "AREA COMPLEMENTARIA/ RESERVA PARA AMPLIACIÓN URBANA",
        "allowedUses": "PRODUCTIVO - AGROPECUARIO",
        "complementaryUses": "HABITACIONAL, COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-65-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D000440",
    "name": "Área Productiva La Plata",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.08157999999611,
        "lat": -34.9736899999928
      },
      {
        "lng": -58.0827229999961,
        "lat": -34.9747259999929
      },
      {
        "lng": -58.0787459999961,
        "lat": -34.9777049999929
      },
      {
        "lng": -58.07758299999611,
        "lat": -34.9766419999929
      },
      {
        "lng": -58.08157999999611,
        "lat": -34.9736899999928
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1160000,
      "marketValueRegularizedUsd": 1460000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030E02430000000000000000000000000004000"
      ],
      "totalAreaSqM": 75015,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.6,
        "fot": 1.2,
        "density": 0,
        "minFront": 20,
        "minArea": 600,
        "maxHeight": "6 MTS (2 NIV)",
        "zoning": "AR IE",
        "description": "AREA RURAL/ INDUSTRIAL EXCLUSIVO",
        "allowedUses": "PRODUCTIVO INDUSTRIAL EXCLUSIVO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-66-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D000445",
    "name": "Las Muñecas II",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.1027058504969,
        "lat": -34.8598504019088
      },
      {
        "lng": -58.1034420289177,
        "lat": -34.8604781513319
      },
      {
        "lng": -58.1034408218365,
        "lat": -34.8605164348453
      },
      {
        "lng": -58.10210753673821,
        "lat": -34.8615740404569
      },
      {
        "lng": -58.1021033672294,
        "lat": -34.8615699198213
      },
      {
        "lng": -58.1020291951507,
        "lat": -34.8616287838139
      },
      {
        "lng": -58.1020323913166,
        "lat": -34.8616324386398
      },
      {
        "lng": -58.10194360692029,
        "lat": -34.8617038719216
      },
      {
        "lng": -58.1018981570226,
        "lat": -34.8617023511735
      },
      {
        "lng": -58.1011650530959,
        "lat": -34.8610740998013
      },
      {
        "lng": -58.1019242484463,
        "lat": -34.86047185686
      },
      {
        "lng": -58.1027058504969,
        "lat": -34.8598504019088
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1170000,
      "marketValueRegularizedUsd": 1470000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060K00020000000000000000000000000003000"
      ],
      "totalAreaSqM": 19524,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-67-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D000446",
    "name": "El Cauquen",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -57.9968245001166,
        "lat": -34.8976439704334
      },
      {
        "lng": -57.99460796180439,
        "lat": -34.8955873527889
      },
      {
        "lng": -57.99577850593929,
        "lat": -34.8952834032051
      },
      {
        "lng": -57.9958191784204,
        "lat": -34.895320122353
      },
      {
        "lng": -57.9959413632031,
        "lat": -34.8952883423753
      },
      {
        "lng": -57.997712837352,
        "lat": -34.8969623401268
      },
      {
        "lng": -57.9968245001166,
        "lat": -34.8976439704334
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1180000,
      "marketValueRegularizedUsd": 1480000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A0018000000000000000000000000000500N",
        "Nomenclatura: 055030A0018000000000000000000000000000500J"
      ],
      "totalAreaSqM": 33779,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.6,
        "fot": 1,
        "density": 300,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU RM",
        "description": "AREA URBANA / RESIDENCIAL MIXTA",
        "allowedUses": "HABITACIONAL, SERVICIOS",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-68-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D00044D",
    "name": "La Florida I",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.110136808945,
        "lat": -35.0760129455172
      },
      {
        "lng": -58.1003093598755,
        "lat": -35.0671075907353
      },
      {
        "lng": -58.0918118322686,
        "lat": -35.0596099791709
      },
      {
        "lng": -58.0921828895211,
        "lat": -35.0561504198462
      },
      {
        "lng": -58.0938228326512,
        "lat": -35.0546778671936
      },
      {
        "lng": -58.1043459226731,
        "lat": -35.0641224419946
      },
      {
        "lng": -58.1141205050565,
        "lat": -35.0730050232061
      },
      {
        "lng": -58.110136808945,
        "lat": -35.0760129455172
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1190000,
      "marketValueRegularizedUsd": 1490000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05510000000000000000000000000000000315000H",
        "Nomenclatura: 05510000000000000000000000000000000315000I"
      ],
      "totalAreaSqM": 1387245,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 0,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR CC",
        "description": "AREA RURAL/ CLUB DE CAMPO",
        "allowedUses": "VIVIENDA UNIFAMILIAR",
        "complementaryUses": "COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-69-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D00044E",
    "name": "Las Moras (55)",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.06996457455859,
        "lat": -35.0180100718026
      },
      {
        "lng": -58.0694376285473,
        "lat": -35.0184213788646
      },
      {
        "lng": -58.0687577502225,
        "lat": -35.01780801294
      },
      {
        "lng": -58.0692874548393,
        "lat": -35.017391165219
      },
      {
        "lng": -58.06996457455859,
        "lat": -35.0180100718026
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1200000,
      "marketValueRegularizedUsd": 1500000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030G0392000000000000000000000000000100G",
        "Nomenclatura: 055030G03920000000000000000000000000005000",
        "Nomenclatura: 055030G039200000000000000000039200H0001000",
        "Nomenclatura: 055030G039200000000000000000039200B0001000"
      ],
      "totalAreaSqM": 48009,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 100000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR RI",
        "description": "AREA RURAL/ RURAL INTENSIVO",
        "allowedUses": "PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, SERVICIOS"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-70-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D00044F",
    "name": "Nuevos Aires",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0118249999953,
        "lat": -34.9641169999928
      },
      {
        "lng": -58.0121739999953,
        "lat": -34.9644599999928
      },
      {
        "lng": -58.01111699999529,
        "lat": -34.9652509999928
      },
      {
        "lng": -58.0103979999953,
        "lat": -34.9645739999928
      },
      {
        "lng": -58.01247999999531,
        "lat": -34.9630179999928
      },
      {
        "lng": -58.0128549999953,
        "lat": -34.9633789999928
      },
      {
        "lng": -58.0118249999953,
        "lat": -34.9641169999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1210000,
      "marketValueRegularizedUsd": 1510000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030D01550000000000000000000000000003000",
        "Nomenclatura: 055030D015500000000000000000015500A0001000",
        "Nomenclatura: 055030D015500000000000000000015500B000100A"
      ],
      "totalAreaSqM": 45299,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.6,
        "fot": 1.2,
        "density": 300,
        "minFront": 15,
        "minArea": 375,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R3",
        "description": "AREA URBANA / RESIDENCIAL 3",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-71-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D000470",
    "name": "Villalba II",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.108405097139,
        "lat": -34.8579746182609
      },
      {
        "lng": -58.1075342546317,
        "lat": -34.8572587345176
      },
      {
        "lng": -58.1091828992754,
        "lat": -34.8559301940883
      },
      {
        "lng": -58.1098108593463,
        "lat": -34.8564622237095
      },
      {
        "lng": -58.1100505985031,
        "lat": -34.8566544888823
      },
      {
        "lng": -58.108405097139,
        "lat": -34.8579746182609
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1220000,
      "marketValueRegularizedUsd": 1520000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000018000B",
        "Nomenclatura: 05506000000000000000000000000000000018200F",
        "Nomenclatura: 05506000000000000000000000000000000018200D",
        "Nomenclatura: 05506000000000000000000000000000000018100B",
        "Nomenclatura: 05506000000000000000000000000000000018200A",
        "Nomenclatura: 05506000000000000000000000000000000018200E"
      ],
      "totalAreaSqM": 107906,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-72-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D000471",
    "name": "Villalba I",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.1067242593511,
        "lat": -34.8566363489053
      },
      {
        "lng": -58.10630537586491,
        "lat": -34.8562943860465
      },
      {
        "lng": -58.1058890814875,
        "lat": -34.8559588608735
      },
      {
        "lng": -58.1059453687191,
        "lat": -34.8559119724747
      },
      {
        "lng": -58.105905752635,
        "lat": -34.8558802627455
      },
      {
        "lng": -58.10586742290461,
        "lat": -34.8559116593339
      },
      {
        "lng": -58.10516179888559,
        "lat": -34.8553492895312
      },
      {
        "lng": -58.1043262055704,
        "lat": -34.8546719648247
      },
      {
        "lng": -58.105011384486,
        "lat": -34.8541519105705
      },
      {
        "lng": -58.10599446659509,
        "lat": -34.8533984778837
      },
      {
        "lng": -58.1060240557648,
        "lat": -34.853376317885
      },
      {
        "lng": -58.1067942252395,
        "lat": -34.8539936716412
      },
      {
        "lng": -58.107532499924,
        "lat": -34.854595924199
      },
      {
        "lng": -58.10836198509131,
        "lat": -34.8552737631009
      },
      {
        "lng": -58.1067242593511,
        "lat": -34.8566363489053
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1230000,
      "marketValueRegularizedUsd": 1530000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000017300D",
        "Nomenclatura: 055060000000000000000000000000000000177000",
        "Nomenclatura: 05506000000000000000000000000000000017600D",
        "Nomenclatura: 05506000000000000000000000000000000017600C",
        "Nomenclatura: 05506000000000000000000000000000000018000D",
        "Nomenclatura: 05506000000000000000000000000000000018000B",
        "Nomenclatura: 05506000000000000000000000000000000018100B",
        "Nomenclatura: 05506000000000000000000000000000000018100D",
        "Nomenclatura: 05506000000000000000000000000000000018100C",
        "Nomenclatura: 055060000000000000000000000000000000175000",
        "Nomenclatura: 055060000000000000000000000000000000178000"
      ],
      "totalAreaSqM": 185693,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-73-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D000475",
    "name": "Quintas del Oasis",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -57.8795452999933,
        "lat": -34.9470353999927
      },
      {
        "lng": -57.8788210999933,
        "lat": -34.9475849999927
      },
      {
        "lng": -57.8761335999932,
        "lat": -34.9450873999927
      },
      {
        "lng": -57.8768523999932,
        "lat": -34.9445597999927
      },
      {
        "lng": -57.8795452999933,
        "lat": -34.9470353999927
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1240000,
      "marketValueRegularizedUsd": 1540000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055090000000000000000000000000000002905000",
        "Nomenclatura: 055090000000000000000000000000000002903000",
        "Nomenclatura: 055090000000000000000000000000000002904000",
        "Nomenclatura: 055090000000000000000000000000000002906000"
      ],
      "totalAreaSqM": 182337,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.2,
        "fot": 0.3,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "6 MTS (2 NIV)",
        "zoning": "AC RU",
        "description": "AREA COMPLEMENTARIA/ RESERVA PARA AMPLIACIÓN URBANA",
        "allowedUses": "PRODUCTIVO - AGROPECUARIO",
        "complementaryUses": "HABITACIONAL, COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-74-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0D000476",
    "name": "Las Garzas",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.1002914905016,
        "lat": -34.8617708921694
      },
      {
        "lng": -58.0995211831917,
        "lat": -34.8623845765465
      },
      {
        "lng": -58.0987614298258,
        "lat": -34.8617366079656
      },
      {
        "lng": -58.099531736279,
        "lat": -34.8611229283298
      },
      {
        "lng": -58.1003021405939,
        "lat": -34.8605092450904
      },
      {
        "lng": -58.10106178844641,
        "lat": -34.8611571123901
      },
      {
        "lng": -58.1002914905016,
        "lat": -34.8617708921694
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1250000,
      "marketValueRegularizedUsd": 1550000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060K00030000000000000000000000000004000",
        "Nomenclatura: 055060K00030000000000000000000000000005000",
        "Nomenclatura: 055060K00030000000000000000000000000006000",
        "Nomenclatura: 055060K00030000000000000000000000000003000"
      ],
      "totalAreaSqM": 39415,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": true,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-75-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E00048E",
    "name": "Sin Nombre 021",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0218344775368,
        "lat": -34.8953293582524
      },
      {
        "lng": -58.0221585356178,
        "lat": -34.8956229311873
      },
      {
        "lng": -58.0222035076088,
        "lat": -34.8956633165308
      },
      {
        "lng": -58.021699681162,
        "lat": -34.8960378593668
      },
      {
        "lng": -58.0215550257782,
        "lat": -34.8961449112224
      },
      {
        "lng": -58.0211481262969,
        "lat": -34.8964456885236
      },
      {
        "lng": -58.0210616897478,
        "lat": -34.8965105198543
      },
      {
        "lng": -58.020982397822,
        "lat": -34.896569339248
      },
      {
        "lng": -58.0205767954533,
        "lat": -34.896870586275
      },
      {
        "lng": -58.0200955831848,
        "lat": -34.8964345805096
      },
      {
        "lng": -58.0217224772576,
        "lat": -34.8952287620131
      },
      {
        "lng": -58.0218344775368,
        "lat": -34.8953293582524
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1260000,
      "marketValueRegularizedUsd": 1560000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030A002600000000000000000002600H001400A",
        "Nomenclatura: 055030A002600000000000000000002600J0015000",
        "Nomenclatura: 055030A002600000000000000000002600J0024000",
        "Nomenclatura: 055030A002600000000000000000002600J0025000",
        "Nomenclatura: 055030A002600000000000000000002600J0034000",
        "Nomenclatura: 055030A0026000000000000000000000000000700D"
      ],
      "totalAreaSqM": 16907,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-76-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E0004AE",
    "name": "Haras de ACLHO",
    "type": "condominio",
    "polygon": [
      {
        "lng": -57.9816039791045,
        "lat": -34.997362640618
      },
      {
        "lng": -57.9800188421276,
        "lat": -34.9985520611658
      },
      {
        "lng": -57.9780366024706,
        "lat": -34.9967883124558
      },
      {
        "lng": -57.97964696763221,
        "lat": -34.9955791507797
      },
      {
        "lng": -57.980985556576,
        "lat": -34.9945806498145
      },
      {
        "lng": -57.9819315820823,
        "lat": -34.9954435053251
      },
      {
        "lng": -57.9829426407455,
        "lat": -34.9963659219788
      },
      {
        "lng": -57.9816039791045,
        "lat": -34.997362640618
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1270000,
      "marketValueRegularizedUsd": 1570000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030F02910000000000000000000000000004000",
        "Nomenclatura: 055030F0291000000000000000000000000000100D",
        "Nomenclatura: 055030F0291000000000000000000000000000100A",
        "Nomenclatura: 055030F02910000000000000000000000000002000"
      ],
      "totalAreaSqM": 194195,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-77-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E0004BE",
    "name": "La Elvira Barrio Cerrado",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -57.9062623999937,
        "lat": -34.9565344999928
      },
      {
        "lng": -57.9051840999937,
        "lat": -34.9555187999928
      },
      {
        "lng": -57.9064715999937,
        "lat": -34.9545822999928
      },
      {
        "lng": -57.9075390999937,
        "lat": -34.9555847999928
      },
      {
        "lng": -57.9062623999937,
        "lat": -34.9565344999928
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1280000,
      "marketValueRegularizedUsd": 1580000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055090B0000000004800000000000000000000700B"
      ],
      "totalAreaSqM": 30983,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-78-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E0004BF",
    "name": "City Bell Chico",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.04069569999569,
        "lat": -34.8821188999928
      },
      {
        "lng": -58.0396817999956,
        "lat": -34.8808470999928
      },
      {
        "lng": -58.0392954999956,
        "lat": -34.8807238999928
      },
      {
        "lng": -58.0387536999956,
        "lat": -34.8808426999928
      },
      {
        "lng": -58.03823339999559,
        "lat": -34.8808426999928
      },
      {
        "lng": -58.0378578999956,
        "lat": -34.8806710999928
      },
      {
        "lng": -58.03769689999559,
        "lat": -34.8804025999928
      },
      {
        "lng": -58.0377666999956,
        "lat": -34.8800593999928
      },
      {
        "lng": -58.0410603999957,
        "lat": -34.8793552999928
      },
      {
        "lng": -58.04190799999571,
        "lat": -34.8818283999928
      },
      {
        "lng": -58.04069569999569,
        "lat": -34.8821188999928
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1290000,
      "marketValueRegularizedUsd": 1590000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060U0000000000000000070000000000000100A",
        "Nomenclatura: 055060000000000000000000000000000000976000"
      ],
      "totalAreaSqM": 1097118,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 0,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU UE",
        "description": "AREA URBANA / USO ESPECIFICO",
        "allowedUses": "USO ESPECIFICO - BATALLÓN 601",
        "complementaryUses": "Comercial barrial"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-79-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E0004CF",
    "name": "Parque Industrial II",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.1528199795661,
        "lat": -34.9771927711867
      },
      {
        "lng": -58.1533335388733,
        "lat": -34.9776397518866
      },
      {
        "lng": -58.1533152726688,
        "lat": -34.9780826063201
      },
      {
        "lng": -58.1529962182774,
        "lat": -34.9783501923755
      },
      {
        "lng": -58.15030326481629,
        "lat": -34.9804403120962
      },
      {
        "lng": -58.14895191503989,
        "lat": -34.9815219990193
      },
      {
        "lng": -58.1440459188636,
        "lat": -34.9773551712674
      },
      {
        "lng": -58.1454112207499,
        "lat": -34.9762807809951
      },
      {
        "lng": -58.1446072856003,
        "lat": -34.9755985261993
      },
      {
        "lng": -58.1439233260825,
        "lat": -34.9749664964068
      },
      {
        "lng": -58.1421948813263,
        "lat": -34.9735042270585
      },
      {
        "lng": -58.1420728706925,
        "lat": -34.9733024683706
      },
      {
        "lng": -58.1404925185166,
        "lat": -34.9719660897555
      },
      {
        "lng": -58.1388687941696,
        "lat": -34.9705794589023
      },
      {
        "lng": -58.13559705813211,
        "lat": -34.9677643045218
      },
      {
        "lng": -58.139707830344,
        "lat": -34.9645636715939
      },
      {
        "lng": -58.1413912022636,
        "lat": -34.96598545045
      },
      {
        "lng": -58.1430005489081,
        "lat": -34.9673426280983
      },
      {
        "lng": -58.14461473514881,
        "lat": -34.9687108538769
      },
      {
        "lng": -58.1461869450995,
        "lat": -34.9700445317224
      },
      {
        "lng": -58.1463047278544,
        "lat": -34.9702932658275
      },
      {
        "lng": -58.1479920064058,
        "lat": -34.9717705306783
      },
      {
        "lng": -58.1487452959093,
        "lat": -34.9724844350475
      },
      {
        "lng": -58.1494789076323,
        "lat": -34.9730710523181
      },
      {
        "lng": -58.1535521332199,
        "lat": -34.9766331642807
      },
      {
        "lng": -58.1528199795661,
        "lat": -34.9771927711867
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1300000,
      "marketValueRegularizedUsd": 1600000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055080S00000000000000000800000000000002000",
        "Nomenclatura: 055080S00000000000000000800000000000001000",
        "Nomenclatura: 055080S0000000000000000090000000000001500A",
        "Nomenclatura: 055080S0000000000000000090000000000000100A",
        "Nomenclatura: 055080S00000000000000000900000000000013000",
        "Nomenclatura: 055080S00000000000000000900000000000014000",
        "Nomenclatura: 05508000000000000000000000000000000246300A",
        "Nomenclatura: 055080S00000000000000000800000000000014000",
        "Nomenclatura: 055080S00000000000000000800000000000013000",
        "Nomenclatura: 055080S00000000000000000800000000000012000",
        "Nomenclatura: 055080S00000000000000000800000000000011000"
      ],
      "totalAreaSqM": 3403913,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 30000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR RE",
        "description": "AREA RURAL/  RURAL EXTENSIVO",
        "allowedUses": "PRODUCTIVO AGROPECUARIO EXTENSIVO",
        "complementaryUses": "HABITACIONAL UNIFAMILIAR, COMERCIO, SERVICIOS, PRODUCTIVO INDUSTRIAL, EXTRACTIVO"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-80-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E000505",
    "name": "POTREROS DE CASTELLS",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0255687889286,
        "lat": -34.8697666801373
      },
      {
        "lng": -58.0255822379719,
        "lat": -34.8697301289895
      },
      {
        "lng": -58.026617358094,
        "lat": -34.869271096706
      },
      {
        "lng": -58.0266618203349,
        "lat": -34.8692820022941
      },
      {
        "lng": -58.0272003288493,
        "lat": -34.8701067950477
      },
      {
        "lng": -58.02734278050141,
        "lat": -34.8701446149548
      },
      {
        "lng": -58.0261554841447,
        "lat": -34.8706703954982
      },
      {
        "lng": -58.0255687889286,
        "lat": -34.8697666801373
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1310000,
      "marketValueRegularizedUsd": 1610000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055040F0000000000000000040000000000000100B",
        "Nomenclatura: 055040F0000000000000000040000000000000200A"
      ],
      "totalAreaSqM": 37060,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "dentro",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-81-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E000506",
    "name": "Village El Molino",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0870221914244,
        "lat": -34.8448007472912
      },
      {
        "lng": -58.0871771592018,
        "lat": -34.8452087391124
      },
      {
        "lng": -58.0873478949496,
        "lat": -34.8456581650164
      },
      {
        "lng": -58.0854739527949,
        "lat": -34.8458718246187
      },
      {
        "lng": -58.0852608834764,
        "lat": -34.8453626990305
      },
      {
        "lng": -58.08582097014,
        "lat": -34.8452138925208
      },
      {
        "lng": -58.0857728469373,
        "lat": -34.8450875033891
      },
      {
        "lng": -58.0863064667944,
        "lat": -34.84494855194
      },
      {
        "lng": -58.0862239372701,
        "lat": -34.8447312280259
      },
      {
        "lng": -58.08692688362989,
        "lat": -34.844549787121
      },
      {
        "lng": -58.0870221914244,
        "lat": -34.8448007472912
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1320000,
      "marketValueRegularizedUsd": 1620000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05504000000000000000000000000000000003200B",
        "Nomenclatura: 05504000000000000000000000000000000003400A",
        "Nomenclatura: 05504000000000000000000000000000000003100A"
      ],
      "totalAreaSqM": 31196,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-82-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E000517",
    "name": "Campos de Romero",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0528039867347,
        "lat": -34.944538342537
      },
      {
        "lng": -58.05208517891941,
        "lat": -34.9438472110274
      },
      {
        "lng": -58.0545851937087,
        "lat": -34.9420946868936
      },
      {
        "lng": -58.05534553395199,
        "lat": -34.9428255815518
      },
      {
        "lng": -58.0528039867347,
        "lat": -34.944538342537
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1330000,
      "marketValueRegularizedUsd": 1630000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000135000A",
        "Nomenclatura: 05506000000000000000000000000000000135100A",
        "Nomenclatura: 055060000000000000000000000000000001352000",
        "Nomenclatura: 055060000000000000000000000000000001318000",
        "Nomenclatura: 05506000000000000000000000000000000131700A"
      ],
      "totalAreaSqM": 232777,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-83-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E00051C",
    "name": "Grand Bell II",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0588294452447,
        "lat": -34.9127291148811
      },
      {
        "lng": -58.0573413691636,
        "lat": -34.9130796031907
      },
      {
        "lng": -58.0547584026244,
        "lat": -34.9056381140562
      },
      {
        "lng": -58.060236786679,
        "lat": -34.9043475620671
      },
      {
        "lng": -58.0608811139801,
        "lat": -34.9062038120605
      },
      {
        "lng": -58.0600343951362,
        "lat": -34.9064032527065
      },
      {
        "lng": -58.0594589474864,
        "lat": -34.9065388884775
      },
      {
        "lng": -58.0600988746283,
        "lat": -34.9083820942109
      },
      {
        "lng": -58.0601439548993,
        "lat": -34.9085119584705
      },
      {
        "lng": -58.0601971256715,
        "lat": -34.9086652934219
      },
      {
        "lng": -58.060326715565,
        "lat": -34.908634828531
      },
      {
        "lng": -58.0603453042692,
        "lat": -34.9087979752905
      },
      {
        "lng": -58.06043091670661,
        "lat": -34.9089674191478
      },
      {
        "lng": -58.0605327345649,
        "lat": -34.9090851214102
      },
      {
        "lng": -58.0605307811478,
        "lat": -34.9093402248565
      },
      {
        "lng": -58.0606644949413,
        "lat": -34.9094460895214
      },
      {
        "lng": -58.0608691977595,
        "lat": -34.9096408657163
      },
      {
        "lng": -58.0610675408664,
        "lat": -34.9097804756962
      },
      {
        "lng": -58.0610991943288,
        "lat": -34.9099510405912
      },
      {
        "lng": -58.0606817203848,
        "lat": -34.9103694813534
      },
      {
        "lng": -58.0605495817129,
        "lat": -34.9109081022394
      },
      {
        "lng": -58.0605443623559,
        "lat": -34.9114740733695
      },
      {
        "lng": -58.0603908296775,
        "lat": -34.9117826321981
      },
      {
        "lng": -58.0604084760248,
        "lat": -34.9120184019285
      },
      {
        "lng": -58.06053930104689,
        "lat": -34.9123262734801
      },
      {
        "lng": -58.05903968534821,
        "lat": -34.9126795726716
      },
      {
        "lng": -58.0588294452447,
        "lat": -34.9127291148811
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1340000,
      "marketValueRegularizedUsd": 1640000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506YY00000000000000003300000000000026000",
        "Nomenclatura: 05506YY00000000000000003300000000000027000",
        "Nomenclatura: 05506YY00000000000000003300000000000028000",
        "Nomenclatura: 05506YY00000000000000003300000000000017000",
        "Nomenclatura: 05506YY00000000000000003300000000000018000",
        "Nomenclatura: 05506YY00000000000000003300000000000012000",
        "Nomenclatura: 05506YY00000000000000003300000000000014000",
        "Nomenclatura: 05506YY00000000000000003300000000000015000",
        "Nomenclatura: 05506YY00000000000000003300000000000016000",
        "Nomenclatura: 05506YY00000000000000003300000000000053000",
        "Nomenclatura: 05506YY00000000000000003300000000000054000",
        "Nomenclatura: 05506YY00000000000000003300000000000031000",
        "Nomenclatura: 05506YY00000000000000003300000000000029000",
        "Nomenclatura: 05506YY00000000000000003300000000000030000",
        "Nomenclatura: 05506YY00000000000000003300000000000032000",
        "Nomenclatura: 05506YY00000000000000003300000000000033000",
        "Nomenclatura: 05506YY00000000000000003300000000000055000",
        "Nomenclatura: 05506YY00000000000000003300000000000056000",
        "Nomenclatura: 05506YY00000000000000003300000000000034000",
        "Nomenclatura: 05506YY00000000000000003300000000000036000",
        "Nomenclatura: 05506YY00000000000000003300000000000035000",
        "Nomenclatura: 05506YY00000000000000003300000000000038000",
        "Nomenclatura: 05506YY00000000000000003300000000000037000",
        "Nomenclatura: 05506YY00000000000000003300000000000040000",
        "Nomenclatura: 05506YY00000000000000003300000000000039000",
        "Nomenclatura: 05506YY00000000000000003800000000000001000",
        "Nomenclatura: 05506YY00000000000000003800000000000002000",
        "Nomenclatura: 05506YY00000000000000003800000000000008000",
        "Nomenclatura: 05506YY00000000000000003800000000000007000",
        "Nomenclatura: 05506YY00000000000000003800000000000006000",
        "Nomenclatura: 05506YY00000000000000003800000000000005000",
        "Nomenclatura: 05506YY00000000000000003800000000000004000",
        "Nomenclatura: 05506YY0000000000000000370000000000000300A",
        "Nomenclatura: 05506YY0000000000000000370000000000000100A",
        "Nomenclatura: 05506YY00000000000000003800000000000003000",
        "Nomenclatura: 05506YY00000000000000003300000000000041000",
        "Nomenclatura: 05506YY00000000000000003300000000000042000",
        "Nomenclatura: 05506YY00000000000000003300000000000043000",
        "Nomenclatura: 05506YY00000000000000003500000000000021000",
        "Nomenclatura: 05506YY00000000000000003600000000000011000",
        "Nomenclatura: 05506YY00000000000000003600000000000010000",
        "Nomenclatura: 05506YY00000000000000003300000000000044000",
        "Nomenclatura: 05506YY00000000000000003300000000000045000",
        "Nomenclatura: 05506YY00000000000000003300000000000060000",
        "Nomenclatura: 05506YY00000000000000003300000000000059000",
        "Nomenclatura: 05506YY00000000000000003300000000000058000",
        "Nomenclatura: 05506YY00000000000000003300000000000046000",
        "Nomenclatura: 05506YY00000000000000003300000000000047000",
        "Nomenclatura: 05506YY00000000000000003300000000000048000",
        "Nomenclatura: 05506YY00000000000000003300000000000057000",
        "Nomenclatura: 05506YY00000000000000003300000000000050000",
        "Nomenclatura: 05506YY00000000000000003300000000000049000",
        "Nomenclatura: 05506YY00000000000000003600000000000009000",
        "Nomenclatura: 05506YY00000000000000003600000000000008000",
        "Nomenclatura: 05506YY00000000000000003600000000000007000",
        "Nomenclatura: 05506YY00000000000000003600000000000006000",
        "Nomenclatura: 05506YY00000000000000003600000000000002000",
        "Nomenclatura: 05506YY00000000000000003600000000000003000",
        "Nomenclatura: 05506YY00000000000000003600000000000004000",
        "Nomenclatura: 05506YY00000000000000003600000000000005000",
        "Nomenclatura: 05506YY00000000000000003300000000000051000",
        "Nomenclatura: 05506YY00000000000000003300000000000052000",
        "Nomenclatura: 05506YY00000000000000003300000000000013000",
        "Nomenclatura: 05506YY00000000000000003900000000000000000",
        "Nomenclatura: 05506YY00000000000000002600000000000000000",
        "Nomenclatura: 05506YY00000000000000003200000000000014000",
        "Nomenclatura: 05506YY00000000000000003200000000000015000",
        "Nomenclatura: 05506YY00000000000000003200000000000016000",
        "Nomenclatura: 05506YY00000000000000003200000000000017000",
        "Nomenclatura: 05506YY00000000000000003600000000000001000",
        "Nomenclatura: 05506YY00000000000000003600000000000020000",
        "Nomenclatura: 05506YY00000000000000003600000000000019000",
        "Nomenclatura: 05506YY00000000000000003200000000000025000",
        "Nomenclatura: 05506YY00000000000000003200000000000026000",
        "Nomenclatura: 05506YY00000000000000003200000000000027000",
        "Nomenclatura: 05506YY00000000000000003200000000000018000",
        "Nomenclatura: 05506YY00000000000000003200000000000019000",
        "Nomenclatura: 05506YY00000000000000003200000000000020000",
        "Nomenclatura: 05506YY00000000000000003200000000000013000",
        "Nomenclatura: 05506YY00000000000000003200000000000012000",
        "Nomenclatura: 05506YY00000000000000003200000000000010000",
        "Nomenclatura: 05506YY00000000000000003200000000000011000",
        "Nomenclatura: 05506YY00000000000000003200000000000009000",
        "Nomenclatura: 05506YY00000000000000003200000000000008000",
        "Nomenclatura: 05506YY00000000000000003200000000000007000",
        "Nomenclatura: 05506YY00000000000000003200000000000023000",
        "Nomenclatura: 05506YY00000000000000003200000000000022000",
        "Nomenclatura: 05506YY00000000000000003200000000000021000",
        "Nomenclatura: 05506YY00000000000000003200000000000024000",
        "Nomenclatura: 05506YY00000000000000003200000000000002000",
        "Nomenclatura: 05506YY00000000000000003200000000000003000",
        "Nomenclatura: 05506YY00000000000000003200000000000004000",
        "Nomenclatura: 05506YY00000000000000003200000000000005000",
        "Nomenclatura: 05506YY00000000000000003200000000000006000",
        "Nomenclatura: 05506YY00000000000000003000000000000027000",
        "Nomenclatura: 05506YY00000000000000003000000000000028000",
        "Nomenclatura: 05506YY00000000000000003000000000000029000",
        "Nomenclatura: 05506YY00000000000000003000000000000030000",
        "Nomenclatura: 05506YY00000000000000003000000000000031000",
        "Nomenclatura: 05506YY00000000000000002900000000000008000",
        "Nomenclatura: 05506YY00000000000000002900000000000009000",
        "Nomenclatura: 05506YY00000000000000002900000000000010000",
        "Nomenclatura: 05506YY00000000000000002900000000000012000",
        "Nomenclatura: 05506YY00000000000000002900000000000011000",
        "Nomenclatura: 05506YY00000000000000002900000000000013000",
        "Nomenclatura: 05506YY00000000000000002900000000000014000",
        "Nomenclatura: 05506YY00000000000000002900000000000015000",
        "Nomenclatura: 05506YY00000000000000002900000000000005000",
        "Nomenclatura: 05506YY00000000000000002900000000000006000",
        "Nomenclatura: 05506YY00000000000000002900000000000007000",
        "Nomenclatura: 05506YY00000000000000003000000000000032000",
        "Nomenclatura: 05506YY00000000000000003000000000000033000",
        "Nomenclatura: 05506YY00000000000000003000000000000034000",
        "Nomenclatura: 05506YY00000000000000002900000000000004000",
        "Nomenclatura: 05506YY00000000000000003000000000000035000",
        "Nomenclatura: 05506YY00000000000000003000000000000004000",
        "Nomenclatura: 05506YY00000000000000003000000000000002000",
        "Nomenclatura: 05506YY00000000000000003000000000000003000",
        "Nomenclatura: 05506YY00000000000000003000000000000022000",
        "Nomenclatura: 05506YY00000000000000003000000000000005000",
        "Nomenclatura: 05506YY00000000000000003000000000000006000",
        "Nomenclatura: 05506YY00000000000000003000000000000009000",
        "Nomenclatura: 05506YY00000000000000003000000000000008000",
        "Nomenclatura: 05506YY00000000000000003100000000000002000",
        "Nomenclatura: 05506YY00000000000000003000000000000007000",
        "Nomenclatura: 05506YY00000000000000003100000000000001000",
        "Nomenclatura: 05506YY00000000000000003100000000000007000",
        "Nomenclatura: 05506YY00000000000000003100000000000008000",
        "Nomenclatura: 05506YY00000000000000003100000000000006000",
        "Nomenclatura: 05506YY00000000000000003100000000000005000",
        "Nomenclatura: 05506YY00000000000000003100000000000004000",
        "Nomenclatura: 05506YY00000000000000003100000000000003000",
        "Nomenclatura: 05506YY00000000000000003000000000000010000",
        "Nomenclatura: 05506YY00000000000000003000000000000011000",
        "Nomenclatura: 05506YY00000000000000003000000000000012000",
        "Nomenclatura: 05506YY00000000000000003000000000000019000",
        "Nomenclatura: 05506YY00000000000000003000000000000020000",
        "Nomenclatura: 05506YY00000000000000003000000000000021000",
        "Nomenclatura: 05506YY00000000000000003000000000000023000",
        "Nomenclatura: 05506YY00000000000000003000000000000024000",
        "Nomenclatura: 05506YY00000000000000003000000000000025000",
        "Nomenclatura: 05506YY00000000000000003000000000000017000",
        "Nomenclatura: 05506YY00000000000000003000000000000026000",
        "Nomenclatura: 05506YY00000000000000003000000000000015000",
        "Nomenclatura: 05506YY00000000000000003000000000000016000",
        "Nomenclatura: 05506YY00000000000000003000000000000018000",
        "Nomenclatura: 05506YY00000000000000003000000000000013000",
        "Nomenclatura: 05506YY00000000000000003000000000000014000",
        "Nomenclatura: 05506YY00000000000000003300000000000005000",
        "Nomenclatura: 05506YY00000000000000003300000000000004000",
        "Nomenclatura: 05506YY00000000000000003300000000000022000",
        "Nomenclatura: 05506YY00000000000000003300000000000003000",
        "Nomenclatura: 05506YY00000000000000003300000000000002000",
        "Nomenclatura: 05506YY00000000000000003300000000000001000",
        "Nomenclatura: 05506YY00000000000000003300000000000007000",
        "Nomenclatura: 05506YY00000000000000003300000000000021000",
        "Nomenclatura: 05506YY00000000000000003300000000000008000",
        "Nomenclatura: 05506YY00000000000000003300000000000009000",
        "Nomenclatura: 05506YY00000000000000003300000000000010000",
        "Nomenclatura: 05506YY00000000000000003300000000000011000",
        "Nomenclatura: 05506YY00000000000000003300000000000020000",
        "Nomenclatura: 05506YY00000000000000003300000000000019000",
        "Nomenclatura: 05506YY00000000000000003300000000000023000",
        "Nomenclatura: 05506YY00000000000000003300000000000024000",
        "Nomenclatura: 05506YY00000000000000003300000000000025000",
        "Nomenclatura: 05506YY00000000000000003300000000000006000",
        "Nomenclatura: 05506YY00000000000000003100000000000009000",
        "Nomenclatura: 05506YY00000000000000002800000000000002000",
        "Nomenclatura: 05506YY00000000000000002900000000000001000",
        "Nomenclatura: 05506YY00000000000000002900000000000002000",
        "Nomenclatura: 05506YY00000000000000002900000000000017000",
        "Nomenclatura: 05506YY00000000000000003000000000000001000",
        "Nomenclatura: 05506YY00000000000000002900000000000003000",
        "Nomenclatura: 05506YY00000000000000002900000000000016000",
        "Nomenclatura: 05506YY00000000000000002800000000000017000",
        "Nomenclatura: 05506YY00000000000000003500000000000002000",
        "Nomenclatura: 05506YY00000000000000002800000000000009000",
        "Nomenclatura: 05506YY00000000000000003500000000000025000",
        "Nomenclatura: 05506YY00000000000000002800000000000001000",
        "Nomenclatura: 05506YY00000000000000002800000000000008000",
        "Nomenclatura: 05506YY00000000000000003600000000000013000",
        "Nomenclatura: 05506YY00000000000000002800000000000007000",
        "Nomenclatura: 05506YY00000000000000003500000000000024000",
        "Nomenclatura: 05506YY00000000000000003500000000000020000",
        "Nomenclatura: 05506YY00000000000000003600000000000015000",
        "Nomenclatura: 05506YY00000000000000003200000000000030000",
        "Nomenclatura: 05506YY00000000000000002800000000000006000",
        "Nomenclatura: 05506YY00000000000000003500000000000023000",
        "Nomenclatura: 05506YY00000000000000003600000000000016000",
        "Nomenclatura: 05506YY00000000000000002800000000000005000",
        "Nomenclatura: 05506YY00000000000000003500000000000022000",
        "Nomenclatura: 05506YY00000000000000003200000000000029000",
        "Nomenclatura: 05506YY00000000000000003200000000000001000",
        "Nomenclatura: 05506YY00000000000000002800000000000004000",
        "Nomenclatura: 05506YY00000000000000003600000000000017000",
        "Nomenclatura: 05506YY00000000000000003600000000000012000",
        "Nomenclatura: 05506YY00000000000000002800000000000003000",
        "Nomenclatura: 05506YY00000000000000003600000000000018000",
        "Nomenclatura: 05506YY00000000000000003200000000000028000",
        "Nomenclatura: 05506YY00000000000000003500000000000001000",
        "Nomenclatura: 05506YY00000000000000002800000000000015000",
        "Nomenclatura: 05506YY00000000000000003500000000000013000",
        "Nomenclatura: 05506YY00000000000000003500000000000012000",
        "Nomenclatura: 05506YY00000000000000003500000000000011000",
        "Nomenclatura: 05506YY00000000000000003500000000000009000",
        "Nomenclatura: 05506YY00000000000000003500000000000010000",
        "Nomenclatura: 05506YY00000000000000003500000000000007000",
        "Nomenclatura: 05506YY00000000000000003500000000000006000",
        "Nomenclatura: 05506YY00000000000000003500000000000008000",
        "Nomenclatura: 05506YY00000000000000003600000000000014000",
        "Nomenclatura: 05506YY00000000000000003500000000000003000",
        "Nomenclatura: 05506YY00000000000000003500000000000004000",
        "Nomenclatura: 05506YY00000000000000003500000000000005000",
        "Nomenclatura: 05506YY0000000000000000270000000000000700B",
        "Nomenclatura: 05506YY00000000000000002800000000000010000",
        "Nomenclatura: 05506YY00000000000000002800000000000011000",
        "Nomenclatura: 05506YY00000000000000002800000000000012000",
        "Nomenclatura: 05506YY00000000000000002800000000000013000",
        "Nomenclatura: 05506YY00000000000000002700000000000005000",
        "Nomenclatura: 05506YY00000000000000002800000000000014000",
        "Nomenclatura: 05506YY00000000000000002700000000000006000",
        "Nomenclatura: 05506YY0000000000000000270000000000000700A",
        "Nomenclatura: 05506YY00000000000000002700000000000001000",
        "Nomenclatura: 05506YY00000000000000002700000000000002000",
        "Nomenclatura: 05506YY00000000000000002700000000000003000",
        "Nomenclatura: 05506YY00000000000000002800000000000016000",
        "Nomenclatura: 05506YY00000000000000002700000000000004000",
        "Nomenclatura: 05506YY00000000000000003500000000000019000",
        "Nomenclatura: 05506YY00000000000000003500000000000016000",
        "Nomenclatura: 05506YY00000000000000003500000000000015000",
        "Nomenclatura: 05506YY00000000000000003500000000000017000",
        "Nomenclatura: 05506YY00000000000000003500000000000018000"
      ],
      "totalAreaSqM": 353007,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": true,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-84-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E00051E",
    "name": "Las Alondras",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.1033466255644,
        "lat": -34.8572715219871
      },
      {
        "lng": -58.10322070589,
        "lat": -34.8573701349359
      },
      {
        "lng": -58.1030940063768,
        "lat": -34.8574693664422
      },
      {
        "lng": -58.10296741792261,
        "lat": -34.8575685094195
      },
      {
        "lng": -58.10284071987099,
        "lat": -34.8576676505481
      },
      {
        "lng": -58.1027141287406,
        "lat": -34.8577668833298
      },
      {
        "lng": -58.1025874300818,
        "lat": -34.8578660241715
      },
      {
        "lng": -58.1024687451872,
        "lat": -34.8579589813345
      },
      {
        "lng": -58.1023397052212,
        "lat": -34.8580600680709
      },
      {
        "lng": -58.10221144656141,
        "lat": -34.8581604458747
      },
      {
        "lng": -58.10208329481519,
        "lat": -34.8582609153286
      },
      {
        "lng": -58.1019550355329,
        "lat": -34.8583612928385
      },
      {
        "lng": -58.10182677386921,
        "lat": -34.8584617602922
      },
      {
        "lng": -58.1016986232596,
        "lat": -34.8585621392147
      },
      {
        "lng": -58.10156802435999,
        "lat": -34.8586643723491
      },
      {
        "lng": -58.1013543445745,
        "lat": -34.8584806087923
      },
      {
        "lng": -58.1012410190204,
        "lat": -34.8583831280678
      },
      {
        "lng": -58.100908120696,
        "lat": -34.8580967439792
      },
      {
        "lng": -58.1010148934393,
        "lat": -34.8580131553584
      },
      {
        "lng": -58.1011145427278,
        "lat": -34.8579350430096
      },
      {
        "lng": -58.1012142990515,
        "lat": -34.85785702237
      },
      {
        "lng": -58.1013139479637,
        "lat": -34.8577789098437
      },
      {
        "lng": -58.1014137059818,
        "lat": -34.8577007989355
      },
      {
        "lng": -58.101513352447,
        "lat": -34.8576227763224
      },
      {
        "lng": -58.10161311008861,
        "lat": -34.8575446652364
      },
      {
        "lng": -58.1017127561778,
        "lat": -34.8574666424458
      },
      {
        "lng": -58.1018118452598,
        "lat": -34.8573890614882
      },
      {
        "lng": -58.1019305300136,
        "lat": -34.857296104956
      },
      {
        "lng": -58.1020293980304,
        "lat": -34.857218610484
      },
      {
        "lng": -58.1021283751552,
        "lat": -34.8571411176308
      },
      {
        "lng": -58.10222724073171,
        "lat": -34.8570637130748
      },
      {
        "lng": -58.10232610819281,
        "lat": -34.8569862183406
      },
      {
        "lng": -58.1024250826922,
        "lat": -34.8569088153158
      },
      {
        "lng": -58.10252394978291,
        "lat": -34.8568313204068
      },
      {
        "lng": -58.1026228146192,
        "lat": -34.8567539155013
      },
      {
        "lng": -58.10272179063241,
        "lat": -34.8566764221232
      },
      {
        "lng": -58.1028206550984,
        "lat": -34.8565990170429
      },
      {
        "lng": -58.10291428745751,
        "lat": -34.8565256759016
      },
      {
        "lng": -58.1032557596979,
        "lat": -34.8568053389712
      },
      {
        "lng": -58.1033707560664,
        "lat": -34.8569014920594
      },
      {
        "lng": -58.10347502814841,
        "lat": -34.8569885555462
      },
      {
        "lng": -58.1035877753684,
        "lat": -34.8570826906375
      },
      {
        "lng": -58.1033466255644,
        "lat": -34.8572715219871
      }
    ],
    "complianceStatus": "verde",
    "ordinanceViolations": [],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "aprobado",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1350000,
      "marketValueRegularizedUsd": 1650000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060K0001000000000000000000000000000200D",
        "Nomenclatura: 055060K0001000000000000000000000000000200C",
        "Nomenclatura: 055060K0001000000000000000000000000000200A",
        "Nomenclatura: 055060K0001000000000000000000000000000200E"
      ],
      "totalAreaSqM": 44514,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-85-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E000524",
    "name": "La Escondida",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0240788167151,
        "lat": -34.9980242809677
      },
      {
        "lng": -58.0230365980568,
        "lat": -34.9988136088354
      },
      {
        "lng": -58.0219758457337,
        "lat": -34.9996167740189
      },
      {
        "lng": -58.02096192713969,
        "lat": -34.9986929162547
      },
      {
        "lng": -58.0220105941694,
        "lat": -34.9978957810865
      },
      {
        "lng": -58.0230508743184,
        "lat": -34.9971049884072
      },
      {
        "lng": -58.0241475631911,
        "lat": -34.9962720274933
      },
      {
        "lng": -58.0251668493509,
        "lat": -34.9972007227403
      },
      {
        "lng": -58.0240788167151,
        "lat": -34.9980242809677
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1360000,
      "marketValueRegularizedUsd": 1660000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030F03240000000000000000000000000003000",
        "Nomenclatura: 055030F03240000000000000000000000000004000"
      ],
      "totalAreaSqM": 106146,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-86-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E00052C",
    "name": "Terranova 28 bis (55)",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0724099188938,
        "lat": -34.8853643920653
      },
      {
        "lng": -58.07195215413891,
        "lat": -34.885469693109
      },
      {
        "lng": -58.0715624375586,
        "lat": -34.8855647168385
      },
      {
        "lng": -58.0714573421301,
        "lat": -34.8855877425893
      },
      {
        "lng": -58.07041730701769,
        "lat": -34.8858233053752
      },
      {
        "lng": -58.070412908567,
        "lat": -34.8858243170036
      },
      {
        "lng": -58.07009939112501,
        "lat": -34.8848730552146
      },
      {
        "lng": -58.0709183100604,
        "lat": -34.8846873376079
      },
      {
        "lng": -58.0717076628939,
        "lat": -34.8845030378544
      },
      {
        "lng": -58.0720980174732,
        "lat": -34.8844132507694
      },
      {
        "lng": -58.0724099188938,
        "lat": -34.8853643920653
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1370000,
      "marketValueRegularizedUsd": 1670000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060000000000000000000000000000000832000",
        "Nomenclatura: 055060000000000000000000000000000000831000"
      ],
      "totalAreaSqM": 35208,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.4,
        "fot": 0.8,
        "density": 150,
        "minFront": 12,
        "minArea": 300,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AU R6",
        "description": "AREA URBANA / RESIDENCIAL 6",
        "allowedUses": "HABITACIONAL, COMERCIO",
        "complementaryUses": "EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-87-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E000540",
    "name": "Aldea del Bosque",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0543626558187,
        "lat": -34.9840619624216
      },
      {
        "lng": -58.0511419057342,
        "lat": -34.98645102592
      },
      {
        "lng": -58.0501337753497,
        "lat": -34.9855248870359
      },
      {
        "lng": -58.05335075376279,
        "lat": -34.9831375016811
      },
      {
        "lng": -58.0543626558187,
        "lat": -34.9840619624216
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1380000,
      "marketValueRegularizedUsd": 1680000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030E02320000000000000000000000000003000",
        "Nomenclatura: 055030E02320000000000000000000000000002000"
      ],
      "totalAreaSqM": 109505,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 100000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR RI",
        "description": "AREA RURAL/ RURAL INTENSIVO",
        "allowedUses": "PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-88-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0E000543",
    "name": "El Remanso",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.000968689782,
        "lat": -35.0141953931725
      },
      {
        "lng": -58.0001060701976,
        "lat": -35.0148520245604
      },
      {
        "lng": -57.99922769928719,
        "lat": -35.0155206459599
      },
      {
        "lng": -57.998437519652,
        "lat": -35.0147906241132
      },
      {
        "lng": -57.9976744565654,
        "lat": -35.0140856473434
      },
      {
        "lng": -57.9969116211164,
        "lat": -35.013380849919
      },
      {
        "lng": -57.9977903125738,
        "lat": -35.0127123404404
      },
      {
        "lng": -57.9986416658428,
        "lat": -35.0120638303934
      },
      {
        "lng": -57.9994931151948,
        "lat": -35.0114153156566
      },
      {
        "lng": -58.0002585403231,
        "lat": -35.0121174362034
      },
      {
        "lng": -58.0010239762934,
        "lat": -35.0128196423673
      },
      {
        "lng": -58.00181835533699,
        "lat": -35.0135483649989
      },
      {
        "lng": -58.000968689782,
        "lat": -35.0141953931725
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1390000,
      "marketValueRegularizedUsd": 1690000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055030F03310000000000000000000000000002000",
        "Nomenclatura: 055030F03310000000000000000000000000001000"
      ],
      "totalAreaSqM": 170811,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-89-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0F000561",
    "name": "La Casona I",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.07942275879481,
        "lat": -34.8993920803488
      },
      {
        "lng": -58.0764040335963,
        "lat": -34.9000419057768
      },
      {
        "lng": -58.0753557840117,
        "lat": -34.8968384742285
      },
      {
        "lng": -58.0783762787598,
        "lat": -34.8961079284125
      },
      {
        "lng": -58.07942275879481,
        "lat": -34.8993920803488
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1400000,
      "marketValueRegularizedUsd": 1700000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060I00000000000000001000000000000004000",
        "Nomenclatura: 055060I00000000000000000900000000000003000",
        "Nomenclatura: 055060I00000000000000001000000000000005000",
        "Nomenclatura: 055060I00000000000000001000000000000006000",
        "Nomenclatura: 055060I00000000000000001000000000000003000",
        "Nomenclatura: 055060I00000000000000001000000000000001000",
        "Nomenclatura: 055060I00000000000000000900000000000002000",
        "Nomenclatura: 055060I00000000000000000900000000000001000"
      ],
      "totalAreaSqM": 115522,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.2,
        "fot": 0.3,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "6 MTS (2 NIV)",
        "zoning": "AC RU",
        "description": "AREA COMPLEMENTARIA/ RESERVA PARA AMPLIACIÓN URBANA",
        "allowedUses": "PRODUCTIVO - AGROPECUARIO",
        "complementaryUses": "HABITACIONAL, COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": true,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "dentro",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-90-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0F000597",
    "name": "Northbell",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0932847124737,
        "lat": -34.8962384717649
      },
      {
        "lng": -58.0872458229096,
        "lat": -34.8975996161981
      },
      {
        "lng": -58.0866092328233,
        "lat": -34.8957847499717
      },
      {
        "lng": -58.0926923289625,
        "lat": -34.8945405917979
      },
      {
        "lng": -58.0932847124737,
        "lat": -34.8962384717649
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1410000,
      "marketValueRegularizedUsd": 1710000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060000000000000000000000000000000729000",
        "Nomenclatura: 05506000000000000000000000000000000072800G",
        "Nomenclatura: 055060I00000000000000001400000000000001000",
        "Nomenclatura: 055060I00000000000000001400000000000002000"
      ],
      "totalAreaSqM": 182309,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0.2,
        "fot": 0.3,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "6 MTS (2 NIV)",
        "zoning": "AC RU",
        "description": "AREA COMPLEMENTARIA/ RESERVA PARA AMPLIACIÓN URBANA",
        "allowedUses": "PRODUCTIVO - AGROPECUARIO",
        "complementaryUses": "HABITACIONAL, COMERCIO, EQUIPAMIENTO, SERVICIOS"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-91-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0F000598",
    "name": "Sin nombre 006",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0783006258438,
        "lat": -34.9191697680925
      },
      {
        "lng": -58.0764800332651,
        "lat": -34.9154400964655
      },
      {
        "lng": -58.0808065488171,
        "lat": -34.9144049809713
      },
      {
        "lng": -58.08144783133829,
        "lat": -34.9163021756963
      },
      {
        "lng": -58.0821182735938,
        "lat": -34.9182686805963
      },
      {
        "lng": -58.0809819283077,
        "lat": -34.9185346271845
      },
      {
        "lng": -58.0807815057637,
        "lat": -34.9185816504473
      },
      {
        "lng": -58.0783006258438,
        "lat": -34.9191697680925
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1420000,
      "marketValueRegularizedUsd": 1720000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060X0000000000000000210000000000000300A",
        "Nomenclatura: 055060X0000000000000000210000000000000300D",
        "Nomenclatura: 055060X00000000000000002100000000000002000"
      ],
      "totalAreaSqM": 283140,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-92-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0F000599",
    "name": "Ribera",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0860664846537,
        "lat": -34.9196241127309
      },
      {
        "lng": -58.0828303498345,
        "lat": -34.9203516456292
      },
      {
        "lng": -58.0835178179699,
        "lat": -34.922341482679
      },
      {
        "lng": -58.0828694213954,
        "lat": -34.922486535286
      },
      {
        "lng": -58.0827443805948,
        "lat": -34.9223396781348
      },
      {
        "lng": -58.0825118968744,
        "lat": -34.9220357562553
      },
      {
        "lng": -58.0823477464533,
        "lat": -34.9218787495183
      },
      {
        "lng": -58.082064557707,
        "lat": -34.9216421463277
      },
      {
        "lng": -58.0818510743423,
        "lat": -34.9214400695377
      },
      {
        "lng": -58.0817641867493,
        "lat": -34.9212452016182
      },
      {
        "lng": -58.0816724351393,
        "lat": -34.9211598727034
      },
      {
        "lng": -58.08149716673421,
        "lat": -34.9210331910817
      },
      {
        "lng": -58.0814608325112,
        "lat": -34.9209535031552
      },
      {
        "lng": -58.0814339870477,
        "lat": -34.9207147837659
      },
      {
        "lng": -58.08143176771559,
        "lat": -34.9204621555929
      },
      {
        "lng": -58.0814737648783,
        "lat": -34.9203980025461
      },
      {
        "lng": -58.0815342710999,
        "lat": -34.9203341418037
      },
      {
        "lng": -58.0816260522692,
        "lat": -34.9202193031334
      },
      {
        "lng": -58.0816328122899,
        "lat": -34.9201774698971
      },
      {
        "lng": -58.0814494846333,
        "lat": -34.9196017123698
      },
      {
        "lng": -58.0813341585632,
        "lat": -34.9195846399645
      },
      {
        "lng": -58.0809819283077,
        "lat": -34.9185346271845
      },
      {
        "lng": -58.0821182735938,
        "lat": -34.9182686805963
      },
      {
        "lng": -58.08535240934789,
        "lat": -34.917510852679
      },
      {
        "lng": -58.0860664846537,
        "lat": -34.9196241127309
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1430000,
      "marketValueRegularizedUsd": 1730000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 055060X0000000000000000210000000000000300D",
        "Nomenclatura: 055060X00000000000000002100000000000004000",
        "Nomenclatura: 055060X00000000000000002100000000000005000"
      ],
      "totalAreaSqM": 215664,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-93-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0F00059A",
    "name": "Ampliacion La Cañada",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0893968856099,
        "lat": -34.9313258966764
      },
      {
        "lng": -58.0893896023919,
        "lat": -34.9314040079778
      },
      {
        "lng": -58.0785200490497,
        "lat": -34.9399892113898
      },
      {
        "lng": -58.07057284639329,
        "lat": -34.9330366819559
      },
      {
        "lng": -58.0681042565529,
        "lat": -34.9305314436939
      },
      {
        "lng": -58.08164228256721,
        "lat": -34.9273605069891
      },
      {
        "lng": -58.08421624649749,
        "lat": -34.9294770610576
      },
      {
        "lng": -58.08572306363649,
        "lat": -34.9282749197947
      },
      {
        "lng": -58.0893968856099,
        "lat": -34.9313258966764
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1440000,
      "marketValueRegularizedUsd": 1740000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506000000000000000000000000000000096700E",
        "Nomenclatura: 05506000000000000000000000000000000096700B"
      ],
      "totalAreaSqM": 2428689,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-94-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0F00059B",
    "name": "Chelsea",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0795788746959,
        "lat": -34.9069127185818
      },
      {
        "lng": -58.0785148289472,
        "lat": -34.9071962799532
      },
      {
        "lng": -58.0778414287782,
        "lat": -34.9054253712633
      },
      {
        "lng": -58.0789194734017,
        "lat": -34.9051660675429
      },
      {
        "lng": -58.0795788746959,
        "lat": -34.9069127185818
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1450000,
      "marketValueRegularizedUsd": 1750000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506YY00000000000000000700000000000015000",
        "Nomenclatura: 05506YY00000000000000000700000000000016000",
        "Nomenclatura: 05506YY0000000000000000070000000000000300B",
        "Nomenclatura: 05506YY00000000000000000700000000000004000",
        "Nomenclatura: 05506YY00000000000000000700000000000005000",
        "Nomenclatura: 05506YY00000000000000000700000000000017000"
      ],
      "totalAreaSqM": 80073,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": true,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-95-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0F00059C",
    "name": "Sin Nombre 047",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.0839022190247,
        "lat": -34.9058665494577
      },
      {
        "lng": -58.0828428224289,
        "lat": -34.9061081686605
      },
      {
        "lng": -58.0822415352677,
        "lat": -34.9043684591115
      },
      {
        "lng": -58.0833372199764,
        "lat": -34.9041334249193
      },
      {
        "lng": -58.0839022190247,
        "lat": -34.9058665494577
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1460000,
      "marketValueRegularizedUsd": 1760000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506YY00000000000000000600000000000010000",
        "Nomenclatura: 05506YY00000000000000000600000000000009000"
      ],
      "totalAreaSqM": 32066,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": true,
      "zonaTerritorialidad": "urbana",
      "ley14449": true,
      "nearIndustry": false,
      "pasivosAmbientales": "proximo",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-96-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0F00059D",
    "name": "Sin Nombre 048",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.0850090638957,
        "lat": -34.9056226649148
      },
      {
        "lng": -58.0839201647015,
        "lat": -34.905878847895
      },
      {
        "lng": -58.0833444399417,
        "lat": -34.9041365426707
      },
      {
        "lng": -58.08438117311469,
        "lat": -34.9039276036643
      },
      {
        "lng": -58.0850090638957,
        "lat": -34.9056226649148
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1470000,
      "marketValueRegularizedUsd": 1770000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506YY00000000000000000600000000000011000",
        "Nomenclatura: 05506YY00000000000000000600000000000008000",
        "Nomenclatura: 05506YY00000000000000000600000000000010000",
        "Nomenclatura: 05506YY00000000000000000600000000000009000"
      ],
      "totalAreaSqM": 62271,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": false,
      "zonaTerritorialidad": "periferica",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-97-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0F00059E",
    "name": "Sin Nombre 049",
    "type": "barrio_cerrado",
    "polygon": [
      {
        "lng": -58.078453252577,
        "lat": -34.9037363708864
      },
      {
        "lng": -58.0773867902802,
        "lat": -34.9039688194253
      },
      {
        "lng": -58.0769462242908,
        "lat": -34.902691217771
      },
      {
        "lng": -58.0780022964336,
        "lat": -34.9024345776224
      },
      {
        "lng": -58.078453252577,
        "lat": -34.9037363708864
      }
    ],
    "complianceStatus": "rojo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1480000,
      "marketValueRegularizedUsd": 1780000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506YY00000000000000000500000000000003000",
        "Nomenclatura: 05506YY00000000000000000500000000000004000",
        "Nomenclatura: 05506YY00000000000000000500000000000005000",
        "Nomenclatura: 05506YY00000000000000000500000000000018000",
        "Nomenclatura: 05506YY00000000000000000500000000000019000"
      ],
      "totalAreaSqM": 74433,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": false,
      "hasPartialViability": true,
      "zonaTerritorialidad": "periurbana_rural",
      "ley14449": false,
      "nearIndustry": true,
      "pasivosAmbientales": "ninguno",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-98-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  },
  {
    "id": "5383F8CD0F00059F",
    "name": "Midtown",
    "type": "condominio",
    "polygon": [
      {
        "lng": -58.08233487453541,
        "lat": -34.9012954865805
      },
      {
        "lng": -58.0817387466732,
        "lat": -34.8994172957467
      },
      {
        "lng": -58.08228464679701,
        "lat": -34.8992404460559
      },
      {
        "lng": -58.0826912203925,
        "lat": -34.8990226411775
      },
      {
        "lng": -58.08334626992121,
        "lat": -34.9010771442976
      },
      {
        "lng": -58.08233487453541,
        "lat": -34.9012954865805
      }
    ],
    "complianceStatus": "amarillo",
    "ordinanceViolations": [
      "Falta presentación de planos municipales"
    ],
    "procedures": [
      {
        "id": "p-1-1",
        "name": "Documentación del Titular",
        "category": "fase1",
        "status": "documentacion_subida",
        "mandatory": true
      },
      {
        "id": "p-1-2",
        "name": "Consultas ARBA - Catastro",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-3",
        "name": "Prefactibilidad Municipal",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-4",
        "name": "Prefactibilidad Hidráulica - ADA",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-5",
        "name": "Prefactibilidad de Servicios",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-1-6",
        "name": "Requisitos Específicos Urbanización Cerrada",
        "category": "fase1",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-1",
        "name": "Proyecto de Subdivisión",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-2",
        "name": "Visado de Planos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-3",
        "name": "Aprobación DPOUT",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-4",
        "name": "Aprobación Municipal del Proyecto",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-5",
        "name": "Permisos de Recursos Hídricos - ADA",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-2-6",
        "name": "Infraestructura Urbanización Cerrada",
        "category": "fase2",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-1",
        "name": "Registración en Catastro - ARBA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-2",
        "name": "Inscripción Registral",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-3",
        "name": "Habilitaciones ADA",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-4",
        "name": "Habilitación Municipal Final",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      },
      {
        "id": "p-3-5",
        "name": "Constitución del Consorcio",
        "category": "fase3",
        "status": "faltante",
        "mandatory": true
      }
    ],
    "financials": {
      "marketValueIrregularUsd": 1490000,
      "marketValueRegularizedUsd": 1790000,
      "regularizationCostUsd": 25000,
      "requiredCessionsSqM": 500,
      "plusvaliaAmountUsd": 15000,
      "comparables": []
    },
    "technicalData": {
      "parcels": [
        "Nomenclatura: 05506YY00000000000000000200000000000009000",
        "Nomenclatura: 05506YY00000000000000000200000000000008000"
      ],
      "totalAreaSqM": 45163,
      "executedUnits": 0,
      "executedUnitsPoints": [],
      "indicators": {
        "fos": 0,
        "fot": 0,
        "density": 0,
        "minFront": 0,
        "minArea": 40000,
        "maxHeight": "9 MTS (3 NIV)",
        "zoning": "AR P",
        "description": "AREA RURAL/ PERIURBANO",
        "allowedUses": "SERVICIOS, PRODUCTIVO",
        "complementaryUses": "VIVIENDA UNIFAMILIAR, COMERCIO, EQUIPAMIENTO"
      },
      "hydroRisk": false,
      "hasMaterialization": true,
      "hasPartialViability": false,
      "zonaTerritorialidad": "fuera",
      "ley14449": false,
      "nearIndustry": false,
      "pasivosAmbientales": "dentro",
      "inDpoutRegistry": false
    },
    "offers": [
      {
        "id": "o-99-1",
        "date": "2025-10-15",
        "amountUsd": 14500,
        "fileName": "oferta_lote_3.pdf"
      }
    ]
  }
];
