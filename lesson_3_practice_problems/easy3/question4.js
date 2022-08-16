//. What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// This will log [{ first: 42 }, { second: "value2" }, 3, 4, 5];
// Slice is a shallow copy, and only the outermost elements values are copied
// The inner elements have their REFERENCES copied, not their values
// As a result, arr1[0] and arr2[0] are pointing to the same ojbect
