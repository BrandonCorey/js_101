//. Reverse two arrays using reverse() and sort(),
// but do not mutate the original arrays

let numbers = [1, 2, 3, 4, 5];
let newNums = numbers.slice(numbers).reverse();

// [ 5, 4, 3, 2, 1 ]

let newNums1 = [...numbers].sort((num1, num2) => num2 - num1);
console.log(newNums1); // [ 5, 4, 3, 2, 1 ] // [...numbers] spread operator creates a copy of numbers here

// Spread operator acts similar to enumarate in python.
// Takes array and gives it index key value pairs
let arr = [];
numbers.forEach(element => {
  arr.unshift(element);
});

console.log(newNums);
console.log(newNums1);
console.log(arr); // unshift is prepending every number on inovkation of the callback funciton.
console.log(numbers);


