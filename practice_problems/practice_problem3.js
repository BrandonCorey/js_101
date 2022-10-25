// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.



function toWeirdCase(string) {
  let stringArr = string.split(' ');
  return stringArr.map((word, idx) => {
    return idx % 2 === 1 ? Upper4th(word) : word
  }).join(' ');
}


function Upper4th(string) {
  string = [...string]
  for (let idx = 3; idx < string.length; idx += 4) {
    string[idx] = string[idx].toUpperCase();
  }
  return string.join('');
}


// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') === 'Lorem IpsUm is simPly dummy texT of the printing worLd')
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') === 'It is a lonG established facT that a reader wilL be disTracTed')

console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');




// The tests above should print "true".

// Input: string
// output: string

// Go through the string
// Count whether Im at an even or odd worth
// for all of the odd words, make the fourth character in the word uppercase
//  - Also make every other character in the word uppercase that is dvisible by 4