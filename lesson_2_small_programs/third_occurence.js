// CASUAL PSUEDO
// Create function called thirdOccurence that takes string arg
// split string into array
// Create a counter for both the loop and times a char is seen
// Loop through array
// Compare one against the rest of the chars through each iteration
// Add 1 to a counter each time a char is seen
// If counter reaches 3, return the index of the third occurance
// If character is not seen 3 times, return null

// FORMAL PSUEDO
// START
// SET thirdOccurence = function that takes stringArr and char
//   SET charArr = stringArr.split('')
//   SET iterator = 0
//   SET charCounter = 0  
//   WHILE (iterator < length)
//     IF char === charArr[iterator]
//       charCounter += 1;
//     IF charCounter === 3
//       PRINT indexOf charArr[iterator]
//     ELSE
//       PRINT NULL
// END


function thirdOccurence(str, char) {
  let charArr = str.split('')
  let charCounter = 0;
  for (let i = 0; i < charArr.length; i++) {
    if (char === charArr[i]) charCounter += 1;
    if (charCounter === 3) return i
  }
  return null;
}
console.log(thirdOccurence('axbxcdxex', 'x'));