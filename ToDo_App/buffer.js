const {Buffer}  = require('node:buffer');

const buff = Buffer.alloc(10);
const buff1 = Buffer.alloc(10,1);
const buff2 = Buffer.alloc(10,1,2);

const buff3 = Buffer.allocUnsafe(10);
const buff4 = Buffer.from([1,2,3,4]);

const buff5 = Buffer.from('latine');
const buff6 = Buffer.from('tést', 'latin1');

console.log(buff);
console.log(buff1);
console.log(buff2);

console.log(buff3);
console.log(buff4);

console.log(buff5);
console.log(buff6);