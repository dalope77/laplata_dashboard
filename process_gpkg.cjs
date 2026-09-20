const Database = require('better-sqlite3');
const turf = require('@turf/turf');
const fs = require('fs');

const path = 'src/data/mockDevelopments.ts';
let content = fs.readFileSync(path, 'utf8');

const prefix = 'import type { UrbanDevelopment } from "../types/development";\n\nexport const mockDevelopments: UrbanDevelopment[] = ';
const suffixIndex = content.lastIndexOf(';');
const jsonString = content.substring(prefix.length, suffixIndex);
let developments = JSON.parse(jsonString);

// Create Turf polygons for all developments
const devPolygons = developments.map(dev => {
  if (!dev.polygon || dev.polygon.length < 3) return null;
  // Ensure the polygon is closed
  const coords = dev.polygon.map(p => [p.lng, p.lat]);
  if (coords[0][0] !== coords[coords.length-1][0] || coords[0][1] !== coords[coords.length-1][1]) {
    coords.push([...coords[0]]);
  }
  return {
    id: dev.id,
    poly: turf.polygon([coords])
  };
}).filter(p => p !== null);

const db = new Database('src/utils/vmn_ci.gpkg', { readonly: true });
const stmt = db.prepare("SELECT lat, lon, valor_usd, superficie, titulo, link FROM vmn_2024_completo__vnm2104_pdo WHERE lat IS NOT NULL AND lon IS NOT NULL");
const points = stmt.all();

let matchCount = 0;
let sqlInserts = `-- Ejecutar en el SQL Editor de Supabase\n\n`;

points.forEach((pt, index) => {
  const turfPt = turf.point([pt.lon, pt.lat]);
  
  // Find which development this point falls into
  for (let d of devPolygons) {
    if (turf.booleanPointInPolygon(turfPt, d.poly)) {
      matchCount++;
      // Escape single quotes for SQL
      const title = pt.titulo ? pt.titulo.replace(/'/g, "''") : '';
      const link = pt.link ? pt.link.replace(/'/g, "''") : '';
      const valUsd = pt.valor_usd || 0;
      const sup = pt.superficie || 0;
      
      sqlInserts += `INSERT INTO market_comparables (development_id, lat, lng, price_usd, sq_meters, title, source_url) VALUES ('${d.id}', ${pt.lat}, ${pt.lon}, ${valUsd}, ${sup}, '${title}', '${link}');\n`;
      break; // Move to next point once matched
    }
  }
});

fs.writeFileSync('mercado_inserts.sql', sqlInserts);
console.log(`Cruce completado: ${matchCount} publicaciones cayeron dentro de los barrios.`);
