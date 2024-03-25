// array - brackets
const list = [];

// functions - parenthesis
/*
    function exampleFunction() {}; // this is a function -> function expression
    const exampleFunction = () => {} // a variable which stores function -> arrow function
*/

// object - braces
const thing = {};

// ================================== Arrays and Objects =========================================

// initialize array
const TASKS = [
    "JSL-05",
    "JSL-06",
    "Do research on High Order Array Methods",
    "Do some research on functions vs methods"
];
console.log(TASKS); // length 4

// example of adding element
TASKS.push("jsl-07");
console.log(TASKS) // length 5

// example of updating/overwriting an element
TASKS[1] = "jsl-10";
console.log(TASKS)  // length 5

TASKS.pop();  
console.log(TASKS)// length 4

// ================================== Functions and Methods ======================================