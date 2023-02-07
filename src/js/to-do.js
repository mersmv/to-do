const taskContainer = document.getElementById('taskscontainer');

const createCheckbox = arrayTasks => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < arrayTasks.length; i++) {
    const container = document.createElement('div');
    container.classList.add('tasks');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = arrayTasks[i].id;
    container.append(checkbox);
    const label = document.createElement('label');
    label.textContent = arrayTasks[i].task;
    label.htmlFor = arrayTasks[i].id;
    container.append(label);
    const cross = document.createElement('img');
    cross.src = '../assets/images/icon-cross.svg';
    cross.classList.add('cross');
    container.append(cross);
    fragment.append(container);
  }
  print(fragment);
};

const print = container => {
  taskContainer.innerHTML = '';
  taskContainer.append(container);
};

export { createCheckbox, print };
