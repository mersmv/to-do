// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createCheckbox } from './to-do.js';

const form = document.getElementById('form');
const todoInput = document.getElementById('to-do-input');
const taskContainer = document.getElementById('taskscontainer');

form.addEventListener('submit', e => {
  e.preventDefault();
  createCheckbox(e.target.todo.value);
});

taskContainer.addEventListener('click', e => {
  if (e.target.classList.contains('cross')) {
    e.target.parentElement.remove();
  }
});
