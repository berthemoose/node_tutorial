// exporting module's functions:

exports.add = (a,b) => a+b
exports.subtract = (a,b) => a-b
exports.multiply = (a,b) => a*b
exports.divide = (a,b) => a/b


/* CODE BELOW GOES TO ANOTHER .JS FILE */

const math = require('./02_modules') // importing the module (in a different .js file) and referring the relative path to the module's file dir
console.log(math.add(2,3)) // functions from this module can work everywhere in the app after and export and import