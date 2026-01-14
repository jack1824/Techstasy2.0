import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function EventCards() {
  const events = [
    {
      id: 1,
      name: "Hackstasy",
      image: "/Hackstasy.png",
      link: "/hackstasy",
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

  const handleClick = (link) => {
    console.log("Navigate to:", link);
    // window.location.href = link;
  };

  useGSAP(() => {
    const EventTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#eventBtns",
        start: "top 70%",
        end: "top 30%",
        scrub: 1,
        toggleActions: "play none none none",
        // markers: true, // Remove in production
      },
    });

    EventTl.fromTo(
      "#eventBtns button",
      {
        x: (i) => (i % 2 === 0 ? "-30%" : "30%"), // Percentage-based for responsiveness
        opacity: 0,
        scale: 0.85,
        rotationY: (i) => (i % 2 === 0 ? -10 : 10),
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15, // Much smaller stagger for scrub animations
      }
    );
  });

  return (
    <div className="w-full flex justify-center items-center py-20">
      <div
        id="eventBtns"
        className="grid grid-cols-2 gap-4 md:gap-8 max-w-5xl px-4"
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
          </button>
        ))}
      </div>
    </div>
  );
}

export default EventCards;
