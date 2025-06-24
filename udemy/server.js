const { log, error } = require('console')
const fs =require('fs')


//Synchronous

// const dataBuffer = fs.readFileSync('./box/sample.txt')
// const content = dataBuffer.toString()

//console.log(content)

//Asynchronous
// fs.readFile('./box/sample.txt', 'utf-8', (err,content)=>{

//     if(err){
//         console.log(err)
//         throw err
//     }else{
//         console.log(content)
//     }
// })

// write file

// fs.writeFile('./box/app.txt', 'Hello VR', (err) =>{

//     if(err){
//         console.log(err)
//         return err
//     }else{
//         console.log('New file has been created')
//     }
// })

//Append to file
// fs.appendFile('./box/app.txt', 'Append To FIle', (error)=>{
//     if(error){
//         console.log(error)
//         //throw err
//     }else{
//         console.log('Append file has been created')
//     }
// }) 

// File Exist
// fs.access('./box/app.txt', fs.constants.F_OK, (error)=>{
//     if(error){
//         console.log('File does not exist')
//     }else{
//         console.log('File exist')
//     }
// }) 

// File Delete

// fs.unlink('./box/sample.txt', (error)=>{
//     if(error){
//         console.log(error)
//        return
//     }else{
//         console.log('File deleted')
//     }
// }) 

//? using promise
 const fs2 = require('fs/promises')


// try{
//    const content= fs2.readFile('./box/app.txt', 'utf-8')
// console.log(content)
// }
//     catch (error){
//         console.log(error)

//     }
const readFileContent = async ()=>{
    try{
          const content= await fs2.readFile('./box/app.txt', 'utf-8')
          console.log(content)

    }catch(error){
      console.log(error)
    }
}

readFileContent()