const fs = require('fs');
const path = require('path');


/*                      */
/*    READING A FILE    */
/*                      */

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


/*                      */
/*   WRITING TO A FILE  */
/*                      */

/* The below block of code creates a 'reply.txt' file in the specified dir, and populates it with the provided string
The callback function only takes in err, as per no data being present (it is not a read operation, but a write one)
it throws an error conditionally, or shows success message
no data to log (write operation) */
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), '"Foo bar" is a well known programming placeholder', (err) => {
    if (err) throw err // uncaught exception
    console.log('Write Complete')
})

/*                        */
/*   APPENDING TO A FILE  */
/*                        */

fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), 'I am a big boy', (err) => {
    if (err) throw err // uncaught exception
    console.log('Append Operation Complete')
})

/* If the file we are appending to doesn't exist appendFile will on default behave like writeFile */

fs.appendFile(path.join(__dirname, 'files', 'reply1.txt'), 'I am a big boy', (err) => {
    if (err) throw err // uncaught exception
    console.log('Append Operation Complete')
})









/* Asynchronous operations in Node.JS */

console.log('Hello World') // this is logged before the above instructions, as Node does process requests asynchronously

//'process' below is a default value in node and doesnt have to be imported
//it is an object that contains information about, and control over, the current node process

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})




