import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function TransitionClouds({ scope }) {
  useGSAP(
    () => {
      const clouds = gsap.utils.toArray("#transition img");
      console.log(clouds);
      // Set initial state
      gsap.set(clouds, {
        xPercent: 0,
        opacity: 1,
      });

      // Create a timeline for synchronized animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#transition",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: true, // Remove in production
        },
      });

      // Animate both clouds in the same timeline
      tl.to(
        clouds[0],
        {
          xPercent: -120,
          duration: 1.5,
          ease: "sine.out",
        },
        0
      ) // Start at time 0
        .to(
          clouds[1],
          {
            xPercent: 120,
            duration: 1.5,
            ease: "sine.out",
          },
          0
        ); // Also start at time 0 for synchronization

      // Cleanup function is handled automatically by useGSAP
    },
    { scope: scope }
  );

  return (
    <div
      id="transition"
      className="absolute top-0 w-full h-full z-20 flex justify-between pointer-events-none overflow-hidden"
    >
      <div id="clouds" className="relative w-full h-full">
        <img
          src="cloud01_trans.svg"
          alt="Left transition cloud"
          className="absolute h-full object-fit w-1/2 top-0 left-50"
        />
        <img
          src="cloud02_tran.svg"
          alt="Right transition cloud"
          className=" absolute h-full object-fit w-1/2 top-0 right-50"
        />
      </div>
    </div>
  );
}

export default TransitionClouds;
