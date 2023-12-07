import React from "react";

const SkillsInput = ({ title, type }) => {
  // Define a mapping of skill types to border colors
  const borderColorMap = {
    diff: "border-slate-600",
    soft: "border-[#09FF87]",
    norm: "border-[#0074D4]",
    tool: "border-[#FFD006]",
  };

  // Determine the border color based on the type
  const borderColor = borderColorMap[type] || "border-slate-600";

  return (
    <p className={`border ${borderColor} px-6 py-2 text-ml tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-white hover:bg-black rounded-lg duration-300`}>
      {title}
    </p>
  );
};

export default SkillsInput;