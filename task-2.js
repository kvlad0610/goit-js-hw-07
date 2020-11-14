const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// ingredients.forEach(function(item) {const itemRef = document.createElement('li');
// console.log(itemRef)
//   itemRef.textContent = item
// return itemRef})

const itemPotatoRef = document.createElement('li')
itemPotatoRef.textContent = ingredients[0]
console.log(itemPotatoRef)

const itemMushroomsRef = document.createElement('li')
itemMushroomsRef.textContent = ingredients[1]
console.log(itemMushroomsRef)

const itemGarlicRef = document.createElement('li')
itemGarlicRef.textContent = ingredients[2]
console.log(itemGarlicRef)

const itemTomatoesRef = document.createElement('li')
itemTomatoesRef.textContent = ingredients[3]
console.log(itemTomatoesRef)

const itemGreensRef = document.createElement('li')
itemGreensRef.textContent = ingredients[4]
console.log(itemGreensRef)

const itemCondimentsRef = document.createElement('li')
itemCondimentsRef.textContent = ingredients[5]
console.log(itemCondimentsRef)

const listRef = document.querySelector('#ingredients')
console.log(listRef)
listRef.append(itemPotatoRef,itemMushroomsRef,itemGarlicRef,itemTomatoesRef,itemGreensRef,itemCondimentsRef)