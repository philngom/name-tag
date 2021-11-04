//GRABBING ELEMENTS FROM THE DOM
const newName = document.querySelector('#input-name');
const oldName = document.querySelector('.name');
const changeButton = document.querySelector('#change');
const tag = document.querySelector('#tag');
const selection = document.querySelector('#select-color');
const updateColorButton = document.querySelector('#update-color-button')


// EVENTS

updateColorButton.addEventListener('click', () => {
  tag.style.backgroundColor = selection.value;
})

changeButton.addEventListener('click', () => {
  console.log(newName.textContent)
  oldName.textContent = newName.value;
});