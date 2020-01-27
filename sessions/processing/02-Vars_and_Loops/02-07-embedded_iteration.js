// 2.7: Embedded Iteration
// Tobias Reaper \\ 2020-01-26

function setup() {
  createCanvas(windowWidth, windowHeight);
}

// function draw() {
//   background(72);
//   noFill();

//   for (var x = 50; x <= width - 50; x += 50) {
//     for (var y = 50; y <= height - 50; y += 50) {
//       line(x, y, width / 2, height / 2);
//     }
//   }
// }

function draw() {
  background(72);
  noFill();

  var count = 0;
  for (var x = 50; x <= width - 50; x += 50) {
    for (var y = 50; y <= height - 50; y += 50) {
      stroke(count);
      ellipse(x, y, 20, 20);
      count++;
    }
  }
}
