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

// declares that TodoItem can be used by other files
// and that this file is a modulse
export default TodoItem