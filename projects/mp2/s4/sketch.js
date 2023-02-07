let circlecolor = [255, 0, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill(circlecolor[0], circlecolor[1], circlecolor[2]);
    ellipse(mouseX, mouseY, 10, 10);
    if (circlecolor[0] == 255 && circlecolor[1] < 255  && circlecolor[2] == 0) {
      circlecolor[1]++;
    } else if (circlecolor[0] > 0 && circlecolor[1] == 255  && circlecolor[2] == 0) {
      circlecolor[0]--;
    } else if (circlecolor[0] == 0 && circlecolor[1] == 255  && circlecolor[2] < 255) {
      circlecolor[2]++;
    } else if (circlecolor[0] == 0 && circlecolor[1] > 0  && circlecolor[2] == 255) {
      circlecolor[1]--;
    } else if (circlecolor[0] < 255 && circlecolor[1] == 0  && circlecolor[2] == 255) {
      circlecolor[0]++;
    } else if (circlecolor[0] < 255 && circlecolor[1] == 0  && circlecolor[2] > 0) {
      circlecolor[2]--;
    } else {
      circlecolor = [255, 0, 0];
    }
  }
}