// Write a function that takes the three angles of a triangle
// as arguments and returns one of the following four strings
// representing the triangle's classification:
//  'right', 'acute', 'obtuse', or 'invalid'.

function triangle(angle0, angle1, angle2) {
  const angles = [angle0, angle1, angle2];
  const sum = angles.reduce((acc, val) => acc + val);

  if (isValid(sum, angles)) return getTriangleType(angles);
  return 'invalid';
}

function isValid(sum, angles) {
  return sum === 180 && angles.every(el => el > 0);
}

function getTriangleType(anglesArr) {
  if (anglesArr.some(el => el === 90)) return 'right';
  if (anglesArr.some(el => el > 90)) return 'obtuse';
  return 'acute';
}

// Test Cases
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"