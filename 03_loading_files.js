const fs = require('fs');
const path = require('path');


/* BELOW IS A BLOCK THAT OPENS A FILE FROM A PATH
    UTF8 IS PROVIDED TO AVOID PRINTING BUFFER (IT PRINTS STRING USING UTF8 DECODING)
    THE PATH IS HARDCODED WHICH ISN'T THE BEST PRACTICE GIVEN THAT IT COMES IN A STRING AND SOME SYSTEMS HAVE DIFFERING PATH STRINGS,
     i.e windows hase \ and mac has /  */
fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err // uncaught exception
    console.log(data)
})

/* TO AVOID THE COMPATIBILITY PROBLEMS WITH THE PATH, INSTEAD OF HARDCODING IT INSIDE A STRING, WE CAN USE THE PATH MODULE, 
TO ACCESS IT PROGRAMATICALLY
BELOW WE USE A PATH MODULE IN WHICH WE CONCATENATE (join) THE BUILT IN NODE __dirname VALUE, WITH THE NAME OF THE FOLDER, AND THE FILE, THUS AVOIDING TO MANUALLY WRITE THE PATH STRING)  */
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err // uncaught exception
    console.log(data)
})

/* THE TWO ABOVE BLOCKS OF CODE YIELD THE SAME OUTPUT */


/* Asyncronous operations in Node.JS */

console.log('Hello World') // this is logged before the above instructions, as Node does process requests asynchronously

//'process' below is a default value in node and doesnt have to be imported
//it is an object that contains information about, and control over, the current node process

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})




