import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function HackathonTracks() {
  const tracks = [
    { id: 1, image: "/aiml.png", alt: "AI & ML" },
    { id: 2, image: "/webmobile.png", alt: "Web & Mobile" },
    { id: 3, image: "/health.png", alt: "Health Tech" },
    { id: 4, image: "/sustain.png", alt: "Sustainability" },
    { id: 5, image: "/cyber.png", alt: "Cybersecurity" },
    { id: 6, image: "/open.png", alt: "Open Innovation" },
  ];

  useGSAP(() => {
    const EventTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#HKtracks",
        start: `top 70%`,
        end: "bottom bottom",
        scrub: true,
        toggleActions: "play none none none",
        // markers: true, // Remove in production
      },
    });
    EventTl.fromTo(
      "#HKtracks div",
      {
        x: (i) => (i === 0 ? -200 : 200), // Less extreme starting position
        opacity: 0,
        scale: 0.8,
        rotationY: (i) => (i === 0 ? -15 : 15), // Subtle 3D effect
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        ease: "back.out(1.2)", // Slight overshoot for energy
        stagger: 0.5,
      }
    );
  });

  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <div
        id="HKtracks"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl"
      >
        {tracks.map((track) => (
          <div
            key={track.id}
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
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
