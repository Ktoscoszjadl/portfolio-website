import React from "react";

const WorkCard = ({ company, position, start, end, description }) => {
 return (
    <div className="bg-[#181818] rounded-lg p-4 max-w-sm mx-auto">
      <h3 className="text-xl font-bold text-white">{company}</h3>
      <p className="text-[#cedbe4] font-bold">{position}</p>
      <p className="text-[#c8d3db] font-sans">{start} - {end}</p>
      <p className="text-[#ADB7BE]">{description}</p>
    </div>
 );
};

export default WorkCard;
