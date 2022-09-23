



// Test cases
const matrix = [
  [11],
  [12],
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1],
  [12, 14, 17]
];


function transpose(matrix) {
  let arr = [];
  let column = 0;
  let NumberOfColumns = 0;

  matrix.forEach((array, idx) => {
    if (array.length > NumberOfColumns) NumberOfColumns = idx;
  });

  while (column < matrix[NumberOfColumns].length) {
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

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]