//. Given a string of words separated by spaces,
// write a function that swaps the first and last letters of every word.

function swap(string) {
  let stringArr = string.split(' ');

  return stringArr.map(word => {
    let lastChar = word.length - 1;
    if (word.length === 1) return word;
    return word[lastChar] + word.slice(1, lastChar) + word[0];
  }).join(' ');
}

console.log(
  swap('Oh what a wonderful day it is'),  // "hO thaw a londerfuw yad ti si"
  swap('Abcde'),                          // "ebcdA"
  swap('a')                              // "a"
);