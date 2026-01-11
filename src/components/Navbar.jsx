import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const navbar = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(
    () => {
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

      gsap.fromTo(
        ".nav-item",
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
          delay: 0.3,
        }
      );
    },
    { scope: navbar }
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Home", "Timeline", "Tracks", "Sponsors", "Contact"];

  return (
    <nav
      ref={navbar}
      className="flex justify-between items-center py-3 text-white text-lg font-semibold fixed w-full z-50 "
    >
      {/* Logo - Complete Left */}
      <a href="#" className="">
        <img
          className="h-fit w-[40vw] md:w-auto "
          id="staff"
          src="staff_code.png"
          alt="Staff Code Logo"
        />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-end items-center gap-8 lg:gap-12 text-xl lg:text-2xl font-bold flex-1 mr-8">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="nav-item cursor-pointer transition-all duration-300 hover:scale-110"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-red-600 bg-clip-text text-transparent hover:from-yellow-300 hover:via-amber-400 hover:to-red-500 font-extrabold drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50 relative"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-red-600 transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-red-600 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-red-600 transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-72 bg-gradient-to-b from-black/95 via-gray-900/95 to-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-10 text-2xl font-bold">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer transition-all duration-300 hover:scale-110"
              onClick={toggleMenu}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-red-600 bg-clip-text text-transparent hover:from-yellow-300 hover:via-amber-400 hover:to-red-500 font-extrabold drop-shadow-[0_2px_12px_rgba(251,191,36,0.6)]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
