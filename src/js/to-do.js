const taskContainer = document.getElementById('taskscontainer');
const createCheckbox = task => {
  const container = document.createElement('div');
  container.classList.add('tasks');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  container.append(checkbox);
  const label = document.createElement('label');
  label.textContent = task;
  container.append(label);
  const cross = document.createElement('img');
  cross.src = '../assets/images/icon-cross.svg';
  cross.classList.add('cross');
  container.append(cross);
  taskContainer.append(container);
};

export { createCheckbox };
