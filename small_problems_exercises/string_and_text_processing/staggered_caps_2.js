function staggeredCase(string) {
  const result = [];
  let counter = 0;

  [...string].forEach(char => {
    if (counter % 2 === 0) result.push(char.toUpperCase());
    else result.push(char.toLowerCase());
    if (/[a-z]/gi.test(char) === true) counter += 1;
  });
  return result.join('');
}

console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);