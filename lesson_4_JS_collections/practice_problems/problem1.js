// What is the return value of the filter method call below? Why?
[1, 2, 3].filter(num => 'hi');

// The return value of filter is an array of [1, 2, 3]
// This is because a truthy value is being assigned to all three elments in the callback
// The filter method takes those 3 truthy values and returns an array of the matching nums
// In this case, since all the values are being assigned to truthy, all nums are returned.