const fs = require('fs')

console.log('task 1')

const text = 'Learning File System in Node!'
fs.writeFileSync('../utils/hello.txt', 'text')
console.log('task 2')

 const dataBf = fs.readFileSync('../utils/hello.txt', {encoding:'utf-8'})

 console.log('task 3')


console.log(dataBf)