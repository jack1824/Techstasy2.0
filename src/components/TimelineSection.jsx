import React from "react";
import Clock from "./svgs/Clock";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function TimelineSection() {
  useGSAP(() => {
    gsap.to("#clock_hands", {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: "power0.inOut",
      duration: 30,
    });
    // GSAP animations can be added here if needed in the future
  });
  return (
    <section className="relative w-full h-screen flex justify-center items-center py-20">
      <img
        className="absolute top-0 left-0"
        src="./timeLine_props.svg"
        alt=""
      />
      <Clock />
    </section>
  );
}

export default TimelineSection;
