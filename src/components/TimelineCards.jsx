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
              ? "30%"
              : window.innerWidth < 1024
              ? "10%"
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
      className="relative h-[100vw] sm:h-screen overflow-hidden"
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
      className="timeline-card shrink-0 w-[90vw] h-[100vw] sm:h-screen p-8 md:p-16 
                bg-white/10 backdrop-blur-md   
                flex flex-col justify-center items-center text-center"
    >
      {/* Top Meta Info */}
      <div className="mb-8">
        <span className="block text-xl md:text-2xl font-medium tracking-[0.2em] text-white/50 uppercase">
          {day}
        </span>
        <span className="block text-2xl md:text-3xl font-light text-white/80">
          {date}
        </span>
      </div>

      {/* Main Title - Scaled for impact */}
      <h3
        className="text-5xl md:text-7xl lg:text-8xl font-black text-white 
                 leading-tight tracking-tight max-w-5xl"
      >
        {title}
      </h3>

      {/* Divider Decor */}
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent my-10" />

      {/* Description - Larger body text */}
      <p className="text-xl md:text-3xl text-white/70 max-w-3xl font-light leading-relaxed">
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
