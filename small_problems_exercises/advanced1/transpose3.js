
let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
  [12]
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(matrix) {
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
  for (let row = matrix.length - 1; row >= 0; row--) {
    nested.push(matrix[row][column])
   }
   return nested;
}

//test Cases
let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]