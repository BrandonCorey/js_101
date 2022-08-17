//. Given a string that consists of some words and
// an assortment of non-alphabetic characters,
// write a function that returns that string with
// all of the non-alphabetic characters replaced by spaces

function cleanUp(string) {
  let cleanedArr = [];
  string = string.split('');
  for (let i = 0; i < string.length; i++) {
    if ((string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90)
    || (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122)) {
      cleanedArr.push(string[i]);
    } else if (cleanedArr[cleanedArr.length - 1] === ' ') continue;
    else cleanedArr.push(' ');
  }
  return cleanedArr.join('');
}
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

cleanUp("---what's my +*& line?");