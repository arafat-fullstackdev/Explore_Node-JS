// const http = require("http");
// const { stringify } = require("querystring");

// const server = http.createServer((req, res)=>{
//         console.log({req,res});

//        res.end('Welcome to ToDO App!');
// });

// const animal ={
//     name: 'Elephant',
//     nickName: 'EloneTusk'
// };
// console.log(typeof stringify(animal));

// server.listen(5000, '127.0.0.1', ()=>{
//     console.log('Server is Running on port 5000');
// }); 

const http = require('http')

const server = http.createServer((req,res) =>{
    console.log({req,res});
    res.end('Welcome to ToDo App');
})

server.listen(4042, '127.0.0.1', ()=>{
    console.log('New Server')
}) 