/* @@@@@@@@@@@@@@@@@@@@@@@@ */
/* 3 -- FILES IN NODE.JS:   */
/* @@@@@@@@@@@@@@@@@@@@@@@@ */


const fs = require('fs'); //import the filesystem (fs) core module
const path = require('path');


/* 1) READING FILES */
// The below data will be presented as bufffer data:
fs.readFile('./files/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// This data is generated as buffer data by readFile and then converted to string by a built in js method
fs.readFile('./files/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

// In this block the readFile method of the fs module receives a parameter that tells it to generate the data encoded in utf8
fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// In the above blocks the path to the starter.txt file was hardcoded, which means it was manually and literally put there as a string. 
// Different OSs have different formatting for file paths, e.g. some use '\' for a separator, and others use '/'.
// To avoid compatibility issues we should never hardcode these paths (and generally... hardcode as little as possible), and use a module to derive them from the os (it will know whats best for itself)
// We can do so by using the path module which is a core module in Node. 
// The path module has a join method which can be used to concatenate different values into a path. It's done dynamically and if we log it as a string it will show different values on different systems.
/* console.log(path.join(__dirname,'files','starter.txt')) => Output on a Mac:/Users/YourName/Documents/Programming/node_js_practice/files/starter.txt */ 
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log('This is to demonstrate that the read function in Node works asynchronously. Although it comes last in the script, this statement should be logged first in the terminal')



/* 2) WRITING AND APPENDING TO FILES */
/* The below block will write to a specified file */
/* We do not need to tell it which encoding to use, as it will use utf8 by default. There is no data callback, as it doesn't read any data. */
/* The data to write is provided before the callback.   */
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hello, I am a happy string that lives in reply.txt', (err) => {
    if (err) throw err;
    console.log('Write complete');
});

fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nText in a new line', (err) => {
    if (err) throw err;
    console.log('Write complete');
});



/* 3) CATCHING ERRORS */

/* UNCOMMENT THE BELOW BLOCK TO TEST CATCHING ERRORS */
/* fs.readFile('./files/no-such-file-lol.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); */

// exit on uncaught errors
// process is a built in module that provides information and control over the current Node process
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});




