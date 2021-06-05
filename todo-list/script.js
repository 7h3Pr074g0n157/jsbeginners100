'strict mode';

const todoInput = document.getElementById('todo-input');
const todoInputBtn = document.getElementById('todo-input__btn');
const todoList = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-btn');
// const todos = [];

function deleteAllItems() {
  while (todoList.children.length > 0) {
    todoList.removeChild(todoList.lastChild);
  }
}

function deleteTodoItem(event) {
  const targetItem = event.target.parentElement;
  console.log(targetItem);
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
  console.log(li);
  li.append(storeTodo);
  li.append(deleteTodo);

  // todos.push(li);
  todoList.append(li);
}

function storeTodoHandler(event) {
  event.preventDefault();
  console.log(event); // which === 13; keyCode === 13
  const todo = todoInput.value;
  if (
    (event.keyCode === 13 || event.which === 13 || event.type === 'click') &&
    todo
  ) {
    createTodoItem(todo);
    todoInput.value = '';
    // console.log(todos);
  }
}

todoInputBtn.addEventListener('click', storeTodoHandler);
clearBtn.addEventListener('click', deleteAllItems);
document.addEventListener('keydown', storeTodoHandler);
