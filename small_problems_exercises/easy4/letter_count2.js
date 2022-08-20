function wordSizes(string) {
  let stringArr = string.split('').filter(word => /[a-z\s]/i.test(word));
  stringArr = stringArr.join('');
  stringArr = stringArr.split(' ');
  let lengthOccurences = {};

  for (let word of stringArr) {
    let len = word.length;
    if (len === 0) return lengthOccurences;
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