function selectFruit(obj) {
  let filtered = {};
  let keys = Object.keys(obj);
  for (let idx = 0; idx < keys.length; idx++) {
    let currentKey = keys[idx];
    let currentValue = obj[currentKey];
    if (currentValue === 'Fruit') {
      filtered[currentKey] = currentValue;
    }
  }
  return filtered;
}
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }