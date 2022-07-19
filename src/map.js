const numbersList = [1, 2, 3, 4, 5];

const numbersDoubleList = numbersList.map(double);
const numbersDoubleList2 = numbersList.map(multiply);

function double(value, index, arr) {
  return value * 2;
}

function multiply( val, index, arr ) {
  return val * index;
}

console.log(numbersDoubleList2);

// ######################## REALISTIC CHALLENGE ##########################

const products = [
  {
    name: 'laptop',
    price: 1000,
    count: 5
  }, {
    name: 'desktop',
    price: 1500,
    count: 2
  }, {
    name: "phone",
    price: 500,
    count: 10
  }
]

const totalProductsValue = products.map(item => item.price * item.count).reduce( (prev, curr) => prev + curr);

console.clear();
console.log(totalProductsValue);

const editProducts = products.map(item => ({
  name: item.name,
  total: item.price * item.count
}));

console.clear();
console.log(editProducts);

console.clear();

// Another

const str = ['1', '2', '3', '4'];
// const numbers = str.map( num => +num );
const numbers = str.map(Number);

console.log(numbers);