import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="mailto:priya.k.sekarmsd@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://github.com/kavipriyarupan">
              <ImGithub />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaPython />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiCanva />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
