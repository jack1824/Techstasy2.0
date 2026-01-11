import React from "react";
import HackathonTracks from "./HackathonTracks";

function HackathonTracksSection() {
  return (
    <div>
      <img
        src="/hk tracks.png"
        className="w-full h-auto object-cover object-center"
        alt="HK Tracks"
      />
      <HackathonTracks />
    </div>
  );
}

export default HackathonTracksSection;
