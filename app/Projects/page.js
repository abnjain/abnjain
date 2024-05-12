import React from "react";
import Image from "next/image";
// import PortFolio from "../Components/Portfolio";

const Projects = () => {
  return (
    <main className="flex min-h-max justify-center py-12">
      <div className="justify-center items-center">
        <h1 className="text-4xl text-center font-bold">Projects Page</h1>
        {/* <PortFolio /> */}
        <div className="flex flex-wrap gap-16 mt-10 px-4 py-10 justify-center border-2 shadow-2xl shadow-neutral-50 rounded-xl max-w-7xl overflow-hidden">
          <div className="relative w-72 h-96 rounded-3xl flex flex-col justify-center group">
            <Image
              src="/Images/findTheBubble.png" // Path to your image file in the public directory
              alt="find-the-bubble GAME"
              className="object-cover w-full h-full"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href=" https://findthebubble.netlify.app/"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent"
              title="Visit Example Website"
            >
              <span className="inline-block px-24 text-xl rounded-3xl group-hover:bg-red-700">
              find-the-bubble GAME
              </span>
            </a>
          </div>
          <div className="relative w-72 h-96 rounded-3xl flex flex-col justify-center group">
            <Image
              src="/Images/" // Path to your image file in the public directory
              alt="NOTEPAD Website"
              className="object-cover w-full h-full"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="https://github.com/ABNjain/notepad"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent"
              title="Visit Example Website"
            >
              <span className="inline-block px-24 text-xl rounded-3xl group-hover:bg-red-700">
                NOTEPAD
              </span>
            </a>
          </div>
          <div className="relative w-72 h-96 rounded-3xl flex flex-col justify-center group">
            <Image
              src="/Images/portfolio.png" // Path to your image file in the public directory
              alt="PORTFOLIO Website"
              className="object-cover w-full h-full"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="/"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent"
              title="Visit Example Website"
            >
              <span className="inline-block px-24 text-xl rounded-3xl group-hover:bg-red-700">
                PORTFOLIO
              </span>
            </a>
          </div>
          <div className="relative w-72 h-96 rounded-3xl flex flex-col justify-center group">
            <Image
              src="/Images/" // Path to your image file in the public directory
              alt="GREYT HR Portal"
              className="object-cover w-full h-full"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="https://github.com/ABNjain/greytHR"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent"
              title="Visit Example Website"
            >
              <span className="inline-block px-24 text-xl rounded-3xl group-hover:bg-red-700">
                GREYT HR Portal
              </span>
            </a>
          </div>
          <div className="relative w-72 h-96 rounded-3xl flex flex-col justify-center group">
            <Image
              src="/Images/" // Path to your image file in the public directory
              alt="Website"
              className="object-cover w-full h-full"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="#"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent"
              title="Visit Example Website"
            >
              <span className="inline-block px-24 text-xl rounded-3xl group-hover:bg-red-700">
                
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
