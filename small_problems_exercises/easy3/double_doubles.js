
// check length
// If length is even and left side same as right, return number
// Else, return number * 2

function twice(num) {
  let len = String(num).length;
  if (len % 2 === 0) {
    let divisor = 10 ** (len / 2);
    let leftHalf = Math.floor(num / divisor);
    let rightHalf = Math.round(((num / divisor) - leftHalf) * divisor);
    if (leftHalf === rightHalf) return num;
  }
  return num * 2;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));
