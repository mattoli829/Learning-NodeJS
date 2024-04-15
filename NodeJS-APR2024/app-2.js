// Reading & Writing files Synchronously

const readline = require('readline'); // import readline module
const fs = require('fs'); // import fs (File System) module


let inputText = fs.readFileSync('./Files-Test/input.txt', 'utf-8'); // read file synchronously & specify encoding
console.log(inputText)  // read what the file directed by path says 

// use backticks!! instead of quotations ```````` not!! '''' or """"
let content = `Data read form input.txt: ${inputText}. \nDate created ${new Date()}` // save data logged by inputText under content variable
// ${new Date()} is a nodeJS constructor which logs the current date and time
fs.writeFileSync(`./Files-Test/output.txt`, content); // point to specific file with path and print inputText/content onto file pointing at... output.txt
