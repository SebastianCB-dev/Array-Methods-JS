// Reverse method:
// Reverse an array. the first element will become the last element.

const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
// For creating a copy
const numbers2 = [10, 20, 30, 40, 50];
const numbersReverse2 = numbers2.concat().reverse();
// const numbersReverse2 = [...numbers2].reverse();
console.log(numbersReverse2);


// Another example
console.clear();

const str = 'Coding is fun!';
const res = str.split('')
               .reverse()
               .join('');
console.log(res);