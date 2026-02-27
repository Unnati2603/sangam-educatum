"use client";
import { memo } from 'react';
import Iridescence from './Iridescence';

// Memoize the component to prevent unnecessary re-renders
export default memo(function IriBg() {
  return (
    <Iridescence
      color={[0.85, 0.90, 0.92]}
      mouseReact={true}
      amplitude={0.9}
      speed={0.9} // Reduced speed for better performance
    />
  );
});