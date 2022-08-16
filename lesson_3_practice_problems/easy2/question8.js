//. How would you check whether the objects assigned to variables
// numbers and table below are arrays?

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

let answer1 = Array.isArray(numbers);
let answer2 = Array.isArray(table);
console.log(answer1);
console.log(answer2);