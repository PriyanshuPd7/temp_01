const sayHi = (name) => {

    console.log(`Hello there ${name}`)
}
module.exports = sayHi;

// if we use module.exports = sayHi; then when we use it we can directly call the function 
// but if we use module.exports = {sayHi}; then we have to use varname.sayHi
