"use client";
import Iridescence from './Iridescence';

export default function IriBg() {
  return (
    <Iridescence
      color={[1, 1, 1]}
      mouseReact={false}
      amplitude={0.1}
      speed={1.0}
    />
  );
}