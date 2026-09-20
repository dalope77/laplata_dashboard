const fs = require('fs');
const raw = fs.readFileSync('public/055.geojson', 'utf8');
const data = JSON.parse(raw);

const features = data.features;

async function generateMocks() {
  const developments = [];
  
  const dpoutList = [
    "POTREROS DE CASTELLS", "SIN NOMBRE 1", "HARAS DE ACLHO", "SIN NOMBRE 2", 
    "QUINTAS DE MITRE", "QUINTAS DEL OASIS", "LAS GARZAS", "CITY BELL CHICO", 
    "VILLAGE EL MOLINO", "CAMPOS DE LA ENRIQUETA", "SAN JORGE", "SAINT JOHN", 
    "HAMILTON", "ANTIGUA", "SWAN", "EL FRESNO", "SOLARES II", "BARRIO ARANA Y 140", 
    "BUONA TERRA", "LA FLORIDA I", "NUEVOS AIRES", "SIN NOMBRE 3", 
    "LA ELVIRA BARRIO CERRADO", "LA VICTORIA", "LA FLORIDA I (2)"
  ];

  for (let i = 0; i < features.length; i++) {
    const f = features[i];
    const props = f.properties;
    let name = props.Name || props.COL5383F_7 || 'Desarrollo La Plata ' + i;
    let inDpoutRegistry = false;

    // Verificar si el nombre real del polígono está dentro del listado original de DPOUT
    if (dpoutList.some(d => d.toLowerCase() === name.toLowerCase())) {
      inDpoutRegistry = true;
    }
    
    // Convert polygon coordinates to lat/lng objects
    let coords = [];
    if (f.geometry && f.geometry.type === 'Polygon') {
      coords = f.geometry.coordinates[0].map(c => ({ lng: c[0], lat: c[1] }));
    } else if (f.geometry && f.geometry.type === 'MultiPolygon') {
      coords = f.geometry.coordinates[0][0].map(c => ({ lng: c[0], lat: c[1] }));
    } else if (f.geometry && f.geometry.type === 'Point') {
      // In case some geometries are points, just create a tiny synthetic polygon around it for WFS
      const c = f.geometry.coordinates;
      coords = [
        {lng: c[0]-0.001, lat: c[1]-0.001},
        {lng: c[0]+0.001, lat: c[1]-0.001},
        {lng: c[0]+0.001, lat: c[1]+0.001},
        {lng: c[0]-0.001, lat: c[1]+0.001}
      ];
    }

    // Determine mock status based on property
    const estado = props.COL5383F15 || '';
    const seguimiento = props.COL5383F18 || '';
    let complianceStatus = 'rojo';
    if (estado.toLowerCase().includes('registrado') && !estado.toLowerCase().includes('no registrado')) {
      complianceStatus = 'verde';
    } else if (estado.toLowerCase().includes('en seguimiento') || seguimiento.toLowerCase().includes('en seguimiento')) {
      complianceStatus = 'amarillo';
    }

    const polygonCoords = coords.map(p => `${p.lng} ${p.lat}`).join(', ');
    const firstCoord = `${coords[0].lng} ${coords[0].lat}`;
    const polygonWkt = `POLYGON((-57.95 -34.92, -57.95 -34.93, -57.96 -34.93, -57.96 -34.92, -57.95 -34.92))`; // Dummy fallback
    const actualWkt = coords.length > 0 ? `POLYGON((${polygonCoords}, ${firstCoord}))` : polygonWkt;

    let parcels = [`Nomenclatura: 055010H0000000000000000000000${(i+1).toString().padStart(3, '0')}000000000`];
    let totalAreaSqM = props.COL5383F25 || 10000;
    
    let fos = 0.6;
    let fot = 1.2;
    let density = 150;
    let minFront = 20;
    let minArea = 600;
    let maxHeight = "9 MTS (3 NIV)";
    let zoning = "U/R4";
    let description = "AREA URBANA/ RESIDENCIAL";
    let allowedUses = "Residencial unifamiliar";
    let complementaryUses = "Comercial barrial";
    let hydroRisk = i % 5 === 0;

    console.log(`[${i+1}/${features.length}] Sincronizando ${name}...`);

    try {
      // ARBA
      const arbaRes = await fetch('https://geo.arba.gov.ar/geoserver/idera/wfs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          request: 'GetFeature', service: 'WFS', version: '1.0.0', typeName: 'idera:Parcela',
          outputFormat: 'application/json', srsName: 'EPSG:4326',
          cql_filter: `INTERSECTS(geom, SRID=4326;${actualWkt})`
        })
      });
      if (arbaRes.ok) {
        const wfsData = await arbaRes.json();
        let area = 0;
        let pList = [];
        if (wfsData.features && wfsData.features.length > 0) {
          wfsData.features.forEach((feat) => {
            if (feat.properties?.cca) pList.push(`Nomenclatura: ${feat.properties.cca}`);
            if (feat.properties?.ara1) area += Number(feat.properties.ara1);
          });
          parcels = pList;
          // If the shapefile didn't have area, use the sum of ARBA parcels
          if (!props.COL5383F25 && area > 0) {
            totalAreaSqM = Math.round(area);
          }
        }
      }

      // UrbaSIG
      const urbaRes = await fetch('https://urbasig.mgob.gba.gob.ar/geoserver/urbasig/wfs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          request: 'GetFeature', service: 'WFS', version: '1.0.0', typeName: 'urbasig:_zonificacion',
          outputFormat: 'application/json', srsName: 'EPSG:4326',
          cql_filter: `INTERSECTS(geom, SRID=4326;${actualWkt})`
        })
      });
      if (urbaRes.ok) {
        const urbaData = await urbaRes.json();
        if (urbaData.features && urbaData.features.length > 0) {
          const props = urbaData.features[0].properties;
          if (props.fos != null) fos = props.fos;
          if (props.fota != null) fot = props.fota;
          if (props.dena != null) density = props.dena;
          if (props.lm != null) minFront = props.lm;
          if (props.sm != null) minArea = props.sm;
          if (props.hmax != null) maxHeight = props.hmax;
          if (props.designacio != null) zoning = props.designacio;
          if (props.descripcio != null) description = props.descripcio;
          if (props.ud != null) allowedUses = props.ud;
          if (props.uc != null) complementaryUses = props.uc;
        }
      }

      // UrbaSIG Cuencas
      const cuencasRes = await fetch('https://urbasig.mgob.gba.gob.ar/geoserver/urbasig/wfs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          request: 'GetFeature', service: 'WFS', version: '1.0.0', typeName: 'urbasig:cuencas',
          outputFormat: 'application/json', srsName: 'EPSG:4326',
          cql_filter: `INTERSECTS(the_geom, SRID=4326;${actualWkt})`
        })
      });
      if (cuencasRes.ok) {
        const cuencasData = await cuencasRes.json();
        hydroRisk = cuencasData.features && cuencasData.features.length > 0;
      }
    } catch (e) {
      console.log("Error syncing feature", i, e.message);
    }

    developments.push({
      id: f.id || 'dev-lp-' + i,
      name: name,
      type: 'loteo_abierto',
      polygon: coords,
      complianceStatus: complianceStatus,
      ordinanceViolations: complianceStatus === 'verde' ? [] : ['Falta presentación de planos municipales'],
      procedures: [],
      financials: {
        marketValueIrregularUsd: 500000 + (i * 10000),
        marketValueRegularizedUsd: 800000 + (i * 10000),
        regularizationCostUsd: 25000,
        requiredCessionsSqM: 500,
        plusvaliaAmountUsd: 15000,
        comparables: []
      },
      technicalData: {
        parcels: parcels,
        totalAreaSqM: totalAreaSqM,
        executedUnits: 0,
        executedUnitsPoints: [],
        indicators: {
          fos, fot, density, minFront, minArea, maxHeight, zoning, description, allowedUses, complementaryUses
        },
        hydroRisk: hydroRisk,
        hasMaterialization: i % 3 === 0,
        hasPartialViability: i % 2 === 0,
        zonaTerritorialidad: i % 4 === 0 ? 'urbana' : i % 4 === 1 ? 'periferica' : i % 4 === 2 ? 'periurbana_rural' : 'fuera',
        ley14449: i % 6 === 0,
        nearIndustry: i % 7 === 0,
        pasivosAmbientales: i % 8 === 0 ? 'proximo' : i % 9 === 0 ? 'dentro' : 'ninguno',
        inDpoutRegistry: inDpoutRegistry
      },
      offers: [
        { id: `o-${i}-1`, date: '2025-10-15', amountUsd: 14500, fileName: 'oferta_lote_3.pdf' }
      ]
    });
  }

  const tsContent = `import type { UrbanDevelopment } from "../types/development";\n\nexport const mockDevelopments: UrbanDevelopment[] = ${JSON.stringify(developments, null, 2)};\n`;
  fs.writeFileSync('src/data/mockDevelopments.ts', tsContent);
  console.log(`Mocks generados y sincronizados: ${developments.length} polígonos de La Plata.`);
}

generateMocks().catch(console.error);
