// What will the following two lines of code output?
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

// First one outputs 0.9
// Second one outputs false -->
// JS uses floats for all numeric computation
// Decimals lack floating point preciion, and in JS, 0.3 + 0.6 === 0.89999999
// This is not unique to JS, floating point inprecision is in all languages