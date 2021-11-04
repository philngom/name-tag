const tag = document.querySelector('#tag');
const greenButton = document.querySelector('.green');
const blueButton = document.querySelector('.blue');

greenButton.addEventListener('click', () => {
  tag.style.backgroundColor = "green";
});

blueButton.addEventListener('click', () => {
  tag.style.backgroundColor = "blue";
});