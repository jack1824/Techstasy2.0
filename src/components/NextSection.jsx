import React, { useRef } from "react";
import TransitionClouds from "./TransitionClouds";
import { useCountdownToMarch112026 } from "../hooks/useCountdown";

function NextSection() {
  const scroll = useRef(null);
  const lantern = useRef(null);
  const { days, hours, minutes, seconds } = useCountdownToMarch112026();
  return (
    <section className=" relative w-full h-[50vw] sm:h-screen bg-no-repeat bg-center bg-contain bg-fixed flex justify-center items-center">
      <div ref={scroll} id="scroll">
        <img
          src="scroll_handle.svg "
          className="w-[50%] absolute -top-5 sm:-top-15 right-1/4 z-20"
          id="scroll"
          alt=""
        />
        <div className="w-[50%] absolute top-0 sm:-top-10 right-1/4 z-10 flex justify-center items-center">
          <img src="scroll_paper.svg " className="" id="scroll" alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 w-full">
            <h2 className="text-[4vw]  sm:text-4xl md:text-5xl font-black text-center leading-none tracking-wider text-outline-sm md:text-outline-lg font-kungfu uppercase">
              HACKATHON <br /> STARTS IN
            </h2>

            <div className="bg-white border-4 border-black rounded-full md:px-5 md:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[2.8vw] md:text-3xl font-black tracking-wide font-kungfu">
                {days}D {hours}H {minutes}M {seconds}S
              </span>
            </div>
          </div>
        </div>
      </div>
      <div ref={lantern} id="lanternContain" className="relative w-full h-full">
        <img
          src="https://res.cloudinary.com/dgo97ti5u/image/upload/v1768928313/lantern_prop_nj1wq4.png "
          className="absolute w-full object-cover z-5 top-10"
          id="lantern"
          alt=""
        />
      </div>
      <TransitionClouds scroll={scroll} lantern={lantern} />

      {/* Prize Image */}
    </section>
  );
}

export default NextSection;
