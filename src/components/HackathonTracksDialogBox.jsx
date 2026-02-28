import React from "react";

function HackathonTracksDialogBox({ setOpenDialog, TrackinDialog }) {
  console.log(TrackinDialog);
  return (
    <div
  onClick={() => setOpenDialog(false)}
  className="w-full h-screen bg-black/40 backdrop-blur-md fixed top-0 left-0 flex justify-center items-center z-50 p-4"
>
  <div className="bg-[#fc9599] bg-border-pattern text-white w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative animate-fadeIn">
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-[#fc9599] bg-box-pattern text-white w-full rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative animate-fadeIn"
    >
      {/* Close Button */}
      <button
        onClick={() => setOpenDialog(false)}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-black hover:text-white text-lg sm:text-xl"
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-3 sm:mb-4 md:mb-6 leading-snug">
        {TrackinDialog.title}
      </h2>

      {/* Description */}
      <p className="text-black text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-loose text-center sm:text-left">
        {TrackinDialog.description}
      </p>
    </div>
  </div>
</div>
  );
}

export default HackathonTracksDialogBox;
