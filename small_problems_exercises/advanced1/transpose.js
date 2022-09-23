// Write a function that takes an array of arrays that represents a 
// 3x3 matrix and returns the transpose of the matrix. 
// You should implement the function on your own, 
// without using any external libraries.

// Take care not to modify the original matrix
// your function must produce a new matrix and leave the input matrix array unchanged.

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  let arr = [];
  let column = 0;
  while (column < matrix.length) {
    arr.push(columnAsRow(matrix, column));
    column += 1;
  }
 return arr;
}

function columnAsRow(matrix, column) {
  let nested = [];
  for (let row = 0; row < matrix.length; row++) {
    nested.push(matrix[row][column])
   }
   return nested;
}


// Test cases

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
   
// Use two nested loops inside outer
// Say "if the most inner index equals the next inner index, push element to new array"