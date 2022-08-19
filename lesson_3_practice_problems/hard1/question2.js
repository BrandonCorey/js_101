// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// Since numArray is a reference to the original array, [1],
// numArray.push(2) modifies this array.
// NOTE, if "first" was not an array/object, this would not happen
// The array is referenced since it is an object
// If the property was equal to a primitive, a copy would be passed to numArray