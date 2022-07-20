console.clear();

const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter( isEven );

function isEven( value ) {
  return value % 2 === 0;
}
console.log(even);

console.clear();

const people = [
  {
    name: "Sebastian",
    age: 26
  },
  {
    name: "Ivan",
    age: 18
  },
  {
    name: "Jali",
    age: 15
  }
];

const adults = people.filter( person => person.age >= 18 );

console.table(adults);

// Delete duplicates

const numbers2 = [1, 2, 3, 4, 1, 2, 3, 4, 6];

const nums = numbers2.filter( (val, index, arr) => {
  return arr.indexOf(val) === index;
});

console.log(nums);


// console.clear();

// const numbersLoop = [1, 2, 3, 4, 5, 1, 2];

// console.log(numbersLoop.indexOf(2)); -> 1