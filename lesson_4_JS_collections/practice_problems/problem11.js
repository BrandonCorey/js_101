// Create an object that expresses the
// frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

function createobj1(string) {
  string = string.match(/[a-z]/gi).join('');
  let obj = {};
  for (let idx = 0; idx < string.length; idx++) {
    let charCount = 0;
    for (let idx2 = 0; idx2 < string.length; idx2++) {
      if (string[idx] === string[idx2]) charCount += 1;
      obj[string[idx]] = charCount;
    }
  }
  return obj;
}

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

function createobj(string) {
  string = string.match(/[a-z]/gi);
  let obj = {};
  string.forEach(char => {
    obj[char] = obj[char] || 0; //If obj[char] exists, then add one. Else, 0
    obj[char] += 1;
  });
  return obj;
}

console.log(createobj1(statement)); // Bad mad scientist solution

console.log(createobj(statement));