// Do the same as last inventory, but return true or false instead of the object itself

function isItemAvailable(id, nestedArr) {
  let filteredItems = transactionsFor(id, nestedArr);
  let sumCount = sumQuantity(filteredItems);
  return sumCount > 0;
}

function transactionsFor(id, nestedArr) {
  return nestedArr.filter(obj => obj.id === id);
}

function sumQuantity(filteredArr) {
  let runningSum = 0;
  filteredArr.forEach(obj => {
    if (obj.movement === 'in') runningSum += obj.quantity;
    else runningSum -= obj.quantity;
  });
  return runningSum;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true