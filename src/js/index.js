// El styles lo importamos aquí, ya se carga después al compilar todo

//falta añadir el dark mode y arreglar el items left

import '../scss/styles.scss';
import {
  createObjectTask,
  deleteTask,
  filterTasks,
  checkTask,
  clearCompleted
} from './object-create';

const form = document.getElementById('form');
const taskContainer = document.getElementById('taskscontainer');
const containerFilter = document.getElementById('filter__container'); 
const clear = document.getElementById('clear-completed')

form.addEventListener('submit', e => {
  e.preventDefault();
  createObjectTask(e.target.todo.value);
});

taskContainer.addEventListener('click', e => {
  if (e.target.classList.contains('cross')) {
    deleteTask(e.target.previousSibling.htmlFor);
  }
  if (e.target.tagName === 'INPUT') {
    checkTask(e.target.id);
  }
});

containerFilter.addEventListener('click', e => {
  if (!e.target.classList.contains('filter__select')) return;
  filterTasks(e.target.textContent);
});

clear.addEventListener('click', ()=>{
  clearCompleted()
})

