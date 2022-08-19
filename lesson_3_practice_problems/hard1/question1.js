// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// I believe the second will return nothing.
// If I rememeber, return must be on same line
// I was right, just remember 'nothing' is actually undefined.