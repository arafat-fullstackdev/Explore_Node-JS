const express = require('express')

//! instance
const app = express()

//? make  server

 const PORT = 8086

//? Define router  handler
app.get('/', (req,res)=>{
    res.send('Hello Express!')
});

// start server
app.listen(PORT, ()=>{
    // console.log(`Server is running on http:${PORT}`);

    console.log(`Server is running on http://localhost:${PORT}`);
});
// console.log(app)