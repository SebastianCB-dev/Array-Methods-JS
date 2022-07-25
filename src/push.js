console.clear();
const numbers = [1, 2, 3];

numbers.push(4);
numbers.push(5);
numbers.push(6, 7, 8);

const total_length = numbers.push(9);

console.log('Array:', numbers);
console.log('Length:', total_length);