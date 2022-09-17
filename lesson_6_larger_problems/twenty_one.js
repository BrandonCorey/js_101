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

console.clear();

let deck = initializeDeck();
shuffle(deck);

let dealerInitial = dealerTurn(deck)
displayDealerHand(dealerInitial)

let playerHand = playerTurn(deck);

let dealerFinalHand = dealerTurn(deck, playerHand, dealerInitial);
displayDealerHand(null, dealerFinalHand);

displayFinalHands(dealerFinalHand, playerHand);


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
    if (hand.length < 2) hand.push(dealCards(deck));

    hand.push(dealCards(deck));

   
  
    total = Number(cardTotal(hand));

    displayPlayerHand(hand, total);
   
    if (bust(total) || total ===  TWENTY_ONE) break;

    let answer = readline.question(prompt("Hit or stay?\n"));
    if (answer === 'stay') break;
  }


  if (bust(total)) prompt('You busted!');
  else prompt('You chose to stay!');
  return hand;;
}

function dealerTurn(deck, playerHand = [0], dealerInitial = 0) {
  let total;
  let hand = [];

  while (true) {

  if (dealerInitial) {
    hand = dealerInitial;
    break;
  }

   hand.push(dealCards(deck));
  
   let total = cardTotal(hand);
  
   if (total> cardTotal(playerHand)) break;
   if (total >= 17 || bust(total)) break;
  }

  return hand;
}


function bust(total) {
  return total > TWENTY_ONE;
}

function prompt(string) {
  return console.log('=> ' + string);
}

function displayPlayerHand(hand, total) {
  let currentView = '\nYour hand: \n';
  if (hand.length > 2) currentView = '\nNew Card: \n'

  if (hand.length > 2) hand = hand.slice(-1)
  console.log(currentView)
  console.log(hand);
  console.log('\n------------------------------------------------')
  console.log(`\n\nTotal: ${total}`);
}

function displayDealerHand(dealerInitial = null, dealerFinal = null) {
  if (dealerInitial) {
    console.log('------------------------------------------------')
    console.log('\nDealer hand: \n')
    console.log(dealerInitial[0])
    console.log('\n')
    console.log('------------------------------------------------')
  } else {
    console.log('------------------------------------------------')
    console.log('\nDealer hand: \n')
    console.log(dealerFinal)
    console.log('\n')
    console.log('------------------------------------------------')
  }
  
}

function displayFinalHands(dealerFinal, playerFinal) {
  console.log(`\nThe player\'s final total: ${cardTotal(playerFinal)}\n`);

  console.log(`The dealers final total: ${cardTotal(dealerFinal)}`);

  console.log('\n\n');

}