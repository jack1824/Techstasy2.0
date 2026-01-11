import React, { useRef } from "react";
import TimelineCards from "./TimelineCards";
import TimelineSection from "./TimelineSection";

function Timeline() {
  const Timeline = useRef(null);
  return (
    <div ref={Timeline}>
      <TimelineSection />
      <TimelineCards TimelineRef={Timeline}/>
    </div>
  );
}

export default Timeline;
