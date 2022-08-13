const readline = require('readline-sync');
const CHOICES = {
  rock: { abbreviated: 'r', beats: ['scissors', 'lizard'] },
  paper: { abbreviated: 'p', beats: ['rock', 'spock'] },
  scissors: { abbreviated: 's', beats: ['paper', 'lizard'] },
  spock: { abbreviated: 'sp', beats: ['rock', 'scissors'] },
  lizard: { abbreviated: 'l', beats: ['paper', 'spock'] }
};
const WINNING_SCORE = 3;
const MAX_LENGTH_OF_ABBREVIATED_CHOICE = 'sp'.length;

let keys = Object.keys(CHOICES);
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWelcomeMessage() {
  console.log("\nLet's play Rock Paper Scissors Spock Lizard!\n");
  console.log('Rules of the game:\n\nScissors cuts Paper covers Rock crushes Lizard poisons Spock smashes Scissors decapitates Lizard eats Paper disproves Spock vaporizes Rock crushes Scissors\n');
  console.log('Good luck!');
}

function invalidPlayerChoices(choice) {
  if (choice.length > 0 && choice.length <= MAX_LENGTH_OF_ABBREVIATED_CHOICE) {
    let keysArray = Object.keys(CHOICES);
    let check = true;

    for (let index = 0; index < keysArray.length; index++) {
      if (CHOICES[keysArray[index]].abbreviated === choice) {
        check = false;
      }
    }
    return check;
  } else {
    return !Object.keys(CHOICES).includes(choice);
  }
}

function askPlayerChoice() {
  prompt(`Make a choice: rock(r) | paper(p) | scissors(s) | spock(sp | lizard(l)`);
  let playerChoice = readline.question().toLowerCase();

  while (invalidPlayerChoices(playerChoice)) {
    prompt('Try again. Enter the word or the letter(s) in-between the parentheses:\nrock(r) | paper(p) | scissors(s) | spock(sp | lizard(l)');
    playerChoice = readline.question().toLowerCase();
  }

  return playerChoice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * keys.length);
  let computerChoice = keys[randomIndex];

  return computerChoice;
}

function playerWins(winner, loser) {
  let result;

  for (let index = 0; index < keys.length; index++) {
    if ((CHOICES[keys[index]].abbreviated === winner ||
      keys[index] === winner) &&
    (CHOICES[keys[index]].beats.includes(loser) ||
    CHOICES[keys[index]].beats.includes(findNameOfAbbreviatedChoice(loser)))) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
}

function findNameOfAbbreviatedChoice(value) {
  let result;

  for (let index = 0; index < keys.length; index++) {
    if (CHOICES[keys[index]]['abbreviated'] === value) {
      result = keys[index];
    }
  }
  return result;
}

function displayWinner(playerChoice, computerChoice) {
  let playerChoiceName;

  if (playerChoice.length > MAX_LENGTH_OF_ABBREVIATED_CHOICE) {
    playerChoiceName = playerChoice;
  } else {
    playerChoiceName = findNameOfAbbreviatedChoice(playerChoice);
  }

  console.log(`You picked ${playerChoiceName} and the computer picked ${computerChoice}.`);

  if (playerWins(playerChoice, computerChoice)) {
    console.log('You win this round!');
  } else if (playerChoice === computerChoice ||
    findNameOfAbbreviatedChoice(playerChoice) === computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log(`Computer wins this round!`);
  }
}

function printRoundAndScore(playerChoice, computerChoice) {
  if (playerWins(playerChoice, computerChoice)) {
    roundCount += 1;
    playerScore += 1;
  } else if (playerWins(computerChoice, playerChoice)) {
    roundCount += 1;
    computerScore += 1;
  }

  console.log(`Round: ${roundCount} | Player Score: ${playerScore} | Computer Score: ${computerScore}`);
  console.log(`-----------------------------------------------------------------------------------------`);
}

function displayGrandWinner(playerScore, computerScore) {
  if (playerScore === WINNING_SCORE) {
    console.log(`Congrats! You're the grand winner!`);
  } else if (computerScore === WINNING_SCORE) {
    console.log(`Sorry, the computer is the grand winner. Better luck next time!`);
  }
}

function someoneWon(playerScore, computerScore) {
  return playerScore === WINNING_SCORE || computerScore === WINNING_SCORE;
}

function askToReplay() {
  prompt('Play again?\n (y/n)');
  let answer = readline.question();

  while (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n') {
    prompt('Please enter either y or n.');
    answer = readline.question();
  }
  return answer;
}

function resetRoundAndScore() {
  roundCount = 0;
  playerScore = 0;
  computerScore = 0;
}


// start game
displayWelcomeMessage();

while (true) {
  let playerChoice = askPlayerChoice();
  let computerChoice = getComputerChoice();
  console.clear();

  displayWinner(playerChoice, computerChoice, playerScore, computerScore);
  printRoundAndScore(playerChoice, computerChoice);

  if (someoneWon(playerScore, computerScore)) {
    displayGrandWinner(playerScore, computerScore);

    let answer = askToReplay();

    if (answer !== 'y') {
      console.log('\nThanks for playing!\n');
      break;
    } else {
      resetRoundAndScore();
      console.clear();
    }
  }
}