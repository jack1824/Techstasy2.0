import React, { useRef } from "react";
import TransitionClouds from "./TransitionClouds";

function NextSection() {
  const container = useRef(null);
  return (
    <section
      ref={container}
      className="relative w-full h-screen bg-no-repeat bg-center bg-contain bg-fixed flex flex-col justify-center items-center"
    >
      <TransitionClouds scope={container} />

      {/* Prize Image with spacing    increase mt to make the image go low*/}
      <div className="mt-580 mb-8">
        <img src="/PRIZE.png" alt="Prize" className="max-w-full h-auto" style={{ transform: 'scale(1.25)' }} />
      </div>
    </section>
  );
}

export default NextSection;
