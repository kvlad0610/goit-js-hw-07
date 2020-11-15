const inputRef = document.querySelector('#validation-input');
// console.log(inputRef)
console.log(inputRef.dataset.length)



inputRef.addEventListener('change', event => {
  console.log(event.target.value.length)
  if (event.target.value.length === Number(inputRef.dataset.length)) {
    // console.log(event.target)
    
    inputRef.classList.add('valid');
    console.log(inputRef)
  }  
  else {
    inputRef.classList.remove('valid')
    inputRef.classList.add('invalid');
    console.log(inputRef)
  }
})

inputRef.addEventListener('focus', () => {
  inputRef.classList.remove('invalid', 'valid')
  console.log(inputRef)
})