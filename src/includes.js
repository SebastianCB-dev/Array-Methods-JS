console.clear();

const names = ['Florin', 'Ivan', 'Liam'];

const result = names.includes('Patrik');

console.log(result);

// Real Example

const fruitList = ['Apple', 'Mango'];
const res = fruitList.includes('Orange');


if(res) {
  console.log('Yuppy!');
}
else {
  console.log('Sad... Let\'s buy an orange');
}
