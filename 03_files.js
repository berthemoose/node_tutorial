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


