import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { use, useRef } from "react";
import Navbar from "./components/Navbar";
import TransitionClouds from "./components/TransitionClouds";
import NextSection from "./components/NextSection";

function App() {
  const container = useRef(null);
  const navbar = useRef(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      // Title animation - smoother, less dramatic scale
      heroTimeline.fromTo(
        "#title",
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "power3.out",
        }
      );

      // Characters entrance - more coordinated timing
      heroTimeline.fromTo(
        "#characters img",
        {
          x: (i) => (i === 0 ? -200 : 200), // Less extreme starting position
          opacity: 0,
          scale: 0.8,
          rotationY: (i) => (i === 0 ? -15 : 15), // Subtle 3D effect
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          ease: "back.out(1.2)", // Slight overshoot for energy
          stagger: 0.15,
        },
        "-=0.6" // Overlap with title for flow
      );

      // Floating animation - more subtle and elegant
      heroTimeline.to("#characters img", {
        y: -15,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.2,
          from: "center",
        },
      });

      // Shifu chat - separate ScrollTrigger animation
      gsap.fromTo(
        "#shifuChat img",
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#shifuChat",
            start: "top 40%",
            toggleActions: "play none none reverse", // Changed to reverse when scrolling back up
            once: false,
            // markers: true, // Allows animation to play again when scrolling
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <>
      <Navbar />
      <div
        ref={container}
        className="relative w-full h-screen bg-[url(./techstacy_background.png)] bg-no-repeat bg-cover flex justify-center items-center"
      >
        <div
          id="title"
          className="relative flex justify-center items-center mt-[10%]"
        >
          <img src="Title_techstacy.svg" alt="" />
        </div>

        <div
          id="characters"
          className="absolute w-full top-20 flex justify-between "
        >
          <img className="h-64" src="Monkee_kungfuu.svg" alt="" />
          <img className="h-64" src="tigressKungfuuPanda.svg" alt="" />
        </div>

        <div
          id="shifuChat"
          className="fixed bottom-5 left-5 flex items-end w-100 h-100 z-100"
        >
          <img src="shifuu_Chat.svg" alt="" />
        </div>
      </div>
      <NextSection />
      
    </>
  );
}

export default App;
