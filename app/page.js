"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import styles from "./page.module.css";
// import PortFolio from "@/Components/Portfolio";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";

const Home = () => {
  return (
    <>
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
                  "Web Designer",
                  1000,
                  "Web Developer",
                  1000,
                  "Coder",
                  1000,
                  "Entrepreneur",
                  1000,
                  "Freelancer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-custom-fireOpal"
              />
            </h2>
          </div>
        </div>
        <div className="flex justify-center gap-10 md:gap-24 flex-col sm:flex-row">
          <a
            // type="submit" href="/resume.pdf" download="Abhinav Jain Resume.pdf"
            className={`py-3 px-4 bg-gradient-to-br from-custom-fireOpal to-custom-blueGreen text-center text-white rounded-3xl shadow-2xl ${styles.buttonCustomShadow} hover:bg-blue-600 transform transition-all duration-100 hover:scale-125 hover:shadow-none`}
          >
            Hire Me
          </a>
          <a
            type="submit"
            href="/resume.pdf"
            download="Abhinav Jain Resume.pdf"
            className={`py-1 px-1 bg-gradient-to-r from-custom-fireOpal to-custom-blueGreen text-center text-white rounded-3xl shadow-md ${styles.buttonCustomShadow2} hover:bg-blue-600 transform transition-all duration-100 hover:scale-125 hover:shadow-none`}
          >
            <span className="py-2 px-4 block bg-black rounded-3xl">
              Download CV
            </span>
          </a>
        </div>
        <div className="my-20 space-y-10 flex flex-col items-center justify-center">
          <p className="text-center font-bold text-2xl">
            Proficient Developer Using
          </p>
          <div className="flex flex-wrap justify-center gap-24">
            <div className="flex flex-col items-center gap-3 md:gap-1">
              {" "}
              {/* Center vertically and horizontally */}
              <FaJava className="text-5xl" />
              <p>Java</p>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-1">
              {" "}
              {/* Center vertically and horizontally */}
              <SiMongodb className="text-5xl" />
              <p>Mongodb</p>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-1">
              {" "}
              {/* Center vertically and horizontally */}
              <SiExpress className="text-5xl" />
              <p>Express</p>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-1">
              {" "}
              {/* Center vertically and horizontally */}
              <FaReact className="text-5xl" />
              <p>React</p>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-1">
              {" "}
              {/* Center vertically and horizontally */}
              <FaNodeJs className="text-5xl" />
              <p>NodeJs</p>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-1">
              {" "}
              {/* Center vertically and horizontally */}
              <AiOutlineCode className="text-5xl" />
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div className="mt-8 mb-10 px-2 py-4 border-2 border-b-0 shadow-2xl shadow-neutral-50 rounded-xl rounded-b-none w-3/4 h-screen overflow-hidden">
          <p className="text-center text-2xl font-semibold text-Decration-line underline py-6">
            Here are Some Photos of ME
          </p>
          <section className="pt-8 pb-28 flex flex-wrap gap-4 overflow-y-scroll h-full justify-center no-scrollbar md:pb-20">
            <Image
              className="h-60 w-56 rounded-3xl object-contain"
              src="/Images/me4-removebg (1).png"
              width={500}
              height={300}
            />
            <div className="relative w-56 h-60 rounded-3xl justify-center group">
              <Image
                src="/Images/me.jpg" // Path to your image file in the public directory
                alt="My stead"
                className="object-cover w-full h-full rounded-3xl"
                width={500} // Width of the image
                height={300} // Height of the image
              />
              <a
                href="#"
                className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              >
                <span className="text-xl px-3 rounded-3xl group-hover:px-16">
                  My stead
                </span>
              </a>
            </div>
            <Image
              className="h-60 w-56 rounded-3xl object-cover"
              src="/Images/me1.jpeg"
              width={800}
              height={300}
            />
            <div className="relative w-56 h-60 rounded-3xl justify-center group">
              <Image
                src="/Images/me.jpg" // Path to your image file in the public directory
                alt="It ain’t me"
                className="object-cover w-full h-full rounded-3xl"
                width={500} // Width of the image
                height={300} // Height of the image
              />
              <a
                href="#"
                className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              >
                <span className="text-xl px-3 rounded-3xl group-hover:px-16">
                  It ain’t me
                </span>
              </a>
            </div>
            <div className="relative w-56 h-60 rounded-3xl justify-center group">
              <Image
                src="/Images/me.jpg" // Path to your image file in the public directory
                alt="Not ME"
                className="object-cover w-full h-full rounded-3xl"
                width={500} // Width of the image
                height={300} // Height of the image
              />
              <a
                href="#"
                className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              >
                <span className="text-xl px-3 rounded-3xl group-hover:px-16">
                  Not ME
                </span>
              </a>
            </div>
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me2.jpeg"
              width={500}
              height={300}
            />
            <div className="relative w-56 h-60 rounded-3xl justify-center group">
              <Image
                src="/Images/me.jpg" // Path to your image file in the public directory
                alt="Not mine"
                className="object-cover w-full h-full rounded-3xl"
                width={500} // Width of the image
                height={300} // Height of the image
              />
              <a
                href="#"
                className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              >
                <span className="text-xl px-3 rounded-3xl group-hover:px-16">
                  Not mine
                </span>
              </a>
            </div>
            <Image
              className="h-60 w-56 rounded-3xl object-cover"
              src="/Images/me3.jpeg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl object-contain"
              src="/Images/me4-removebg.png"
              width={500}
              height={300}
            />
          </section>
        </div>
        {/* <div>
          <PortFolio />
        </div> */}
      </main>
    </>
  );
};

export default Home;
