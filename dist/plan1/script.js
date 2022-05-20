let a,
  c,
  g = 9.81,
  cMode = 0;
(setup = () => {
  (c = 0.9 * min(windowWidth, windowHeight)),
    createCanvas(windowWidth, windowHeight),
    (a = -c / 3),
    stroke(255 - cMode),
    strokeWeight(0.5),
    noFill();
}),
  (draw = () => {
    background(cMode),
      stroke(255 - cMode),
      (t = frameCount / 7),
      translate(width / 2, height / 2),
      strokeWeight(2);
    for (let e = 0.7; e < 40; e += 0.5)
      push(), scale(1 / e, 1 / e), circle(0, -c / 4, 5), pendulum(2 * e), pop();
    strokeWeight(0.15),
      vanish(a + (c / 8) * sin(t / 100), 0),
      vanish(-a - (c / 8) * sin(t / 100), 0);
  }),
  (pendulum = (e) => {
    (L = c / 2 - min(c / 2, e)),
      (T = TWO_PI * sqrt(L / g)),
      (theta0 = PI / 2.75),
      (A = theta0 * cos(sqrt(g / L) * t)),
      (x = L * sin(A)),
      (y = L * cos(A)),
      line(0, -c / 4, x, -c / 4 + y),
      circle(x, -c / 4 + y, 5);
  }),
  (vanish = (e, t) => {
    circle(e, t, 3), (n = 45);
    for (let i = 0; i < n; i++)
      push(), translate(e, t), rotate((PI / n) * i), line(-c, 0, c, 0), pop();
  }),
  (windowResized = () => {
    (c = 0.9 * min(windowWidth, windowHeight)),
      resizeCanvas(windowWidth, windowHeight);
  }),
  (mousePressed = () => {
    cMode = 0 === cMode ? 255 : 0;
  });
