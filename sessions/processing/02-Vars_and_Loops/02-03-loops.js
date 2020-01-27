// Loops & Iterations
// Tobias Reaper | 2020-01-26

function setup() {
  createCanvas(600, 600)
}

// function draw() {
//   background(64);

//   for (var i = 0; i < width; i += 10) {
//     line(i, 0, i, height);
//   }
// }

function draw() {
  background(64);

  for (var i = 0; i < width; i++) {
    stroke(i / width * 255);
    line(i, 0, i, height);
  }
}
