//. Write a function that returns an Array that contains every other element of an Array that is passed in as an argument.
function oddities(arrayArg) {
  let filtered = arrayArg.filter((elements, index) => index % 2 === 0);
  return filtered;
}



console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

