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
  deleteTodo.textContent = '🚯';
  deleteTodo.addEventListener('click', deleteTodoItem);
  li.append(storeTodo);
  li.append(deleteTodo);

  // todos.push(li);
  todoList.append(li);
}

function storeTodoHandler() {
  const todo = todoInput.value;
  createTodoItem(todo);
  todoInput.value = '';
  // console.log(todos);
}

todoInputBtn.addEventListener('click', storeTodoHandler);
clearBtn.addEventListener('click', deleteAllItems);
