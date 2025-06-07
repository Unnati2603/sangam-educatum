import React, { useRef, useEffect, useState } from "react";
import "./Noise.css";

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

// Extend HTMLCanvasElement to include our custom properties
interface PatternCanvas extends HTMLCanvasElement {
  patterns?: ImageData[];
  currentPatternIndex?: number;
}

const Noise: React.FC<NoiseProps> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) => {  const grainRef = useRef<HTMLCanvasElement | null>(null);
  const patternCanvasRef = useRef<PatternCanvas | null>(null);
  const animationRef = useRef<number | null>(null);
  const frameRef = useRef(0);
  const isVisibleRef = useRef(true);
  const isActiveRef = useRef(true);

  // Prepare noise pattern once instead of recreating it
  useEffect(() => {
    // Create the pattern canvas once
    if (!patternCanvasRef.current) {
      patternCanvasRef.current = document.createElement("canvas");
    }

    const patternCanvas = patternCanvasRef.current;
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;

    const patternCtx = patternCanvas.getContext("2d", {
      alpha: true,
      desynchronized: true, // Performance optimization
    });

    if (!patternCtx) return;

    // Pre-generate patterns for quick rotation instead of regenerating
    const patterns = [];
    const totalPatterns = 8; // Number of pre-generated patterns to cycle through

    for (let p = 0; p < totalPatterns; p++) {
      const patternData = patternCtx.createImageData(patternSize, patternSize);
      const patternPixelDataLength = patternSize * patternSize * 4;

      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }

      patterns.push(patternData);
    }

    // Store patterns in ref to access during animation loop
    patternCanvasRef.current.patterns = patterns;
    patternCanvasRef.current.currentPatternIndex = 0;

    return () => {
      patternCanvasRef.current = null;
    };
  }, [patternSize, patternAlpha]);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas || !patternCanvasRef.current) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true, // Performance boost
    });
    if (!ctx) return;

    // Visibility observer to pause when not visible
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    visibilityObserver.observe(canvas);

    // Document visibility API integration
    const handleVisibilityChange = () => {
      isActiveRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let resizeTimeout: number;
    const resize = () => {
      if (!canvas) return;

      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }

      resizeTimeout = window.setTimeout(() => {
        const scale = Math.min(1, window.devicePixelRatio);
        canvas.width = window.innerWidth * scale;
        canvas.height = window.innerHeight * scale;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";

        // Scale the context to match device pixel ratio
        ctx.scale(scale * patternScaleX, scale * patternScaleY);
      }, 200); // Debounce resize
    };

    const drawGrain = () => {
      if (!ctx || !canvas || !isVisibleRef.current || !isActiveRef.current) return;

      // Skip frames based on refresh interval to improve performance
      if (frameRef.current % patternRefreshInterval !== 0) {
        return;
      }

      const patternCanvas = patternCanvasRef.current;
      if (!patternCanvas || !patternCanvas.patterns) return;

      // Rotate through pre-generated patterns
      const patternIndex =
        Math.floor(frameRef.current / patternRefreshInterval) %
        patternCanvas.patterns.length;
      const patternCtx = patternCanvas.getContext("2d");
      if (!patternCtx) return;

      // Use the pre-generated pattern
      patternCtx.putImageData(patternCanvas.patterns[patternIndex], 0, 0);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pattern = ctx.createPattern(patternCanvas, "repeat");
      if (pattern) {
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    const loop = () => {
      if (isVisibleRef.current && isActiveRef.current) {
        drawGrain();
      }

      frameRef.current++;
      animationRef.current = window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      visibilityObserver.disconnect();

      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }

      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
    };
  }, [patternRefreshInterval, patternScaleX, patternScaleY]);

  return <canvas className="noise-overlay" ref={grainRef} />;
};

export default Noise;
