console.clear();
// Delete arrays into itself
const arr = [1, [2, [3, [4]]]];

const res = arr.flat(1);

console.log(res);