// Given the following data structure
// write some code to return an array
// containing the colors of the fruits
// and the sizes of the vegetables.
// The sizes should be uppercase, and the colors should be capitalized.

function colorOfFruitSizeOfVeg(obj) {
  const result = [];
  const capitalize = word => word[0].toUpperCase() + word.slice(1);

  for (let food in obj) {
    let subObj = Object.values(obj[food]);
    let [type, colors, size] = subObj;

    if (type === 'fruit') result.push(colors.map(word => capitalize(word)));
    else result.push(size.toUpperCase());
  }
  return result;
}

// Better answer (from Launch School)
// let capitalize = word => word[0].toUpperCase() + word.slice(1);

// Object.values(obj).map(attributes => {
//   if (attributes['type'] === 'fruit') {
//     return attributes['colors'].map(char => capitalize(char));
//   } else {
//     return attributes['size'].toUpperCase();
//   }
// });


// Test Cases
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

console.log(colorOfFruitSizeOfVeg(obj));