import React from "react";

function HackathonTracksDialogBox({ setOpenDialog, TrackinDialog }) {
  console.log(TrackinDialog);
  return (
    <div
      onClick={() => setOpenDialog(false)}
      className="w-full h-screen bg-black/40 backdrop-blur-md fixed top-0 left-0 flex justify-center items-center z-50 p-4"
    >
      <div className="bg-[#fc9599] bg-border-pattern    text-white w-[70%] rounded-3xl shadow-2xl p-6 md:p-10 relative animate-fadeIn">
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-[#fc9599] bg-box-pattern    text-white w-full rounded-3xl shadow-2xl p-6 md:p-10 relative animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={() => setOpenDialog(false)}
            className="absolute top-4 right-4 text-black hover:text-white text-xl"
          >
            ✕
          </button>

          {/* Image */}
          {/* <div className="flex justify-center mb-6">
          <img
            src={TrackinDialog.image}
            alt={TrackinDialog.alt}
            className="w-28 h-28 md:w-36 md:h-36 object-contain"
          />
        </div> */}

          {/* Title */}
          <h2 className="text-3xl font-bold text-black text-center mb-4">
            {TrackinDialog.title}
          </h2>

          {/* Short Description */}
          {/* <p className="text-center text-black/50 mb-4">
            {TrackinDialog.shortDescription}
          </p> */}

          {/* Detailed Description */}
          <p className="text-black mb-6 text-sm md:text-base leading-relaxed">
            {TrackinDialog.description}
          </p>

          {/* Difficulty */}
          {/* <div className="mb-4">
          <span className="font-semibold text-indigo-400">
            Difficulty Level:
          </span>{" "}
          {TrackinDialog.difficulty}
        </div> */}

          {/* Skills */}
          {/* <div>
          <span className="font-semibold text-black/80">
            Recommended Skills:
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {TrackinDialog.recommendedSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#e94330]/20 border border-[#e94330]/40 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default HackathonTracksDialogBox;
