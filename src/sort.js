console.clear();
const names = ['Florin', 'Liam', 'Jai', 'Ivan'];
const numbers = [75, 18, 10, 5, 84, 24, 105];

// names.sort(compareFunction);
numbers.sort(compareFunction)
// console.log('Sort names:', names);
// console.log('Sort numbers:', numbers);

function compareFunction(a, b) {
  //  < 0 ... a
  // 0 ... nothing will be changed
  // > 0 ... b comes first
  return a - b;
}

const products = [
  {
    name: "laptop",
    price: 1000
  },
  {
    name: 'desktop',
    price: 1500
  },
  {
    name: 'phone',
    price: 500
  }
];

// Order by price

products.sort(compareProducts)

function compareProducts(productA, productB) {
  return productA.price - productB.price;
}

console.log(products);