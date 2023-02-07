let osc;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  osc = new p5.Oscillator();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} 

function draw() {
  noStroke();
  let x = windowWidth / 2;
  let y = windowHeight / 2;
  b1 = new Button(x - 150, y - 150, 100, [255, 0, 0], 50);
  b2 = new Button(x, y - 150, 100, [255, 128, 0], 100);
  b3 = new Button(x + 150, y - 150, 100, [255, 255, 102], 150);
  b4 = new Button(x - 150, y, 100, [51, 255, 51], 200);
  b5 = new Button(x, y, 100, [102, 255, 255], 250);
  b6 = new Button(x + 150, y, 100, [102, 178, 255], 300);
  b7 = new Button(x - 150, y + 150, 100, [102, 102, 255], 350);
  b8 = new Button(x, y + 150, 100, [172, 102, 255], 400);
  b9 = new Button(x + 150, y + 150, 100, [255, 102, 255], 450);
}

function mousePressed() {
  b1.clicked();
  b2.clicked();
  b3.clicked();
  b4.clicked();
  b5.clicked();
  b6.clicked();
  b7.clicked();
  b8.clicked();
  b9.clicked();
}

class Button {
  constructor(x, y, size, color, freq) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.freq = freq;
    fill(color[0], color[1], color[2]);
    ellipse(x, y, size, size);
  }
  
  clicked() {
    if (dist(mouseX, mouseY, this.x, this.y) < (this.size / 2)) {
      background(this.color[0], this.color[1], this.color[2]);
      osc.freq(this.freq);
      osc.start();
      osc.amp(0.3, 0.5);
      osc.amp(0, 0.5);
    }   
  }
}