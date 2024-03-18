const CREATE_BTN = document.querySelector("[ data-system-controls='create']");

const createBtnClickHandler = (event) => {
    alert("event fired")
    console.log(event)
}

/**
 * 1st arg: type of event
 * 2nd arg: event handler as callback function
 */
CREATE_BTN.addEventListener("click", createBtnClickHandler)


// parenthesis
// function invocation
// calling a function
console.log()