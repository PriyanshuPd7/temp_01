// Modules

// const nanda ='Nanda'
// const shu = 'Shu'
// const secret = 'SUPER SECRET'

// const sayHi = (name) => {

//     console.log(`Hello there ${name}`)
// }

// sayHi('Apurva')
// sayHi(nanda)
// sayHi(shu)

// CommonJS every file is module (by default)
// Modules - Encapsulated Code (only share minimum)  

// 4-names, 5-utils, 6-alternative-flavour and 7-mind-grenade are created as a module for this section

// remember whenever we access a module we start with a single dot in case the module is in same folder or two dots if the module is present at second lebvel 

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
console.log(data);
require('./7-mind-grenade')
sayHi('Apurva')
sayHi(names.shu)
sayHi(names.nanda)

