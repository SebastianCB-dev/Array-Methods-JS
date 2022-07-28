console.clear();

const str = '1234567';

// [1, 2, 3, 4, 5, 6, 7]

const res = Array.from(str, val => +val);
console.log(res);

// Another example

const numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4];
const res2 = Array.from(new Set(numbers));

console.log(res2)