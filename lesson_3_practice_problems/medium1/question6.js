// What do you think the following code will output?
let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// This returns false because NaN is a special numeric value equal to nothing
// NaN is not even equal to itself
// If you want to test if something is NaN, use Number.isNaN() method