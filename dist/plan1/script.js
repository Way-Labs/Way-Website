import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r126/three.module.min.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.0/examples/jsm/controls/OrbitControls.js';
<<<<<<< HEAD
const demo = document.querySelector('.demo'),
  container = document.querySelector('.animation-wrapper'),
  globeCanvas = container.querySelector('#globe-3d'),
  globeOverlayCanvas = container.querySelector('#globe-2d-overlay'),
  popup = container.querySelector('.globe-popup');
document.addEventListener('DOMContentLoaded', () => {
  gsap.set(demo, { height: window.innerHeight });
  let t = new Surface();
  new THREE.TextureLoader().load('map.jpeg', (e) => {
    (t.earthTexture = e),
      t.earthTexture.repeat.set(1, 1),
      (t.earthTextureData = t.getImageData()),
      t.createGlobe(),
      t.addAnchor(),
      t.addCanvasEvents(),
      t.updateDotSize(),
      t.loop();
  }),
    window.addEventListener(
      'resize',
      () => {
        gsap.set(demo, { height: window.innerHeight }),
          t.updateSize(),
          t.setupOverlayGraphic(),
          t.updateDotSize(),
          t.addCanvasEvents();
      },
      !1,
    ),
    gsap.to('.title', { delay: 5, duration: 0.2, opacity: 1 });
});
class Surface {
  constructor() {
    (this.renderer = new THREE.WebGLRenderer({
      canvas: globeCanvas,
      alpha: !0,
    })),
      (this.scene = new THREE.Scene()),
      (this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 2)),
      (this.camera.position.z = 1.1),
      this.updateSize(),
      (this.rayCaster = new THREE.Raycaster()),
      (this.rayCaster.far = 1.15),
      (this.mouse = new THREE.Vector2()),
      (this.coordinates2D = [0, 0]),
      this.setupOverlayGraphic(),
      this.createOrbitControls(),
      (this.clock = new THREE.Clock()),
      (this.clickTime = 0),
      (this.group = new THREE.Group()),
      this.group.scale.setScalar(0.9),
      this.scene.add(this.group),
      (this.selectionVisible = !1);
  }
  createOrbitControls() {
    (this.controls = new OrbitControls(this.camera, globeCanvas)),
      (this.controls.enablePan = !0),
      (this.controls.enableZoom = !1),
      (this.controls.enableDamping = !0),
      (this.controls.minPolarAngle = 0.35 * Math.PI),
      (this.controls.maxPolarAngle = 0.65 * Math.PI),
      (this.controls.autoRotate = !0);
  }
  createGlobe() {
    const t = new THREE.IcosahedronGeometry(1, 14);
=======

const demo = document.querySelector('.demo');
const container = document.querySelector('.animation-wrapper');
const globeCanvas = container.querySelector('#globe-3d');
const globeOverlayCanvas = container.querySelector('#globe-2d-overlay');
const popup = container.querySelector('.globe-popup');

document.addEventListener('DOMContentLoaded', () => {
  gsap.set(demo, {
    height: window.innerHeight,
  });

  let surface = new Surface();

  new THREE.TextureLoader().load(
    'https://ksenia-k.com/img/demos-preview/earth-map.jpeg',
    (mapTex) => {
      surface.earthTexture = mapTex;
      surface.earthTexture.repeat.set(1, 1);
      surface.earthTextureData = surface.getImageData();
      surface.createGlobe();
      surface.addAnchor();
      surface.addCanvasEvents();
      surface.updateDotSize();
      surface.loop();
    },
  );

  window.addEventListener(
    'resize',
    () => {
      gsap.set(demo, {
        height: window.innerHeight,
      });

      surface.updateSize();
      surface.setupOverlayGraphic();
      surface.updateDotSize();
      surface.addCanvasEvents();
    },
    false,
  );

  gsap.to('.title', {
    delay: 5,
    duration: 0.2,
    opacity: 1,
  });
});

class Surface {
  constructor() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: globeCanvas,
      alpha: true,
    });
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 2);
    this.camera.position.z = 1.1;
    this.updateSize();

    this.rayCaster = new THREE.Raycaster();
    this.rayCaster.far = 1.15;
    this.mouse = new THREE.Vector2();
    this.coordinates2D = [0, 0];

    this.setupOverlayGraphic();
    this.createOrbitControls();

    this.clock = new THREE.Clock();
    this.clickTime = 0;

    this.group = new THREE.Group();
    this.group.scale.setScalar(0.9);
    this.scene.add(this.group);

    this.selectionVisible = false;
  }

  createOrbitControls() {
    this.controls = new OrbitControls(this.camera, globeCanvas);
    this.controls.enablePan = true;
    this.controls.enableZoom = false;
    this.controls.enableDamping = true;
    this.controls.minPolarAngle = 0.35 * Math.PI;
    this.controls.maxPolarAngle = 0.65 * Math.PI;
    this.controls.autoRotate = true;
  }

  createGlobe() {
    const globeGeometry = new THREE.IcosahedronGeometry(1, 14);
>>>>>>> b23fc785044631ccb8b11b93fcc54ef0e0f829dd
    this.mapMaterial = new THREE.ShaderMaterial({
      vertexShader: document.getElementById('vertex-shader-map').textContent,
      fragmentShader: document.getElementById('fragment-shader-map')
        .textContent,
      uniforms: {
        u_visibility: { type: 't', value: this.earthTexture },
        u_size: { type: 'f', value: 0 },
<<<<<<< HEAD
        u_color_main: { type: 'v3', value: new THREE.Color(12698050) },
        u_clicked: { type: 'v3', value: new THREE.Vector3(0, 0, 1) },
        u_time_since_click: { value: 3 },
      },
      alphaTest: !1,
      transparent: !0,
    });
    const e = new THREE.Points(t, this.mapMaterial);
    this.group.add(e),
      (this.blackGlobe = new THREE.Mesh(
        t,
        new THREE.MeshBasicMaterial({
          color: 2894894,
          transparent: !0,
          opacity: 0.2,
        }),
      )),
      this.blackGlobe.scale.setScalar(0.99),
      this.group.add(this.blackGlobe);
  }
  addAnchor() {
    const t = new THREE.SphereGeometry(0.02, 16, 16),
      e = new THREE.MeshBasicMaterial({
        color: 4964552,
        transparent: !0,
        opacity: 1,
      });
    (this.anchor = new THREE.Mesh(t, e)), this.group.add(this.anchor);
  }
  setupOverlayGraphic() {
    (this.overlayCtx = globeOverlayCanvas.getContext('2d')),
      (this.overlayCtx.strokeStyle = '#4BC0C8'),
      (this.overlayCtx.lineWidth = 5),
      (this.overlayCtx.lineCap = 'round');
  }
  updateOverlayGraphic() {
    if (this.anchor) {
      let t = this.anchor.position.clone();
      t.applyMatrix4(this.group.matrixWorld);
      const e = t.clone();
      e.project(this.camera),
        (this.coordinates2D[0] = (e.x + 1) * container.offsetWidth * 0.5),
        (this.coordinates2D[1] = (1 - e.y) * container.offsetHeight * 0.5);
      const a = this.controls.object.matrixWorldInverse;
      if ((t.applyMatrix4(a), t.z > -1)) {
        !1 === this.selectionVisible &&
          ((this.selectionVisible = !0), this.showPopupAnimation(!1));
        let t = this.coordinates2D[0],
          a = this.coordinates2D[1];
        t -= e.x * container.offsetWidth * 0.3;
        const o = e.y > 0.6;
        (a += o ? 20 : -20),
          gsap.set(popup, {
            x: t,
            y: a,
            xPercent: -50,
            yPercent: o ? 0 : -100,
          }),
          (a += o ? -10 : 10);
        const i = this.coordinates2D[0],
          s = this.coordinates2D[1];
        let r = t + 100 * e.x;
        const n = a + (o ? -0.5 : 0.1) * this.coordinates2D[1];
        this.drawPopupConnector(i, s, r, n, t, a);
      } else
        this.selectionVisible && this.hidePopupAnimation(),
          (this.selectionVisible = !1);
    }
  }
  addCanvasEvents() {
    function t(t, e, a) {
      const o = t - container.offsetLeft,
        i = e - container.offsetTop;
      (a.mouse.x = (o / container.offsetWidth) * 2 - 1),
        (a.mouse.y = (-i / container.offsetHeight) * 2 + 1);
    }
    container.addEventListener('mousemove', (e) => {
      t(e.clientX, e.clientY, this);
    }),
      container.addEventListener('click', (e) => {
        if (
          (t(
            e.targetTouches ? e.targetTouches[0].pageX : e.clientX,
            e.targetTouches ? e.targetTouches[0].pageY : e.clientY,
            this,
          ),
          this.checkIntersects(),
          this.landIsHovered)
        ) {
          const t = this.rayCaster.intersectObject(this.blackGlobe);
          t.length &&
            (this.anchor.position.set(
              t[0].face.normal.x,
              t[0].face.normal.y,
              t[0].face.normal.z,
            ),
            (this.mapMaterial.uniforms.u_clicked.value = this.anchor.position),
            (popup.innerHTML = this.getLatLong()),
            this.showPopupAnimation(!0),
            gsap.delayedCall(0.15, () => {
              this.clickTime = this.clock.getElapsedTime();
            }));
        }
      });
  }
  drawPopupConnector(t, e, a, o, i, s) {
=======
        u_color_main: { type: 'v3', value: new THREE.Color(0xc1c1c2) },
        u_clicked: { type: 'v3', value: new THREE.Vector3(0.0, 0.0, 1) },
        u_time_since_click: { value: 3 },
      },
      alphaTest: false,
      transparent: true,
    });

    const globe = new THREE.Points(globeGeometry, this.mapMaterial);
    this.group.add(globe);

    this.blackGlobe = new THREE.Mesh(
      globeGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x2c2c2e,
        transparent: true,
        opacity: 0.2,
      }),
    );
    this.blackGlobe.scale.setScalar(0.99);
    this.group.add(this.blackGlobe);
  }

  addAnchor() {
    const geometry = new THREE.SphereGeometry(0.02, 16, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0x4bc0c8,
      transparent: true,
      opacity: 1,
    });
    this.anchor = new THREE.Mesh(geometry, material);
    this.group.add(this.anchor);
  }

  setupOverlayGraphic() {
    this.overlayCtx = globeOverlayCanvas.getContext('2d');
    this.overlayCtx.strokeStyle = '#4BC0C8';
    this.overlayCtx.lineWidth = 5;
    this.overlayCtx.lineCap = 'round';
  }

  updateOverlayGraphic() {
    if (this.anchor) {
      let activePointPosition = this.anchor.position.clone();
      activePointPosition.applyMatrix4(this.group.matrixWorld);
      const activePointPositionProjected = activePointPosition.clone();
      activePointPositionProjected.project(this.camera);
      this.coordinates2D[0] =
        (activePointPositionProjected.x + 1) * container.offsetWidth * 0.5;
      this.coordinates2D[1] =
        (-activePointPositionProjected.y + 1) * container.offsetHeight * 0.5;

      const matrixWorldInverse = this.controls.object.matrixWorldInverse;
      activePointPosition.applyMatrix4(matrixWorldInverse);

      if (activePointPosition.z > -1) {
        if (this.selectionVisible === false) {
          this.selectionVisible = true;
          this.showPopupAnimation(false);
        }

        let popupX = this.coordinates2D[0];
        let popupY = this.coordinates2D[1];
        popupX -= activePointPositionProjected.x * container.offsetWidth * 0.3;
        const upDown = activePointPositionProjected.y > 0.6;
        popupY += upDown ? 20 : -20;
        gsap.set(popup, {
          x: popupX,
          y: popupY,
          xPercent: -50,
          yPercent: upDown ? 0 : -100,
        });

        popupY += upDown ? -10 : 10;
        const curveStartX = this.coordinates2D[0];
        const curveStartY = this.coordinates2D[1];
        let curveMidX = popupX + activePointPositionProjected.x * 100;
        const curveMidY =
          popupY + (upDown ? -0.5 : 0.1) * this.coordinates2D[1];

        this.drawPopupConnector(
          curveStartX,
          curveStartY,
          curveMidX,
          curveMidY,
          popupX,
          popupY,
        );
      } else {
        if (this.selectionVisible) {
          this.hidePopupAnimation();
        }
        this.selectionVisible = false;
      }
    }
  }

  addCanvasEvents() {
    container.addEventListener('mousemove', (e) => {
      updateMousePosition(e.clientX, e.clientY, this);
    });

    function updateMousePosition(eX, eY, surface) {
      const x = eX - container.offsetLeft;
      const y = eY - container.offsetTop;
      surface.mouse.x = (x / container.offsetWidth) * 2 - 1;
      surface.mouse.y = -(y / container.offsetHeight) * 2 + 1;
    }

    container.addEventListener('click', (e) => {
      updateMousePosition(
        e.targetTouches ? e.targetTouches[0].pageX : e.clientX,
        e.targetTouches ? e.targetTouches[0].pageY : e.clientY,
        this,
      );
      this.checkIntersects();
      if (this.landIsHovered) {
        const intersects = this.rayCaster.intersectObject(this.blackGlobe);
        if (intersects.length) {
          this.anchor.position.set(
            intersects[0].face.normal.x,
            intersects[0].face.normal.y,
            intersects[0].face.normal.z,
          );
          this.mapMaterial.uniforms.u_clicked.value = this.anchor.position;
          popup.innerHTML = this.getLatLong();
          this.showPopupAnimation(true);
          gsap.delayedCall(0.15, () => {
            this.clickTime = this.clock.getElapsedTime();
          });
        }
      }
    });
  }

  drawPopupConnector(startX, startY, midX, midY, endX, endY) {
>>>>>>> b23fc785044631ccb8b11b93fcc54ef0e0f829dd
    this.overlayCtx.clearRect(
      0,
      0,
      container.offsetWidth,
      container.offsetHeight,
<<<<<<< HEAD
    ),
      this.overlayCtx.beginPath(),
      (this.overlayCtx.shadowOffsetX = t > i ? -4 : 4),
      this.overlayCtx.moveTo(t, e),
      this.overlayCtx.quadraticCurveTo(a, o, i, s),
      this.overlayCtx.stroke();
  }
  showPopupAnimation(t) {
    let e = this.anchor.position.clone();
    t && e.multiplyScalar(1.1),
      gsap
        .timeline({})
        .fromTo(
          this.anchor.position,
          { x: e.x, y: e.y, z: e.z },
          {
            duration: 0.35,
            x: this.anchor.position.x,
            y: this.anchor.position.y,
            z: this.anchor.position.z,
            ease: 'back(4).out',
          },
          0,
        )
        .to(this.anchor.material, { duration: 0.2, opacity: 1 }, 0)
        .fromTo(
          globeOverlayCanvas,
          { opacity: 0 },
          { duration: 0.3, opacity: 1 },
          0.15,
        )
        .fromTo(
          popup,
          { opacity: 0, scale: 0.9, transformOrigin: 'center bottom' },
          { duration: 0.1, opacity: 1, scale: 1 },
          0.25,
        );
  }
  hidePopupAnimation() {
    gsap
      .timeline({})
      .to(this.anchor.material, { duration: 0.1, opacity: 0.2 }, 0)
      .to(globeOverlayCanvas, { duration: 0.15, opacity: 0 }, 0)
=======
    );
    this.overlayCtx.beginPath();
    this.overlayCtx.shadowOffsetX = startX > endX ? -4 : 4;
    this.overlayCtx.moveTo(startX, startY);
    this.overlayCtx.quadraticCurveTo(midX, midY, endX, endY);
    this.overlayCtx.stroke();
  }

  showPopupAnimation(lifted) {
    let positionLifted = this.anchor.position.clone();
    if (lifted) {
      positionLifted.multiplyScalar(1.1);
    }
    gsap
      .timeline({})
      .fromTo(
        this.anchor.position,
        {
          x: positionLifted.x,
          y: positionLifted.y,
          z: positionLifted.z,
        },
        {
          duration: 0.35,
          x: this.anchor.position.x,
          y: this.anchor.position.y,
          z: this.anchor.position.z,
          ease: 'back(4).out',
        },
        0,
      )
      .to(
        this.anchor.material,
        {
          duration: 0.2,
          opacity: 1,
        },
        0,
      )
      .fromTo(
        globeOverlayCanvas,
        {
          opacity: 0,
        },
        {
          duration: 0.3,
          opacity: 1,
        },
        0.15,
      )
      .fromTo(
        popup,
        {
          opacity: 0,
          scale: 0.9,
          transformOrigin: 'center bottom',
        },
        {
          duration: 0.1,
          opacity: 1,
          scale: 1,
        },
        0.15 + 0.1,
      );
  }

  hidePopupAnimation() {
    gsap
      .timeline({})
      .to(
        this.anchor.material,
        {
          duration: 0.1,
          opacity: 0.2,
        },
        0,
      )
      .to(
        globeOverlayCanvas,
        {
          duration: 0.15,
          opacity: 0,
        },
        0,
      )
>>>>>>> b23fc785044631ccb8b11b93fcc54ef0e0f829dd
      .to(
        popup,
        {
          duration: 0.15,
          opacity: 0,
          scale: 0.9,
          transformOrigin: 'center bottom',
        },
        0,
      );
  }
