"use client";
import { memo } from 'react';
import Iridescence from './Iridescence';

// Memoize the component to prevent unnecessary re-renders
export default memo(function IriBg() {
  return (
    <Iridescence
      color={[0.9, 0.92, 0.95]}
      mouseReact={false}
      amplitude={0.1}
      speed={0.7} // Reduced speed for better performance
    />
  );
});