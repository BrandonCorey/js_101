// What is the return value of map in the following code? Why?
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// map will return [undefined, 'bear']
// This is because the callback returns 'bear'
// And map always returns an array the same length as the og
// As a result, undfined is filled in where ant previously was