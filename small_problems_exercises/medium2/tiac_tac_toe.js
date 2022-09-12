const readline = require('readline-sync');

const EMPTY_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

let board = initializeBoard();

while (true) {
  displayBoard(board);
  playerChooseSquare(board);
  if (someoneWon(board) || boardFull(board)) break;

  computerChooseSquare(board);
  if (someoneWon(board) || boardFull(board)) break;

}

displayBoard(board);

if (someoneWon(board)) prompt(`${detectWinner(board)} won!`);
if (boardFull(board)) prompt('It\'s a tie!');


function initializeBoard() {
  let board = [];

  for (let square = 1; square <= 9; square++) {
    board[square] = EMPTY_MARKER;
  }
  return board;
}

function displayBoard(board) {
  console.clear();

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
    prompt(`Choose a square (${emptySquares.join(', ')}):`);
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

    ) return 'You';
    if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER

    ) return 'Computer';
  }
  return null;
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