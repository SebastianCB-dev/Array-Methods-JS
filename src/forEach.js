const numbersList = [1, 2, 3, 4, 5, 10, 15, 25];
const lettersList = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

let sum = 0;
let count = {};
numbersList.forEach(( item, _index, _arr ) => {
  // console.log(`a[${index}] = ${item}`);
  sum += item;
});

lettersList.forEach( item => {
  if(count[item]) {
    count[item]++;
  }
  else {
    count[item] = 1;
  }
})

console.log(sum);
console.log(count);


