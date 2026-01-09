import React, { useRef } from "react";
import TransitionClouds from "./TransitionClouds";

function NextSection() {
  const scroll = useRef(null);
  return (
    <section className=" relative w-full h-screen bg-no-repeat bg-center bg-contain bg-fixed flex justify-center items-center">
      <div ref={scroll} id="scroll">
        <img
          src="scroll_handle.svg "
          className=" absolute -top-15 right-1/3 z-20"
          id="scroll"
          alt=""
        />
        <img
          src="scroll_paper.svg "
          className="absolute -top-10 right-1/3 z-10"
          id="scroll"
          alt=""
        />
      </div>
      <TransitionClouds scroll={scroll} />

      {/* Prize Image */}
      <div className="mt-800">
        <img
          src="PRIZE.png"
          alt="Prize"
          className="max-w-full h-auto"
          style={{ transform: 'scale(1.25)' }}
        />
      </div>
    </section>
  );
}

export default NextSection;
