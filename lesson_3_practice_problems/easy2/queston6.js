//. Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

//. This code will create a nested array that looks like this:

//["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

//. Create a new array that contains all of the above values,
// but in an un-nested format:

let unNested = [
  flintstones[0], flintstones[1], ...flintstones[2], ...flintstones[3]
];

let unNested1 = [].concat(...flintstones); // This is the same as :
// [].concat("Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"])
// This is because spread automatically iterates over the entire array
// concat will concat values to arrays (like the line above). Keep in mind,
// this technique will only unnest one level deep because of this behavior
// Since concat does this, can use forEach or reduce instead of spread as well.

let unNested3 = flintstones.flat(); //Easy way

console.log(unNested);
console.log(unNested1);
console.log(unNested3);