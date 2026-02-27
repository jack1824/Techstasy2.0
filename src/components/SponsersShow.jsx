import React from "react";

const sponsors = {
  gold: [
    {
      name: "codeBlocks",
      logo: "/Sponsors/codeBlocksSponsors.png",
      link: "https://www.codeblocks.com",
    },
  ],
  silver: [
    {
      name: "OSEN",
      logo: "/Sponsors/OsenSponser.png",
      link: "https://osen.co.in/",
    },
  ],
  platform: [
    {
      name: "UptoSkills",
      logo: "/Sponsors/UptoSkillSponser.png",
      link: "https://www.uptoskills.com/",
    },
  ],
  general: [
    {
      name: "Bitcoin Bharat",
      logo: "/Sponsors/btcbharatSponser.png",
      link: "https://btcbharat.com/",
    },
    {
      name: "Commudle",
      logo: "/Sponsors/CommudleSponser.png",
      link: "https://commudle.com/",
    },
    {
      name: "XYZ",
      logo: "/Sponsors/xyzSponser.jpeg",
      link: "https://xyz.com/",
    },
    {
      name: "Code",
      logo: "/Sponsors/codeSponser.png",
      link: "https://code.com/",
    },
  ],
};

function SponsersShow() {
  return (
    <div className="w-full text-center flex flex-col justify-center items-center gap-20 py-10 text-orange-500">
      <div className="w-full h-auto flex justify-center flex-col items-center gap-10 py-5 flex-wrap">
        <h1 className="text-[5vw] md:text-3xl font-bold">GOLD SPONSOR</h1>
        <div className=" h-auto flex justify-center items-center ">
          {sponsors.gold.map((sponser) => (
            <a href={sponser.link} target="_blank" rel="noopener noreferrer">
              <img
                className="w-[20vh] md:w-[20vw]"
                src={sponser.logo}
                alt={sponser.name}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full h-auto flex justify-center flex-col items-center gap-10 py-5 flex-wrap">
        <h1 className="text-[5vw] md:text-3xl font-bold">SILVER SPONSOR</h1>
        <div className=" h-auto flex justify-center items-center ">
          {sponsors.silver.map((sponser) => (
            <a href={sponser.link} target="_blank" rel="noopener noreferrer">
              <img
                className="w-[20vh] md:w-[20vw]"
                src={sponser.logo}
                alt={sponser.name}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center gap-10 py-5 flex-wrap">
        <h1 className="text-[5vw] md:text-3xl font-bold">Platform Partner</h1>
        <div className=" h-auto flex justify-center items-center ">
          {sponsors.platform.map((sponser) => (
            <a href={sponser.link} target="_blank" rel="noopener noreferrer">
              <img
                className="w-[20vh] md:w-[20vw]"
                src={sponser.logo}
                alt={sponser.name}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full flex-col h-auto flex justify-center items-center gap-10 py-5 flex-wrap">
        <h1 className="text-[5vw] md:text-3xl font-bold">Sponsors</h1>
        <div className="flex gap-10 justify-center items-center ">
          {sponsors.general.map((sponser) => (
            <a href={sponser.link} target="_blank" rel="noopener noreferrer">
              <img
                className="w-[15vh] md:w-[15vw]"
                src={sponser.logo}
                alt={sponser.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SponsersShow;
