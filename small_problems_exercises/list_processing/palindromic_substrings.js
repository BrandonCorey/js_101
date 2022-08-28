// Write a function that returns a list of all palindrome substrings of a string
function palindromes(str) {
  const arr = [];
  let acc = '';

  for (let idx = 0; idx < str.length; idx++) {
    acc = '';
    for (let jdx = idx; jdx < str.length; jdx++) {
      acc += str[jdx];
      arr.push(acc);
    }
  }

  return arr.filter(element => {
    return element.length > 1 && element === [...element].reverse().join('');
  });
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('knitting cassettes'));