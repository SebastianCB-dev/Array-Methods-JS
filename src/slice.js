console.clear();
const numbers = [1, 2, 3, 4, 5];

const numbers2 = numbers.slice(1, 4);

console.log(numbers2);
console.log(numbers);

const lastThree = numbers.slice(-3);
console.log(lastThree);

const arrayRest = numbers.slice(1);
console.log(arrayRest);

// Other example
const participants = ['Florin', 'Ivan', 'Liam', 'Jai', 'Patrik'];

const winners = participants.slice(0, 3);

console.log(winners);