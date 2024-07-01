// Different ways to export functions from a module to the project's scope:


//declaring functions via arrow function like we normally would
const add = (a,b) => a + b; //take two arguments a,b and return their sum
const subtract = (a,b) => a - b; 
const multiply = (a,b) => a * b; 
const divide = (a,b) => a / b; 

// exporting the above funcs:

module.exports = { add, subtract, multiply, divide } // passing an object containing all of the above functions to export from this module



exports.add = (a,b) => a+b
exports.subtract = (a,b) => a-b
exports.multiply = (a,b) => a*b
exports.divide = (a,b) => a/b
