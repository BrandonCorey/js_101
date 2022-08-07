//. Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.
const readline = require('readline-sync');
function hollaBack() {
  let nameQ = readline.question('What is your name? ');
  let greeting = `Hello ${nameQ}.`;
  let response;
  if (nameQ[nameQ.length - 1] === '!') {
    response = (`${greeting} Why are we screaming?`).toUpperCase();
    console.log(response);
    return;
  }
  response = greeting
  console.log(response);
  return;
}

hollaBack();


