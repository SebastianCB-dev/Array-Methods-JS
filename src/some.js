console.clear();
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4];

const res = numbers.some(greaterThanFour);
const res2 = numbers2.some(greaterThanFour);

function greaterThanFour(val, idx, arr) {
  return val > 4;
}

console.log(res); // true
console.log(res2); // false

// Another example

const persons = [
  {
    name: 'Florin',
    age: 25
  },
  {
    name: 'Ivan',
    age: 20
  },
  {
    name: 'Liam',
    age: 16
  }
];

function isAdult(person, idx, arr) {
  return person.age >= 18; 
}

const isAdultInArray = persons.some(isAdult);

console.log(isAdultInArray);