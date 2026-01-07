import React, {  useRef } from "react";
import TransitionClouds from "./TransitionClouds";

function NextSection() {
  const container = useRef(null);
  return (
    <section ref={container} className=" relative w-full h-screen bg-amber-500">
      <TransitionClouds scope={container} />
    </section>
  );
}

export default NextSection;
