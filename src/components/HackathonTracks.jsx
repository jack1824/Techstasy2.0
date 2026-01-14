import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function HackathonTracks() {
  const tracks = [
    { id: 1, image: "/aiml.png", alt: "AI & ML" },
    { id: 2, image: "/webmobile.png", alt: "Web & Mobile" },
    { id: 3, image: "/health.png", alt: "Health Tech" },
    { id: 4, image: "/sustain.png", alt: "Sustainability" },
    { id: 5, image: "/cyber.png", alt: "Cybersecurity" },
    { id: 6, image: "/open.png", alt: "Open Innovation" },
  ];

  const hktracks = useRef(null);

  useGSAP(() => {
    if (!hktracks.current) return;

    const trackElements = hktracks.current.querySelectorAll(".tracks");

    // Create animation
    const EventTl = gsap.timeline({
      scrollTrigger: {
        trigger: hktracks.current,
        start: "top center", // More forgiving on mobile
        end: "bottom 20%",
        scrub: 1,
        // markers: true, // Keep false in production
      },
    });

    EventTl.fromTo(
      trackElements,
      {
        y: (index) => 30 + index * 10, // Slight stagger on Y
        opacity: 0,
        scale: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.08, // Faster stagger
      }
    );

    // CRITICAL: Refresh on resize to recalculate positions
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <div
        ref={hktracks}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl"
      >
        {tracks.map((track) => (
          <div
            key={track.id}
            className="tracks transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            // REMOVED: transition-all duration-300
          >
            <img
              src={track.image}
              alt={track.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HackathonTracks;
