"use client";
import { memo } from "react";
import Noise from "./Noise"

// Memoize the component to prevent unnecessary re-renders
export default memo(function NoiseBg() {
  return (
    <Noise
      patternSize={20} // Reduced size for better performance
      patternScaleX={1}
      patternScaleY={1}
      patternRefreshInterval={60} // Slower refresh rate for better performance
      patternAlpha={5}
    />
  );
});


      // patternSize={75} // Even smaller size for more detailed noise
      // patternScaleX={1}
      // patternScaleY={1}
      // patternRefreshInterval={40} // Faster refresh for more dynamic effect
      // patternAlpha={45} // Much more visible
