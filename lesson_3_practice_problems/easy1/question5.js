//. What will the following code output?
console.log(false == '0'); // Logs true (coerces '0' to 0, whic is loosely equal to false)
console.log(false === '0'); // Logs false (not strictly equal)