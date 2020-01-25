// Variables
var exx = 400;
var why = 300;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(80);
  ellipse(exx, why, 200, 200);
  line(0, 0, width, height);
  line(width, 0, 0, height);
}