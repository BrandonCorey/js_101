// How does Array.prototype.fill work? Is it destructive? How can we find out?
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

// We can find out using documentation

// It changes all elements in array to a statice value
// It is not destructive, it returns the new array
// fill(value, start, end) --> end is exclusive

// So the above code returns [1, 1, 1, 1, 1]