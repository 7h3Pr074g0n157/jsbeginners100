'strict mode';

const todoInput = document.getElementById('todo-input');
const todoInputBtn = document.getElementById('todo-input__btn');
const todoList = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-btn');

function deleteAllItems() {
  while (todoList.children.length > 0) {
    todoList.removeChild(todoList.lastChild);
  }
}

function deleteTodoItem(event) {
  const targetItem = event.target.parentElement;
  todoList.removeChild(targetItem);
}

function createTodoItem(todo) {
  const li = document.createElement('li');
  const storeTodo = document.createElement('span');
  const deleteTodo = document.createElement('span');
  storeTodo.textContent = todo;
  deleteTodo.innerHTML = '&#x2613;';
  deleteTodo.className = 'delete-todo';
  deleteTodo.addEventListener('click', deleteTodoItem);

  li.append(storeTodo);
  li.append(deleteTodo);

  todoList.append(li);
}

function storeTodoHandler() {
  const todo = todoInput.value;
  if (todo !== '') {
    createTodoItem(todo);
    todoInput.value = '';
  }
}

todoInputBtn.addEventListener('click', storeTodoHandler);
clearBtn.addEventListener('click', deleteAllItems);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    storeTodoHandler();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Delete' && event.altKey) {
    console.log(event);
    deleteAllItems();
  }
});
