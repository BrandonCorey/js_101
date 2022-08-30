// Write a function that takes a grocery list in a two-dimensional
// array and returns a one-dimensional array. Each element in the grocery
// list contains a fruit name and a number that represents the desired quantity
// of that fruit. The output array is such that each fruit name appears
// the number of times equal to its desired quantity.

function buyFruit(nestedArray) {
  const results = [];
  nestedArray.forEach(array => {
    pushFunc(array, results);
  });
  return results;
}


function pushFunc(inputArr, outputArr) {
  let [fruit, repeat] = inputArr;
  for (let counter = 0; counter < repeat; counter++)  {
    outputArr.push(fruit);
  }
  return outputArr;
}

// Test cases
console.log(buyFruit([['apple', 2], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]