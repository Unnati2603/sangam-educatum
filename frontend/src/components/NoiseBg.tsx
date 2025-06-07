"use client";
import { memo } from "react";
import Noise from "./Noise"

// Memoize the component to prevent unnecessary re-renders
export default memo(function NoiseBg() {
  return (
    <Noise
      patternSize={350} // Reduced size for better performance
      patternScaleX={1}
      patternScaleY={1}
      patternRefreshInterval={24} // Slower refresh rate for better performance
      patternAlpha={15}
    />
  );
});