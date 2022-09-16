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
playerTurn(deck);

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

function playerTurn(deck) {
  let hand = [];
  let total;

  while (true) {
    if (hand.length < 2) {
      hand.push(dealCards(deck));
    }

    hand.push(dealCards(deck));
    total = Number(cardTotal(hand));

    console.clear();
    console.log(hand);
    console.log(`\nTotal: ${total}`);

    if (bust(total)) break;
    if (total === TWENTY_ONE) break;

    let answer = readline.question(prompt("Hit or stay?"));
    if (answer === 'stay') break;
  }

  if (bust(total)) prompt('You busted!');
  else prompt('You chose to stay!');
}

function dealerTurn(cards) {
  let cardCount = 0;
  while (true) {
    cardCount += 1;
    if (cardCount === 1) console.log(dealCards(cards));
    if (cardTotal(cards) >= 17 || bust()) break;
  }
}


function bust(total) {
  return total > 21;
}

function prompt(string) {
  return console.log('=> ' + string);
}