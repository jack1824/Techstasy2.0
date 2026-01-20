import React from "react";
import NextSection from "./NextSection";
import PrizeCards from "./PrizeCards";
import Timeline from "./Timeline";

function BlueSection() {
  return (
    <div id="blue" className="relative w-full">
      <img src="https://res.cloudinary.com/dgo97ti5u/image/upload/v1768928465/long_blue_bg_clouds_rsm0l0.png" alt="" className="w-full block" />

      <div className="absolute inset-0">
        <NextSection />
        <PrizeCards />
        <Timeline />
      </div>
    </div>
  );
}

export default BlueSection;
