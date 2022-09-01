// Write a function that takes two arguments,
// a word and a string of text, and returns an integer
// representing the number of times the word appears in the text.

function searchWord(findString, sentence) {
  let regEx = new RegExp(`\\b${findString}\\b`, 'gi');
  return sentence.match(regEx);
}
// Test Cases
const text = 'Sed ut perspiciatis unde osedmnis iste natus error sit volusedptatem acSEDcusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3

// Using boundary flag and match. Boundary means not followed by 'word' char
// A word character for regex's means a letter or a space
// So saying, match findString not followed or preceded by a word char

// function searchWord(word, text) {
//   const match = new RegExp( `\\b${word}\\b`, 'gmi');
//   return match ? text.match(match).length : 0;
// }

// MY OG ANSWER
// function searchWord(findString, sentence) {
//   let regEx = new RegExp(`^${findString}$`, 'gi');
//   return sentence.split(' ').filter(word => regEx.test(word)).length;
// }