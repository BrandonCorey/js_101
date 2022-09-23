
let partsOfSpeech = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy' ,'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly']
  }

let template1 = 'The <adjective> brown <cat> <adverb> <verb> the <adjective> yellow <noun>, who <adverb> <verb> his <noun>'; 
let template2 = 'The <noun> <verb> the <noun>\'s head';


function madlibs(template) {
  let templateStrings = new RegExp(/<+[\w]+>/g);
  
  //return templateStringsClean;
  return template.replace(templateStrings, cleanString);
}

function cleanString(match) {
  clean = match.replace(/[<>]/g, "");
  let randomIdx = Math.floor(Math.random() * partsOfSpeech[clean].length);
  return partsOfSpeech[clean][randomIdx];
}


console.log(madlibs(template2));

// replace accepts a callback function
// it passes the matched characters to the callback function
// Fundamental knowledge missing here with callbacks that aren't annonymous and immediately execudted
// If you define a callback outside of the function argument, when you pass it in, you pass it in as is, no args
// This is because the arguments are passed to the callback within the body of the higher order
// This was confusing here as I didn't know repalce accepted a callback and passed the matched chars to it. 


// Loop of template1 starts
// We hit <adjective>, detect it with regexp
// We take <adjective> and turn it into adjective
// We want to replace <adjective> with partsOfSpeech[adjective][randomIdx]
//  To get randomIdx, we need partsOfSpeech[adjective].length
//  We then do Math.floor(Math.random * above length)
