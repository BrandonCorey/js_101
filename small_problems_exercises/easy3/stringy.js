function stringy(num) {
  let arr = [];
  let counter = 0;
  while (counter < num) {
    if (counter % 2 === 0) arr.push(1);
    else arr.push(0);
    counter++;
  }
  return arr.join('');
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));