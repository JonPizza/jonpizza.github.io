function setup() {
  angleMode(DEGREES);
  let myCanv = createCanvas(windowWidth, windowHeight);
  myCanv.parent("animation");
  frameRate(30);
  background("#f2ff00");
  textSize(100);
}

var c;

function draw() {
  rotate(-10);
  for (var i = 10; i > 1; i--) {
    if (i % 2 == 0) {
      fill("#fcba03");
    } else {
      fill("#f2ff00");
    }
    c = cos(i + frameCount) + 1;
    rect((windowWidth / 2) * c, windowHeight / 2 * c + 1, 100 * i, 100 * i);
    rotate(i + 2);    
  }
  fill("#000000")
  rotate(-50);
  text("Happy New Year!", 100, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}