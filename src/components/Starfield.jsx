import React, { useEffect } from 'react';

export default function Starfield() {
  useEffect(() => {
    const canvas = document.getElementById('starfield');
    if (canvas) {
      const c = canvas.getContext('2d');

      const setCanvasSize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
        return { w, h };
      };

      let { w, h } = setCanvasSize();

      // Create stars
      const stars = [];
      for (let i = 0; i < 5000; i++) {
        stars.push({
          x: Math.random() * w - w / 2, // Centered origin for better scaling
          y: Math.random() * h - h / 2,
          z: Math.random() * w,
        });
      }

      const clear = () => {
        c.fillStyle = '#101215'; // Background color
        c.fillRect(0, 0, w, h);
      };

      const putPixel = (x, y, brightness) => {
        c.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        c.fillRect(x, y, 1, 1);
      };

      const moveStars = (distance) => {
        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];
          star.z -= distance;
          if (star.z <= 0) {
            star.z = w; // Reset to width when it goes past
          }
        }
      };

      const drawStars = () => {
        clear();
        const cx = w / 2;
        const cy = h / 2;

        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];
          const perspective = star.z / w;
          const x = cx + star.x / perspective;
          const y = cy + star.y / perspective;

          if (x < 0 || x >= w || y < 0 || y >= h) {
            continue;
          }

          const brightness = 1 - star.z / w;
          putPixel(x, y, brightness);
        }
      };

      let prevTime;
      const tick = (time) => {
        if (!prevTime) {
          prevTime = time;
        }
        const elapsed = time - prevTime;
        prevTime = time;

        moveStars(elapsed * 0.02); // Slower speed
        drawStars();

        requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);

      window.addEventListener('resize', () => {
        ({ w, h } = setCanvasSize());
      });
    }
  }, []);

  return (
    <canvas
      id="starfield"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}
