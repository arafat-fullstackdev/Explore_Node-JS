const Module = require("module");

let a = 10;
let b = 21;

const add = (param1 , param2) =>{
    return param1 + param2
}
// module.exports= a;
module.exports={
    a,
    b,
    add
};