const fs = require('fs');
let data = fs.readFileSync('src/data/mockDevelopments.ts', 'utf8');

// The field id is a number but must be a string
data = data.replace(/"id":\s*(\d+),/g, '"id": "$1",');

fs.writeFileSync('src/data/mockDevelopments.ts', data);
console.log('Fixed typescript type issues in mockDevelopments.ts');
