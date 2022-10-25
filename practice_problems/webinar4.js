// Write a function to find the longest common prefix string amongst an array of strings

// Example 1:
// Input: ['flower', 'floor', 'flight']
// Output: "fl";

// Example 2: Input: ['dog', 'bug', 'cat']
// Output: "";

// algo
// function takes one array input
// we will loop through the array
// will loop through each string of the array
// will compare first char of each array
// if no match, result is false
// if match, compare first char and second
//  - continue this until no match
//  - return result


function commonPrefix(array) {
  let prefix = [""]
  let idx = 0;

  if (checkEqualElements(array)) return array[0]

  while (checkEqualElements(prefix)) {
    lastMatch = prefix.slice();
    prefix = [];
    array.forEach(string => prefix.push(string.slice(0, idx + 1)));

    if (!checkEqualElements(prefix)) return lastMatch[0]
    idx += 1;

  }
  return prefix;
}

function checkEqualElements(array) {
  return array.filter(elements => elements === array[0]).length === array.length

}



console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl');
console.log(commonPrefix(['dog', 'racecar', 'car']) === "");
console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters');
console.log(commonPrefix(['throne', 'dungeon']) === '');
console.log(commonPrefix(['throne', 'throne']) === 'throne');