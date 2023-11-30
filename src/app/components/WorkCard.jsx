import React from "react";

const WorkCard = ({ company, position, start, end, description }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden">
      <div className="h-52 md:h-72 rounded-t-xl relative">
        <h5 className="text-xl font-sans mb-2">{company}</h5>
        <p className="text-[#ADB7BE] mb-2">{position}</p>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <p className="text-[#ADB7BE]">{start}</p>
        <p className="text-[#ADB7BE]">{end}</p>
      </div>
    </div>
  );
};

export default WorkCard;