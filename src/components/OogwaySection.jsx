import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { use } from "react";

function OogwaySection() {
  useGSAP(() => {
    gsap.to("#oogwayImg", {
      y: -25,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <div className="relative w-full h-auto">
      <img
        src="/oogwayback.png"
        className="w-full h-auto object-cover object-center bg-no-repeat"
        alt="Background"
      />

      <img
        id="oogwayImg"
        src="/oogwayq.png"
        className=" absolute top-0 sm:top-100 sm:right-1/3  h-auto z-10 "
        alt="Oogway Quote"
      />
    </div>
  );
}

export default OogwaySection;
