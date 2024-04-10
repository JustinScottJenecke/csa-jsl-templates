/**
 * 3 important compound types in JavaScript
 * 
 * 1 - Objects
 * 2 - Arrays
 * 3 - Functions
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

// object == instances of a class
const item1 = new TodoItem("go on lunch", "fermngoermg", new Date())
// const item3 = new TodoItem("start revising content on object", "go through JSL 7", new Date())

console.log(item1)


// json synatx / object literal syntax
const item2 = {
    id: 1,
    title: "end the session",
    description: "end the session cause its taking too long",
    dueDate: new Date(),
    generateId: () => {
        return Math.floor(Math.random() * 1000) + 1
    }
}

console.log(item2)

// 3 different syntax scope in js
/**
 * 1 - global scripting/functional syntax
 * 2 - object literal syntax / json
 * 3 - class based syntax
 */