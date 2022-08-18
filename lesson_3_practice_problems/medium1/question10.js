// Consider these two simple functions:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?
console.log(bar(foo()));

// Returns no
// foo returns yes, default param is irrelevent
// Since foo is passed as an arg to bar, default param for bar is irrelevent
// Since we can treat foo === 'yes', the logic of bar would return 'no'