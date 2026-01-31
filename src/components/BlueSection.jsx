import React from "react";
import NextSection from "./NextSection";
import PrizeCards from "./PrizeCards";
import Timeline from "./Timeline";

function BlueSection() {
  return (
    <div id="blue" className="relative w-full bg-[#4EA8A9] ">
      {/* <img
        src="https://res.cloudinary.com/dgo97ti5u/image/upload/v1768928465/long_blue_bg_clouds_rsm0l0.png"
        alt=""
        className="w-full block"
      /> */}
      <img
        src="/bamboo.png"
        alt="Bamboo"
        className="absolute -top-10 sm:-top-45 left-0 w-full h-auto z-5"
      />

      <NextSection />
      <PrizeCards />
      <Timeline />
    </div>
  );
}

export default BlueSection;
