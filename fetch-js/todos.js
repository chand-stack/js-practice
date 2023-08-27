function loadTodos(){
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => displayTodos(data))
}

function displayTodos(data){
    const todoContainer = document.getElementById('todo-container')
for(const todo of data){
    console.log(todo)
    const todoDiv = document.createElement('div')
    todoDiv.innerHTML = `
    <h3>title: ${todo.title}</h3>
    <p>User: ${todo.userId}</p>
    <p>Is completed: ${todo.completed}</p>
    `
    todoContainer.appendChild(todoDiv)
}
}

loadTodos()