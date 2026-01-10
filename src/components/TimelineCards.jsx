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

function TimelineCards() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".timeline-card");

    const totalWidth = trackRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    const scrollDistance = totalWidth - windowWidth;

    gsap.to(trackRef.current, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      id="timeline-cards"
      className="relative -mt-32 sm:mt-0 min-h-[75vh] md:h-screen overflow-hidden translate-y-[-23rem] sm:translate-y-0"
    >
      <div ref={trackRef} className="flex flex-row h-full w-fit -translate-y-[-rem] sm:translate-y-0">
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
    <div className="timeline-card relative shrink-0 w-screen md:w-[90vw] h-[40vh] sm:h-[70vh] md:h-screen p-4 sm:p-8 md:p-16 pt-6 sm:pt-12 md:pt-24 pb-12 bg-white/10 backdrop-blur-md flex flex-col justify-start items-center text-center">
      <div className="mb-8">
        <span className="block text-xl md:text-2xl font-medium tracking-[0.2em] text-white/50 uppercase">
          {day}
        </span>
        <span className="block text-2xl md:text-3xl font-light text-white/80">
          {date}
        </span>
      </div>

      <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight max-w-5xl">
        {title}
      </h3>

      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent my-10" />

      <p className="text-base sm:text-xl md:text-3xl text-white/70 max-w-3xl font-light leading-relaxed px-4">
        {description}
      </p>

      <div className="absolute bottom-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </div>
  );
}
