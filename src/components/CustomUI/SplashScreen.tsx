import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const blackLayerRef = useRef<HTMLDivElement>(null);
  const grayLayerRef = useRef<HTMLDivElement>(null);
  const whiteLayerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onComplete,
    });

    // Initial states
    gsap.set([blackLayerRef.current, grayLayerRef.current, whiteLayerRef.current], {
      yPercent: 0,
    });

    gsap.set(textRef.current, {
      y: 50,
      opacity: 0,
      skewY: 10,
    });

    // Animation Sequence
    tl.to(textRef.current, {
      y: 0,
      opacity: 1,
      skewY: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
      // Hold for a moment
      .to({}, { duration: 0.5 })

      .to(blackLayerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut',
      })
      .to(grayLayerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut',
      }, '-=1.0') // Overlap
      .to(whiteLayerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut',
      }, '-=1.1'); // Overlap

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Layer 3: White/Accent (Bottom-most visual layer during animation) */}
      <div
        ref={whiteLayerRef}
        className="absolute inset-0 bg-[#e0e0e0] z-30"
      />

      {/* Layer 2: Gray (Middle layer) */}
      <div
        ref={grayLayerRef}
        className="absolute inset-0 bg-[#1a1a1a] z-40"
      />

      {/* Layer 1: Main Black (Top layer) */}
      <div
        ref={blackLayerRef}
        className="absolute inset-0 bg-[#0b0b0d] z-50 flex items-center justify-center"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />

        {/* Corner Text */}
        <div className="absolute top-10 left-10 text-white/30 text-sm font-light tracking-widest uppercase">
          Portfolio 2025
        </div>
        <div className="absolute bottom-10 right-10 text-white/30 text-sm font-light tracking-widest uppercase">
          Loading Experience
        </div>

        {/* Main Text */}
        <div className="overflow-hidden relative z-10">
          <h1
            ref={textRef}
            className="p-10 text-5xl md:text-9xl font-bold text-white tracking-tighter"
          >
            Ayush Awachar
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
