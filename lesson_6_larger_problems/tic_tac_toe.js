const readline = require('readline-sync');
const EMPTY_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const USER_NAME = 'user';
const COMPUTER_NAME = 'cpu';
const winCondition = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
  [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
];

let playerOne;

while (true) {

  let score = initializeScore();

  setUpGame();

  while (true) {

    let board = initializeBoard();

    while (true) {

      displayMainUI(board, score);

      whoGoesFirst(board);
      displayMainUI(board, score);
      if (someoneWon(board) || boardFull(board)) break;

      whoGoesSecond(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    updateScore(board, score);
    displayMainUI(board, score);

    if (someOneWonMatch(score)) {
      prompt(`${detectMatchWinner(score)} is the winner of the match!`);
      resetScore(score);
    } else if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt('It\'s a tie!');
    }

    let response = askToPlayAgain();
    if (response === 'n') break;

  }
  prompt('Thanks for playing Tic Tac Toe!');
}

function setUpGame() {
  console.clear();
  console.log(`==================================
INTENSE GAME OF TIC-TAC-TOE      =
----------------------------------
Who will go first: ${COMPUTER_NAME} or ${USER_NAME}?  =
==================================`
  );

  playerOne = readline.question('=> ').toLowerCase();

  while (
    playerOne.toLowerCase() !== COMPUTER_NAME.toLowerCase() &&
    playerOne.toLowerCase() !== USER_NAME.toLocaleLowerCase()
  ) {
    prompt('Sorry, enter a valid input!');
    playerOne = readline.question();
  }

}

function initializeScore() {
  let score = {cpu: 0, user: 0};
  return score;
}

function initializeBoard() {
  let board = [];

  for (let square = 1; square <= 9; square++) {
    board[square] = EMPTY_MARKER;
  }
  return board;
}

function displayMainUI(board, scores) {
  displayScore(scores);
  displayBoard(board);
}

function displayScore(scores) {
  console.clear();
  let computerScore = scores[COMPUTER_NAME];
  let userScore = scores[USER_NAME];
  console.log(
    `--------------\nUser score: ${userScore}\n Cpu score: ${computerScore}\n--------------\n`
  );
}

function displayBoard(board) {

  console.log(`${USER_NAME} is ${HUMAN_MARKER}. ${COMPUTER_NAME} is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}   `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}   `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}   `);
  console.log('     |     |');
  console.log('');
}

function whoGoesFirst(board) {
  let first = playerOne;
  if (first === USER_NAME) return playerChooseSquare(board);
  return computerChooseSquare(board);
}

function whoGoesSecond(board) {
  let first = playerOne;
  if (first !== USER_NAME) return playerChooseSquare(board);
  return computerChooseSquare(board);
}
// Gets input from player to choose square
function playerChooseSquare(board) {
  let square;

  let emptySquares = getEmptySquares(board);

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares)}):`);
    square = readline.question().trim();

    if (emptySquares.includes(square)) break;

    prompt('That is not a valid choice!\n');
  }

  board[square] = HUMAN_MARKER;
}

// Calculates choice for compouter to choose square
function computerChooseSquare(board) {
  let square;

  square = cpuOffense(board);
  if (!square) square = cpuDefense(board,square);
  if (!square) square = cpuRandom(board, square);

  board[square] = COMPUTER_MARKER;

}
function cpuOffense(board) {
  for (let idx = 0; idx < winCondition.length; idx++) {
    let line = winCondition[idx];
    let square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) return square;
  }
  return null;
}

function cpuDefense(board, square) {
  for (let idx = 0; idx < winCondition.length; idx++) {
    let line = winCondition[idx];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) return square;
  }
  return null;
}

function cpuRandom(board, square) {
  let randomIdx = Math.floor(Math.random() * getEmptySquares(board).length);
  let emptySpaces = getEmptySquares(board);
  if (spaceFiveOpen(emptySpaces)) {
    square = spaceFiveOpen(emptySpaces);
    return square;
  } else {
    square = getEmptySquares(board)[randomIdx];
    return square;
  }
}

function spaceFiveOpen(emptySquares) {
  let middleSquare = 5;
  if (emptySquares.includes(String(middleSquare))) return middleSquare;
  return null;
}

function findAtRiskSquare(winningLine, board, marker) {
  let markersInLine = winningLine.map(square => board[square]);
  if (markersInLine.filter(value => value === marker).length === 2) {
    let dangerSqr = winningLine.find(square => board[square] === EMPTY_MARKER);
    if (dangerSqr !== undefined) return dangerSqr;
  }
  return null;
}

// Updates the scores of the game
function updateScore(board, scores) {
  if (detectWinner(board) === USER_NAME) scores[USER_NAME] += 1;
  if (detectWinner(board) === COMPUTER_NAME) scores[COMPUTER_NAME] += 1;
  return scores;
}

// Detects if the game board is full
function boardFull(board) {
  return getEmptySquares(board).length === 0;
}

// Detects if someone has won the match (boolean)
function someOneWonMatch(score) {
  return !!detectMatchWinner(score);
}

// Produces the winner of the match
function detectMatchWinner (score) {
  if (score.Cpu === GAMES_TO_WIN) return COMPUTER_NAME;
  if (score.User === GAMES_TO_WIN) return USER_NAME;
  return 0;
}

// Resets the score of the match after someone has won
function resetScore(score) {
  score[COMPUTER_NAME] = 0;
  score[USER_NAME] = 0;
}

// Detects if someone has won a single game (boolean)
function someoneWon(board) {
  return !!detectWinner(board); // We double bang this value to turn it into a true/false based on the values existence
}

// Produces the winner of the single game
function detectWinner(board) {

  for (let lines = 0; lines < winCondition.length; lines++) {
    let [sq1, sq2, sq3] = winCondition[lines]; // We are setting the values of each winning square within each nested array

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER

    ) return USER_NAME;
    if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER

    ) return COMPUTER_NAME;
  }
  return null;
}

// Asks the user if they want to play again
function askToPlayAgain() {
  prompt('Would you like to play again? (y or n)');
  let answer = readline.question().toLowerCase();
  return getValidPlayAgain(answer);
}


// Helper Functions

function getEmptySquares(board) {
  return Object.keys(board).filter(square => { // This creates an array of keys (indeces since board is an array) of ONLY empty squares
    return board[square] === EMPTY_MARKER;
  });
}

// Adds arrow to log prompt
function prompt(string) {
  console.log('=> ' + string);
}

// Dynamically adds conjunction to end of list
function joinOr(array, delimiter = ', ', conjunction = 'or') {
  return array.map((element, idx) => {
    if (array.length === 1) return element;
    if (array.length === 2) delimiter = ' ';

    return (idx === array.length - 1 ? `${conjunction} ${element}` : element);
  }).join(delimiter);
}

// Validates the input from the play again question
function getValidPlayAgain(answer) {
  while ((answer !== 'n' && answer !== 'y')) {
    prompt('Please enter a valid input!');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

// High level psuedo-code:

// Display the initial empty 3x3 board.
// Ask the user to mark a square.
// Computer marks a square.
// Display the updated board state.
// If it's a winning board, display the winner.
// If the board is full, display tie.
// If neither player won and the board is not full, go to #2
// Play again?
// If yes, go to #1
// Goodbye!