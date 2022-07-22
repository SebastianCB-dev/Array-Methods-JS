console.clear();
const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9]

const c = a.concat(b, d);
// The arrays don't changed
console.log(c);
console.log(a);
console.log(b);
console.log(d);

// Copy of an array

const copy_a = a.concat();

console.log('Copy of a:', copy_a)

a.push(4);
console.log(a);
console.log(copy_a);

console.clear();

// Works like a push method
console.log(a.concat(4));
