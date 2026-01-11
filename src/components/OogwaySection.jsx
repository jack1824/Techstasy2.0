import React from "react";

function OogwaySection() {
  return (
    <div className="relative w-full h-auto">
      <img
        src="/oogwayback.png"
        className="w-full h-auto object-cover object-center bg-no-repeat"
        alt="Background"
      />

      <img
        src="/oogwayq.png"
        className=" absolute top-0 sm:top-100 sm:right-1/3  h-auto z-10 "
        alt="Oogway Quote"
      />
    </div>
  );
}

export default OogwaySection;
