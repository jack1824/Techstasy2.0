import { useRef } from "react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    title: "Registration Opens",
    description: "Start your journey by registering for the event.",
    date: "January 1, 2024",
    phase: "Phase 1",
  },
  {
    title: "Workshop Sessions",
    description: "Participate in various workshops to enhance your skills.",
    date: "February 15, 2024",
    phase: "Phase 2",
  },
  {
    title: "Hackathon Begins",
    description: "Kick off the hackathon and start building your projects.",
    date: "March 10, 2024",
    phase: "Phase 3",
  },
  {
    title: "Project Submission",
    description: "Submit your projects for evaluation.",
    date: "March 20, 2024",
    phase: "Phase 4",
  },
];

function TimelineCards({ TimelineRef }) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Respect reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      const cards = gsap.utils.toArray(".timeline-item");

      cards.forEach((card, index) => {
        // Stagger fade + slide animation on scroll enter
        gsap.from(card, {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate the connecting line
        const line = card.querySelector(".timeline-line");
        if (line) {
          gsap.from(line, {
            scaleY: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }

        // Animate the phase indicator
        const phase = card.querySelector(".phase-indicator");
        if (phase) {
          gsap.from(phase, {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    },
    { scope: TimelineRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8  overflow-hidden bg-[url(https://res.cloudinary.com/dgo97ti5u/image/upload/v1769880170/timeline_bg_reeaq3.png)] bg-contain bg-no-repeat  bg-bottom"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}

        {/* Timeline track */}
        <div className="relative">
          {/* Center line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                index={index}
                isLast={index === timelineData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, description, date, phase, index, isLast }) {
  const isEven = index % 2 === 0;

  return (
    <div className="timeline-item relative group" data-index={index}>
      {/* Mobile/Tablet layout (< md) */}
      <div className="md:hidden">
        <div className="relative pl-8 pb-12">
          {/* Vertical line connector */}
          {!isLast && (
            <div className="timeline-line absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-amber-500/40 to-transparent origin-top" />
          )}

          {/* Phase indicator dot */}
          <div className="phase-indicator absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-red-500 shadow-lg shadow-amber-500/50 ring-4 ring-black" />

          {/* Card content */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/50 transition-colors duration-300">
            <div className="mb-3">
              <span className="inline-block text-xs font-semibold tracking-widest text-amber-400 uppercase mb-1">
                {phase}
              </span>
              <p className="text-sm text-zinc-500">{date}</p>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
              {title}
            </h3>
            <p className="text-zinc-400 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/* Desktop layout (md+) - Alternating left/right */}
      <div className="hidden md:block">
        <div className="relative grid grid-cols-2 gap-8 items-center">
          {/* Left side */}
          <div className={`${isEven ? "text-right pr-12" : "opacity-0"}`}>
            {isEven && (
              <div className="inline-block text-left">
                <div className="   rounded-2xl p-8   transition-all duration-500 ">
                  <div className="mb-4">
                    <span className="inline-block text-l font-semibold tracking-widest text-amber-400 uppercase mb-2">
                      {phase}
                    </span>
                    <p className="text-sm text-black blur">{date}</p>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {title}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Center marker */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="phase-indicator relative">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-red-500 shadow-lg shadow-amber-500/50 ring-4 ring-black" />
              {/* Connecting line to next item */}
              {!isLast && (
                <div className="timeline-line absolute left-1/2 top-full w-px h-24 bg-gradient-to-b from-amber-500/40 to-transparent origin-top -translate-x-1/2" />
              )}
            </div>
          </div>

          {/* Right side */}
          <div className={`${!isEven ? "pl-12" : "opacity-0"}`}>
            {!isEven && (
              <div className="rounded-2xl p-8 transition-all duration-500 ">
                <div className="mb-4">
                  <span className="inline-block text-l font-semibold tracking-widest text-amber-400 uppercase mb-2">
                    {phase}
                  </span>
                  <p className="text-sm text-black blur">{date}</p>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  {title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineCards;
