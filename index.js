const fs = require('fs');

const textIn =fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn);
const dateCheck = Date();

const textOut = "this is awesome avocado juice: [datecheck]${textIn}.\nCreated on ${dateCheck}";

fs.writeFileSync('./txt/output2.txt', textOut);
console.log('file written');

console.log(dateCheck);