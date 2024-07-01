/* @@@@@@@@@@@@@@@@@@@@@@@@ */
/* 2 -- MODULES IN NODE.JS: */
/* @@@@@@@@@@@@@@@@@@@@@@@@ */

/* 1) COMMON CORE MODULES: */
/* Node has a few built-in modules that provide core functionalities. Some of them are:
http -- used to create HTTP servers in Node.js
fs -- used to handle file system
path -- includes methods to deal with file paths
process -- provides information and control about the current Node.js process
os -- provides information about the operating system

assert -- set of assertion functions useful for testing
querystring -- utility used for parsing and formatting URL query strings
url -- module provides utilities for URL resolution and parsing
*/





// exporting module's functions:

exports.add = (a,b) => a+b
exports.subtract = (a,b) => a-b
exports.multiply = (a,b) => a*b
exports.divide = (a,b) => a/b


/* CODE BELOW GOES TO ANOTHER .JS FILE */

const math = require('./02_modules') // importing the module (in a different .js file) and referring the relative path to the module's file dir
console.log(math.add(2,3)) // functions from this module can work everywhere in the app after and export and import