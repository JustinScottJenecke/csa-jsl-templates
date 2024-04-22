import {fetchData} from "./utils/fetchTodos.js";

const DATASTORE = [ /* ...TodoItems */ ]    
// database : SQL

// -------- hiding and showing create form ----------

// encapsulation
const createTodoModal = {
    toggleBtn:  document.querySelector('#create-todo-toggle-btn'),
    container:  document.querySelector('#create-todo-form-container'),
    showing: true
}

// const createTodoToggleBtn = document.querySelector('#create-todo-toggle-btn')
// const createTodoModalContainer = document.querySelector('#create-todo-form-container')
// let createTodoModalState = true;

// console.log(createTodoModal.showing)

// console.log(createTodoToggleBtn, createTodoModalContainer)
createTodoModal.toggleBtn.addEventListener('click', () => {
    
    createTodoModal.showing = !createTodoModal.showing
        console.log(createTodoModal.showing)

        createTodoModal.showing 
            ? 
            ( 
                createTodoModal.container.classList.remove('hidden'),
                createTodoModal.toggleBtn.innerText = "Close Form"
            )   
            :
            (
                createTodoModal.container.classList.add('hidden'),
                createTodoModal.toggleBtn.innerText = "Create Todo"
            )
})


// -------- adding todo items ----------

const createTodoForm = {
    domNodes: {
        nameField: document.querySelector('#todo-name'),
        dueDateField: document.querySelector('#todo-due-date'),
        createBtn: document.querySelector('#todo-create')
    },
    generateId: () => {
        return '#' + Math.floor(Math.random() * 9999) + 1;
    },
    // create a todo item object
    createTodoObject: (event) => {
        const TodoItem = {
            id: createTodoForm.generateId(),
            name: createTodoForm.domNodes.nameField.value,
            dueDate: new Date(createTodoForm.domNodes.dueDateField.value),
            completed: false
        }
        return TodoItem
    },
    // append todo item to DOM
    createTodoElement: (TodoItem) => {  
        /* html */    
        return `
            <li id="${TodoItem.id}">
                <h3>Todo name: <span data-todo="name">${TodoItem.name}</span> </h3>
                <ul>
                    <li>Id: <span data-todo="id">${TodoItem.id}</span> </li>
                    <li>Due Date:<span data-todo="due-date">${TodoItem.dueDate}</span> </li>
                    
                    ${ TodoItem.completed 
                        /* html */
                        ? `<li>Completed: <input type="checkbox" name="todo-complete" data-todo="completed" checked></li>` 
                        /* html */
                        : `<li>Completed: <input type="checkbox" name="todo-complete" data-todo="completed"></li>`
                    }
                    <li><button data-todo="delete-btn">Delete</button></li>
                </ul>
            </li>
        `;
    }
}

console.log(createTodoForm.generateId())

// -------- loading in existing data ----------

// returns number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// ------------ Event Listeners -------------

document.addEventListener('DOMContentLoaded', () => {
    fetchData('./data.json', createTodoForm)
})

createTodoForm.domNodes.createBtn.addEventListener('click', () => {
    const newTodo = createTodoForm.createTodoObject()
    document.querySelector('#todo-list').innerHTML += createTodoForm.createTodoElement(newTodo)
})

/** ----- Initial load / startup of App -----
 * 
 *      --- Singleton Pattern ---
 * if storage does not exist
 *      create a localStorage object to store TodoItems
 * else
 *      load todoitems from localstorage into array (local variable)
 *      populate dom with todoitems in array
 */

/** ----- Creating  Todos -----
 * 
 * AKA State management
 * 
 * when create btn is clicked && todo is created
 *      add todo to local array
 *      update localStorage with updated local array
 *          Optional - if issues with syncing you can update local with storage again
 *      third and final step is update DOM with updated local array
 */