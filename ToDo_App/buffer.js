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

/// grek
// Filename: index.js

// Different Method to create Buffer
const buffer1 = Buffer.alloc(100);
const buffer2 = new Buffer('GFG');
const buffer3 = Buffer.from([1, 2, 3, 4]);

// Writing data to Buffer
buffer1.write("Happy Learning");

// Reading data from Buffer
const a = buffer1.toString('utf-8');
console.log(a);

// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));

// Check length of Buffer
console.log(buffer1.length);

// Copy buffer
const bufferSrc = new Buffer('ABC');
const bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

const Data = bufferDest.toString('utf-8');
console.log(Data);

// Slicing data
const bufferOld = new Buffer('GeeksForGeeks');
const bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());

// concatenate two buffer
const bufferOne = new Buffer('Happy Learning ');
const bufferTwo = new Buffer('With GFG');
const bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());