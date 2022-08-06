// require readline
// GET bill = NUM("What is the bill?")
// GET tipRate = NUM("What is the tip percentage")
// tiprate /= 100
// SET tip = function (takes bill * tipRate) ROUND
// SET total = function(takes bill * (1 + tipRate)) ROUND


const readline = require('readline-sync');

function calcTipNTotal() {
  let bill = Number(readline.question('What is the bill? '));
let tipRate = Number(readline.question("What is the tip? "));
tipRate /= 100;

let tipFunc = (billArg, tipArg) => (billArg * tipArg).toFixed(2);
let totalFunc = (billArg, tipArg) => (billArg * (1 + tipArg)).toFixed(2);

let tip = tipFunc(bill, tipRate);
let total = totalFunc(bill, tipRate);
console.log(`The tip is ${tip}\nThe total is ${total}`);
return 0;
}

calcTipNTotal();

