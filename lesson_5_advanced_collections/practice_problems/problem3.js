// For each of these collection objects,
// demonstrate how you would access the letter g.
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
let g1 = arr1[2][1][3];
console.log(g1);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
let g2 = arr2[1]['third'][0];
console.log(g2);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
let g3 = arr3[2]['third'][0][0];
console.log(g3);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
let g4 = obj1.b[1];
console.log(g4);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
let g5 = Object.keys(obj2.third)[0];
console.log(g5);