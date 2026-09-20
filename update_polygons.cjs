const fs = require('fs');

console.log("Loading GeoJSON...");
const geojson = JSON.parse(fs.readFileSync('public/055.geojson', 'utf8'));

console.log("Loading Mock Developments...");
const path = 'src/data/mockDevelopments.ts';
let content = fs.readFileSync(path, 'utf8');

const prefix = 'import type { UrbanDevelopment } from "../types/development";\n\nexport const mockDevelopments: UrbanDevelopment[] = ';
const suffixIndex = content.lastIndexOf(';');
const jsonString = content.substring(prefix.length, suffixIndex);
let data = JSON.parse(jsonString);

console.log("Updating polygons...");
let updated = 0;
data.forEach(dev => {
  const f = geojson.features.find(feature => String(feature.properties.fid || feature.properties.FID || feature.id) === String(dev.id));
  if (f && f.geometry) {
    let coords = [];
    if (f.geometry.type === 'Polygon') {
      coords = f.geometry.coordinates[0].map(c => ({ lat: c[1], lng: c[0] }));
    } else if (f.geometry.type === 'MultiPolygon') {
      coords = f.geometry.coordinates[0][0].map(c => ({ lat: c[1], lng: c[0] }));
    }
    
    if (coords.length > 0) {
      dev.polygon = coords;
      updated++;
    }
  }
});

console.log(`Updated ${updated} polygons. Saving file...`);
const newContent = prefix + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(path, newContent);
console.log("Done!");
