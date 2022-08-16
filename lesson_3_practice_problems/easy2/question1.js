//. Given a string, return a new string that replaces
// every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Replace the first occurence easily
let newAdvice = advice.replace('important', 'urgent');
console.log(newAdvice);

// Replace all occurences
function replaceAll (string) {
  let result =  string.split(' ').map(element => {
    return element === 'important' ? 'urgent' : element;
  });
  return result.join(' ');
}

console.log(replaceAll(advice));