//. If we have a 40-character wide table of Flintstone family members,
// how can we center the following title above the table with spaces?
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));
//Pad start will repeat specified character until specified length