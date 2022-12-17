import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";


function Snow(canvas) {
  const ctx = canvas.getContext('2d');
  const padding = 200;
  const maxCount = 500;
  const color = "rgba(255,255,255)";

  let timeout = null;
  let snows = [];

  function Item() {
    this.x = Math.random() * (canvas.width + padding) - padding / 2;
    this.y = Math.random() * (canvas.height + padding) - padding / 2;
    this.z = 1.5 * Math.random() + 0.5;
    this.vx = (1.5 * Math.random() - 0.5) * this.z;
    this.vy = (0.5 * Math.random() + 0.5) * this.z;
    this.size = (3 * Math.random() + 1) * this.z;
  }

  const init = () => {
    snows = [];

    for (let index = 0; index < maxCount; index++) {
      snows.push(new Item())
    }

    update();

    render();

    // check if canvas overflow on first load
    setTimeout(() => update(), 100)
  }

  const update = () => {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector("#__next").offsetHeight;
  }

  const caculate = (snow) => {
    snow.x += snow.vx + Math.random();
    snow.y += snow.vy + Math.random();

    if (snow.x > canvas.width + padding / 2) {
      snow.x = -padding / 2
      snow.vx = (1.5 * Math.random() - 0.5) * snow.z
    } else if (snow.x < -padding / 2) {
      snow.x = canvas.width + padding / 2
      snow.vx = (1.5 * Math.random() - 0.5) * snow.z
    }

    if (snow.y > canvas.height + padding / 2) {
      snow.y = -padding / 2
      snow.vy = (0.5 * Math.random() + 0.5) * snow.z;
    } else if (snow.y < -padding / 2) {
      snow.y = canvas.height + padding / 2
      snow.vy = (0.5 * Math.random() + 0.5) * snow.z;
    }

  }

  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snows.forEach((snow, index) => {
      ctx.beginPath();

      ctx.strokeStyle = "transparent";
      ctx.fillStyle = color;
      ctx.arc(snow.x, snow.y, snow.size, 0, 2 * Math.PI)

      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      caculate(snows[index])
    })

    requestAnimationFrame(render)
  }

  init()

  window.addEventListener('resize', () => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(update, 50)
  })

  return {
    update: () => update(),
    decontruct: () => {
      timeout = null;
      snows = [];
    }
  }
}

export const Canvas = ({ component }) => {
  const canvas = useRef();

  const [snow, setSnow] = useState(null);

  useEffect(() => {
    snow && snow.update();
  }, [component])


  useEffect(() => {
    const _snow = Snow(canvas.current)
    setSnow(_snow)
    return () => _snow.decontruct()
  }, [])

  return <canvas style={{ position: 'absolute', pointerEvents: 'none' }} ref={canvas} width="1848" height="515" />
}