// Write a function that takes two arguments,
// an inventory item ID and a list of transactions,
// and returns an array containing only the transactions
// for the specified inventory item.

// BEST ANSWER:
// You can do this because you aren't filtering an object,
// you're filtering an array's object elements.
let transactionsFor = (id, nestedArr) => nestedArr.filter(obj => obj.id === id);

// OR

// function transactionsFor(id, nestedArr) {
//   return nestedArr.reduce((idArr, object) => {
//     for (let props in object) {
//       if (object[props] === id) idArr.push(object);
//       return idArr;
//     }
//   }, []);
// }

// OR

// function transactionsFor(id, nestedArr) {
//   const idArr = [];
//   nestedArr.forEach(object => {
//     for (let props in object) {
//       if (object[props] === id) idArr.push(object);
//     }
//   });
//   return idArr;
// }

// Test case
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

  

console.log(transactionsFor(101, transactions));
// // returns
// // [ { id: 101, movement: "in",  quantity:  5 },
// //   { id: 101, movement: "in",  quantity: 12 },
// //   { id: 101, movement: "out", quantity: 18 }, ]