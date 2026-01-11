import { useRef } from "react";
import React from "react";

const timelineData = [
  {
    title: "Registration Opens",
    description: "Start your journey by registering for the event.",
    date: "January 1, 2024",
    day: "Day 1",
  },
  {
    title: "Workshop Sessions",
    description: "Participate in various workshops to enhance your skills.",
    date: "February 15, 2024",
    day: "Day 2",
  },
  {
    title: "Hackathon Begins",
    description: "Kick off the hackathon and start building your projects.",
    date: "March 10, 2024",
    day: "Day 3",
  },
  {
    title: "Project Submission",
    description: "Submit your projects for evaluation.",
    date: "March 20, 2024",
    day: "Day 4",
  },
];

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function TimelineCards({ TimelineRef }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".timeline-card");

    gsap.to(
      trackRef.current,
      {
        x: -100 * (cards.length - 1) + "%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: `top ${
            window.innerWidth < 640
              ? "40%"
              : window.innerWidth < 1024
              ? "20%"
              : "top"
          }`,
          end: () => `+=${window.innerWidth * cards.length}`,
          pin: true,
          scrub: 2,
          anticipatePin: 1,
        },
      },
      { scope: TimelineRef }
    );
  });

  return (
    <section
      ref={sectionRef}
      id="timeline-cards"
      className="relative sm:h-screen overflow-hidden"
    >
      <div ref={trackRef} className="flex flex-row h-full w-fit">
        {timelineData.map((item, index) => (
          <Cards
            key={index}
            title={item.title}
            description={item.description}
            date={item.date}
            day={item.day}
          />
        ))}
      </div>
    </section>
  );
}

export default TimelineCards;

function Cards({ title, description, date, day }) {
  return (
    <div
      className="timeline-card shrink-0 w-[80vw] sm:h-screen p-4 md:p-16 
                   
                flex flex-col justify-center items-center text-center font-kungfu  min-h-[80vw]"
    >
      {/* Top Meta Info */}
      <div className="mb-2 sm:mb-8">
        <span className="block text-[4vw] md:text-2xl font-medium tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-red-600 uppercase">
          {day}
        </span>
        <span className="block text-[5vw] md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-300 to-red-400">
          {date}
        </span>
      </div>

      {/* Main Title - Scaled for impact */}
      <h3
        className="text-[8vw] md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-amber-500 to-red-700 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)] 
                 leading-tight tracking-tight max-w-5xl"
      >
        {title}
      </h3>

      {/* Divider Decor */}
      <div className="w-24 h-1 bg-linear-to-r from-transparent via-white/40 to-transparent my-2 sm:my-10" />

      {/* Description - Larger body text */}
      <p className="text-[3vw] md:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-300 to-red-400 max-w-3xl font-light leading-relaxed">
        {description}
      </p>

      {/* Visual Hint for Scrolling */}
      <div className="absolute bottom-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </div>
  );
}
