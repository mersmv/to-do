import { createCheckbox } from './to-do.js';
let arrayTasks = [];

const createObjectTask = taskToDo => {
  let tasksObj = {
    task: taskToDo,
    checked: false,
    id: Date.now()
  };
  arrayTasks.push(tasksObj);
  createCheckbox(arrayTasks);
};

const deleteTask = e => {
  arrayTasks = arrayTasks.filter(task => task.id !== Number(e));
  createCheckbox(arrayTasks);
};

const checkTask = id => {
  arrayTasks = arrayTasks.map(element => {
    if (element.id === Number(id)) {
      element.checked = !element.checked;
    }
    return element;
  });
};

const filterTasks = e => {
  if (e === 'Active') {
    const activeTasks = [];
    for (let i = 0; i < arrayTasks.length; i++) {
      if (arrayTasks[i].checked === false) {
        activeTasks.push(arrayTasks[i]);
      }
    }
    createCheckbox(activeTasks);
  } else if (e === 'All') {
    createCheckbox(arrayTasks);
  } else if (e === 'Completed') {
    const completedTasks = [];
    for (let i = 0; i < arrayTasks.length; i++) {
      if (arrayTasks[i].checked === true) {
        completedTasks.push(arrayTasks[i]);
      }
    }
    createCheckbox(completedTasks);
  }
};

export { createObjectTask, deleteTask, filterTasks, checkTask };
