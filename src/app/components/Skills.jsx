import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="Teambuilding" type="soft" />
        <SkillsInput title="Flexible and Adaptable" type="soft"  />
        <SkillsInput title="Active Listening" type="soft"/>
        <SkillsInput title="Analytical and Critical Thinking" type="soft"/>
        <SkillsInput title="Fast learner" type="soft"/>
        <SkillsInput title="Ability to Work Under Pressure" type="soft"/>
        <SkillsInput title="Fluent English" type="soft"/>
        <SkillsInput title="Fluent Polish" type="soft"/>


        <SkillsInput title="Python" type="norm"/>
        <SkillsInput title="C/C++" type="norm"/>
        <SkillsInput title="C#" type="norm"/>
        <SkillsInput title="Javascript" type="norm"/>
        <SkillsInput title="Next.js" type="norm"/>
        <SkillsInput title="React" type="norm"/>
        <SkillsInput title="SQL" type="norm"/>
        <SkillsInput title="PostrgesSQL" type="norm"/>
        <SkillsInput title="MELVA Basic VI" type="norm"/>
        <SkillsInput title="PLC" type="norm"/>
        <SkillsInput title="Machine Learning" type="norm"/>
        <SkillsInput title="Raspberry Pi, Single Board Computers" type="norm"/>
        <SkillsInput title="Linux" type="norm"/>
        <SkillsInput title="Ability to read technical, electrical and hydraulic documentation" type="norm"/>

        <SkillsInput title="Version Control, Git , Github" type="tool"/>
        <SkillsInput title="Visual Studio Code" type="tool"/>
        <SkillsInput title="MS Office" type="tool"/>
        <SkillsInput title="Unity" type="tool"/>
        <SkillsInput title="Unreal Engine 5" type="tool"/>
        <SkillsInput title="PyTorch, NumPy, Pandas, TensorFlow, OpenCV" type="tool"/>
        <SkillsInput title="Jupyter Notebook" type="tool"/>
        <SkillsInput title="RT Toolbox 3,GX works 3 " type="tool"/>
        <SkillsInput title="Autodesk products" type="tool"/>
        <SkillsInput title="JetBrains products" type="tool"/>

      </div>
    </div>
  );
};

export default Skills;