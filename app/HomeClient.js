"use client";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import styles from "./page.module.css";
import Modal from "./Modal";
import emailjs from '@emailjs/browser';
import Link from "next/link";

import { SiMongodb, SiExpress, SiPhp, SiWordpress } from "react-icons/si";
import { FaReact, FaJsSquare, FaNodeJs, FaJava } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";

const HomeClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal  = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sendEmail = (formData) => {
    const templateParams = {
      ...formData,
      sender_email: formData.email,
    };
    emailjs
      .send("service_zln2j7l", "template_tmjormr", templateParams, "RTOt4G16KUG0gULNa")
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          alert("Email successfully sent!");
          setIsModalOpen(false);
        },
        (error) => {
          console.log("Email sending error: ", error);
          alert("Failed to send email, please try again later.");
        }
      );
  };

  return (
    <main className="flex min-h-max m-3 justify-center flex-col items-center">
      <div className="text-4xl font-bold mt-20 mb-12">
        <h1 className="text-center mb-3">
          Hello from <span className="text-custom-fireOpal">Abhinav</span>
        </h1>
        <div className="flex flex-wrap justify-center">
          <h2 className="inline-block">I am a </h2>
          <h2 className="inline-block text-center ml-2">
            <TypeAnimation
              sequence={[
                "Web Designer",    1000,
                "Web Developer",   1000,
                "Coder",           1000,
                "Entrepreneur",    1000,
                "Freelancer",      1000,
                "SEO Specialist",  1000,
                "Cloud Developer", 1000,
                "DevOps Engineer", 1000,
                "System Designer", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-custom-fireOpal"
            />
          </h2>
        </div>
      </div>

      <div
        id="contact"
        className="flex justify-center items-center gap-10 md:gap-24 flex-col sm:flex-row scroll-mt-28"
      >
        <button
          type="button"
          onClick={openModal}
          className={`py-3 px-4 bg-gradient-to-br from-custom-fireOpal to-custom-blueGreen text-center text-white rounded-3xl shadow-2xl ${styles.buttonCustomShadow} transform transition-all duration-100 hover:scale-100 sm:hover:scale-125 hover:shadow-none`}
        >
          Hire Me
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={sendEmail} />
        <a
          href="/resume.pdf"
          download="Abhinav_Jain_Resume.pdf"
          className={`py-1 px-1 bg-gradient-to-r from-custom-fireOpal to-custom-blueGreen text-center text-white rounded-3xl shadow-md ${styles.buttonCustomShadow2} transform transition-all duration-100 hover:scale-100 sm:hover:scale-125 hover:shadow-none`}
        >
          <span className="py-2 px-4 block bg-black rounded-3xl">
            Download CV
          </span>
        </a>
      </div>

      <div className="proficiency my-16 space-y-10 flex flex-col items-center justify-center">
        <p className="projectLink text-center font-bold text-2xl">
          Want to see my work? Move ahead to the{" "}
          <Link href="/Projects" className="mb-6 px-3 text-custom-fireOpal hover:uppercase">
            Projects
          </Link>{" "}
          section.
        </p>
        <p className="ptag text-center font-bold text-2xl">
          Proficient Developer Using
        </p>
        <div className="skillLogos flex flex-wrap justify-center gap-24">
          {[
            { Icon: FaJava,      label: "Java"       },
            { Icon: SiMongodb,   label: "MongoDB"    },
            { Icon: SiExpress,   label: "Express"    },
            { Icon: FaReact,     label: "React"      },
            { Icon: FaNodeJs,    label: "Node.js"    },
            { Icon: FaJsSquare,  label: "JavaScript" },
            { Icon: SiPhp,       label: "PHP"        },
            { Icon: SiWordpress, label: "WordPress"  },
            { Icon: TbSeo,       label: "SEO"        },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 md:gap-1">
              <Icon className="text-5xl hover:scale-150 transition-transform" />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomeClient;
