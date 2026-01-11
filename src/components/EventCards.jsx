import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function EventCards() {
  const events = [
    {
      id: 1,
      name: "Hackstasy",
      image: "/Hackstasy.png",
      link: "/hackstasy", //add link here
    },
    {
      id: 2,
      name: "Design Forge",
      image: "/design_forge.png",
      link: "/design-forge",
    },
    {
      id: 3,
      name: "Prompt Rachna",
      image: "/promt_rachna.png",
      link: "/prompt-rachna",
    },
    {
      id: 4,
      name: "Tech Manthan",
      image: "/tech_manthan.png",
      link: "/tech-manthan",
    },
  ];

  //idhar hi links add krne hai
  const handleClick = (link) => {
    // Future: Use react-router navigate here
    console.log("Navigate to:", link);
    // window.location.href = link;
  };

  useGSAP(() => {
    const EventTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#eventBtns",
        start: `top 60%`,
        end: "bottom center",
        scrub: true,
        toggleActions: "play none none none",
      },
    });
    EventTl.fromTo(
      "#eventBtns button",
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
    <div className="w-full flex justify-center items-center py-20">
      <div
        id="eventBtns"
        className="grid grid-cols-2 gap-6 md:gap-30 max-w-5xl px-4"
      >
        {events.map((event) => (
          <button
            key={event.id}
            onClick={() => handleClick(event.link)}
            className="relative rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-auto object-cover"
            />
            {/* Hover overlay */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default EventCards;
