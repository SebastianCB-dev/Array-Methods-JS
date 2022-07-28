console.clear();
const names = ['Florin', 'Ivan', 'Liam', 'Sebastián'];

const idx = names.indexOf('Ivan') // 1
names[idx] = 'Jay';

console.log(names)

const idx2 = names.indexOf('Sebastián');
console.log(idx2); // -1

if(idx2 > -1) {
  console.log('Yey, We have Sebastián');
}
else {
  console.log('Sad...');
}
// console.log(names.indexOf('Ivan')); // 1


// Another example

const listNames = ['Florin', 'Ivan', 'Liam', 'Sebastián', 'Florin'];

const idx3 = listNames.indexOf('Florin'); // 0
const idx4 = listNames.lastIndexOf('Florin'); // 4
console.log(idx3); // 0
console.log(idx4); // 4