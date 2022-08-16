//. Can you rewrite this function so it only has one return statement?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValidRefactored(color) {
  return (color === 'blue' || color === 'green');
}

console.log(isColorValid('blue'));
console.log(isColorValid('green'));
console.log(isColorValid('purple'));
console.log(isColorValidRefactored('blue'));
console.log(isColorValidRefactored('green'));
console.log(isColorValidRefactored('purple'));