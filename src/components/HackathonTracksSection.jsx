import React, { useRef, useState } from "react";
import HackathonTracks from "./HackathonTracks";
import HackathonTracksDialogBox from "./HackathonTracksDialogBox";

function HackathonTracksSection() {
 

  
  return (
    <div id="tracks" className="relative">
      <img
        src="https://res.cloudinary.com/dgo97ti5u/image/upload/v1768928876/hk_tracks_ff3ips.png"
        className="w-full h-auto object-cover object-center"
        alt="HK Tracks"
      />
      <HackathonTracks />
    </div>
  );
}

export default HackathonTracksSection;
