import EduInput from "./EduInput";

const Education = () => {
  return (
    <div className="wrapper">
      <div className="flex gap-4 flex-wrap">
       
        <EduInput title="Bachelor of Engineering in the field Automation and Robotics" school="Cracows University of Technology" time="February 2023"/>
        <EduInput title="Masters of Engineering in the field Automation and Robotics" school="Cracows University of Technology" time="expected June 2024"/>

      </div>
    </div>
  );
};

export default Education;