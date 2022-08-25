// What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});

// Map will return and array of [undefined, undefined, undefined]
// This is because the callback is not explicitly returning a value
// As a result, undefined is returned to map each iteration of the callback