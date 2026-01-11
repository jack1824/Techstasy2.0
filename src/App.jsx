import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from "./components/Navbar";
import NextSection from "./components/NextSection";
import Hero from "./components/Hero";
import TimelineSection from "./components/TimelineSection";
import PrizeCards from "./components/PrizeCards";
import TimelineCards from "./components/TimelineCards";
import EventCards from "./components/EventCards";
import HackathonTracks from "./components/HackathonTracks";
import Timeline from "./components/Timeline";
import BlueSection from "./components/BlueSection";
import PinkSection from "./components/PinkSection";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <BlueSection />
      <PinkSection />
    </div>
  );
}

export default App;
