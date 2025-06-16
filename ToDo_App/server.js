const http = require("http");

const server = http.createServer((req, res)=>{
        console.log({req,res});

       res.end('Welcome to ToDO App!');
});

server.listen(5000, '127.0.0.1', ()=>{
    console.log('Server is Running on port 5000');
});