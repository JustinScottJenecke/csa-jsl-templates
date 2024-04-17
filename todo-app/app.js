// -------- hiding and showing create form ----------

// encapsulation
const createTodoForm = {
    toggleBtn:  document.querySelector('#create-todo-toggle-btn'),
    container:  document.querySelector('#create-todo-form-container'),
    showing: true
}

// const createTodoToggleBtn = document.querySelector('#create-todo-toggle-btn')
// const createTodoFormContainer = document.querySelector('#create-todo-form-container')
// let createTodoFormState = true;

// console.log(createTodoForm.showing)

// console.log(createTodoToggleBtn, createTodoFormContainer)
createTodoForm.toggleBtn.addEventListener('click', () => {
    
    createTodoForm.showing = !createTodoForm.showing
        console.log(createTodoForm.showing)

        createTodoForm.showing 
            ? 
            ( 
                createTodoForm.container.classList.remove('hidden'),
                createTodoForm.toggleBtn.innerText = "Close Form"
            )   
            :
            (
                createTodoForm.container.classList.add('hidden'),
                createTodoForm.toggleBtn.innerText = "Create Todo"
            )
})


// -------- adding todo items ----------

// returns number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// return Promise
fetch('./data.json')
    .then(response => { 
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
    .then( function(response) {
        return response.json()
    })
    .then(function(data) {
        return console.log(data)
    })
    .catch(function(error) {
        return console.error('Error:', error)
    });

fetch('./data.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


/**
 * swap text on show form button
 * creating todo items - grab data from forms, create todo objects, append them to DOM
 * load in dummy todo items from local storage - setup local storage, load in data from local storage
 * setup local storage with data from json file
 */
