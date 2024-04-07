import React from "react";

const EduInput = ({ title, school, time }) => {
  return (
     <div className="hexagon">
       <div className="content">
         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
         <p className="text-lg font-semibold text-[#cedbe4] leading-6 tracking-wide mb-1">{school}</p>
         <p className="text-base font-medium text-[#c8d3db] leading-7 tracking-tight">{time}</p>
       </div>
     </div>
  );
 };

export default EduInput;
