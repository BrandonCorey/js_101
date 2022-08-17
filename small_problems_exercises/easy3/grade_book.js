//. Write a function that determines the mean of the three scores passed to it,
// and returns the letter associated with that grade.

function getGrade(grade1, grade2, grade3) {
  let mean = ((grade1 + grade2 + grade3) / 3);
  mean = Math.floor(mean / 10);
  switch (mean) {
    case 10:
      return 'A';
    case 9:
      return 'A';
    case 8:
      return 'B';
    case 7:
      return 'C';
    case 6:
      return 'D';
  }
  return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(100, 100, 100));    // "D"