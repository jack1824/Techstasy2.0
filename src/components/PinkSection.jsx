import React from "react";
import EventCards from "./EventCards";
import HackathonTracks from "./HackathonTracks";
import EventSection from "./EventSection";
import HackathonTracksSection from "./HackathonTracksSection";
import SponsersSection from "./SponsersSection";
import OogwaySection from "./OogwaySection";

function PinkSection() {
  return (
    <div id="pinkSection" className="w-full bg-[#fed6f0] relative">
      <img
        src="/bamboo.png"
        alt="Bamboo"
        className="absolute -top-10 sm:-top-45 left-0 w-full h-auto z-5"
      />
      <EventSection />
      <HackathonTracksSection />
      <SponsersSection />
      <OogwaySection />
    </div>
  );
}

export default PinkSection;
