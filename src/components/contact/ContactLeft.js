import React from "react";

import { ImGithub } from "react-icons/im";
import { contactImg } from "../../assets/index";
import { SiGmail } from "react-icons/si";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Kavipriya</h3>
        <p className="text-lg font-normal text-gray-400">Frontend Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Lookout for the new challenges in the developing tech world
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 6381492057</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">priya.k.sekarmsd@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/kavipriyarupan">
              <ImGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:priya.k.sekarmsd@gmail.com">
              <SiGmail />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
