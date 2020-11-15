const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

console.dir(inputRef);
console.log(textRef);

inputRef.addEventListener('input', event => {
  // console.log(event.target.valueAsNumber);
  textRef.style.fontSize = `${event.target.valueAsNumber}px` ;
})