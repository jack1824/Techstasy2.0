import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { use, useRef } from "react";

function Navbar() {
  const navbar = useRef(null);
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
  return (
    <nav
      ref={navbar}
      className=" flex justify-between gap-10  text-white text-lg font-semibold fixed w-full z-1000 bg-opacity-50 max-h-[10%]"
    >
      <img className="h-fit" id="staff" src="staff_code.svg" alt="" />
      <ul className="flex justify-around items-center gap-4 w-[80%] text-2xl font-bold text-shadow-md text-outline-sm">
        <li className="hover:text-amber-400 cursor-pointer">Home</li>
        <li className="hover:text-amber-400 cursor-pointer">Timeline</li>
        <li className="hover:text-amber-400 cursor-pointer">Tracks</li>
        <li className="hover:text-amber-400 cursor-pointer">Sponsers</li>
        <li className="hover:text-amber-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
