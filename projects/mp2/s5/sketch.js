let osc;
function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255);
  let circleR = map(mouseX, 0, windowWidth, 0, 255);
  let circleG = map(mouseY, 0, windowHeight, 0, 255);
  fill(circleR, circleG, 150);
  ellipse(mouseX, mouseY, 50, 50);
  if (mouseIsPressed) {
    osc.amp(mouseY);
    osc.freq(mouseX);
    osc.start();
  }
}