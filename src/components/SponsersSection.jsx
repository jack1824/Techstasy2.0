import React from "react";



function SponsersSection() {
  return (
    <div id="sponsors">
      <img
        src="https://res.cloudinary.com/dgo97ti5u/image/upload/v1768928918/cherry_blossom_a6f8j1.png"
        className="w-full h-auto object-cover object-top"
        alt="Cherry Blossom"
      />
      <div className="w-full h-auto flex justify-center items-center py-10 bg-white/10 backdrop-blur-md">
        {/* <img
          src="/comingsoon.png"
          className="w-[25%] h-auto object-contain"
          alt="Coming Soon"
        /> */}
       
      </div>
    </div>
  );
}

export default SponsersSection;
