//. Starting with the string:
// show two different ways to put the expected "Four score and " in front of it.
let famousWords = "seven years ago...";

let first = 'Four Score and ' + famousWords;
let second = 'Four Score and '.concat(famousWords);

console.log(first);
console.log(second);