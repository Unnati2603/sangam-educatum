"use client";

import React from 'react';
import { Card } from '@tsamantanis/react-glassmorphism';
import '@tsamantanis/react-glassmorphism/dist/index.css';

interface GlassMorphProps {
  text: string;
}

export default function GlassMorph({ text }: GlassMorphProps) {
  return (
    <div 
      style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '100%', height: '100%' }}>
        <Card blur={10} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textShadow: '0 2px 16px rgba(0,0,0,0.3)',
          textAlign: 'center',
        }}
      >
        {text}
      </div>
    </div>
  );
}
