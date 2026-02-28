import React from "react";
import FourSponsors from "./FourSponsors";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const sponsors = [
  {
    name: "codeBlocks",
    logo: "/sponsor/Top3_sponsors.png",
    link: "https://www.codingblocks.com",
  },
];

function SponsersShow() {
  useGSAP(() => {
    gsap.to("#Logos", {
      y: -25,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });
  return (
    <div className="w-full text-center flex flex-col justify-center items-center gap-8 py-10 text-orange-500">
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-full flex justify-center items-center">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <img className="w-full " src={sponsor.logo} alt={sponsor.name} />

              <FourSponsors className="hidden md:block w-screen" />

              <div className="md:hidden flex w-full justify-center items-center gap-8 mt-10 flex-wrap-reverse">
                <img
                  className="w-1/4"
                  src="/sponsor/BITCOIN BHARAT.svg"
                  alt=""
                />
                <img className="w-1/4" src="/Sponsors/xyzSponser.jpeg" alt="" />
                <img className="w-1/4" src="/Sponsors/codeSponser.png" alt="" />
                <img className="w-1/4" src="/sponsor/commudle.svg" alt="" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SponsersShow;
