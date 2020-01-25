function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(140);
  fill(120, 40, 120, 100);
  strokeWeight(4);

  rect(10, 10, 400, 200);
  ellipse(400, 210, 400, 400);

  if (mouseIsPressed) {
    fill(0);
    rect(mouseX, mouseY, 160, 160);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}