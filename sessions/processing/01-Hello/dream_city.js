function setup() {
  createCanvas(1024, 768);
}

function draw() {
  background(15, 11, 14);

  // Backmost triangles / mountains
  beginShape();
  fill(80, 84, 67);
  // stroke(200);
  noStroke();
  vertex(-20, 370);
  vertex(80, 236);
  vertex(175, 558);
  endShape();

  // Next one in
  beginShape();
  fill(87, 111, 85);
  noStroke();
  vertex(-20, 400);
  vertex(88, 266);
  vertex(175, 558);
  endShape();

  // Next one in
  beginShape();
  fill(89, 122, 103);
  noStroke();
  vertex(-20, 430);
  vertex(100, 306);
  vertex(175, 558);
  endShape();

  // Next one in
  beginShape();
  fill(120, 106, 98);
  noStroke();
  vertex(-400, 788);
  vertex(112, 346);
  vertex(260, 788);
  endShape();

  // Second from front
  fill(130, 160, 150);
  noStroke();
  triangle(30, 768, 146, 448, 260, 768);

  // Bottom front left
  fill(163, 107, 100);
  noStroke();
  triangle(30, 768, 120, 518, 260, 768);

  // Test out the arc
  fill(120, 160, 140);
  noStroke();
  arc(517, 291, 200, 80, PI, PI + PI);

  // Test out the arc, pt ii
  fill(100, 167, 180);
  noStroke();
  arc(547, 291, 140, 68, PI, PI + PI);

  // Test out the arc, pt iii
  fill(200, 187, 160);
  noStroke();
  arc(577, 291, 80, 52, PI, PI + PI);

  // Test out quad
  fill(120, 160, 140);
  noStroke();
  quad(612, 291, 604, 365, 560, 367, 558, 291);

}