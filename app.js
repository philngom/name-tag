//GRABBING ELEMENTS FROM THE DOM
const newName = document.querySelector('#input-name');
const oldName = document.querySelector('.name');
const changeButton = document.querySelector('#change');
const tag = document.querySelector('#tag');
const greenButton = document.querySelector('.green');
const blueButton = document.querySelector('.blue');

console.log(newName.textContent);
// console.log(oldName.textContent);

// EVENTS
changeButton.addEventListener('click', () => {
  console.log(newName.textContent)
  oldName.textContent = newName.value;
})

greenButton.addEventListener('click', () => {
  tag.style.backgroundColor = "green";
});

blueButton.addEventListener('click', () => {
  tag.style.backgroundColor = "blue";
});