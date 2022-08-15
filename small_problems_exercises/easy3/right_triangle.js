function triangle(width) {
  for (let i = 0; i < width; i++) {
    let space = ' ';
    space = space.repeat((width - i) - 1);
    let star = '';

    for (let j = 0; j < i + 1; j++) {
      star += '*';
    }
    console.log(space + star);
  }
}

triangle(9);