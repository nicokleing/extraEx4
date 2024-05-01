const promt = require('prompt-sync')({String: true});

const userInput = promt("Please enter something: ");
console.log("What you typed was: " + userInput);