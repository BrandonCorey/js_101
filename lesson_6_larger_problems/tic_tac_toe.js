const readline = require('readline-sync');
const EMPTY_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const USER_NAME = 'User';
const COMPUTER_NAME = 'Cpu';

while (true) {
  let score = initializeScore();
  while (true) {

    let board = initializeBoard();
    while (true) {

      displayScore(score);
      displayBoard(board);

      playerChooseSquare(board);

      if (someoneWon(board) || boardFull(board)) break;

      computerChooseSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    updateScore(board, score);
    displayScore(score);

    if (someOneWonMatch(score)) {
      prompt(`${detectGrandWinner(score)} is the winner of the match!`);
      resetScore(score);
    } else if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt('It\'s a tie!');
    }

    prompt('Would you like to play again? (y or n)');

    let answer = readline.question().toLowerCase();
    if (answer === 'n') break;

    while (answer !== 'y' && answer !== 'n')  {
      prompt('Whoops, enter a valid response!');
      answer = readline.question().toLowerCase();
    }

  }
  prompt('Thanks for playing Tic Tac Toe!');
}


function initializeBoard() {
  let board = [];

  for (let square = 1; square <= 9; square++) {
    board[square] = EMPTY_MARKER;
  }
  return board;
}

function initializeScore() {
  let score = {Cpu: 0, User: 0};
  return score;
}

function updateScore(board, scores) {
  if (detectWinner(board) === USER_NAME) scores[USER_NAME] += 1;
  if (detectWinner(board) === COMPUTER_NAME) scores[COMPUTER_NAME] += 1;
  return scores;
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


function computerChooseSquare(board) {
  let emptySquares = getEmptySquares(board);

  let randomIdx = Math.floor(Math.random() * emptySquares.length);

  let choice = emptySquares[randomIdx];
  board[choice] = COMPUTER_MARKER;

}

function boardFull(board) {
  return getEmptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board); // We double bang this value to turn it into a true/false based on the values existence
}

function detectWinner(board) {
  let winCondition = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
  ];

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

function someOneWonMatch(score) {
  return !!detectGrandWinner(score);
}

// Calculates the grand winner
function detectGrandWinner (score) {
  if (score.Cpu === GAMES_TO_WIN) return COMPUTER_NAME;
  if (score.User === GAMES_TO_WIN) return USER_NAME;
  return 0;
}

function resetScore(score) {
  score[COMPUTER_NAME] = 0;
  score[USER_NAME] = 0;
}

// Helper Functions

function getEmptySquares(board) {
  return Object.keys(board).filter(square => { // This creates an array of keys (indeces since board is an array) of ONLY empty squares
    return board[square] === EMPTY_MARKER;
  });
}

function prompt(string) {
  console.log('=> ' + string);
}

function joinOr(array, delimiter = ', ', conjunction = 'or') {
  return array.map((element, idx) => {
    if (array.length === 1) return element;
    if (array.length === 2) delimiter = ' ';

    return (idx === array.length - 1 ? `${conjunction} ${element}` : element);
  }).join(delimiter);
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