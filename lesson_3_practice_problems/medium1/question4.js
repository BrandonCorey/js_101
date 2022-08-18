//. What is the main difference between push and concat here?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// The main difference is that push is a mutating method, whereas concat is not
// You can see this in the implementation
// buffer must be reassigned to buffer.concat() where buffer.push() does not
//TLDR push modifies buffer, concat returns new array that is assigned to buffer