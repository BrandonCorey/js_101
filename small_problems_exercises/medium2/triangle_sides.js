// Write a function that takes the lengths of the three
// sides of a triangle as arguments and returns one of
// the following four strings representing the triangle's classification:
// 'equilateral', 'isosceles', 'scalene', or 'invalid'.

function triangle(side0, side1, side2) {
  const arr = [side0, side1, side2].sort((a, b) => Number(a) - Number(b));
  const [smallest, secondSmallest, largest] = arr;

  if (smallest + secondSmallest <= largest) return 'invalid';

  let differentLengths = getLenFreq(arr);

  if (differentLengths === 1) return 'equilateral';
  if (differentLengths === 2) return 'isosceles';
  else return 'scalene';
}

function getLenFreq(arr) {
  const freq = {};

  arr.forEach(element => {
    freq[element] = freq[element] || 0;
    freq[element] += 1;
  });
  return Object.entries(freq).length;
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"