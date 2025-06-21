// // components/BinaryRainBackground.tsx

// 'use client';
// import React, { useRef, useEffect } from 'react';

// const BinaryRainBackground: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const fontSize = 16;
//     const columns = Math.floor(canvas.width / fontSize);
//     const drops: number[] = Array(columns).fill(1);

//     const binary = ['0', '1'];

//     const draw = () => {
//       if (!ctx) return;

//       ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = '#00ffcc';
//       ctx.font = `${fontSize}px monospace`;

//       for (let i = 0; i < drops.length; i++) {
//         const text = binary[Math.floor(Math.random() * binary.length)];
//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//           drops[i] = 0;
//         }

//         drops[i]++;
//       }
//     };

//     const interval = setInterval(draw, 33);

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-screen h-screen z-0"
//     />
//   );
// };

// export default BinaryRainBackground;



// components/BinaryRainBackground.tsx

'use client';
import React, { useEffect, useRef } from 'react';

const BinaryRainBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ffcc';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '0' : '1';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
    />
  );
};

export default BinaryRainBackground;
