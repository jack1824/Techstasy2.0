import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const navbar = useRef(null);
  const navButtons = useRef([]);

  const navItems = [
    { name: "Home", image: "home.png", id: "#home" },
    { name: "Timeline", image: "timeline.png", id: "#timeline" },
    { name: "Tracks", image: "tracks.png", id: "#tracks" },
    { name: "Sponsors", image: "sponsors.png", id: "#sponsors", scale: "scale-92" },
    { name: "Contact", image: "contact.png", id: "#contact", gap: "-mx-2" },
  ];

  useGSAP(
    () => {
      // Logo entrance animation
      gsap.fromTo(
        "#staff",
        {
          x: -window.innerWidth,
          opacity: 0,
          scale: 0.95,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        }
      );

      // Floating animation for each nav button
      navButtons.current.forEach((button, index) => {
        const duration = 3 + index * 0.2;
        const floatDistance = 10 + index * 2;

        gsap.fromTo(
          button,
          {
            y: -20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2 + index * 0.1,
          }
        );

        // Continuous floating animation
        gsap.to(button, {
          y: floatDistance,
          duration: duration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    },
    { scope: navbar }
  );

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navbar}
      className="flex justify-between items-center py-4 text-white text-lg font-semibold fixed w-full z-50"
    >
      {/* Logo - Left Side */}
      <a href="#" className="">
        <img
          className="h-fit w-[40vw] md:w-auto"
          id="staff"
          src="staff_code.png"
          alt="Staff Code Logo"
        />
      </a>

      {/* Floating Navbar Buttons - Right Side */}
      <div className="hidden md:flex justify-end items-center gap-0 lg:gap-1 flex-1 mr-8">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.id}
            onClick={(e) => handleNavClick(e, item.id)}
            ref={(el) => (navButtons.current[index] = el)}
            className={`group relative cursor-pointer transition-transform duration-300 hover:scale-125 ${item.scale || ""} ${item.gap || ""}`}
            title={item.name}
          >
            <img
              src={`/navbar/${item.image}`}
              alt={item.name}
              className={`h-32 w-32 lg:h-48 lg:w-48 object-contain drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] ${item.scale || ""}`}
            />
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
