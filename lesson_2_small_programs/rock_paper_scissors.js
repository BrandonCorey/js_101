const readline = require('readline-sync');
const PROMPT_MESSAGES = require('./rps_message.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const winCounter = createWinCounter();

// Main program gets input and calls functions
while (true) {
  displayRules();
  while (true) {
    displayMainUI();

    let humanChoice = askForChoice();

    let cpuChoiceIndex = getRandomIndex();
    let cpuChoice = VALID_CHOICES[cpuChoiceIndex];

    let winnerOfRound = calcWinner(cpuChoiceIndex, humanChoice);
    updateWinCounter(winnerOfRound, winCounter);
    dipslayWinner(winnerOfRound, humanChoice, cpuChoice);

    let grandWinner = calcGrandWinner(winCounter);
    if (grandWinner) {
      console.clear();
      dipslayWinner(winnerOfRound, humanChoice, cpuChoice);
      displayGrandWinner(grandWinner);
      resetScore(winCounter);
    }

    let response = askToPlayAgain();
    if (response[0] !== 'y') break;
  }

  break;
}

// Creates win couinter for CPU and human
function createWinCounter() {
  let counterObj = {
    cpu: 0,
    human: 0
  };

  return counterObj;
}

// Details rule diffrences from normal RPS
function displayRules() {
  while (true) {
    console.clear();
    console.log(PROMPT_MESSAGES['rules']);
    let response = readline.question('Enter "s" to begin: ');
    if (response === 's') {
      break;
    }
  }
}

// Main ui for the same
function displayMainUI() {
  console.clear();
  displayWinCounter(winCounter);
  console.log("-- Best of 5 --\n");
  prompt(PROMPT_MESSAGES['chooseOne']);
  console.log(PROMPT_MESSAGES['abbreviatons']);
}

// Helper function to display wins in UI
function displayWinCounter (counter) {
  prompt(`Cpu wins: ${counter.cpu}`);
  prompt(`Your wins: ${counter.human}`);
}

// Asks for user choice (RPSLSP)
function askForChoice() {
  let humanChoice = readline.question().toLowerCase();
  humanChoice = checkAbbreviation(humanChoice);
  humanChoice = checkValidChoice(humanChoice);
  return humanChoice;
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
    return 'cpuWin';
  }
  if (cpuIndex === userChoiceIndex) {
    return 'tie';
  }

  return 'win';
}

// Updates the win counter each round
function updateWinCounter(roundWinner, counter) {
  if (roundWinner === 'cpuWin') counter.cpu += 1;
  if (roundWinner === 'win') counter.human += 1;
  return winCounter;
}

// Prints winner on screen
function dipslayWinner (winner, userChioce, computerChoice) {
  prompt(`You chose ${userChioce}. The computer chose ${computerChoice}.`);
  prompt(PROMPT_MESSAGES[winner]);
}

// Calculates the grand winner
function calcGrandWinner (counter) {
  if (counter.cpu === 3) return 'grandWinnerCpu';
  if (counter.human === 3) return 'grandWinnerHuman';
  return 0;
}

// Prints grand winner to the screen
function displayGrandWinner(grandWinner) {
  prompt(PROMPT_MESSAGES[grandWinner]);
}

// Resets score if user wants to play again
function resetScore(counterObj) {
  counterObj.cpu = 0;
  counterObj.human = 0;
}

function askToPlayAgain() {
  prompt(PROMPT_MESSAGES["playAgain"]);
  let answer = readline.question().toLowerCase();
  return getValidPlayAgain(answer);
}

// Validates play again input
function getValidPlayAgain(answer) {
  while ((answer[0] !== 'n' && answer !== 'y')) {
    prompt(PROMPT_MESSAGES["errorYorN"]);
    answer = readline.question().toLowerCase();
  }

  return answer;
}

// Adds an arrow to CLI prompt
function prompt(message) {
  console.log(`=> ${message}`);
}
