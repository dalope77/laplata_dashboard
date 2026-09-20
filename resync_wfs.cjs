const fs = require('fs');

const path = 'src/data/mockDevelopments.ts';
let content = fs.readFileSync(path, 'utf8');

const prefix = 'import type { UrbanDevelopment } from "../types/development";\n\nexport const mockDevelopments: UrbanDevelopment[] = ';
const suffixIndex = content.lastIndexOf(';');
const jsonString = content.substring(prefix.length, suffixIndex);
let developments = JSON.parse(jsonString);

async function syncWFS() {
  for (let i = 0; i < developments.length; i++) {
    const dev = developments[i];
    
    if (!dev.polygon || dev.polygon.length === 0) continue;
    
    const polygonCoords = dev.polygon.map(p => `${p.lng} ${p.lat}`).join(', ');
    const firstCoord = `${dev.polygon[0].lng} ${dev.polygon[0].lat}`;
    const wkt = `POLYGON((${polygonCoords}, ${firstCoord}))`;

    console.log(`[${i+1}/${developments.length}] Consultando WFS para: ${dev.name}`);

    try {
      // 1. ARBA
      const arbaRes = await fetch('https://geo.arba.gov.ar/geoserver/idera/wfs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          request: 'GetFeature', service: 'WFS', version: '1.0.0', typeName: 'idera:Parcela',
          outputFormat: 'application/json', srsName: 'EPSG:4326',
          cql_filter: `INTERSECTS(geom, SRID=4326;${wkt})`
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
          dev.technicalData.parcels = pList;
          if (area > 0) dev.technicalData.totalAreaSqM = Math.round(area);
        } else {
           dev.technicalData.parcels = [`Nomenclatura: 055010H0000000000000000000000${(i+1).toString().padStart(3, '0')}000000000`];
        }
      }

      // 2. UrbaSIG Zonificacion
      const urbaRes = await fetch('https://urbasig.mgob.gba.gob.ar/geoserver/urbasig/wfs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          request: 'GetFeature', service: 'WFS', version: '1.0.0', typeName: 'urbasig:_zonificacion',
          outputFormat: 'application/json', srsName: 'EPSG:4326',
          cql_filter: `INTERSECTS(geom, SRID=4326;${wkt})`
        })
      });
      
      if (urbaRes.ok) {
        const urbaData = await urbaRes.json();
        if (urbaData.features && urbaData.features.length > 0) {
          const props = urbaData.features[0].properties;
          if (props.fos != null) dev.technicalData.indicators.fos = props.fos;
          if (props.fota != null) dev.technicalData.indicators.fot = props.fota;
          if (props.dena != null) dev.technicalData.indicators.density = props.dena;
          if (props.lm != null) dev.technicalData.indicators.minFront = props.lm;
          if (props.sm != null) dev.technicalData.indicators.minArea = props.sm;
          if (props.hmax != null) dev.technicalData.indicators.maxHeight = props.hmax;
          if (props.designacio != null) dev.technicalData.indicators.zoning = props.designacio;
          if (props.descripcio != null) dev.technicalData.indicators.description = props.descripcio;
          if (props.ud != null) dev.technicalData.indicators.allowedUses = props.ud;
          if (props.uc != null) dev.technicalData.indicators.complementaryUses = props.uc;
        }
      }

      // 3. UrbaSIG Cuencas
      const cuencasRes = await fetch('https://urbasig.mgob.gba.gob.ar/geoserver/urbasig/wfs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          request: 'GetFeature', service: 'WFS', version: '1.0.0', typeName: 'urbasig:cuencas',
          outputFormat: 'application/json', srsName: 'EPSG:4326',
          cql_filter: `INTERSECTS(the_geom, SRID=4326;${wkt})`
        })
      });
      
      if (cuencasRes.ok) {
        const cuencasData = await cuencasRes.json();
        dev.technicalData.hydroRisk = (cuencasData.features && cuencasData.features.length > 0);
      }

    } catch (e) {
      console.log(`Error syncing ${dev.name}: ${e.message}`);
    }

    await new Promise(r => setTimeout(r, 1500));
  }

  console.log("Guardando...");
  const newContent = prefix + JSON.stringify(developments, null, 2) + ';\n';
  fs.writeFileSync(path, newContent);
  console.log("¡Re-Sincronización Completada!");
}

syncWFS().catch(console.error);
