const path = require('path')
const fs = require('fs')

console.log(process.argv)

const inputArguments = process.argv.slice(2);
const textMessage = inputArguments.join(' ').concat('\n');

// timeSTAmp
const timestamp = new Date().toISOString();
console.log(timestamp);

const message = `${textMessage} ${timestamp} \n`
console.log(message);
if(!message){
    console.log('Please provide a message');
    console.log('Example: node index.js Hello World');
    process.exit(1)
}

//console.log(textMessage);
const filePath = path.join(__dirname, 'log.txt');

fs.appendFile(filePath, message, {encoding: 'utf-8'}, ()=>{
    console.log('Your log added successfully');
})
console.log(filePath)