import {
  EventDispatcher,
  MOUSE,
  Quaternion,
  Spherical,
  TOUCH,
  Vector2,
  Vector3,
} from '../../../build/three.module.js';
var OrbitControls = function (e, t) {
  void 0 === t &&
    console.warn(
      'THREE.OrbitControls: The second parameter "domElement" is now mandatory.',
    ),
    t === document &&
      console.error(
        'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.',
      ),
    (this.object = e),
    (this.domElement = t),
    (this.enabled = !0),
    (this.target = new Vector3()),
    (this.minDistance = 0),
    (this.maxDistance = 1 / 0),
    (this.minZoom = 0),
    (this.maxZoom = 1 / 0),
    (this.minPolarAngle = 0),
    (this.maxPolarAngle = Math.PI),
    (this.minAzimuthAngle = -1 / 0),
    (this.maxAzimuthAngle = 1 / 0),
    (this.enableDamping = !1),
    (this.dampingFactor = 0.05),
    (this.enableZoom = !0),
    (this.zoomSpeed = 1),
    (this.enableRotate = !0),
    (this.rotateSpeed = 1),
    (this.enablePan = !0),
    (this.panSpeed = 1),
    (this.screenSpacePanning = !0),
    (this.keyPanSpeed = 7),
    (this.autoRotate = !1),
    (this.autoRotateSpeed = 2),
    (this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }),
    (this.mouseButtons = {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN,
    }),
    (this.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN }),
    (this.target0 = this.target.clone()),
    (this.position0 = this.object.position.clone()),
    (this.zoom0 = this.object.zoom),
    (this._domElementKeyEvents = null),
    (this.getPolarAngle = function () {
      return u.phi;
    }),
    (this.getAzimuthalAngle = function () {
      return u.theta;
    }),
    (this.listenToKeyEvents = function (e) {
      e.addEventListener('keydown', ie), (this._domElementKeyEvents = e);
    }),
    (this.saveState = function () {
      n.target0.copy(n.target),
        n.position0.copy(n.object.position),
        (n.zoom0 = n.object.zoom);
    }),
    (this.reset = function () {
      n.target.copy(n.target0),
        n.object.position.copy(n.position0),
        (n.object.zoom = n.zoom0),
        n.object.updateProjectionMatrix(),
        n.dispatchEvent(o),
        n.update(),
        (c = r.NONE);
    }),
    (this.update = (function () {
      var t = new Vector3(),
        a = new Quaternion().setFromUnitVectors(e.up, new Vector3(0, 1, 0)),
        i = a.clone().invert(),
        d = new Vector3(),
        b = new Quaternion(),
        E = 2 * Math.PI;
      return function () {
        var e = n.object.position;
        t.copy(e).sub(n.target),
          t.applyQuaternion(a),
          u.setFromVector3(t),
          n.autoRotate && c === r.NONE && w(P()),
          n.enableDamping
            ? ((u.theta += l.theta * n.dampingFactor),
              (u.phi += l.phi * n.dampingFactor))
            : ((u.theta += l.theta), (u.phi += l.phi));
        var f = n.minAzimuthAngle,
          O = n.maxAzimuthAngle;
        return (
          isFinite(f) &&
            isFinite(O) &&
            (f < -Math.PI ? (f += E) : f > Math.PI && (f -= E),
            O < -Math.PI ? (O += E) : O > Math.PI && (O -= E),
            (u.theta =
              f <= O
                ? Math.max(f, Math.min(O, u.theta))
                : u.theta > (f + O) / 2
                ? Math.max(f, u.theta)
                : Math.min(O, u.theta))),
          (u.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, u.phi))),
          u.makeSafe(),
          (u.radius *= m),
          (u.radius = Math.max(
            n.minDistance,
            Math.min(n.maxDistance, u.radius),
          )),
          !0 === n.enableDamping
            ? n.target.addScaledVector(p, n.dampingFactor)
            : n.target.add(p),
          t.setFromSpherical(u),
          t.applyQuaternion(i),
          e.copy(n.target).add(t),
          n.object.lookAt(n.target),
          !0 === n.enableDamping
            ? ((l.theta *= 1 - n.dampingFactor),
              (l.phi *= 1 - n.dampingFactor),
              p.multiplyScalar(1 - n.dampingFactor))
            : (l.set(0, 0, 0), p.set(0, 0, 0)),
          (m = 1),
          !!(
            h ||
            d.distanceToSquared(n.object.position) > s ||
            8 * (1 - b.dot(n.object.quaternion)) > s
          ) &&
            (n.dispatchEvent(o),
            d.copy(n.object.position),
            b.copy(n.object.quaternion),
            (h = !1),
            !0)
        );
      };
    })()),
    (this.dispose = function () {
      n.domElement.removeEventListener('contextmenu', ue),
        n.domElement.removeEventListener('pointerdown', J),
        n.domElement.removeEventListener('wheel', ae),
        n.domElement.removeEventListener('touchstart', re),
        n.domElement.removeEventListener('touchend', se),
        n.domElement.removeEventListener('touchmove', ce),
        n.domElement.ownerDocument.removeEventListener('pointermove', $),
        n.domElement.ownerDocument.removeEventListener('pointerup', ee),
        null !== n._domElementKeyEvents &&
          n._domElementKeyEvents.removeEventListener('keydown', ie);
    });
  var n = this,
    o = { type: 'change' },
    a = { type: 'start' },
    i = { type: 'end' },
    r = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6,
    },
    c = r.NONE,
    s = 1e-6,
    u = new Spherical(),
    l = new Spherical(),
    m = 1,
    p = new Vector3(),
    h = !1,
    d = new Vector2(),
    b = new Vector2(),
    E = new Vector2(),
    f = new Vector2(),
    O = new Vector2(),
    g = new Vector2(),
    v = new Vector2(),
    T = new Vector2(),
    y = new Vector2();
  function P() {
    return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
  }
  function L() {
    return Math.pow(0.95, n.zoomSpeed);
  }
  function w(e) {
    l.theta -= e;
  }
  function A(e) {
    l.phi -= e;
  }
  var N = (function () {
      var e = new Vector3();
      return function (t, n) {
        e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), p.add(e);
      };
    })(),
    M = (function () {
      var e = new Vector3();
      return function (t, o) {
        !0 === n.screenSpacePanning
          ? e.setFromMatrixColumn(o, 1)
          : (e.setFromMatrixColumn(o, 0), e.crossVectors(n.object.up, e)),
          e.multiplyScalar(t),
          p.add(e);
      };
    })(),
    j = (function () {
      var e = new Vector3();
      return function (t, o) {
        var a = n.domElement;
        if (n.object.isPerspectiveCamera) {
          var i = n.object.position;
          e.copy(i).sub(n.target);
          var r = e.length();
          (r *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
            N((2 * t * r) / a.clientHeight, n.object.matrix),
            M((2 * o * r) / a.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera
            ? (N(
                (t * (n.object.right - n.object.left)) /
                  n.object.zoom /
                  a.clientWidth,
                n.object.matrix,
              ),
              M(
                (o * (n.object.top - n.object.bottom)) /
                  n.object.zoom /
                  a.clientHeight,
                n.object.matrix,
              ))
            : (console.warn(
                'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.',
              ),
              (n.enablePan = !1));
      };
    })();
  function C(e) {
    n.object.isPerspectiveCamera
      ? (m /= e)
      : n.object.isOrthographicCamera
      ? ((n.object.zoom = Math.max(
          n.minZoom,
          Math.min(n.maxZoom, n.object.zoom * e),
        )),
        n.object.updateProjectionMatrix(),
        (h = !0))
      : (console.warn(
          'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.',
        ),
        (n.enableZoom = !1));
  }
  function k(e) {
    n.object.isPerspectiveCamera
      ? (m *= e)
      : n.object.isOrthographicCamera
      ? ((n.object.zoom = Math.max(
          n.minZoom,
          Math.min(n.maxZoom, n.object.zoom / e),
        )),
        n.object.updateProjectionMatrix(),
        (h = !0))
      : (console.warn(
          'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.',
        ),
        (n.enableZoom = !1));
  }
  function D(e) {
    d.set(e.clientX, e.clientY);
  }
  function S(e) {
    v.set(e.clientX, e.clientY);
  }
  function R(e) {
    f.set(e.clientX, e.clientY);
  }
  function Y(e) {
    b.set(e.clientX, e.clientY),
      E.subVectors(b, d).multiplyScalar(n.rotateSpeed);
    var t = n.domElement;
    w((2 * Math.PI * E.x) / t.clientHeight),
      A((2 * Math.PI * E.y) / t.clientHeight),
      d.copy(b),
      n.update();
  }
  function H(e) {
    T.set(e.clientX, e.clientY),
      y.subVectors(T, v),
      y.y > 0 ? C(L()) : y.y < 0 && k(L()),
      v.copy(T),
      n.update();
  }
  function U(e) {
    O.set(e.clientX, e.clientY),
      g.subVectors(O, f).multiplyScalar(n.panSpeed),
      j(g.x, g.y),
      f.copy(O),
      n.update();
  }
  function x() {}
  function V(e) {
    e.deltaY < 0 ? k(L()) : e.deltaY > 0 && C(L()), n.update();
  }
  function _(e) {
    var t = !1;
    switch (e.keyCode) {
      case n.keys.UP:
        j(0, n.keyPanSpeed), (t = !0);
        break;
      case n.keys.BOTTOM:
        j(0, -n.keyPanSpeed), (t = !0);
        break;
      case n.keys.LEFT:
        j(n.keyPanSpeed, 0), (t = !0);
        break;
      case n.keys.RIGHT:
        j(-n.keyPanSpeed, 0), (t = !0);
        break;
    }
    t && (e.preventDefault(), n.update());
  }
  function z(e) {
    if (1 == e.touches.length) d.set(e.touches[0].pageX, e.touches[0].pageY);
    else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
        n = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      d.set(t, n);
    }
  }
  function I(e) {
    if (1 == e.touches.length) f.set(e.touches[0].pageX, e.touches[0].pageY);
    else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
        n = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      f.set(t, n);
    }
  }
  function X(e) {
    var t = e.touches[0].pageX - e.touches[1].pageX,
      n = e.touches[0].pageY - e.touches[1].pageY,
      o = Math.sqrt(t * t + n * n);
    v.set(0, o);
  }
  function F(e) {
    n.enableZoom && X(e), n.enablePan && I(e);
  }
  function Z(e) {
    n.enableZoom && X(e), n.enableRotate && z(e);
  }
  function K(e) {
    if (1 == e.touches.length) b.set(e.touches[0].pageX, e.touches[0].pageY);
    else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
        o = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      b.set(t, o);
    }
    E.subVectors(b, d).multiplyScalar(n.rotateSpeed);
    var a = n.domElement;
    w((2 * Math.PI * E.x) / a.clientHeight),
      A((2 * Math.PI * E.y) / a.clientHeight),
      d.copy(b);
  }
  function B(e) {
    if (1 == e.touches.length) O.set(e.touches[0].pageX, e.touches[0].pageY);
    else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
        o = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      O.set(t, o);
    }
    g.subVectors(O, f).multiplyScalar(n.panSpeed), j(g.x, g.y), f.copy(O);
  }
  function G(e) {
    var t = e.touches[0].pageX - e.touches[1].pageX,
      o = e.touches[0].pageY - e.touches[1].pageY,
      a = Math.sqrt(t * t + o * o);
    T.set(0, a), y.set(0, Math.pow(T.y / v.y, n.zoomSpeed)), C(y.y), v.copy(T);
  }
  function W(e) {
    n.enableZoom && G(e), n.enablePan && B(e);
  }
  function q(e) {
    n.enableZoom && G(e), n.enableRotate && K(e);
  }
  function Q() {}
  function J(e) {
    if (!1 !== n.enabled)
      switch (e.pointerType) {
        case 'mouse':
        case 'pen':
          te(e);
          break;
      }
  }
  function $(e) {
    if (!1 !== n.enabled)
      switch (e.pointerType) {
        case 'mouse':
        case 'pen':
          ne(e);
          break;
      }
  }
  function ee(e) {
    switch (e.pointerType) {
      case 'mouse':
      case 'pen':
        oe(e);
        break;
    }
  }
  function te(e) {
    var t;
    switch (
      (e.preventDefault(),
      n.domElement.focus ? n.domElement.focus() : window.focus(),
      e.button)
    ) {
      case 0:
        t = n.mouseButtons.LEFT;
        break;
      case 1:
        t = n.mouseButtons.MIDDLE;
        break;
      case 2:
        t = n.mouseButtons.RIGHT;
        break;
      default:
        t = -1;
    }
    switch (t) {
      case MOUSE.DOLLY:
        if (!1 === n.enableZoom) return;
        S(e), (c = r.DOLLY);
        break;
      case MOUSE.ROTATE:
        if (e.ctrlKey || e.metaKey || e.shiftKey) {
          if (!1 === n.enablePan) return;
          R(e), (c = r.PAN);
        } else {
          if (!1 === n.enableRotate) return;
          D(e), (c = r.ROTATE);
        }
        break;
      case MOUSE.PAN:
        if (e.ctrlKey || e.metaKey || e.shiftKey) {
          if (!1 === n.enableRotate) return;
          D(e), (c = r.ROTATE);
        } else {
          if (!1 === n.enablePan) return;
          R(e), (c = r.PAN);
        }
        break;
      default:
        c = r.NONE;
    }
    c !== r.NONE &&
      (n.domElement.ownerDocument.addEventListener('pointermove', $),
      n.domElement.ownerDocument.addEventListener('pointerup', ee),
      n.dispatchEvent(a));
  }
  function ne(e) {
    if (!1 !== n.enabled)
      switch ((e.preventDefault(), c)) {
        case r.ROTATE:
          if (!1 === n.enableRotate) return;
          Y(e);
          break;
        case r.DOLLY:
          if (!1 === n.enableZoom) return;
          H(e);
          break;
        case r.PAN:
          if (!1 === n.enablePan) return;
          U(e);
          break;
      }
  }
  function oe(e) {
    n.domElement.ownerDocument.removeEventListener('pointermove', $),
      n.domElement.ownerDocument.removeEventListener('pointerup', ee),
      !1 !== n.enabled && (x(e), n.dispatchEvent(i), (c = r.NONE));
  }
  function ae(e) {
    !1 === n.enabled ||
      !1 === n.enableZoom ||
      (c !== r.NONE && c !== r.ROTATE) ||
      (e.preventDefault(),
      e.stopPropagation(),
      n.dispatchEvent(a),
      V(e),
      n.dispatchEvent(i));
  }
  function ie(e) {
    !1 !== n.enabled && !1 !== n.enablePan && _(e);
  }
  function re(e) {
    if (!1 !== n.enabled) {
      switch ((e.preventDefault(), e.touches.length)) {
        case 1:
          switch (n.touches.ONE) {
            case TOUCH.ROTATE:
              if (!1 === n.enableRotate) return;
              z(e), (c = r.TOUCH_ROTATE);
              break;
            case TOUCH.PAN:
              if (!1 === n.enablePan) return;
              I(e), (c = r.TOUCH_PAN);
              break;
            default:
              c = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (!1 === n.enableZoom && !1 === n.enablePan) return;
              F(e), (c = r.TOUCH_DOLLY_PAN);
              break;
            case TOUCH.DOLLY_ROTATE:
              if (!1 === n.enableZoom && !1 === n.enableRotate) return;
              Z(e), (c = r.TOUCH_DOLLY_ROTATE);
              break;
            default:
              c = r.NONE;
          }
          break;
        default:
          c = r.NONE;
      }
      c !== r.NONE && n.dispatchEvent(a);
    }
  }
  function ce(e) {
    if (!1 !== n.enabled)
      switch ((e.preventDefault(), e.stopPropagation(), c)) {
        case r.TOUCH_ROTATE:
          if (!1 === n.enableRotate) return;
          K(e), n.update();
          break;
        case r.TOUCH_PAN:
          if (!1 === n.enablePan) return;
          B(e), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (!1 === n.enableZoom && !1 === n.enablePan) return;
          W(e), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (!1 === n.enableZoom && !1 === n.enableRotate) return;
          q(e), n.update();
          break;
        default:
          c = r.NONE;
      }
  }
  function se(e) {
    !1 !== n.enabled && (Q(e), n.dispatchEvent(i), (c = r.NONE));
  }
  function ue(e) {
    !1 !== n.enabled && e.preventDefault();
  }
  n.domElement.addEventListener('contextmenu', ue),
    n.domElement.addEventListener('pointerdown', J),
    n.domElement.addEventListener('wheel', ae),
    n.domElement.addEventListener('touchstart', re),
    n.domElement.addEventListener('touchend', se),
    n.domElement.addEventListener('touchmove', ce),
    this.update();
};
(OrbitControls.prototype = Object.create(EventDispatcher.prototype)),
  (OrbitControls.prototype.constructor = OrbitControls);
var MapControls = function (e, t) {
  OrbitControls.call(this, e, t),
    (this.screenSpacePanning = !1),
    (this.mouseButtons.LEFT = MOUSE.PAN),
    (this.mouseButtons.RIGHT = MOUSE.ROTATE),
    (this.touches.ONE = TOUCH.PAN),
    (this.touches.TWO = TOUCH.DOLLY_ROTATE);
};
(MapControls.prototype = Object.create(EventDispatcher.prototype)),
  (MapControls.prototype.constructor = MapControls);
export { OrbitControls, MapControls };
