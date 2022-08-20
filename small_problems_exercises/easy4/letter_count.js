function wordSizes(string) {
  let stringArr = string.split(' ');
  let lengthOccurences = {};
  if (stringArr.length === 0) return lengthOccurences;

  for (let word of stringArr) {
    let len = word.length;
    lengthOccurences[len] = lengthOccurences[len] + 1 || 1;
  }
  return lengthOccurences;
}

console.log(
  wordSizes('Four score and seven.'),                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!'),  // { "3": 5, "6": 1, "7": 2 }
  wordSizes("What's up doc?"),                              // { "2": 1, "4": 1, "6": 1 }
  wordSizes('')                                            // {}
);