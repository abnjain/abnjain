import React from "react";
import Image from "next/image";
// import PortFolio from "../Components/Portfolio";

const Projects = () => {
  return (
    <main className="flex min-h-max justify-center py-8 mt-3 m-1">
      <div className="justify-center items-center">
        <h1 className="text-3xl text-center font-bold">Projects I <span className="text-custom-fireOpal">Developed</span> and <span className="text-custom-fireOpal">Designed</span></h1>
        {/* <PortFolio /> */}
        <div className="flex flex-wrap gap-16 mt-10 m-6 px-4 py-10 justify-center border-2 shadow-2xl shadow-neutral-50 rounded-xl max-w-7xl h-fit overflow-hidden no-scrollbar">
          {/* KUBER GROUP */}
          <div className="relative w-72 h-96 rounded-3xl group">
            <Image
              src="/Images/kuberGroup.png" // Path to your image file in the public directory
              alt="Stock Market Website"
              className="object-cover w-full h-full rounded-3xl"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="https://kgstocks.in"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              title="Visit Kuber Group Webapp A live stock broking firm project"
            >
              <span className="text-xl px-3 rounded-3xl group-hover:px-16">
                KUBER GROUP
              </span>
            </a>
          </div>
          {/* Shree Ram Tour & Travels */}
          <div className="relative w-72 h-96 rounded-3xl group">
            <Image
              src="/Images/ShreeRamTour&Travels.png" // Path to your image file in the public directory
              alt="Shree Ram Tour & Travels"
              className="object-cover w-full h-full rounded-3xl"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="https://shreeramtourandtravel.in/"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              title="A live project deployed for the tours and travel company did the SEO part for them as well."
            >
              <span className="text-xl px-3 rounded-3xl group-hover:px-7  ">
                Shree Ram Tour & Travels
              </span>
            </a>
          </div>
          {/* PORTFOLIO */}
          <div className="relative w-72 h-96 rounded-3xl group">
            <Image
              src="/Images/portfolio.png" // Path to your image file in the public directory
              alt="PORTFOLIO Website"
              className="object-cover w-full h-full rounded-3xl"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="/"
              // target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              title="Visit The Portfolio Website"
            >
              <span className="text-xl px-3 rounded-3xl text-custom-fireOpal group-hover:px-24">
                PORTFOLIO
              </span>
            </a>
          </div>
          {/* VVD (Vidhyavardhani) */}
          <div className="relative w-72 h-96 rounded-3xl group">
            <Image
              src="/Images/VVD(VidhyaVardhani).png" // Path to your image file in the public directory
              alt="VVD(VidhyaVardhani)"
              className="object-cover w-full h-full rounded-3xl"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="https://www.vidhyavardhani.in/home"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              title="A platform design and developed for an education revolution"
            >
              <span className="text-xl px-3 rounded-3xl group-hover:px-10">
                VVD(VidhyaVardhani)
              </span>
            </a>
          </div>
          {/* SHIKSHAK RECRUITMENT */}
          <div className="relative w-72 h-96 rounded-3xl group">
            <Image
              src="/Images/shikshakRecruitment.png" // Path to your image file in the public directory
              alt="Shikshak Recruitment Website"
              className="object-cover w-full h-full rounded-3xl"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="/https://github.com/abnjain/shikshakRecruitment"
              // target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              title="Visit Github Link of the Webapp (Since No Deplyment Yet)"
            >
              <span className="text-xl px-3 rounded-3xl group-hover:px-7">
                SHIKSHAK RECRUITMENT
              </span>
            </a>
          </div>
          {/* CHESS Game */}
          <div className="relative w-72 h-96 rounded-3xl group">
            <Image
              src="/Images/Screenshot1.png" // Path to your image file in the public directory
              alt="CHESS Game"
              className="object-cover w-full h-full rounded-3xl"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="https://abnjainchessgame-912a1526128c.herokuapp.com/"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              title="Visit Github Link of the Webapp (Since No Deplyment Yet)"
            >
              <span className="text-xl px-3 rounded-3xl group-hover:px-16">
                CHESS Game
              </span>
            </a>
          </div>
          {/* find-the-bubble GAME */}
          <div className="relative w-72 h-96 rounded-3xl group">
            <Image
              src="/Images/findTheBubble.png" // Path to your image file in the public directory
              alt="find-the-bubble GAME"
              className="object-cover w-full h-full rounded-3xl"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href=" https://findthebubble.netlify.app/"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              title="Visit Game"
            >
              <span className="text-xl px-3 rounded-3xl group-hover:px-10">
              find-the-bubble GAME
              </span>
            </a>
          </div>
          {/* NOTEPAD */}
          <div className="relative w-72 h-96 rounded-3xl group">
            <Image
              src="/Images/notepad.png" // Path to your image file in the public directory
              alt="NOTEPAD Website"
              className="object-cover w-full h-full rounded-3xl"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="https://github.com/ABNjain/notepad"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              title="Visit Github Link of the Webapp (Since No Deplyment Yet)"
            >
              <span className="text-xl px-3 rounded-3xl group-hover:px-24">
                NOTEPAD
              </span>
            </a>
          </div>
          {/* JobWallah */}
          <div className="relative w-72 h-96 rounded-3xl group">
            <Image
              src="/Images/" // Path to your image file in the public directory
              alt="JobWallah"
              className="object-cover w-full h-full rounded-3xl"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="https://github.com/abnjain/JobWallah"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              title="Visit Github Link of the Webapp (Since No Deplyment Yet)"
            >
              <span className="text-xl text-center px-3 rounded-3xl group-hover:px-16">
                JobWallah <br/> (in progress)
              </span>
            </a>
          </div> 
          {/* GREYT HR Portal */}
          <div className="relative w-72 h-96 rounded-3xl group">
            <Image
              src="/Images/" // Path to your image file in the public directory
              alt="GREYT HR Portal"
              className="object-cover w-full h-full rounded-3xl"
              width={500} // Width of the image
              height={300} // Height of the image
            />
            <a
              href="https://github.com/ABNjain/greytHR"
              target="_blank"
              className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur"
              title="Visit Github Link of the Webapp (Since No Deplyment Yet)"
            >
              <span className="text-xl text-center px-3 rounded-3xl group-hover:px-16">
                GREYT HR Portal <br/> (in progress)
              </span>
            </a>
          </div>        
        </div>
      </div>
    </main>
  );
};

export default Projects;
