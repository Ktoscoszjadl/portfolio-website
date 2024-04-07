"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TapButton";
import WorkCard from "./WorkExperienceInput";
import Skills from "./Skills";
import Education from "./Education"
import WorkExperience from "./WorkExperience";

const TAB_DATA = [
  {
    title: "My skills",
    id: "skills",
    content: (
      <Skills />
    ),
  },
  {
    title: "My education",
    id: "education",
    content: (
      <Education />
    ),
  },
  {
    title: "My work experience",
    id: "work_experience",
    content: (
      <WorkExperience />
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              My skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              My education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("work_experience")}
              active={tab === "work_experience"}
            >
              {" "}My work experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
