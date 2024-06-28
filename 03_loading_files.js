const fs = require('fs');

fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err // uncaught exception
    console.log(data)
})

console.log('Hello') // this is logged after -- it's asynchronous

//'process' below is a default value in node and doesnt have to be imported
//it is an object that contains information about, and control over, the current node process

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})




