const inputFilter = document.querySelector('.sorting-section__filter');
const btnAdd = document.querySelector('.btn-add');
const hideCompleteBox = document.getElementById('hide-completed');

localStorage.clear();
localStorage.setItem('todos', JSON.stringify([]));
let id = 0;

function getStorage() {
  return JSON.parse(localStorage.getItem('todos'));
}

function countTodo(changeValue) {
  const todoRemaining = document.getElementById('todo-remaining');
  const newRemaining = parseInt(todoRemaining.textContent) + changeValue;
  todoRemaining.textContent = newRemaining;
}

function setCompleted(e) {
  const targetElement = e.target;

  const id = parseInt(targetElement.id.split('-')[1]);
  let todos = getStorage();
  
  todos = todos.map((todo) => {
    return todo.id === id ?  {
        id: todo.id,
        text: todo.text,
        completed: !todo.completed,
      } : todo;

  });

  localStorage.setItem('todos', JSON.stringify(todos));
}

function hideCompleted() {
  const todos = getStorage().filter(todo => todo.completed);
  
  for (const todo of todos) {
    if (todo.completed) {
      document.querySelector(`li[data-id="${todo.id}"]`).classList.toggle('todo-completed')
    }
  }
}

function removeElement(e) {
  const targetElement = e.target;
  const id = parseInt(targetElement.id.split('-')[1]);
  let todos = getStorage();

  todos = todos.filter((todo) => {
    if (todo.id != id) return todo;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
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
    li.setAttribute('data-id', todo.id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox-' + todo.id;
    checkbox.addEventListener('change', setCompleted);

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
hideCompleteBox.addEventListener('change', hideCompleted);
