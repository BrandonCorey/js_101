// Write a function that takes no arguments and returns a string that contains a UUID.

function generateUUID() {
  const HEX = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  const SECTIONSIDX = [8, 12, 16, 20];

  let arr = '';
  for (let idx = 0; idx < 32; idx++) {
    const randomIdx = Math.floor(Math.random() * HEX.length);
    arr += HEX[randomIdx];
    if (SECTIONSIDX.includes(idx)) arr += '-';
  }
  return arr;
}

console.log(generateUUID());

// Lanuch School solution
// function generateUUID() {
//   let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
//   let sections = [8, 4, 4, 4, 12];

//   let uuid = '';
//   sections.forEach((section, sectionIndex) => {
//     for (let index = 1; index <= section; index++) {
//       let randomIndex = Math.floor(Math.random() * characters.length);
//       uuid += characters[randomIndex];
//     }

//     if (sectionIndex < sections.length - 1) {
//       uuid += '-';
//     }
//   });

//   return uuid;
// }