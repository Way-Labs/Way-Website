var s = (c.width = c.height = 500),
  ctx = c.getContext('2d'),
  opts = {
    particles: 200,
    particleBaseSize: 4,
    particleAddedSize: 1,
    particleMaxSize: 5,
    particleBaseLight: 5,
    particleAddedLight: 30,
    particleBaseBaseAngSpeed: 0.001,
    particleAddedBaseAngSpeed: 0.001,
    particleBaseVariedAngSpeed: 5e-4,
    particleAddedVariedAngSpeed: 5e-4,
    sourceBaseSize: 3,
    sourceAddedSize: 3,
    sourceBaseAngSpeed: -0.01,
    sourceVariedAngSpeed: 0.005,
    sourceBaseDist: 130,
    sourceVariedDist: 50,
    particleTemplateColor: 'hsla(hue,80%,light%,alp)',
    repaintColor: 'rgba(0,0,0,.1)',
    enableTrails: !1,
  },
  util = { square: (e) => e * e, tau: 6.283185307179586 },
  particles = [],
  source = new Source(),
  tick = 0;
function Particle() {
  (this.dist = (Math.sqrt(Math.random()) * s) / 2),
    (this.rad = Math.random() * util.tau),
    (this.baseAngSpeed =
      opts.particleBaseBaseAngSpeed +
      opts.particleAddedBaseAngSpeed * Math.random()),
    (this.variedAngSpeed =
      opts.particleBaseVariedAngSpeed +
      opts.particleAddedVariedAngSpeed * Math.random()),
    (this.size =
      opts.particleBaseSize + opts.particleAddedSize * Math.random());
}
function Source() {
  (this.x = 0), (this.y = 0), (this.rad = Math.random() * util.tau);
}
function anim() {
  window.requestAnimationFrame(anim),
    ++tick,
    opts.enableTrails || (ctx.globalCompositeOperation = 'source-over'),
    (ctx.fillStyle = opts.repaintColor),
    ctx.fillRect(0, 0, s, s),
    (ctx.globalCompositeOperation = 'lighter'),
    particles.length < opts.particles && particles.push(new Particle()),
    ctx.translate(s / 2, s / 2),
    source.step(),
    particles.map((e) => e.step()),
    ctx.translate(-s / 2, -s / 2);
}
(Particle.prototype.step = function () {
  var e =
    this.baseAngSpeed +
    this.variedAngSpeed * Math.sin(7 * this.rad + tick / 100);
  this.rad += e;
  var t = this.dist * Math.cos(this.rad),
    i = this.dist * Math.sin(this.rad),
    a = util.square(t - source.x) + util.square(i - source.y),
    r = Math.pow(s, 0.5) / Math.pow(a, 0.5),
    c = opts.particleTemplateColor
      .replace('hue', (this.rad / util.tau) * 360 + tick)
      .replace('light', opts.particleBaseLight + r * opts.particleAddedLight)
      .replace('alp', 0.8);
  (ctx.fillStyle = c),
    ctx.beginPath(),
    ctx.arc(t, i, Math.min(this.size * r, opts.particleMaxSize), 0, util.tau),
    ctx.fill();
}),
  (Source.prototype.step = function () {
    if (!this.mouseControlled) {
      var e =
        opts.sourceBaseAngSpeed +
        Math.sin(6 * this.rad + tick / 100) * opts.sourceVariedAngSpeed;
      this.rad += e;
      var t =
        opts.sourceBaseDist +
        Math.sin(5 * this.rad + tick / 100) * opts.sourceVariedDist;
      (this.x = t * Math.cos(this.rad)), (this.y = t * Math.sin(this.rad));
    }
    (ctx.fillStyle = 'white'),
      ctx.beginPath(),
      ctx.arc(this.x, this.y, 1, 0, util.tau),
      ctx.fill();
  }),
  (ctx.fillStyle = '#222'),
  ctx.fillRect(0, 0, s, s),
  anim(),
  c.addEventListener('mousemove', (e) => {
    var t = c.getBoundingClientRect();
    (source.x = e.clientX - t.left - s / 2),
      (source.y = e.clientY - t.top - s / 2),
      (source.mouseControlled = !0);
  }),
  c.addEventListener('mouseleave', (e) => {
    var t = c.getBoundingClientRect();
    (source.x = e.clientX - t.left - s / 2),
      (source.y = e.clientY - t.top - s / 2),
      (source.rad = Math.atan(source.y / source.x)),
      source.x < 0 && (source.rad += Math.PI),
      (source.mouseControlled = !1);
  });