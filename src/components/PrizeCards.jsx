import React from "react";

function PrizeCards() {
  return (
    <div className="w-full h-[100vw] sm:h-auto flex justify-center items-center relative" id="prizes">
      <img
        src="https://res.cloudinary.com/dgo97ti5u/image/upload/v1768928534/PRIZE_xj2jc5.png"
        alt="Prize"
        className="w-full object-fill"
        // style={{ transform: "scale(1.25)" }}
      />
      
      {/* Gradient blur overlay - keeps dragon clear at top, blurs prizes at bottom */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.4) 100%)',
          backdropFilter: 'blur(0px) opacity(0)',
          WebkitBackdropFilter: 'blur(0px)'
        }}
      ></div>
      
      {/* Blur effect specifically for prize cards area */}
      <div 
        className="absolute w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.15) 100%)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 25%, black 40%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 25%, black 40%, black 100%)'
        }}
      ></div>
      
      {/* TBD Text */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <span 
          className="text-6xl sm:text-7xl font-bold text-white"
          style={{
            textShadow: '4px 4px 12px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.6)',
            fontFamily: '"KungFuPanda", serif',
            letterSpacing: '2px'
          }}
        >
          TBD
        </span>
      </div>
    </div>
  );
}

export default PrizeCards;
