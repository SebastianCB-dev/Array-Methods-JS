console.clear();
const numbers = [10, 1, 2, 3, 4, 5, 6, 7];

const total = numbers.reduce(sum, 0);

function sum(accumulator, value) {
  return accumulator + value;
}

// console.log(total);


// Example 2
const max = numbers.reduce(callback, -Infinity);

function callback(acc, val) {
  let maxValue = acc;
  if(val > acc) {
    maxValue = val;
  }
 return maxValue;
}

// console.log(max);

// Example 3
const store = [
  {
    product: 'laptop',
    value: 1000,
    count: 3
  },
  {
    product: 'desktop',
    value: 1500,
    count: 4
  },
  {
    product: 'mobile',
    value: 500,
    count: 10
  }
];

const totalValueStore = store.reduce((acc, val) => acc + (val.value * val.count), 0);

console.log(totalValueStore);