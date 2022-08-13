
const readline = require('readline-sync');
const PROMPT_MESSAGES = require('./rps_message.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const winCounter = createWinCounter();

// Main program gets input and returns winner
while (true) {
  displayWinCounter(winCounter);
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  console.log(PROMPT_MESSAGES['abbrev']);

  let humanChoice = readline.question().toLowerCase();
  humanChoice = checkAbbreviation(humanChoice);
  humanChoice = getValidRPS(humanChoice);

  let cpuChoiceIndex = getRandomIndex();
  let cpuChoice = VALID_CHOICES[cpuChoiceIndex];

  let winnerOfRound = calcWinner(cpuChoiceIndex, humanChoice);
  updateWinCounter(winnerOfRound, winCounter);
  prompt(`You chose ${humanChoice}. The computer choice ${cpuChoice}`);
  dipslayWinner(winnerOfRound);

  let grandWinner = calcGrandWinner(winCounter);
  if (grandWinner) {
    displayGrandWinner(grandWinner);
    break;
  }

  prompt(PROMPT_MESSAGES["playAgain"]);
  let answer = readline.question().toLowerCase();

  while (!(answer[0] === 'n' || answer === 'y')) {
    prompt(PROMPT_MESSAGES["errorYorN"]);
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

// Caclulates the winner and displays on screen
function dipslayWinner (winner) {
  prompt(winner);
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
  return choice;
}

// Adds an arrow to CLI prompt
function prompt(message) {
  console.log(`=> ${message}`);
}

function calcWinner(cpuIndex, userChoice) {
  let userChoiceIndex = VALID_CHOICES.indexOf(userChoice);
  const cpuWinCondition = [1, 3, -2, -4]; // --> All index differentials where computer wins
  const cpuWinFormula = cpuIndex - userChoiceIndex;

  if (cpuWinCondition.includes(cpuWinFormula)) {
    return PROMPT_MESSAGES['cpuWin'];
  }
  if (cpuIndex === userChoiceIndex) {
    return PROMPT_MESSAGES['tie'];
  }

  return PROMPT_MESSAGES['win'];

}


function createWinCounter() {
  let counterObj = {
    cpu: 0,
    human: 0
  };
  return counterObj;
}
function updateWinCounter(roundWinner, counter) {

  if (roundWinner === 'Computer wins!') counter.cpu += 1;
  if (roundWinner === 'You win!') counter.human += 1;
  return winCounter;
}

function displayWinCounter (counter) {
  prompt(`Cpu wins: ${counter.cpu}`);
  prompt(`Your wins: ${counter.human}\n`);
}

function calcGrandWinner (counter) {
  if (counter.cpu === 5) return PROMPT_MESSAGES['grandWinnerCpu'];
  if (counter.human === 5) return PROMPT_MESSAGES['grandWinnerHuman'];
  return 0;
}

function displayGrandWinner(grandWinner) {
  prompt(grandWinner);
}

function getValidRPS (choice) {
  while (!VALID_CHOICES.includes(choice)) {
    prompt(PROMPT_MESSAGES["error"]);
    choice = readline.question();
    choice = checkAbbreviation(choice);
  }
  return choice;
}

function getRandomIndex() {
  let index = Math.floor(Math.random() * VALID_CHOICES.length);
  return index;
}