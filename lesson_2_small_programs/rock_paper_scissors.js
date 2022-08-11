// ask user for move
// the computer makes choice
// dipslay winner

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

// Main program asks for information
while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let humanChoice = readline.question();

  while (!VALID_CHOICES.includes(humanChoice)) {
    prompt("Whoops...please enter a valid choice!");
    humanChoice = readline.question();
  }

  let randIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let cpuChoice = VALID_CHOICES[randIndex];

  dipslayWinner(humanChoice, cpuChoice, randIndex);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (!(answer[0] === 'n' || answer === 'y')) {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

// Caclulates the winner and displays on screen
function dipslayWinner (humanChoice, cpuChoice, randIndex) {
  prompt(`You chose ${humanChoice}. Computer chose ${cpuChoice}.`);

  let humanChoiceIndex = VALID_CHOICES.indexOf(humanChoice);
  if (randIndex - humanChoiceIndex === 1) {
    prompt('Computer wins!');
  } else if (randIndex === humanChoiceIndex) {
    prompt('It\'s a tie');
  } else {
    prompt('You win!');
  }
}