import React from "react";

const WorkCard = ({ company, position, start, end, logoUrl }) => {
 return (
  <div className="bg-[#181818] rounded-lg p-4 max-w-sm mx-auto h-[300px]">
  <img src={logoUrl} alt={company} className="w-full h-1/2 object-cover" />
  <div className="h-1/2 p-4">
    <h3 className="text-xl font-bold text-white mb-2">{company}</h3>
    <p className="text-lg font-semibold text-[#cedbe4] leading-6 tracking-wide mb-1">{position}</p>
    <p className="text-base font-medium text-[#c8d3db] leading-7 tracking-tight">{start} - {end}</p>
  </div>
</div>
 );
};

export default WorkCard;
