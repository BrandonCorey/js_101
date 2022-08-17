const readline = require('readline-sync');
const ANSWERS = {
  noun: '',
  verb: '',
  adjective: '',
  adverb: ''
};

while (true) {
  getInput();
  let story = calcStory();
  checkValidation(story);
  console.log(story);
  break;
}

function getInput() {
  let adjective = readline.question('Enter a adjective: ');
  ANSWERS.adjective = checkValidation(adjective);
  let noun = readline.question('Enter a noun: ');
  ANSWERS.noun = checkValidation(noun);
  let verb = readline.question('Enter an verb: ');
  ANSWERS.verb = checkValidation(verb);
  let adverb = readline.question('Enter an adverb: ');
  ANSWERS.adverb = checkValidation(adverb);

}

function calcStory() {
  let story = `I saw a ${ANSWERS.noun} ${ANSWERS.adverb} ${ANSWERS.verb} a ${ANSWERS.adjective} skateboard down the street!`;
  return story;
}

function checkValidation(answer) {
  while (answer.trim() === '') {
    console.log('Whoops...please enter a word!');
    answer = readline.question();
  }
  return answer;
}