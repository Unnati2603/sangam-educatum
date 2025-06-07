import IriBg from './IriBg';
import GlassMorph from './GlassMorph';
import { HEADER_TEXT } from './constants';

export default function Header() {  return (    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <IriBg />
      <GlassMorph text={HEADER_TEXT} />
    </div>
  );
}