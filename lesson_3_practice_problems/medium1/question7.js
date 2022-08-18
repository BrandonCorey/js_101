// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// This returns 34. Primitives are pass by value
// This means that a copy of 'answer's value is passed to messWithit not
// answer itself, so any operations done within the functioin don't affect it
