function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    let size = random(50, 200);
    let x = random (0, windowWidth);
    let y = random (0, windowHeight);
    while (size > 0) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      ellipse(x, y, size, size);
      size -= 50;
    }
  }