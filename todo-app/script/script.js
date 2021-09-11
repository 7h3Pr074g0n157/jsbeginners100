const inputFilter = document.querySelector('.sorting-section__filter');
const btnAdd = document.querySelector('.btn-add');
localStorage.clear();
localStorage.setItem('todos', JSON.stringify([]));
let id = 0;

function countTodo(changeValue) {
  const todoRemaining = document.getElementById('todo-remaining');
  const newRemaining = parseInt(todoRemaining.textContent) + changeValue;
  todoRemaining.textContent = newRemaining;
}

function getStorage() {
  return JSON.parse(localStorage.getItem('todos'));
}

function removeElement(e) {
  const targetElement = e.target;
  const id = targetElement.id.split('-')[1];
  const todos = getStorage();

  todos.filter((todo) => {
    if (todo.id == id) console.log(todo);
  });

  targetElement.parentNode.remove();
  countTodo(-1);
}

function createList() {
  const todos = getStorage();
  const elements = document.getElementById('list-section-listing');
  elements.innerHTML = '';

  for (const todo of todos) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox-' + todo.id;

    const label = document.createElement('label');
    label.textContent = todo.text;
    label.for = todo.id;
    label.appendChild(checkbox);

    const span = document.createElement('span');
    span.id = 'remove-' + todo.id;
    span.className = 'remove';
    span.textContent = 'remove';
    span.addEventListener('click', removeElement);

    li.appendChild(label);
    li.appendChild(span);
    elements.appendChild(li);
  }
}

function setStorage() {
  id++;
  countTodo(1);
  const inputNewTodo = document.querySelector('.new-todo');
  const storage = getStorage();
  storage.push({ id: id, text: inputNewTodo.value, completed: false });
  localStorage.setItem('todos', JSON.stringify(storage));
  inputNewTodo.value = '';
  createList();
}

btnAdd.addEventListener('click', setStorage);
