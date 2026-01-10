import React, { useRef } from "react";
import Clock from "./svgs/Clock";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function TimelineSection() {
  const clockRef = useRef(null);

  useGSAP(() => {
    const hands = clockRef.current?.querySelector("#clock_hands");
    if (!hands) return;

    gsap.set(hands, { transformOrigin: "50% 50%" });
    gsap.to(hands, {
      rotation: 360,
      repeat: -1,
      ease: "power0.inOut",
      duration: 30,
    });
  });
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center py-10 md:py-20 -mt-20 md:mt-0">
      <img
        className="absolute top-0 -left-6 sm:left-0 z-0 pointer-events-none"
        src="./timeLine_props.svg"
        alt=""
      />
      <Clock
        ref={clockRef}
        className="relative z-10 w-[40vw] max-w-[240px] sm:max-w-[420px] md:max-w-[560px] h-auto transform-gpu -translate-y-58 sm:translate-y-0"
      />
    </section>
  );
}

export default TimelineSection;
