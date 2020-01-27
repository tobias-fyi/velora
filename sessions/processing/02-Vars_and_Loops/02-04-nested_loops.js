// 2.4: Nested Loops
// Tobias Reaper | 2020-01-26

function setup() {
  createCanvas(600, 600)
}

// function draw() {
//   background(64);

//   noFill();
//   for (var i = 50; i < 600; i += 100) {
//     ellipse(width / 2, height / 2, i, i);
//   }
// }

function draw() {
  background(64);

  noFill();
  for (var i = 50; i < 600; i += 100) {
    for (var j = 0; j < height; j += 50) {
      ellipse(width / 2, j, i, i);
    }
  }
}