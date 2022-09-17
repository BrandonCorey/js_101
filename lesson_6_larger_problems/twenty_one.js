// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//    - repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay
//    - repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare

const readline = require('readline-sync');
const TWENTY_ONE = 21;

let deck = initializeDeck();
shuffle(deck);

let dealerInitial = dealerTurn(deck);
displayDealerHand(dealerInitial);

let playerHand = playerTurn(deck, dealerInitial);

let dealerFinalHand = dealerTurn(deck, playerHand, dealerInitial);

displayCurrentHands(playerHand, cardTotal(playerHand), null, dealerFinalHand);

displayTotals(dealerFinalHand, playerHand);

let winner = calculateWinner(cardTotal(dealerFinalHand), cardTotal(playerHand));

displayWinner(winner);


function initializeDeck() {
  const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const deck = [];

  suits.forEach(suitElement => {
    values.forEach(valueElement => {
      let weightOfCard;

      if (/[JQK]/g.test(valueElement)) weightOfCard = 10;
      else if (valueElement === 'A') weightOfCard = 11;
      else weightOfCard = Number(valueElement);

      let card = {
        suit: suitElement,
        value: valueElement,
        weight: weightOfCard
      };

      deck.push(card);
    });
  });
  return deck;
}

function dealCards(deck) {
  return shuffle(deck).pop();
}

function shuffle(deck) {
  for (let idx = deck.length - 1; idx > 0; idx--) {
    let randomIdx = Math.floor(Math.random() * (idx + 1));
    [deck[idx], deck[randomIdx]] = [deck[randomIdx], deck[idx]];
  }

  return deck;
}

function cardTotal(cards) {
  return cards.reduce((sum, card) => {
    if (card.value === 'A' && card.weight + sum > 21) card.weight = 1;
    return sum + card.weight;
  }, 0);
}

function playerTurn(deck, dealerInitial) {
  let hand = [];
  let total;

  while (true) {
    if (hand.length < 2) hand.push(dealCards(deck));

    hand.push(dealCards(deck));

   
  
    total = Number(cardTotal(hand));

    displayCurrentHands(hand, total, dealerInitial);
   
    if (bust(total) || total ===  TWENTY_ONE) break;

    let answer = readline.question(prompt("Hit or stay?\n"));
    if (answer === 'stay') break;
  }


  if (bust(total)) prompt('You busted!');
  else prompt('You chose to stay!');
  return hand;
}

function dealerTurn(deck, playerHand, dealerInitial = null) {
  let hand = [];

  while (true) {
    
    if (dealerInitial) {
  
    hand = dealerInitial;

    if (bust(cardTotal(playerHand))) break;

    if (cardTotal(hand) ===  TWENTY_ONE) break;

    if (cardTotal(hand) >= cardTotal(playerHand)) break;

    if (cardTotal(hand) >= 17 || bust(cardTotal(hand))) break;

    while (cardTotal(hand) <= cardTotal(playerHand)) {
      hand.push(dealCards(deck));

    }
  
  }
  
    if (hand.length < 2) {
      hand.push(dealCards(deck));
    }

    break;
  }

  return hand;
}


function bust(total) {
  return total > TWENTY_ONE;
}

function prompt(string) {
  return console.log('=> ' + string);
}

function displayCurrentHands(playerHand, PlayerhandTotal, dealerInitial, dealerFinal = null) {
  console.clear();
  if (dealerFinal) displayDealerHand(null, dealerFinal);
  else displayDealerHand(dealerInitial);

  displayPlayerHand(playerHand, PlayerhandTotal);
}

function displayPlayerHand(hand, total) {

  console.log('\nYour hand: \n');
  console.log(hand);
  console.log(`\n\nPlayer total: ${total}`);
  console.log('------------------------------------------------');

}

function displayDealerHand(dealerInitial = null, dealerFinal = null) {
  if (dealerInitial) {
    console.log('------------------------------------------------');
    console.log('\nDealer hand: \n');
    console.log(dealerInitial[0]);
    console.log('\n');
    console.log(`Dealer total: ${cardTotal(dealerInitial.slice(0,1))}`);
    console.log('------------------------------------------------');
  } else {
    console.log('------------------------------------------------');
    console.log('\nDealer hand: \n');
    console.log(dealerFinal);
    console.log('\n');
    console.log(`Dealer total: ${cardTotal(dealerFinal)}`);
    console.log('------------------------------------------------');
  }
  
}


function displayTotals(dealerFinal, playerFinal) {

  let playerTotal = cardTotal (playerFinal);
  let dealerTotal = cardTotal(dealerFinal);

  if (bust(playerTotal)) playerTotal = 'Busted';
  if (bust(dealerTotal)) dealerTotal = 'Busted';

  console.log(`\nThe player\'s final total: ${playerTotal}\n`);

  console.log(`The dealers final total: ${dealerTotal}`);

  console.log('\n');

}

function calculateWinner(dealerTotal, playerTotal) {
  let winner = {'Dealer': dealerTotal, 'Player': playerTotal}
  let [dealer, player] = Object.keys(winner);

  if (bust(winner['Player'])) return dealer
  if (bust(winner['Dealer'])) return player;

  if (winner['Dealer'] > winner['Player']) return dealer;
  if (winner['Dealer'] < winner['Player']) return player;

  return 'draw'
}

function displayWinner(winner) {
  prompt(`The winner of the game is the ${winner}!\n`);
}