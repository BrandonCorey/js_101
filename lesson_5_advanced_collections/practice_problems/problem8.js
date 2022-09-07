// Using the forEach method, write some code to output all vowels
// from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

function outputVowels(object) {
  let stringArrs = Object.values(object);
  stringArrs.forEach(wordArr => {
    wordArr.forEach(word => {
      [...word].forEach(letter => {
        if (letter.match(/[aeiou]/gi)) console.log(letter);
      });
    });
  });
}

outputVowels(obj);