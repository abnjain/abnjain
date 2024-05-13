import React from "react";
import Image from "next/image";

import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
// import { FaTelegram } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="py-16 flex flex-wrap gap-5 justify-evenly items-center text-center text-xl">
        <div className="flex flex-col items-center">
        <Image 
            src="/Images/favicon.png"
            width={60}
            height={60}
            className="items-center"
          />
          <h4>&copy; 2024 All Rights Reserved</h4>
        </div>
        
        <div className="space-y-2">
          <h1>Socials</h1>
          <div className="flex gap-8 text-4xl items-center">
            <a className="text-3xl" href="https://www.linkedin.com/in/abnjain" target="_blank">
                {""}
                <FaLinkedin />
            </a>
            <a  href="https://github.com/abnjain" target="_blank">
                {""}
                <IoLogoGithub />
            </a>
            <a href="https://www.instagram.com/abnjain" target="_blank">
                {""}
                <AiFillInstagram /> 
            </a>
          </div>
        </div>

        <div>
          <h4>
            Build with &hearts; By{" "}
            <a className="text-Decration-line underline text-custom-fireOpal" href="/">
              abnjain
            </a>
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
