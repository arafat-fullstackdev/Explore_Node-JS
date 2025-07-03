const http = require('http')

const data = [
  {
    "title": "Summer Solstice Celebration",
    "body": "Join us for a vibrant celebration of the summer solstice! We'll have live music, delicious food, and fun activities for all ages.",
    "date": "2025-06-20"
  },
  {
    "title": "Local Farmers Market Grand Opening",
    "body": "Discover fresh, locally sourced produce, artisanal goods, and handmade crafts at our grand opening. Support your local farmers and makers!",
    "date": "2025-07-05"
  },
  {
    "title": "Community Clean-Up Day",
    "body": "Let's work together to make our neighborhood shine! Volunteers are needed to help pick up litter and beautify our parks. Supplies will be provided.",
    "date": "2025-07-15"
  }
]

const server = http.createServer((req,res) =>{
    console.log(req.url,res.method);
    // res.end('Welcome to ToDo App');

    if(req.url === '/todos' && req.method==='GET'){
        //? set headers
        res.writeHead(202,{
            'content-type': 'application/json',
            'email': 'nyc@yahoo.com'

        }); 
        // res.setHeader('content-type', 'text/plain')
        // res.setHeader('email', 'nyt@yahoo.com')
        // res.statusCode= 201;
        res.end(JSON.stringify(data));
    }else if(req.url === '/todos/create-todo' && req.method==='POST'){
       res.end('Create ToDO');
    }else{
        res.end('Route NOt found')
    }
})

server.listen(4042, '127.0.0.1', ()=>{
    console.log('New Server')
}) 