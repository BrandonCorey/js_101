// What is the callback's return value in the following code? 
// Also, what is the return value of every in this code?
[1, 2, 3].every(num => {
  return num = num * 2;
});

// The return of the callback here is [2, 4, 6]
// The return of the every method is true
// There's no conditional statement here
// All the values returned are truthy within the assignment
// So true gets returned, as all the values are truthy