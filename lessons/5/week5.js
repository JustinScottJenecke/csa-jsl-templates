/**
 * 3 important compound types in JavaScript
 * 
 * 1 - Objects
 * 2 - Arrays
 * 3 - Functions
 */

// 3 different syntax scope in js
/**
 * 1 - global scripting/functional syntax
 * 2 - object literal syntax / json
 * 3 - class based syntax
 */

// everything in javascript is an object

const theObject = {} // object
const theobject = [] // array

const Object = () => { } // function
function object() { }

console.log(typeof theObject)
console.log(typeof theobject)


// Classes are a means for us to create our own datatypes
// The work is that they serve as blueprint or data model for how the objects created from them look and how they behave.

// object literals


// class / schema - data model
class TodoItem {

    // properties
    id 
    title
    description
    dueDate

    // methods
    generateId = () => {
        return Math.floor(Math.random() * 1000) + 1
    }

    // constructor - function which runs automatically when i call the new keyword
    // primary job of contructor is to construct object
    // amnother job constructor is for setting properties
    constructor(titleInput, descriptionInput, dueDateInput) {
        this.id = this.generateId()
        this.description = descriptionInput
        this.dueDate = dueDateInput
        this.title = titleInput
    }
}

// object == instance of a class
const todo1 = new TodoItem("go on lunch", "fermngoermg", new Date())
// const item3 = new TodoItem("start revising content on object", "go through JSL 7", new Date())

// console.log("item1's title is ==", todo1.title)

// let RandomId = todo1.generateId();
// console.log("rand id is ===", RandomId)


// json synatx / object literal syntax
const todo2 = {
    id: 1,
    title: "end the session",
    description: "end the session cause its taking too long",
    dueDate: new Date(),
    generateId: () => {
        return Math.floor(Math.random() * 1000) + 1
    }
}

// resuable
const postponeByOneDay = (todoObject) => {

    todoObject.dueDate.setDate( todoObject.dueDate.getDate() + 1);
}

// not resuable
const postponesTodo1DueDate = () => {

    todo1.dueDate.setDate( todo1.dueDate.getDate() + 1);
}

console.log("Todo 2")
console.log(todo2.dueDate)
postponeByOneDay(todo2)
postponeByOneDay(todo2)
postponesTodo1DueDate(todo2)
postponesTodo1DueDate(todo2)
postponeByOneDay(todo2)
console.log(todo2.dueDate)

console.log("\nTodo 1")
console.log(todo1.dueDate)
postponeByOneDay(todo1)
postponeByOneDay(todo1)
postponeByOneDay(todo1)
postponeByOneDay(todo1)
postponesTodo1DueDate()
console.log(todo1.dueDate)
