import React, { useRef } from "react";
import TransitionClouds from "./TransitionClouds";
import { useCountdownToMarch112026 } from "../hooks/useCountdown";

function NextSection() {
  const scroll = useRef(null);
  const { days, hours, minutes, seconds } = useCountdownToMarch112026();
  return (
    <section className=" relative w-full h-screen bg-no-repeat bg-center bg-contain bg-fixed flex justify-center items-center">
      <div ref={scroll} id="scroll">
        <img
          src="scroll_handle.svg "
          className=" absolute -top-15 right-1/4 z-20"
          id="scroll"
          alt=""
        />
        <div className="absolute -top-10 right-1/4 z-10 flex justify-center items-center">
          <img src="scroll_paper.svg " className="" id="scroll" alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 w-full">
            <h2 className="text-4xl md:text-5xl font-black text-center leading-none tracking-wider text-outline-lg font-[impact] uppercase">
              HACKATHON <br /> STARTS IN
            </h2>

            <div className="bg-white border-4 border-black rounded-full px-8 py-2 md:px-12 md:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-2xl md:text-4xl font-black tracking-widest font-[impact]">
                {days}D {hours}H {minutes}M {seconds}S
              </span>
            </div>
          </div>
        </div>
      </div>
      <TransitionClouds scroll={scroll} />
    </section>
  );
}

export default NextSection;
