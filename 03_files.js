/* @@@@@@@@@@@@@@@@@@@@@@@@ */
/* 3 -- FILES IN NODE.JS:   */
/* @@@@@@@@@@@@@@@@@@@@@@@@ */

const fs = require('fs'); //import the filesystem (fs) core module

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

console.log('This is to demonstrate that the read function in Node works asynchronously. Although it comes last in the script, this statement should be logged first in the terminal')

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




