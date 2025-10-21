import React from "react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      name: "KUBER GROUP",
      img: "/Images/kuberGroup.png",
      link: "https://kgstocks.in",
      desc: "Visit Kuber Group Webapp — a live stock broking firm project",
      textColor: "",
    },
    {
      name: "Shree Ram Tour & Travels",
      img: "/Images/ShreeRamTour&Travels.png",
      link: "https://shreeramtourandtravel.in/",
      desc: "A live project deployed for a tours and travel company (with SEO work)",
      textColor: "",
    },
    {
      name: "PORTFOLIO",
      img: "/Images/portfolio.png",
      link: "/",
      desc: "Visit my Portfolio Website",
      textColor: "text-custom-fireOpal",
    },
    {
      name: "VVD(VidhyaVardhani)",
      img: "/Images/VVD(VidhyaVardhani).png",
      link: "https://vvdlive.com/",
      desc: "A platform designed and developed for an education revolution",
      textColor: "",
    },
    {
      name: "CHESS Game",
      img: "/Images/Screenshot1.png",
      link: "https://chess.abnjain.me/",
      desc: "Live Chess game hosted on Heroku",
      textColor: "",
    },
    {
      name: "find-the-bubble GAME",
      img: "/Images/findTheBubble.png",
      link: "https://ftb-game.abnjain.me/",
      desc: "A fun web game built with React",
      textColor: "",
    },
    {
      name: "NOTEPAD",
      img: "/Images/notepad.png",
      link: "https://notepad.abnjain.me/",
      desc: "Visit the link of the Notepad Webapp",
      textColor: "",
    },
    {
      name: "SHIKSHAK RECRUITMENT",
      img: "/Images/shikshakRecruitment.png",
      link: "https://shikshak.abnjain.me/",
      desc: "Visit the link of the Webapp (since no deployment yet)",
      textColor: "",
    },
    {
      name: "JobWallah (in progress)",
      // img: "/Images/jobwallah.png",
      img: "",
      link: "https://github.com/abnjain/JobWallah",
      desc: "Job Portal Webapp — in progress",
      textColor: "",
    },
    {
      name: "GREYT HR Portal (in progress)",
      img: "",
      // img: "/Images/greytHR.png",
      // link: "https://hrms.abnjain.me/",
      gitlink: "https://github.com/abnjain/GreytHR",
      link: "https://github.com/abnjain/GreytHR",
      desc: "HR management system — in progress",
      textColor: "",
    },
  ];

  return (
    <main className="flex min-h-max justify-center py-8 mt-3 m-1">
      <div className="justify-center items-center">
        <h1 className="text-3xl text-center font-bold">
          Projects I <span className="text-custom-fireOpal">Developed</span> and{" "}
          <span className="text-custom-fireOpal">Designed</span>
        </h1>

        <div className="flex flex-wrap gap-16 mt-10 m-6 px-4 py-10 justify-center border-2 shadow-2xl shadow-neutral-50 rounded-xl max-w-7xl h-fit overflow-hidden no-scrollbar">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-72 h-96 rounded-3xl group overflow-hidden"
            >
              <Image
                src={project.img}
                alt={project.name}
                className="object-cover w-full h-full rounded-3xl"
                width={500}
                height={300}
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex justify-center items-center bg-transparent group-hover:backdrop-blur transition-all duration-300"
                title={project.desc}
              >
                <span
                  className={`text-xl px-3 rounded-3xl text-center transition-all duration-300 ${project.textColor} group-hover:px-12`}
                >
                  {project.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
