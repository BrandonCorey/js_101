
// Algorithm

// Create an empty 'rows' array to contain all of the rows
// Create a row and add it to overall 'rows' array
// All rows have been created when length of 'rows' array is equal to input integer
// Repeat step 2 until all necessary rows have been created
// Sum the final row

function sumEvenNumberRow(rowNumber) {
  const rows = [];
  // steps 2 - 3
  let startInt = 2;
  for (let currentRow = 1; currentRow <= rowNumber; currentRow++) {
    let newRow = createRow(startInt, currentRow);
    rows.push(newRow);
    startInt = newRow[newRow.length - 1] + 2;
  }
  let finalRow = rows.pop();
  let finalRowSum = 0;
  finalRow.forEach(num => finalRowSum += num);
  return finalRowSum; //TODO: Sum final row and return the sum
}

// Algorithm:

// Create an empty 'row' array to contain all the integers
// Add the starting integer
// Increment the starting integer by 2
// Repeat steps 2 & 3 until array has reached correct length
// Return the 'row' array

function createRow(startInt, rowLength) {
  const row = [];
  let currentInt = startInt;
  // steps 2 - 4
  while (row.length < rowLength) {
    row.push(currentInt);
    currentInt += 2;
  }
  return row;
}

// Tests for sumEvenNumberRow
// row number: 1 --> sum of integers in row: 2
// row number: 2 --> sum of integers in row: 10
// row number: 3 --> sum of integers in row: 68
console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

// Tests for createRow
// start: 2, length 1 --> [2]
// start: 4, length 2 --> [4, 6]
// start: 8, length 3 --> [8, 10, 12]
console.log(createRow(2, 1)); // [2]
console.log(createRow(4, 2)); // [4, 6]
console.log(createRow(8, 3)); // [8, 10, 12]

