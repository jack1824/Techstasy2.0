import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import React from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function TransitionClouds({ scope }) {
  useGSAP(
    () => {
      const clouds = gsap.utils.toArray("#transition img");

      // Set initial state
      gsap.set(clouds, {
        xPercent: 0,
        opacity: 1,
      });

      // Animate both clouds with same duration for synchronized movement
      gsap.to(clouds[0], {
        xPercent: -120,
        duration: 1.5, // Changed to match second cloud
        ease: "power2.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#transition",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment for debugging
        },
      });

      gsap.to(clouds[1], {
        xPercent: 120,
        duration: 1.5, // Synchronized with first cloud
        ease: "power2.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#transition",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: scope }
  );

  return (
    <div
      id="transition"
      className="absolute top-0 left-0 w-full h-full z-20 flex justify-between pointer-events-none overflow-hidden"
    >
      <img src="cloud01_trans.svg" alt="Left transition cloud" />
      <img src="cloud02_tran.svg" alt="Right transition cloud" />
    </div>
  );
}

export default TransitionClouds;
