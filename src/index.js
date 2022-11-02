// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
// All required elements
const contents = document.querySelector('.contents');
// define data
const todos = [
  {
    id: 1,
    completed: false,
    desc: 'Task completed1',
  },
  {
    id: 2,
    completed: false,
    desc: 'Task completed2',
  },
  {
    id: 3,
    completed: false,
    desc: 'Task completed3',
  },
  {
    id: 4,
    completed: false,
    desc: 'Task completed4',
  },
  {
    id: 5,
    completed: false,
    desc: 'Task completed5',
  },
];
// Show functionality

// eslint-disable-next-line no-restricted-syntax
for (const todo of todos) {
  contents.innerHTML += `
    <div class="content">
    <input type="checkbox" />
    <p contenteditable="true">${todo.desc}</p>
    <span><i class="far fa-dot-circle"></i></span>
  </div>
    `;
}
