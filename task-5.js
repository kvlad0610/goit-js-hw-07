const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputEvent);

function inputEvent(event) {
  inputRef.value ? spanRef.textContent = event.target.value : spanRef.textContent = 'незнакомец';
};