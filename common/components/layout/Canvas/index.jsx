import { useEffect, useLayoutEffect, useRef } from "react";


function init() {
  var t, i, n = [], h = 200;
  function e() {
    (this.x = Math.random() * (t.width + h) - h / 2),
      (this.y = Math.random() * (t.height + h) - h / 2),
      (this.z = 1 * Math.random() + 0.5),
      (this.vx = (1.5 * Math.random() - 0.5) * this.z),
      (this.vy = (0.5 * Math.random() + 0.5) * this.z),
      (this.fill = "rgba(255,255,255)"),
      (this.dia = (2.5 * Math.random() + 1.5) * this.z),
      n.push(this);
  }
  function a(i) {
    (i.x += i.vx),
      (i.y += i.vy),
      i.x > t.width + h / 2
        ? (i.x = -h / 2)
        : 0,
      i.y > t.height + h / 2
        ? (i.y = -h / 2)
        : i.y < -h / 2 && (i.y = t.height + h / 2);
  }
  function d() {
    i.clearRect(0, 0, t.width, t.height);
    for (var h = 0; h < n.length; h++)
      (e = n[h]),
        i.beginPath(),
        (i.strokeStyle = "transparent"),
        (i.fillStyle = e.fill),
        i.arc(e.x, e.y, e.dia, 0, 2 * Math.PI),
        i.closePath(),
        i.stroke(),
        i.fill(),
        a(n[h]);
    var e;

    requestAnimationFrame(d)

  }
  function o() {
    (t.width = window.innerWidth);
    (t.height = window.innerHeight);
    (n = []);
    console.log(n);
    (function (t) {
      for (var i = 0; i < t; i++) new e();
    })(window.innerWidth / 10);
    d();
  }

  return function (canvas) {
    (t = canvas),
      (i = t.getContext("2d")),
      o(),
      window.addEventListener("resize", o, !1);
  }
};

export const Canvas = () => {
  const canvas = useRef();

  useLayoutEffect(() => init()(canvas.current), [])

  return <canvas style={{ position: 'fixed', pointerEvents: 'none' }} ref={canvas} width="100%" height="100vh" />
}