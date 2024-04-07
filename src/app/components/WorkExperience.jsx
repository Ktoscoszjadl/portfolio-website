import WorkCard from "./WorkExperienceInput";

const WorkExperience = () => {
  return (
    <div className="wrapper">
      <div className="flex gap-4 flex-wrap">
       
        <WorkCard company="Mitsubishi Electric" position="Technical Support Engineer" start="July 2023" end="June 2024" description=""/>
        <WorkCard company="Astor Sp. z o. o." position="Intership in Robotics" start="July 2022" end="August 2022" description="Maintained contemporary technical knowledge of engineering 
concepts.

Collaborated with senior engineers on complex projects.
Wrote clean, clear and well-tested code for various projects like 
configuration of a PLC controller and HMI display with a 
Kawaski robot ." />

      </div>
    </div>
  );
};

export default WorkExperience;