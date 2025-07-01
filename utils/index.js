// const { url } = require('inspector')
// const {add} = require('./add')
// const {sub} = require('./sub')
// const path = require('path')

// module.exports={
//     add,
//     sub
// }

import path from 'node:path'
import url from 'node:url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname)
console.log(__filename)