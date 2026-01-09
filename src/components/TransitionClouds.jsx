import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function TransitionClouds({ scroll }) {
  useGSAP(
    () => {
      const clouds = gsap.utils.toArray("#clouds img");
      // Set initial state
      gsap.set(clouds, {
        xPercent: 0,
        opacity: 1,
      });
      // Create a timeline for synchronized animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#clouds",
          start: "top center",
          end: "20% center",
          // scrub: true,
          toggleActions: "play none none reverse",
          // markers: true, // Remove in production
        },
      });
      // Animate both clouds in the same timeline
      tl.to(
        clouds[0],
        {
          xPercent: -120,
          duration: 2,
          ease: "sine.out",
        },
        0
      ) // Start at time 0
        .to(
          clouds[1],
          {
            xPercent: 120,
            duration: 2,
            ease: "sine.out",
          },
          0
        ); // Also start at time 0 for synchronization
      // Cleanup function is handled automatically by useGSAP
      // tl.to(scroll.current.children[0], {
      //   y: 20,
      //   ease: "sine.out",
      //   duration: 0.5,
      // });
      tl.fromTo(
        scroll.current.children[1],
        {
          y: -300,
          ease: "sine.out",
          duration: 0.5,
        },
        {
          y: 0,
          ease: "sine.out",
          duration: 0.5,
        },
        "0.35"
      );
      {
      }
    },
    { scope: "#transition" }
  );

  return (
    <div
      id="transition"
      className="absolute top-0 w-full h-full z-20 flex justify-between pointer-events-none overflow-visible"
    >
      <div id="clouds" className="relative w-full h-full overflow-visible">
        <img
          src="cloud01_trans.svg"
          alt="Left transition cloud"
          className="absolute h-full object-contain w-full -top-1/2 sm:-top-1/4 left-0 opacity-50"
        />
        <img
          src="cloud02_tran.svg"
          alt="Right transition cloud"
          className="absolute h-full object-contain w-full -top-1/2 sm:-top-1/4 right-0 opacity-50"
        />
      </div>
    </div>
  );
}

export default TransitionClouds;
