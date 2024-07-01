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


/* 2) USE CASES OF SELECT CORE MODULES: */

// Using the os, and path module and its methods to retrieve information from the operating system node runs in
const os = require('os');
const path = require('path');



console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// Using __dirname to find the directory of the current node module
console.log(__dirname);
console.log(__filename);


//Using path to log specific elements of the path to the __filename (module this code is scoped within)
console.log(path.dirname(__filename)); // dirname method of the path module (finding the directory name)
console.log(path.basename(__filename)); // filename method of the path module (finding the base name of the file -- without extention)
console.log(path.extname(__filename)); // extname method of the path module (finding the extension of the file -- e.g. '.js', '.html')
console.log(path.parse(__filename)); // logs the entire object with all of the path's values (root, dir, base, ext, filename)



/* Importing a custom module we made: */
const math = require('./02a_modules_math'); // importing the math function from the './02a_modules_math.js'

/* Code below will execute the imported function */
console.log(math.add(2,3)) // functions from this module can work everywhere in the app after and export and import

// we can import a module in a more direct way: 
const { add } = require('./02a_modules_math')
/* and then use it: */
console.log(add(10,2)); //Output: '12'
