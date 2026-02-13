
import React, { useState, useRef } from 'react';

const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = 0;
    if ('touches' in e) x = e.touches[0].clientX - rect.left;
    else x = (e as React.MouseEvent).clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto h-[450px] md:h-[650px] rounded-3xl overflow-hidden cursor-ew-resize before-after-container shadow-2xl border-[12px] border-white bg-slate-200"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image */}
      <img 
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600" 
        alt="DekoTürks Sonrası" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-8 right-8 bg-deko-orange text-white px-6 py-3 rounded-lg font-black text-sm uppercase z-20 shadow-2xl tracking-widest">
        SONRA (DEKOTÜRKS)
      </div>

      {/* Before Image */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1600" 
          alt="Tadilat Öncesi" 
          className="w-full h-full object-cover grayscale brightness-75"
        />
        <div className="absolute top-8 left-8 bg-deko-navy text-white px-6 py-3 rounded-lg font-black text-sm uppercase shadow-2xl tracking-widest">
          ÖNCE (BAKIMSIZ)
        </div>
      </div>

      {/* Slider Bar */}
      <div 
        className="absolute inset-y-0 z-30 w-2 bg-white cursor-ew-resize"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-deko-navy rounded-full shadow-2xl flex items-center justify-center border-4 border-deko-orange">
          <div className="flex space-x-2">
            <div className="w-1.5 h-6 bg-white rounded-full"></div>
            <div className="w-1.5 h-6 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
