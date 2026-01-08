import React, { useRef } from "react";
import TransitionClouds from "./TransitionClouds";

function NextSection() {
  const container = useRef(null);
  return (
    <section
      ref={container}
      className=" relative w-full h-screen bg-[url(./second_bg.jpg)] bg-no-repeat bg-center bg-cover flex justify-center items-center"
    >
      <TransitionClouds scope={container} />
    </section>
  );
}

export default NextSection;
