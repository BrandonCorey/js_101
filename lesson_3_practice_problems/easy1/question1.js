//. Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;
// No, it will greates 3 empty spaces beteen 1, 2, 3, <3 empty spaces> and 6.

numbers[6] = 5;
numbers[4];  // what will this line return?

// It will return undefined, but it is really an empty space (not undefined).