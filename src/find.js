console.clear();

const names = ['Sebastián', 'Joan', 'Mauricio', 'Janeth', 'Yolanda', 'Ivan'];

const res = names.find(findIvan);

function findIvan(item, idx, arr) {
  return item === 'Ivan';
}

function findCarlos(item, idx, arr) {
  return item === 'Carlos';
}

const res2 = names.find(findCarlos);

console.log('Ivan result:', res); // Ivan
console.log('Carlos result:', res2); // undefined


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
    age: 18
  }
];

const person = persons.find( person => person.name === 'Florins')?.age;
console.clear();

console.log(person);


