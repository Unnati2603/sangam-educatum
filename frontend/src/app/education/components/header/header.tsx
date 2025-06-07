import IriBg from '@/components/IriBg';
import GlassMorph from '@/components/GlassMorph';
import { HEADER_TEXT } from './constants';

export default function Header() {  return (    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <IriBg />
      <GlassMorph text={HEADER_TEXT} />
    </div>
  );
}