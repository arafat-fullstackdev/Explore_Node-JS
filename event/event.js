const EventEmitter = require ("node:events")

class SchoolBell extends EventEmitter{}

const schoolBell = new SchoolBell()

schoolBell.on('ring', ()=>{
    console.log('Hurrah! School shes!!')
})

schoolBell.on('ring', ()=>{
    console.log('Oh arekta class!!')
})

schoolBell.on('broken', ()=>{
    console.log('Oh no!! School ki agke shes hobe na!!')
})

schoolBell.emit('ring'); 
// schoolBell.emit('broken'); 