const http = require('http')

const server = http.createServer((req,res) =>{
    console.log(req.url,res.method);
    // res.end('Welcome to ToDo App');

    if(req.url === '/todos' && req.method==='GET'){
        res.end('All ToDo');
    }else if(req.url === '/todos/create-todo' && req.method==='POST'){
       res.end('Create ToDO');
    }else{
        res.end('Route NOt found')
    }
})

server.listen(4042, '127.0.0.1', ()=>{
    console.log('New Server')
}) 