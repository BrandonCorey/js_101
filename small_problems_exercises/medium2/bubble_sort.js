// Bubble sort the inputs

function bubbleSort(array) {
  for (let idx = 1; idx < array.length; idx++) {
    let swap = true;
    for (let jdx = 1; jdx < array.length; jdx++) {
      swap = false;
      const first = array[jdx - 1];
      const second = array[jdx];

      if (array[jdx - 1] > array[jdx]) {
        array[jdx] = first;
        array[jdx - 1] = second;
        swap = true;
      } else continue;
    }
  }
  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]