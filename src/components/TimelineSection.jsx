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
    <section className="relative w-full h-[50vw] sm:h-screen flex justify-center items-center py-20">

      <img
        className="absolute  object-cover z-10 object-center w-full "
        src="./Timeline_clouds.png"
        alt=""
      />
      <img
        className="absolute top-0 left-0 object-contain z-10 object-center w-1/2 "
        src="./red_tree.svg"
        alt=""
      />
      <img
        className="absolute bottom-0  w-[80%] object-contain z-10 object-center"
        src="./TIMELINE_text.svg"
        alt=""
      />
      <Clock
        className={""}
        w={window.innerWidth < 640 ? 220 : window.innerWidth < 1024 ? 330 : 612}
      />
    </section>
  );
}

export default TimelineSection;
