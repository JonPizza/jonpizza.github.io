function setup() {
  angleMode(DEGREES);
  let myCanv = createCanvas(windowWidth, windowHeight);
  myCanv.parent("animation");
  frameRate(30);
  textSize(windowWidth / 10);
  var img = loadImage('snowman-clipart-9.png');
}

var c;

function draw() {
  noStroke();
  for (var i = 30; i > 1; i--) {
    if (i % 2 == 0) {
      fill("#03fc39");
    } else {
      fill("#fc0f03");
    }
    c = cos(i + frameCount) + 1;
    ellipse((windowWidth / 2) * c, windowHeight / 2 * c + 1, 100 * i);
    fill("#000000");
    text('Merry Christmas!!', 50, c * 50 + 100);
  }
  image(img, windowWidth / 2, windowHeight / 2 - 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}