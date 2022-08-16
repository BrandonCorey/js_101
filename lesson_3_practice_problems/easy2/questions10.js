// Write a one-line expression to count the number of lower-case t
// characters in each of the following strings:.
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let answer = statement1.split('').filter(element => element === 't').length;
let answer2 = statement2.split('').filter(element => element === 't').length;

console.log(answer);
console.log(answer2);