import IriBg from '@/components/Iridescence/IriBg';
import NoiseBg from '@/components/Noise/NoiseBg';
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
