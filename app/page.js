"use client";
import { TypeAnimation } from "react-type-animation";
import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <main className="flex min-h-max justify-center flex-col items-center">
        <div className="text-4xl font-bold mt-24 mb-8">
          <h1 className="text-center mb-3">Hello from Abhinav</h1>
          <div className="flex">
            <h2 className="inline-block">I am a </h2>
            <h2 className="inline-block ml-2">
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
        <div className="flex gap-6">
            <button className={`py-2 px-4 bg-blue-500 text-white rounded-3xl shadow-2xl ${styles.buttonCustomShadow} hover:bg-blue-600 transform transition-all duration-100 hover:scale-125`}>
            Hire Me
            </button>
            <button className={`py-1 px-1 bg-blue-500 text-white rounded-3xl shadow-md ${styles.buttonCustomShadow2} hover:bg-blue-600 transform transition-all duration-100 hover:scale-125`}>
              <span className="py-2 px-4 block bg-black rounded-3xl">Download CV</span>
            </button>
        </div>
      </main>
    </>
  );
};

export default Home;
