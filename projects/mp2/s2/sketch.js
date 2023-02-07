function setup() {
    noLoop();
    createCanvas(windowWidth, windowHeight);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  

  function draw() {
    for (let i = 0; i < 100; i++) {
      noStroke();
      fill(random(0, 255), random(0, 255), random(0, 255));
      let size = random(0, 100);
      ellipse(random(0, windowWidth), random(0, windowHeight), size, size);
    }
  }