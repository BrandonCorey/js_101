//. Consider the following object:
let flint = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
//. Create an array from this object that contains only two elements:
// Barney's name and Barney's number:
let answer1 = Object.entries(flint).filter(pair => pair[0] === 'Barney').shift();
let answer2 = Object.entries(flint).slice(2, 3).flat();
console.log(answer1);
console.log(answer2);