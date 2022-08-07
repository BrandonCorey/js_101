// CASUAL PSUEDO
// Write function that takes array arg
// Use filter method on array
// Pass num and index into callback
// return num if index mod 2 is equal to 0
// return filtered array

// FORMAL PSUEDO
// START 
// SET everyOther = function that takes array arg
//   arr.filter((num, index) => )
//   IF index % 2 === 0 
//   PRINT num
//   PRINT arr
// END
function everyOther (arr) {
  return arr.filter((num, index) => {
    if (index % 2 === 0) return num;
  })
}

console.log(everyOther([1,4,7,2,5])); // => [1,7,5]