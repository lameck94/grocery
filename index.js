const fs = require('fs');

const textIn =fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn);

const textOut = 'this is awesome avocado juice: ${textIn}.\nCreated on ${Date.now()}';

fs.writeFileSync('./txt/output2.txt', textOut);
console.log('file written');


const dateCheck = Date;
console.log(dateCheck);