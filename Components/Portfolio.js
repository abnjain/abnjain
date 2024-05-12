import React from "react";

import mongo from "../public/Images/mongodb.png";
import express from "../public/Images/express.png";
import react from "../public/Images/react.png";
import node from "../public/Images/nodejs.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongo,
      name: "MongoDB",
      desc:"MongoDB-powered online bookstore system facilitating seamless book browsing, purchasing, and management.",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      desc:"Express.js project: Task Management App with RESTful APIs for seamless task organization and user authentication."
    },
    {
      id: 3,
      logo: react,
      name: "ReactJS",
      desc:"React.js project: Interactive Recipe Finder app offering dynamic search, filtering, and personalized recipe recommendations.",
    },
    {
      id: 4,
      logo: node,
      name: "NodeJS",
      desc:"Node.js project: Real-time Chat Application facilitating instant messaging, user authentication, and message encryption.",
    },
    
  ];
  
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold text-orange-700">Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, desc }) => (
            <div
              className="md:w-[300px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-200"
              key={id}
            >
              <img
                src={logo}
                className="w-[110px] h-[110px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-500">
                  {desc}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;