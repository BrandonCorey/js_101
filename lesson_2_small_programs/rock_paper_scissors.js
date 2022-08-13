const readline = require('readline-sync');
const PROMPT_MESSAGES = require('./rps_message.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const winCounter = createWinCounter();

// Main program gets input and calls functions
while (true) {

  displayWinCounter(winCounter);
  prompt(PROMPT_MESSAGES['chooseOne']);
  console.log(PROMPT_MESSAGES['abbreviatons']);

  let humanChoice = readline.question().toLowerCase();
  humanChoice = checkAbbreviation(humanChoice);
  humanChoice = checkValidChoice(humanChoice);

  let cpuChoiceIndex = getRandomIndex();
  let cpuChoice = VALID_CHOICES[cpuChoiceIndex];

  let winnerOfRound = calcWinner(cpuChoiceIndex, humanChoice);
  updateWinCounter(winnerOfRound, winCounter);
  prompt(`You chose ${humanChoice}. The computer chose ${cpuChoice}`);
  dipslayWinner(winnerOfRound);

  let grandWinner = calcGrandWinner(winCounter);
  if (grandWinner) {
    displayGrandWinner(grandWinner);
    break;
  }

  prompt(PROMPT_MESSAGES["playAgain"]);
  let response = readline.question().toLowerCase();

  getValidPlayAgain(response);

  if (response[0] !== 'y') break;
}

// Creates win couinter for CPU and human
function createWinCounter() {
  let counterObj = {
    cpu: 0,
    human: 0
  };
  return counterObj;
}

function displayWinCounter (counter) {
  prompt(`Cpu wins: ${counter.cpu}`);
  prompt(`Your wins: ${counter.human}\n`);
}

// Converts abbreviated inputs to full name
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
  return choice;
}

// Validates human RPSLSP choice
function checkValidChoice (choice) {
  while (!VALID_CHOICES.includes(choice)) {
    prompt(PROMPT_MESSAGES["error"]);
    choice = readline.question();
    choice = checkAbbreviation(choice.toLowerCase());
  }
  return choice;
}

// Gets random index for CPU choice
function getRandomIndex() {
  let index = Math.floor(Math.random() * VALID_CHOICES.length);
  return index;
}

// Calculates winner based off index differentials where CPU wins
// Uses the indeces of the VALID_CHOICES array
function calcWinner(cpuIndex, userChoice) {
  let userChoiceIndex = VALID_CHOICES.indexOf(userChoice);
  const cpuWinCondition = [1, 3, -2, -4];
  const cpuWinFormula = cpuIndex - userChoiceIndex;

  if (cpuWinCondition.includes(cpuWinFormula)) {
    return PROMPT_MESSAGES['cpuWin'];
  }
  if (cpuIndex === userChoiceIndex) {
    return PROMPT_MESSAGES['tie'];
  }

  return PROMPT_MESSAGES['win'];

}

// Updates the win counter each round
function updateWinCounter(roundWinner, counter) {
  if (roundWinner === 'Computer wins!') counter.cpu += 1;
  if (roundWinner === 'You win!') counter.human += 1;
  return winCounter;
}

// Prints winner on screen
function dipslayWinner (winner) {
  prompt(winner);
}

// Calculates the grand winner
function calcGrandWinner (counter) {
  if (counter.cpu === 5) return PROMPT_MESSAGES['grandWinnerCpu'];
  if (counter.human === 5) return PROMPT_MESSAGES['grandWinnerHuman'];
  return 0;
}

// Prints grand winner to the screen
function displayGrandWinner(grandWinner) {
  prompt(grandWinner);
}

// Validates play again input
function getValidPlayAgain(response) {
  while (!(response[0] === 'n' || response === 'y')) {
    prompt(PROMPT_MESSAGES["errorYorN"]);
    response = readline.question();
    response.toLowerCase();
  }
  return response;
}

// Adds an arrow to CLI prompt
function prompt(message) {
  console.log(`=> ${message}`);
}
