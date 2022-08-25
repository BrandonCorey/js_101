// Take a look at the following array.
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
//Write a program that makes this:
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

function createFlintObj(array) {
  let flintstonesObj = array;
  flintstonesObj = {};
  flintstones.forEach((name, index) => {
    flintstonesObj[name] = index;
  });
  return flintstonesObj;
}
console.log(createFlintObj(flintstones));

// Remember, you can use forEach here because you are iterating over array
// You are NOT iterating over the flinstones obj with forEach