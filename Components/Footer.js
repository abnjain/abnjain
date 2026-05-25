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
      <footer className="pb-12 flex flex-wrap gap-5 justify-evenly items-center text-center text-xl space-y-4">
        <div className="flex flex-col items-center">
        <Image
            src="/Images/favicon.png"
            alt="Abhinav Jain (abnjain) — Full Stack Developer & Designer"
            width={60}
            height={60}
            loading="lazy"
            className="items-center"
          />
          <h2>&copy; 2025 All Rights Reserved</h2>
        </div>
        
        <div className="space-y-2">
          <h1>Socials</h1>
          <div className="flex gap-8 text-4xl items-center">
            <a className="text-3xl" href="https://www.linkedin.com/in/abnjain" target="_blank" aria-label="Go to abnjain's LinkedIn Profile">
                {""}
                <FaLinkedin />
            </a>
            <a  href="https://github.com/abnjain" target="_blank" aria-label="Go to abnjain's GitHub Profile">
                {""}
                <IoLogoGithub />
            </a>
            <a href="https://www.instagram.com/abnjain" target="_blank" aria-label="Go to abnjain's Instagram Profile">
                {""}
                <AiFillInstagram /> 
            </a>
          </div>
        </div>

        <div>
          <h2>
            Build with &hearts; By{" "}
            <a className="text-Decration-line underline text-custom-fireOpal" href="/">
              abnjain
            </a>
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
