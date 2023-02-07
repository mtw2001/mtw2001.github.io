function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 255, 255);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  for (let i = 6; i > 0; i--) {
    if (i % 2 == 0) {
      fill(255, 0, 0);
    } else {
      fill(255, 255, 255);
    }
    ellipse((windowWidth / 2), (windowHeight / 2), i*100, i*100);
  }
}