
const readline = require('readline-sync');
const PROMPT_MESSAGES = require('./rps_message.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

// Main program gets input and returns winner
while (true) {

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  console.log(PROMPT_MESSAGES['abbrev']);
  let humanChoice = readline.question();
  humanChoice = checkAbbreviation(humanChoice);
  while (!VALID_CHOICES.includes(humanChoice)) {
    prompt(PROMPT_MESSAGES["error"]);
    humanChoice = readline.question();
  }

  let randIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let cpuChoice = VALID_CHOICES[randIndex];

  dipslayWinner(humanChoice, cpuChoice, randIndex);

  prompt(PROMPT_MESSAGES["playAgain"]);
  let answer = readline.question().toLowerCase();
  while (!(answer[0] === 'n' || answer === 'y')) {
    prompt(PROMPT_MESSAGES["errorYorN"]);
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
    prompt(PROMPT_MESSAGES['cpuWin']);
  } else if (randIndex === humanChoiceIndex) {
    prompt(PROMPT_MESSAGES['tie']);
  } else {
    prompt(PROMPT_MESSAGES['win']);
  }
}

// Converts abbreviated inputs to full name for logic
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

// Adds an arrow to CLI prompt to user
function prompt(message) {
  console.log(`=> ${message}`);
}
