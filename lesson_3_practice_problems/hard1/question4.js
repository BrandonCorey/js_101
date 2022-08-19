// Fix thid code

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!(isAnIpNumber(word))) { // Only break out of loop when isAnIPNumber is false (!)
      return false;
    }
  }
  return true;
}

console.log(isDotSeparatedIpAddress('200.100.200.110'));


function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}