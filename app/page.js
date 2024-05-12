"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import styles from "./page.module.css";
import PortFolio from "@/Components/Portfolio";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaJava } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <main className="flex min-h-max justify-center flex-col items-center">
        <div className="text-4xl font-bold mt-24 mb-8">
          <h1 className="text-center mb-3">Hello from Abhinav</h1>
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
              />
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-24">
        <a type="submit" href="/resume.pdf" download="Abhinav Jain Resume.pdf"
            className={`py-2 px-4 bg-blue-500 text-white rounded-3xl shadow-2xl ${styles.buttonCustomShadow} hover:bg-blue-600 transform transition-all duration-100 hover:scale-125 hover:shadow-none`}
          >
            Hire Me
          </a>
          <a type="submit" href="/resume.pdf" download="Abhinav Jain Resume.pdf"
            className={`py-1 px-1 bg-blue-500 text-white rounded-3xl shadow-md ${styles.buttonCustomShadow2} hover:bg-blue-600 transform transition-all duration-100 hover:scale-125 hover:shadow-none`}
          >
            <span className="py-2 px-4 block bg-black rounded-3xl">
              Download CV
            </span>
            </a>
        </div>
        <div className="my-20 space-y-8">
          <p className="text-center font-bold text-2xl">I am Proficient in</p>
          <div className="flex flex-wrap justify-center gap-24">
            <FaJava className="text-5xl" />
            <SiMongodb className="text-5xl" />
            <SiExpress className="text-5xl" />
            <FaReact className="text-5xl" />
            <FaNodeJs className="text-5xl" />
          </div>
        </div>
        <div className="mt-8 mb-10 px-2 py-4 border-2 border-b-0 shadow-2xl shadow-neutral-50 rounded-xl rounded-b-none w-3/4 h-screen overflow-hidden">
          <p className="text-center text-2xl font-semibold text-Decration-line underline py-6">Here are Some Photos of ME</p>
          <section className="pb-20 flex flex-wrap gap-4 overflow-y-scroll h-full justify-center no-scrollbar">
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
              width={500}
              height={300}
            />
            <Image
              className="h-60 w-56 rounded-3xl"
              src="/Images/me.jpg"
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
