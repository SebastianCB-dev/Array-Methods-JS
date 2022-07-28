console.clear();
const numbers = [-1, 1, 2, 3, 4, 5];

const isPositiveArray = numbers.every(isPositive);

function isPositive(item, idx, arr) {
  return item > 0;
}

// console.log(isPositiveArray);

// Example with Objects

const people = [
  {
    name: 'Florin'
  },
  {
    name: 'Ivan'
  },
  {
    name: 'Sebastian'
  },
  {
    surname: 'Correa'
  }
];

const hasProperty = people.every( person => person.name );

console.log(hasProperty);

const numbersList = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const res = numbersList.every( number => Array.isArray(number) );

console.log(res);