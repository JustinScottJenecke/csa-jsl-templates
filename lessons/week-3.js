// array - brackets
const list = [];

// functions - parenthesis

function exampleFunction() {}; // this is a function -> function expression
// const exampleFunction = () => {} // a variable which stores function -> arrow function


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
// console.log(TASKS); // length 4

// example of adding element
TASKS.push("jsl-07");
// console.log(TASKS) // length 5

// example of updating/overwriting an element
TASKS[1] = "jsl-10";
// console.log(TASKS)  // length 5

// deleting an element from the end of an array
TASKS.pop();  
// console.log(TASKS) // length 4

// delete 1 element from index 2
// 1st arg: index of element to be deleted
// 2nd arg: number of items to be deleted
TASKS.splice(2, 1);
// console.log(TASKS); // length 2

// ================================== Functions and Methods ======================================

// function is a reuseable code block that is used to group related functionality together
/**
 * create abstractions
 * they have their own block scope - block statements
 * they can accept arguments
 * they make return statements which are able to return values back to the global scope
 * arrow vs function declarations
 * functions vs methods
 * 
 * Syntax for a  function declaration: function name | parenthesis | braces {} for body of function
 */

// function declaration
function createTask() {
    const titleField = document.querySelector('[data-create-task-form="task-title"]')
    const aboutField = document.querySelector('[data-create-task-form="task-about"]')
    const dueDateField = document.querySelector('[data-create-task-form="task-due"]')
    const submitButton = document.querySelector('[data-create-task-form="create-task-btn"]')
    // console.log(titleField, aboutField, dueDateField, submitButton)

    // 1st arg: event 
    // 2nd arg: callback function - this the code that run in response to the event that was fired
    // submitButton.addEventListener( event, function() {} )
    submitButton.addEventListener( "click", function(event) {

        event.preventDefault();
        //console.log(event)
        console.log(
            titleField.value, 
            aboutField.value, 
            dueDateField.value
        )
    })
}

// function invocation :: calling a function
// document.addEventListener('DOMContentLoaded', function() {
    createTask()
// })