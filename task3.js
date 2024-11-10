function drawRectangle(h, w) {
  let pattern = "";
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      pattern += "#";
    }
    console.log(pattern);
    pattern = "";
  }
}

drawRectangle(4, 3);
