// In this we discuss about OS module
// here we dont use ./ because it is a buit in module

const os = require('os')


// info about user

const user = os.userInfo()
// console.log(user)
console.log(`The system up time is : ${os.uptime} seconds`)

const currOS = {
    name : os.type(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    release : os.release(),
}

console.log(currOS);