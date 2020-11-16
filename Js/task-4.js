const valueRef = document.querySelector('#value');

let counterValue = Number(valueRef.textContent);

// console.log(counterValue)
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef=document.querySelector('button[data-action="increment"]');

btnDecrementRef.addEventListener('click', () => {
  if(counterValue>0){
  counterValue -= 1;
    valueRef.textContent = counterValue;
    console.log(valueRef.textContent);}
})

btnIncrementRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
  console.log(valueRef.textContent);
})
