let t,
  sArray = [],
  cArray = [],
  n = 500;
function setup() {
  (c = min(windowWidth, windowHeight)),
    (cnv = createCanvas(windowWidth, windowHeight)),
    (microR = c / 5),
    fill(255);
  for (let t = 0; t < n; t++) sArray.push(new star());
  noStroke(),
    (tmp = random(0, c / 3)),
    (cArray[0] = createVector(tmp, 0, c / 2 - tmp));
}
function draw() {
  (t = TWO_PI * sin(frameCount / 4e3)),
    translate(width / 2, height / 2),
    background(0, 0, 0, 100);
  for (let t = 0; t < n; t++);
  for (let t = 0; t < cArray.length; t++) {
    push(), translate(cArray[t].x, cArray[t].y);
    for (let r = 0; r < n; r++) sArray[r].move(cArray[t].z);
    pop();
  }
}
class star {
  constructor() {
    (this.theta = randomGaussian(0, TWO_PI)), (this.r = 0), (this.v = 0.001);
  }
  move(r) {
    0 === this.r && (this.r = random(0, r)), (this.r = this.r + 0.02);
    let e = this.r % r;
    circle(e * sin(this.theta + t), e * cos(this.theta + t), min(3, e / 80));
  }
}
function mousePressed() {
  (x = mouseX - width / 2),
    (y = mouseY - height / 2),
    (d = dist(x, y, 0, 0)),
    (cArray[cArray.length] = createVector(x, y, random(10, c)));
}
function keyPressed() {
  cArray = [];
}
