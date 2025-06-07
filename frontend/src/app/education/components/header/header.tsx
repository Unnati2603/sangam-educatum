import IriBg from '@/components/IriBg';
import NoiseBg from '@/components/NoiseBg';

export default function Header() {
  return (
    <div>
      {/* Iridescent background layer - lowest z-index */}
      <IriBg />
      
      {/* Noise layer on top of iridescent background */}
      <NoiseBg />
      
      {/* Text content on top of everything - highest z-index */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100vh',
        color: 'white',
        fontSize: '4rem',
        fontWeight: 'bold',
        textShadow: '0 2px 8px rgba(0,0,0,0.5)'
      }}>
        <h1>HI</h1>
      </div>
    </div>
  );
}