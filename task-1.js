const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории.`)

itemsRef.forEach(function (categori) {
 // const nameCategori = categori.querySelector('h2').textContent;
 // const quantityItem = categori.querySelectorAll('li').length;
  console.log(`Категория: ${categori.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${categori.querySelectorAll('li').length}`)
})
