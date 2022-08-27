// Create a function that averages all elements in array and rounds down

function average(numArray) {
  let sum = numArray.reduce((total, nextNum) => total + nextNum);
  return Math.floor(sum / (numArray.length));
}

// Test cases
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40