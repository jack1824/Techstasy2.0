import React, { useRef } from "react";
import HackathonTracks from "./HackathonTracks";

function HackathonTracksSection() {
  
  return (
    <div >
      <img
        src="https://res.cloudinary.com/dgo97ti5u/image/upload/v1768928876/hk_tracks_ff3ips.png"
        className="w-full h-auto object-cover object-center"
        alt="HK Tracks"
      />
      <HackathonTracks  />
    </div>
  );
}

export default HackathonTracksSection;
