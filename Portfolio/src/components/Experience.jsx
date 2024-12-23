import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import mongo from "../assets/mongo.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/node js.png";
import oracledb from "../assets/oracle db.png";
import react from "../assets/react.png";
import springboot from "../assets/Spring.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "Javascript",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: mongo,
      title: "MongoDb",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: oracledb,
      title: "Oracle DataBase",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: springboot,
      title: "SpringBoot",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
    id="experience"
      name="Experience"
      className="bg-gradient-to-b to-black from-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex-col justify-center w-full h-full text-center">
        <div>
          <p className="text-4xl font-bold border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
