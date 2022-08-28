// Write a function that reverses an array in place...
function reverse(array) {
  for (let idx = 0; idx < array.length; idx++) {
    if (idx === Math.floor(array.length / 2)) break;
    let copyOfLast = array.length - idx - 1;
    let copyOfFirst = array[idx];

    array[idx] = array[copyOfLast];
    array[array.length - idx - 1] = copyOfFirst;
    copyOfLast -= 1;
  }
  return array;
}

let list = [1, 2, 3, 4]; // --> [4, 2, 3, 1] --> [4, 3, 2, 1] --> []
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true