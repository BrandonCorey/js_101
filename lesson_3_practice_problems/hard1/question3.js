// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// Logs one, two, three.
// The shadowed variable names prevent reassignment inside the function
// NOTE, IF NOT FOR SHADOWING, THIS IS SIMPLE REASSIGNMENT
// YOU DON'T EVEN NEED TO PASS THE VARIABLES AS ARGS
// IF messWithVars took NO args, the outer variables would still be reassigned
// when messWithVars is called, it ONLY doesn't do it BECAUSE of shadowing.

function messWithVars1(one1, two1, three1) {
  one1 = ["two"];
  two1 = ["three"];
  three1 = ["one"];
}

let one1 = ["one"];
let two1 = ["two"];
let three1 = ["three"];

messWithVars1(one, two, three);

console.log(`one is: ${one1}`);
console.log(`two is: ${two1}`);
console.log(`three is: ${three1}`);

// Same thing as last one
// Logs one, two, three.
// The shadowed variable names prevent reassignment inside the function
// NOTE, IF NOT FOR SHADOWING, THIS IS SIMPLE REASSIGNMENT
// YOU DON'T EVEN NEED TO PASS THE VARIABLES AS ARGS
// IF messWithVars took NO args, the outer variables would still be reassigned
// when messWithVars is called, it ONLY doesn't do it BECAUSE of shadowing.

function messWithVars2(one2, two2, three2) {
  one2.splice(0, 1, "two");
  two2.splice(0, 1, "three");
  three2.splice(0, 1, "one");
}

let one2 = ["one"];
let two2 = ["two"];
let three2 = ["three"];

messWithVars2(one2, two2, three2);

console.log(`one is: ${one2}`);
console.log(`two is: ${two2}`);
console.log(`three is: ${three2}`);

// Logs 2, 3, 1
// While variable names are still shadowed, array/object is passed
// So instead of a copy of a value being passed in like before
// A copy of the reference is being passed in.