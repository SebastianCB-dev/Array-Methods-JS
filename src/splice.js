console.clear();
const numbers = [1, 2, 3, 4, 5];

// Delete 3 last numbers
// Splice method returns the deleted elements
const deleted = numbers.splice(2, 3, 6, 7);

console.log('Deleted:', deleted);
console.log('Array:', numbers);


// Special case
const anotherNumbersList = [1, 2, 3, 4, 5];
const example = anotherNumbersList.splice(2, 0, 3, 7);
console.log('Another example deleted:', example);
console.log('Another example array:', anotherNumbersList);