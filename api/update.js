const fs = require('fs');
const text = fs.readFileSync('./index.js', 'utf-8');

fs.writeFileSync('./index.js', text, 'utf-8')
