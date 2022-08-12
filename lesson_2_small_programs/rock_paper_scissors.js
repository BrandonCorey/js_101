// ask user for move
// the computer makes choice
// dipslay winner

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function prompt(message) {
  console.log(`=> ${message}`);
}

// Main program asks for information
while (true) {

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  console.log('               (r)    (p)     (s)     (sp)    (l)');
  let humanChoice = readline.question();
  humanChoice = checkAbbreviation(humanChoice);
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
  const cpuWinCondition = [1, 3, -2, -4]; // --> All index differentials where computer wins
  const cpuWinFormula = randIndex - humanChoiceIndex;

  if (cpuWinCondition.includes(cpuWinFormula)) {
    prompt('Computer wins!');
  } else if (randIndex === humanChoiceIndex) {
    prompt('It\'s a tie');
  } else {
    prompt('You win!');
  }
}

function checkAbbreviation(choice) {
  switch (choice) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 's':
      return 'scissors';
    case 'l':
      return 'lizard';
    case 'sp':
      return 'spock';
  }
  return 0;
}
