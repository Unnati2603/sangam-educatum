// import IriBg from '@/components/IriBg';
// import NoiseBg from '@/components/NoiseBg';
// import { HEADER_TEXT } from './constants';

// export default function Header() {
//   return (
//     <header style={{ 
//       position: 'relative', 
//       width: '100vw',
//       maxWidth: '100%',
//       overflow: 'hidden',
//       boxSizing: 'border-box',
//       margin: 0,
//       padding: 0
//     }}>
//       {/* Iridescent background layer - lowest z-index */}
//       <IriBg />
      
//       {/* Noise layer on top of iridescent background */}
//       <NoiseBg />
//         {/* Text content on top of everything - highest z-index */}
//       <div style={{ 
//         position: 'relative', 
//         zIndex: 1, 
//         display: 'flex', 
//         alignItems: 'center', 
//         justifyContent: 'center',
//         height: '100vh', // 100vh for full-screen header
//         minHeight: '400px', // Ensure minimum height on small screens
//         width: '100vw',
//         maxWidth: '100%',
//         color: 'white',
//         fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', // More conservative responsive font size
//         fontWeight: 'bold',
//         textShadow: '0 2px 8px rgba(0,0,0,0.5)',
//         padding: '0 1rem', // Keep padding modest
//         boxSizing: 'border-box', // Ensure padding is included in width calculation
//         overflowWrap: 'break-word',
//         wordBreak: 'break-word'
//       }}>
//         <h1 style={{ 
//           width: '100%',
//           maxWidth: 'calc(100vw - 2rem)', // Account for padding
//           overflowWrap: 'break-word',
//           wordBreak: 'break-word',
//           hyphens: 'auto',
//           margin: 0,
//           padding: 0,
//           textAlign: 'center'
//         }}>
//           {HEADER_TEXT}
//         </h1>
//       </div>    </header>
//   );
// }



import IriBg from '@/components/IriBg';
import NoiseBg from '@/components/NoiseBg';
import { HEADER_TEXT } from './constants';
import './Header.css'; // import the external CSS

export default function Header() {
  return (
    <header className="relative w-screen max-w-full overflow-hidden box-border m-0 p-0">
      {/* Iridescent background layer - lowest z-index */}
      <IriBg />

      {/* Noise layer */}
      <NoiseBg />

      {/* Text content */}
      <div className="header-text-container">
        <h1 className="header-title">
          {HEADER_TEXT}
        </h1>
      </div>
    </header>
  );
}
