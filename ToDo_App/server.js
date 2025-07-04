const http = require('http')
const  path = require('path')
const fs = require('fs')


const filepath = path.join(__dirname, './db/todo.json')

//? All todos
const server = http.createServer((req,res) =>{
    if(req.url === '/todos' && req.method==='GET'){
      const data = fs.readFileSync(filepath, {encoding: 'utf-8'})
        //? set headers
        res.writeHead(202,{
            'content-type': 'application/json',
            

        }); 
      
        res.end(data);

        //? post todo
    }else if(req.url === '/todos/create-todo' && req.method==='POST'){
      let data = '';
      req.on('data', (chunk)=>{
        data +=chunk;
      })
     

      req.on('end', ()=>{
        console.log(data)
        const {title ,body} = JSON.parse(data)
         console.log({title,body});

         const createAt = new Date().toISOString();

         const allTodos = fs.readFileSync(filepath, {encoding: 'utf-8'});
         const parseAllTodos = JSON.parse(allTodos)
         parseAllTodos.push({
          title,
          body,
          createAt
         })

         fs.writeFileSync(filepath, JSON.stringify(parseAllTodos, null,2), {encoding: 'utf-8'});

         res.end(JSON.stringify({
          title,
          body,
          createAt
         }, null,2))

      })
     
      // const allTodos = JSON.parse(fs.readFileSync(filepath, {encoding: 'utf-8'}));

      //  res.end(JSON.stringify(allTodos));
    }else{
        res.end('Route NOt found')
    }
})

server.listen(4042, '127.0.0.1', ()=>{
    console.log('New Server')
}) 