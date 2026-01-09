import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import NextSection from "./components/NextSection";
import Hero from "./components/Hero";
import TimelineSection from "./components/TimelineSection";
import PrizeCards from "./components/PrizeCards";
import TimelineCards from "./components/TimelineCards";

function App() {
  const scroll = useRef(null);

  // Disable browser zoom
  useEffect(() => {
    // Block Ctrl + Scroll wheel zoom
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // Block Ctrl + Plus/Minus keyboard zoom
    const handleKeydown = (e) => {
      if (
        e.ctrlKey &&
        (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0")
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <div id="blue" className="relative w-full">
        <img src="/long_blue_bg_clouds.png" alt="" className="w-full block" />

        <div className="absolute inset-0">
          <NextSection />
          <PrizeCards />
          <TimelineSection />
          <TimelineCards />
        </div>
      </div>
      <div id="spacer" className="w-full h-[800vh] bg-[#fcc1e1] flex justify-center items-center">
        <img src="/hanging_lantern.svg" className="w-full" alt="Lantern" />
      </div>
    </div>
  );
}

export default App;
