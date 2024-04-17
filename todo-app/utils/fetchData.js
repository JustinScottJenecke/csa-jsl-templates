fetch('../data.json')
    .then(response => response.json()) // implicit return statement
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
