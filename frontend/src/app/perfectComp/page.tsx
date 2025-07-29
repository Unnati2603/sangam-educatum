import NoiseBg from '@/components/Noise/NoiseBg';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
// import './perfectComp.css';

export default function PerfectComp() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-platinum"></div>
      <NoiseBg />
      <div className="relative z-0">
        <Hero />
        <OurServices />
      </div>
    </main>
  );
}