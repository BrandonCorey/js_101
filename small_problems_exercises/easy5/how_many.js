// Write a function that counts the number of occurrences 
// of each element in a given array. 
// Once counted, log each element alongside the number of occurrences.

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  const frequencyObj = {};

  array.forEach(props => {
    frequencyObj[props] = frequencyObj[props] || 0;
    frequencyObj[props] += 1;
  });

  for (let props in frequencyObj) {
    console.log(`${props} => ${frequencyObj[props]}`);
  }
}

countOccurrences(vehicles);