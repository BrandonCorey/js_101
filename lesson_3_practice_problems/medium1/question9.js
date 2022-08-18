// What does this log?

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// Basically a tournament
// Left side, paper beats rock
// Right side, rock beats scissors
// Then paper players rock
// Paper wins
// One straggler left for paper to play, its rock again
// Paper wins, again.
// Answer - paper