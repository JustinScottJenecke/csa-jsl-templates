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
    createTodoItem: (event) => {
        const TodoItem = {
            id: generateId(),
            name: nameField.value,
            dueDate: new Date(dueDateField.value),
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

// return Promise
fetch('./data.json')
    .then( (response) => { 
        return response.json()
    })
    .then(data => {  
        document.querySelector('#todo-list').innerHTML += data
        // return console.log(data)
    })
    .catch(error => {
        return console.error('Error:', error)
    });


fetch('./data.json')
    .then(response => response.json()) // implicit return statement
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


/**
 * create data structure for storing todo items 
 * load in dummy todo items from local storage - setup local storage, load in data from local storage
 * setup local storage with data from json file
 */
