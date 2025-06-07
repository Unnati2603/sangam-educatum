"use client";
import Noise from "./Noise"
export default function NoiseBg() {
  return (
    <Noise
      patternSize={500}
      patternScaleX={1}
      patternScaleY={1}
      patternRefreshInterval={15}
      patternAlpha={15}
    />
  );
}