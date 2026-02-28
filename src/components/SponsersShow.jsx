import React from "react";
import FourSponsors from "./FourSponsors";

const sponsors = [
  {
    name: "codeBlocks",
    logo: "/sponsor/Top3_sponsors.png",
    link: "https://www.codingblocks.com",
  },
];

function SponsersShow() {
  return (
    <div className="w-full text-center flex flex-col justify-center items-center gap-8 py-10 text-orange-500">
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-full flex justify-center items-center">
          {sponsors.map((sponsor) => (
            <a key={sponsor.name} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="w-full">
              <img
                className="w-full "
                src={sponsor.logo}
                alt={sponsor.name}
              />
              
                <FourSponsors/>
              
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SponsersShow;