<<<<<<< HEAD
  getImageData() {
    const t = this.earthTexture.image,
      e = document.createElement('canvas');
    (e.width = t.width), (e.height = t.height);
    const a = e.getContext('2d');
    return a.drawImage(t, 0, 0), a.getImageData(0, 0, t.width, t.height);
  }
  getLatLong() {
    const t = this.anchor.position,
      e = 90 - (180 * Math.acos(t.y)) / Math.PI,
      a = ((270 + (180 * Math.atan2(t.x, t.z)) / Math.PI) % 360) - 180;
    return e.toFixed(6) + ',&nbsp;' + a.toFixed(6);
  }
  checkIntersects() {
    let t = (t, e, a) => {
      (e = Math.floor(e * t.width)), (a = Math.floor((1 - a) * t.height));
      const o = 4 * (e + t.width * a),
        i = t.data;
      return i[o] < 100;
    };
    this.rayCaster.setFromCamera(this.mouse, this.camera);
    const e = this.rayCaster.intersectObject(this.blackGlobe);
    e.length
      ? ((this.landIsHovered = t(this.earthTextureData, e[0].uv.x, e[0].uv.y)),
        (document.body.style.cursor = this.landIsHovered ? 'pointer' : 'auto'))
      : (document.body.style.cursor = 'auto');
  }
  render() {
    (this.mapMaterial.uniforms.u_time_since_click.value =
      this.clock.getElapsedTime() - this.clickTime),
      this.updateOverlayGraphic(),
      this.controls.update(),
      this.checkIntersects(),
      this.renderer.render(this.scene, this.camera);
  }
  loop() {
    this.render(), requestAnimationFrame(this.loop.bind(this));
  }
  updateSize() {
    const t = 0.85 * Math.min(window.innerWidth, window.innerHeight);
    (container.style.width = t + 'px'),
      (container.style.height = t + 'px'),
      this.renderer.setSize(t, t),
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
      this.camera.updateProjectionMatrix(),
      (globeOverlayCanvas.width = t),
      (globeOverlayCanvas.height = t);
  }
