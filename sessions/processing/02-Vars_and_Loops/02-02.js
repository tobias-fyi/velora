var x = 10;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(80);

  x = width / 2;
  line(x, 0, x, height);

  x += 27;
  line(x, 0, x, height);
}