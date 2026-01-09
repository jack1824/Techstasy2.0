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
import EventCards from "./components/EventCards";
import HackathonTracks from "./components/HackathonTracks";

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
      <div id="spacer" className="w-full h-[800vh] bg-[#fed6f0] relative">
        <img
          src="/bamboo.png"
          alt="Bamboo"
          className="absolute -top-10 sm:-top-45 left-0 w-full h-auto z-5"
        />
        <img
          src="/pinkcloud.png"
          alt="Clouds"
          className="absolute -top-10 sm:-top-135 left-0 w-full h-auto z-10"
        />
        <img
          src="/fightclub.png"
          alt="fight"
          className="absolute top-10 sm:-top-35 left-0 w-full h-auto z-10 scale-60"
        />
        <img
          src="/hk tracks.png"
          className="absolute top-[23%] left-0 w-full z-0"
          alt="HK Tracks"
        />

        <div className="absolute top-[42%] left-0 w-full z-20">
          <HackathonTracks />
        </div>

        <img
          src="/cherry_blossom.png"
          className="absolute top-[55%] left-0 w-full z-0"
          alt="Cherry Blossom"
        />

        <div className="absolute top-[73%] left-1/2 -translate-x-1/2 z-20 flex justify-center w-full">
          <img
            src="/comingsoon.png"
            className="w-[25%] h-auto object-contain"
            alt="Coming Soon"
          />
        </div>
        <div className="absolute top-[78%] bottom-0 left-0 w-full  flex justify-center items-start">
          <div className="relative w-full h-full">
            {/* Background Image - Full width, fills remaining space */}
            <img
              src="/oogwayback.png"
              className="w-full h-full object-cover"
              alt="Background"
            />
            {/* Small Image on top - centered */}
            <img
              src="/oogwayq.png"
              className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[40%] max-w-xl"
              alt="Oogway Quote"
            />
          </div>
        </div>

        {/* Event Cards Section */}
        <div className="absolute top-[12%] left-0 w-full z-20">
          <EventCards />
        </div>
      </div>
    </div>

  );
}

export default App;
