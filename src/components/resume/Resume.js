import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Welcome Here" des="My Resume" />
      </div>
      <div className="flex justify-center mt-10">
        <ul className="flex space-x-8">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi px-6 py-2 cursor-pointer`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi px-6 py-2 cursor-pointer`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
    </section>
  );
};

export default Resume;
