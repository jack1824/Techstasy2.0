import React, { useRef } from "react";
import TransitionClouds from "./TransitionClouds";

function NextSection() {
  const scroll = useRef(null);
  return (
    <section className=" relative w-full h-screen bg-no-repeat bg-center bg-contain bg-fixed flex justify-center items-center">
      <div ref={scroll} id="scroll">
        <img
          src="scroll_handle.svg "
          className="w-[50%] absolute -top-5 sm:-top-15 right-1/4 z-20"
          id="scroll"
          alt=""
        />
        <img
          src="scroll_paper.svg "
          className="w-[50%] absolute top-0 sm:-top-10 right-1/4 z-10"
          id="scroll"
          alt=""
        />
      </div>
      <TransitionClouds scroll={scroll} />
        <img
          src="lantern.svg "
          className="absolute w-full object-cover z-5 top-10"
          id="lantern"
          alt=""
        />

      {/* Prize Image */}
    </section>
  );
}

export default NextSection;
