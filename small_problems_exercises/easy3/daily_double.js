function crunch(string) {
  let charArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) charArr.push(string[i]);
  }
  return charArr.join('');
}


console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));