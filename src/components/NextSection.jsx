import React, {  useRef } from "react";
import TransitionClouds from "./TransitionClouds";

function NextSection() {
  const container = useRef(null);
  return (
    <section ref={container} className=" relative w-full h-screen bg-[url(./techstacy_background.png)] bg-no-repeat bg-cover flex justify-center items-center">
      <TransitionClouds scope={container} />
    </section>
  );
}

export default NextSection;
