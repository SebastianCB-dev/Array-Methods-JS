console.clear();
const numbers = [1, 2, 3, 4, 5];

const old_array = numbers.fill(0);

console.log('New Array:', numbers);
console.log('Old Array:', old_array);

// You can specify the indexes

const another_numbers = [1, 2, 3, 4, 5];

another_numbers.fill(0, 2, 3);
console.log(another_numbers);


console.clear();

// Other example
function fillInNumbers(n) {
  return Array(n)
         .fill(0)
         .map((_, index) => index + 1);
}

console.log(fillInNumbers(10));