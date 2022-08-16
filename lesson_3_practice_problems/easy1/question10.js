//. Return a new version of this sentence that ends just before the word house

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
let answer = advice.slice(0,advice.indexOf('house'));
console.log(answer);