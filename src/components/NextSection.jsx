import React, { useRef } from "react";
import TransitionClouds from "./TransitionClouds";

function NextSection() {
  const scroll = useRef(null);
  return (
    <section className=" relative w-full h-screen bg-no-repeat bg-center bg-contain bg-fixed flex justify-center items-center">
      <div ref={scroll} id="scroll">
        <img
          src="scroll_handle.svg "
          className=" absolute -top-15 right-1/4 z-20"
          id="scroll"
          alt=""
        />
        <img
          src="scroll_paper.svg "
          className="absolute -top-10 right-1/4 z-10"
          id="scroll"
          alt=""
        />
      </div>
      <TransitionClouds scroll={scroll} />
    </section>
  );
}

export default NextSection;
