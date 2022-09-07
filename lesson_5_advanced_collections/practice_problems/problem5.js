// Consider the following nested object:
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Compute and display the total age of the male members of the family.

function totalMaleAge(object) {
  let total = 0;
  for (let members in object) {
    if (object[members].gender === 'male') total += object[members].age; // When using for in loop, have to use [brackets] for indexing.
  }
  return total;
}

console.log(totalMaleAge(munsters));