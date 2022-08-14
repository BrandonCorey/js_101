function logInBox(string) {
  let dash = '';
  let space = '';
  let topAndBottomBorder = '';
  let topAndBottomPadding = '';
  let counter = 0;
  while (counter < string.length + 2) {
    dash += '-';
    space += ' ';
    topAndBottomBorder = `+${dash}+`;
    topAndBottomPadding = `|${space}|`;
    counter++;
  }
  string = '| ' + string + ' |';
  console.log(topAndBottomBorder);
  console.log(topAndBottomPadding);
  console.log(string);
  console.log(topAndBottomPadding);
  console.log(topAndBottomBorder);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');