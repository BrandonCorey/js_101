// Code up a binary search algorithm


// Inputs and outputs
// Inputs: an array, and target element
// Outputs: either the found element or -1 if not found
// Data structures: Will search an array
// Alrogrithm
// 0.  - Create a copy of array argument
// 1.  - Start at middle most index of array
// 2.  - Check if the current array element is the target element
// 2a.   - If yes, return element
// 2b.   - If no:
// 2ba.     - Check if element is less than or greater than current element
// 2bb.     - If less than, elminiate upper half of array that is greater than element
// 2bc.     - If greater than, eliminate lower half of array that is less than element
//      - Repeat step 2 until target elmenet is found. (WILL REQUIRE A LOOP UNTIL ALL ELEMENTS WITHIN TARGET RANGE HAVE BEEN CHECKED)
//      - Return element if found
//      - Return -1 if element not found

// Yellow pages list of business names data:
let yellowPages = ['Apple Store',
                   'Bags Galore',
                   'Bike Store',
                   'Donuts R Us',
                   'Eat a Lot',
                   'Good Food',
                   'Pasta Place',
                   'Pizzeria',
                   'Tiki Lounge',
                   'Zooper'];

function binarySearch(array, targetElement) {
  let centerElement;
  let midPoint = Math.floor(array.length / 2) - 1;

  for (let cycles = 0; cycles < array.length / 2; cycles++) {
    
    centerElement = array[midPoint];

    if (centerElement === targetElement) return midPoint;

    if (centerElement < targetElement) midPoint = Math.ceil((midPoint + array.length) / 2)
    else midPoint = Math.floor(midPoint / 2);
  }
  return -1;
}

// Test cases
// let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6