=======

  getImageData() {
    const image = this.earthTexture.image;
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
  }

  getLatLong() {
    const pos = this.anchor.position;
    const lat = 90 - (Math.acos(pos.y) * 180) / Math.PI;
    const lng =
      ((270 + (Math.atan2(pos.x, pos.z) * 180) / Math.PI) % 360) - 180;
    return lat.toFixed(6) + ',&nbsp;' + lng.toFixed(6);
  }

  checkIntersects() {
    let isLand = (imageData, x, y) => {
      x = Math.floor(x * imageData.width);
      y = Math.floor((1 - y) * imageData.height);
      const position = (x + imageData.width * y) * 4;
      const data = imageData.data;
      return data[position] < 100;
    };
    this.rayCaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.rayCaster.intersectObject(this.blackGlobe);
    if (intersects.length) {
      this.landIsHovered = isLand(
        this.earthTextureData,
        intersects[0].uv.x,
        intersects[0].uv.y,
      );
      document.body.style.cursor = this.landIsHovered ? 'pointer' : 'auto';
    } else {
      document.body.style.cursor = 'auto';
    }
  }

  render() {
    this.mapMaterial.uniforms.u_time_since_click.value =
      this.clock.getElapsedTime() - this.clickTime;
    this.updateOverlayGraphic();
    this.controls.update();
    this.checkIntersects();
    this.renderer.render(this.scene, this.camera);
  }

  loop() {
    this.render();
    requestAnimationFrame(this.loop.bind(this));
  }

  updateSize() {
    const minSide = 0.85 * Math.min(window.innerWidth, window.innerHeight);
    container.style.width = minSide + 'px';
    container.style.height = minSide + 'px';
    this.renderer.setSize(minSide, minSide);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.camera.updateProjectionMatrix();
    globeOverlayCanvas.width = minSide;
    globeOverlayCanvas.height = minSide;
  }

>>>>>>> b23fc785044631ccb8b11b93fcc54ef0e0f829dd
  updateDotSize() {
    this.mapMaterial.uniforms.u_size.value = 0.03 * container.offsetWidth;
  }
}
