/* THIS IS A WORK IN PROGRESS! */


/* @@@@@@@@@@@@@@@@@@@@@@ */
/* 1 -- INTRO TO NODE.JS: */
/* @@@@@@@@@@@@@@@@@@@@@@ */

/* Node JS is a JavaScript runtime environment developed for Windows, Linux, Unix and MacOS operating systems. */
/* Prior to Node.js (created in 2009), JavaScript could only be interpreted within an internet browser's engine. */
/* Node allows to interpret and run JavaScript code on pretty much any computer, within the OS, and not the browser. */
/* This made it a powerful backend language, and also supported the growth of the JS infrasctructure which allowed for the modern frontend frameworks to function (React, Vue, Angular, Svelte etc.). Coupled with the increased performance of the JavaScript engines like V8 it helped to change the internet as we knew it. */
/* Node.js significantly contributed to JavaScript becoming one of the world's most popular programming languages */
/* The MERN stack (MongoDB, Express, React, Node), which heavily relies on Node's capacity of running JS server-side is the most popular full-stack environment used to create web applications. */

/* 1) THE CONSOLE IN THE TERMINAL: */
/* The console known from the browser's dev tools now lives in the terminal: */
console.log('Hello World') // this greeting will be printed in the OS's terminal

/* 2) WINDOW OBJECT AND GLOBAL OBJECT. Scopes in Node vs. Browser JS: */
/* In JavaScript there is a strict hierarchy of objects. When we talk about 'scopes' we refer to descendants of a top object, which when using JS in the browser is the object called 'window'. It comprises all properties and methods available to the user of the current page, including the Browser Object Model (BOM), and the Document Object Model (DOM). Everything a front-end developer uses in their script lives in the window object. */

/* To understand it better, if we declare in a browser's console: */
var exampleString = 'Hello World, my name is Foo Bar';

/* And then log: */
console.log(window.exampleString);

/* The output will be the same as logging: */
console.log(exampleString);

/* It won't happen if we declare a 'let' or 'const' variable, as they are confined to a block scope */
let exampleString2 = "Hello, I live in a block :)"
console.log(window.exampleString2) // => undefined
const exampleString3 = "Hello, I live in a block :)"
console.log(window.exampleString3) // => undefined
/* the above variables do not become the part of the window object */

/* In Node we refer to the global object instead of window */
/* All Node objects, values and methods live within the global object */

/* With small differences to how 'window' functions in the browser (variables declared with 'var' are not automatically assigned to the global object, like they are to window in the browser), if we log: */
var exampleStringNode = 'Hello World, this is Foo Bar again saying "Hi!" from within NODE.JS';
console.log(exampleStringNode); // We will correctly log the above string in the Node terminal

// And then if we add the string to the global object:
global.exampleStringNode = 'Hello again from global scope in Node.js'; // Adding the string explicitly to the global obj
console.log(global.exampleStringNode); // We will be able to log it from the global object
/* In Node.js variables are not automatically assigned to the global object, like 'var' variables are in window. */
/* Varibles in Node are confined to the module scope */

// The global object is much smaller than the window object, and it contains the below methods and properties, some of which are well known to those that used JavaScript in the browser:

// You can check the current list of global properties by logging: 
console.log(global);

// As Node is being developed the list of its properties grows. The most recently added major one is 'fetch' added in Node 18 which allows to make web requests in the same way they are made in 'vanilla' JavaScript. 
// Some of the global properties as of NODE 18 include:

/* 
clearInterval: [Function: clearInterval] - Stops a timed, repeating action which was previously established by a call to setInterval.
clearTimeout: [Function: clearTimeout] - Cancels a timeout previously established by calling setTimeout.
setInterval: [Function: setInterval] - Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
setTimeout: [Function: setTimeout] - Sets a timer which executes a function or specified code once after the timer expires.
atob: [Getter/Setter] - Decodes a string of data which has been encoded using base-64 encoding.
btoa: [Getter/Setter] - Creates a base-64 encoded ASCII string from a binary string.
performance: [Getter/Setter] - Provides access to performance-related methods and properties, like measuring time intervals.
fetch: [AsyncFunction: fetch] - Provides a way to make network requests and handle responses, similar to XMLHttpRequest but with a more powerful and flexible feature set. 
*/





