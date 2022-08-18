//. Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";


//. Return a new string that swaps the case of all of the letters:
function reverseCase(string) {
  string = string.split('');
  return string.map(char => {
    if (char === char.toUpperCase()) return char.toLowerCase();
    return char.toUpperCase();
  }).join('');
}

console.log(reverseCase(munstersDescription));