import React, { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Navbar() {
  const navbar = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        "#staff",
        {
          x: (i) => (i === 0 ? -window.innerWidth : window.innerWidth),
          opacity: 0,
          scale: 0.95,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=1"
      );
      gsap.fromTo(
        "nav ul li",
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=1"
      );
    },
    { scope: navbar }
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Home", "Timeline", "Tracks", "Sponsers", "Contact"];

  return (
    <>
      <nav
        ref={navbar}
        className="flex justify-between gap-4 md:gap-10 text-white text-lg font-semibold fixed w-full z-[1000] bg-opacity-50 max-h-[10%]"
      >
        <a href="#">
          <img className="h-fit w-12 md:w-auto" id="staff" src="staff_code.svg" alt="" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-around items-center gap-4 w-[80%] text-2xl font-bold text-shadow-md text-outline-sm">
          {navItems.map((item) => (
            <li key={item} className="hover:text-amber-400 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 mr-4 z-[1001]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 z-[999] md:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <ul className="flex flex-col justify-center items-center h-full gap-8 text-3xl font-bold text-white">
          {navItems.map((item, index) => (
            <li
              key={item}
              className="hover:text-amber-400 cursor-pointer transform transition-all duration-300"
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMenuOpen ? 1 : 0,
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;

