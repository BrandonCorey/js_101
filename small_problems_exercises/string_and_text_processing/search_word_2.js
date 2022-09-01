// Return matched words highlighted and starred in original array.

function searchWord(findString, sentence) {
  let regEx = new RegExp(`\\b${findString}\\b`, 'gi');
  return sentence.replace(regEx, `**${findString.toUpperCase()}**`);
}

const text = 'Sed ut perspiciatis unde osedmnis iste natus error sit volusedptatem acSEDcusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3

//OG SOLUTION

// function searchWord(findString, sentence) {
//   let regEx = new RegExp(`\\b${findString}\\b`, 'gi');
//   return sentence.split(' ').map(word => {
//     return regEx.test(word) ? `**${word.toUpperCase()}**` : word;
//   }).join(' ');
// }