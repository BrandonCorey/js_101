// create merge function that takes two array args
// assign a new array the values of those two args concatenated
// return concatenated result

// START
// SET merge = function with two array args
//   SET cat = array1.concat(array2)
//   PRINT cat
// END

function merge(array1, array2) {
  let cat = array1.concat(array2);
  return cat;
}

console.log(merge([1, 2, 3], [4, 5, 6])); // => [1, 4, 2, 5, 3, 6])