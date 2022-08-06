// SET utfValue function
// SET charArr = arrayArg.split
// SET arrCodes = map charArr elements to their codes
// SET sumCodes = reduce the arrCodes to sum of array elements

function utf16Value(stringArg) {
  let charArr = stringArg.split('');
  let arrOfCodes = charArr.map(elements => elements.charCodeAt(elements))
  let sumOfCodes = arrOfCodes.reduce((acc, code) => acc + code, 0);
  return sumOfCodes;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));

const OMEGA = "\u03A9"     // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811