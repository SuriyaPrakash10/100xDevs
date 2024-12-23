import React from "react";
import pic from "../assets/LinkedinPic.jpg";
import { MdKeyboardArrowRight  } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div
    id="home"
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 flex items-center justify-center" 
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center justify-center md:flex-row">
        <div className="flex flex-col justify-center h-full md:items-start items-center text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore reprehenderit voluptate animi nam accusamus quis, vero ipsam aspernatur dolor.
          </p>

          <div>
            <Link to='portfolio' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"> Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight  size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={pic}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
