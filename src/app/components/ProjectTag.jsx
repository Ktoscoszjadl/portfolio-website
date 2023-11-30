import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black bg-transparent bg-gradient-to-r from-[#0074D4] via-[#09FF87] to-[#FFD006]"
    : "text-[#ADB7BE] border-2 border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      <span >{name}</span>
    </button>
  );
};

export default ProjectTag;
