// CASUAL PSUEDO
// Create function called concatStringArr that takes arr as arg
// create a variable called joinedStrings
// Join the strings
// Return the joined string

// FORMAL PSUEDO
// START
// SET concatStringArr = function(arr)
// SET joinedStrings = arr.join('')
//   PRINT joinedStrings
// END

function concatStringArr(arr) {
  let joinedStrings = arr.join('');
  return joinedStrings;
}

let concatStringArr1 = arr => arr.join('')

console.log(concatStringArr(['N','u', 'g']));
console.log(concatStringArr1(['N','u', 'g']));
