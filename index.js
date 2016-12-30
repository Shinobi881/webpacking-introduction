let chunk = require('lodash').chunk;
const greeting = './file2.js';

const chunks = chunk(['1', '2', '3', '4'], 2);

console.log(`hello from ${greeting}`);
console.log(`checkout these chunks: ${chunks[0]} and ${chunks[1]}`);