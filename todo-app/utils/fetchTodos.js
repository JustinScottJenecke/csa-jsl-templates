/**
 * Function to grab TodoItem data from the persistent storage of fetchTodos.json.
 * Function also updates the DOM with todo objects inside of fetchTodos.json
 * @param {string} urlString - the file path or API uri that the fetch function will use to retrieve the data from.
 * @returns {void}
 */
const fetchData = (urlString, createTodoForm) => {
    // return Promise
    fetch(urlString)
        .then( (response) => { 
            return response.json()
        })
        .then(data => {  
            data.forEach(barOne => {
                document.querySelector('#todo-list').innerHTML += createTodoForm.createTodoElement(barOne)
            });
            return data
        })
        .catch(error => {
            return console.error('Error:', error)
        });
}

export {fetchData}