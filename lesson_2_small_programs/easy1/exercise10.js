//One main function
//Calls two recursive functins with different base cases


function multiSum(num) {
  let sum = 0;
  for (let i = 3; i <= num; i++) {
    if (i % 3 === 0) sum += i;
    else if (i % 5 === 0) sum += i;
  }
  return sum;
}

console.log(multiSum(3));
console.log(multiSum(5));
console.log(multiSum(10));
console.log(multiSum(1000));
