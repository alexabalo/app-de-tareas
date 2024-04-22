const todoInput = document.getElementById('todoInput');
const addTodo = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

addTodo.addEventListener('click', () => {
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;

        //boton eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteBtn');

        li.appendChild(deleteButton);

        todoList.appendChild(li);
        todoInput.value = '';
    }
});


todoList.addEventListener('click', (e) => {
    if(e.target.classList.contains('deleteBtn')){
        e.target.parentElement.remove();
    }
})