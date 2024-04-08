const CREATE_BTN = document.querySelector("[ data-system-controls='create']");

// what truthy and falsy are, are essentially "thought" patterns of the computer
// they are run on expression'

// condition in if either resolves to "true" OR "false"

// Arithmetic operators:
// + - * / %

// Logical Operators:
// && - || - ! - ==

let string; // variable declaration
console.log(string) // undefined;

string = "hello"; // variable assignment
console.log(string) // hello
 
let bool = true;


if ( CREATE_BTN ) {
    console.log("true");
} else {
    console.log("false");
}

let buttonExists = CREATE_BTN ? "true" : "false";

const Fname = "justin"

if (Fname == "Lebogang") {
    console.log('you are wrong')
} else if (Fname == "inolofatseng") {
    console.log("you are even more wrong")
} else if (Fname == "justin") {
    console.log("you are the best")
} else {
    console.log("I dont know whats wrong with you, get help.")
}

const createBtnClickHandler = (event) => {
    alert("event fired")
}

/**
 * 1st arg: type of event
 * 2nd arg: event handler as callback function
 */
CREATE_BTN.addEventListener("click", createBtnClickHandler)


// parenthesis
// function invocation
// calling a function
// console.log()