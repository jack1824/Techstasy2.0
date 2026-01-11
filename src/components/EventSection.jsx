import React from "react";
import EventCards from "./EventCards";

function EventSection() {
  return (
    <div id="eventSection" className="w-full h-auto ">
      <img
        src="/pinkcloud.png"
        alt="Clouds"
        className=" w-full h-auto object-cover object-center"
      />
      <img
        src="/fightclub.png"
        alt="fight"
        className="absolute top-10 sm:-top-35 left-0 w-full h-auto z-10 scale-60"
      />
      <EventCards />
    </div>
  );
}

export default EventSection;
