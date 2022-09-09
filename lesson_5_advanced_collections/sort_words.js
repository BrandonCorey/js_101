let words = ['go', 'ahead', 'and', 'jump'];

function sortWords(arrayOfWords) {
  return arrayOfWords.sort((word1, word2) => word1.length - word2.length);
}

console.log(sortWords(words));