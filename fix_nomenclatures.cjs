const fs = require('fs');

const path = 'src/data/mockDevelopments.ts';
let content = fs.readFileSync(path, 'utf8');

const prefix = 'import type { UrbanDevelopment } from "../types/development";\n\nexport const mockDevelopments: UrbanDevelopment[] = ';
const suffixIndex = content.lastIndexOf(';');
const jsonString = content.substring(prefix.length, suffixIndex);
let data = JSON.parse(jsonString);

let fixed = 0;
data.forEach((dev, index) => {
  if (dev.technicalData && dev.technicalData.parcels) {
    const validParcels = dev.technicalData.parcels.filter(p => p.includes('055'));
    if (validParcels.length !== dev.technicalData.parcels.length) {
      if (validParcels.length === 0) {
         // Fallback to dummy 055 nomenclature
         dev.technicalData.parcels = [`Nomenclatura: 055010H0000000000000000000000${(index+1).toString().padStart(3, '0')}000000000`];
      } else {
         dev.technicalData.parcels = validParcels;
      }
      fixed++;
    }
  }
});

console.log(`Fixed nomenclatures in ${fixed} developments.`);
const newContent = prefix + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(path, newContent);
console.log("Done!");
