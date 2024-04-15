// nodeJS Fundamentals | Basic inputs and outputs

const readline = require('readline');  // import readline module to interact with the console

const rl = readline.createInterface({ // Create an interface for reading input from stdin and writing to stdout
    input: process.stdin,  // read data entered by the user in the console. read input provided by user.
    output: process.stdout // write output to console
}); // note to self: end with semicolon!

rl.question("Please enter your name: ", (name)=> { // Ask for name and handle input
    console.log("You entered: "+name); // Log name
    rl.close(); // close readline interface after getting the input 
                // waits for close event on the rl interface 
})


rl.on('close', () => {  // event listener for when the interface closes 
    console.log("Interface closed"); // log message when interface closes 
    process.exit(0); // exit
})

 
/// side notes:

//const square = x => x * x;
//console.log(square(5)); //output 25
// arg => expr
// arrow function that takes argument x and returns it value squared.