// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.
// START
// SET readline = require readline
// SET convF = 3.29
// SET areaM
// SET areaF
// SET function convert areaM * 3.28
// SET question 1 = GET(readline quetion "Enter length of room")
// SET question 2 = GET(readline question "Enter width of room")
// SET areaM = question 1 * question 2
// PRINT The area of the room is areaM square meters (areaF square feet)
// END

const readline = require('readline-sync');
const CONV_TO_F = 3.29084;
let areaM;
let areaF;
let areaFconv = (q1, q2) => ((q1 * convertToF) * (q2 * convertToF)).toFixed(2);
let question1 = Number(readline.question("Enter length of room: "));
let question2 = Number(readline.question("Enter width of room: "));
areaM = (question1 * question2).toFixed(2);
areaF = areaFconv(question1, question2);
console.log(`The area of the room is ${areaM} square meters (${areaF} square feet)`);