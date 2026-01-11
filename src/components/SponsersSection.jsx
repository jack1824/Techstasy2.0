import React from "react";

function SponsersSection() {
  return (
    <div>
      <img
        src="/cherry_blossom.png"
        className="w-full h-auto object-cover object-top"
        alt="Cherry Blossom"
      />
      <div className="w-full h-auto flex justify-center items-center py-10 bg-white/10 backdrop-blur-md">
        <img
          src="/comingsoon.png"
          className="w-[25%] h-auto object-contain"
          alt="Coming Soon"
        />
      </div>
    </div>
  );
}

export default SponsersSection;
