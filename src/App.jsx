import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { use, useRef } from "react";
import Navbar from "./components/Navbar";
import NextSection from "./components/NextSection";
import Hero from "./components/Hero";

function App() {
  const navbar = useRef(null);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <div id="blue" className="relative w-full">
        <img src="scroll_handle" className="absolute top-0 right-50" alt="" />
        <img src="/long_blue_bg_clouds.png" alt="" className="w-full block" />

        <div className="absolute inset-0">
          <NextSection />
        </div>
      </div>
    </div>
  );
}

export default App;
