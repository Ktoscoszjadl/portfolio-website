import React from "react";

const EduInput = ({ title, school, time }) => {
 return (
    <div className="bg-[#181818] shadow-lg rounded-lg p-4 max-w-sm mx-auto">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-600">{school}</p>
      <p className="text-gray-500">{time}</p>
    </div>
 );
};

export default EduInput;
