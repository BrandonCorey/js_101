// SET greetings
// SET nameString = nameArr.join
// SET jobObj
// SET 

function greetings(nameArr, jobObj) {
  let nameString = nameArr.join(' ');
  let title = Object.values(jobObj).join(' ');
  console.log(`Hello ${nameString}! Nice to have a ${title} around.`)
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);