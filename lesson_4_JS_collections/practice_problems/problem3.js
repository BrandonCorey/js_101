// The following code differs slightly from the above code. What is the return value of map in this case? Why?
[1, 2, 3].map(num => num * num);

// This code is different because the callback returns a value
// When an arrow function is kept inline WITHOUT braces,
// It automatically returns the following expression to the method
// As a result, map returns [1, 4, 9];