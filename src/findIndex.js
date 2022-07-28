console.clear();

const numbers = [1, 2, 3, 4, 5];

const idx = numbers.findIndex( val => val === 10);

if(idx > -1) {
  console.log('Your element is:', numbers[idx]); // > -1
}
else {
  console.log('The element wasn\'t found'); // -1
}

console.log(idx);