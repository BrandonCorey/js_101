// Add up all of the ages from the Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function addAges(ageObj) {
  let values = Object.values(ageObj);
  return values.reduce((acc, val) => acc + val, 0);
}

console.log(addAges(ages));