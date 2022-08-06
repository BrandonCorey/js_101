// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
// Need to come up with a condition where 1 is included
// Since it is one value, going to hard code it

for (let i = 1; i < 100; i ++){
  if (i % 2 === 0 || i === 1) {
    console.log(i);
  }
}