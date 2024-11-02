import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import background1 from "../artifacts/icon21.png";
import About from "./About";
import pdf from "../artifacts/rohith_dandi_resume.pdf";

const Navbar = () => {
  const [Nav, setNav] = useState(false);

  const HandleNav = () => {
    setNav(!Nav);
  };

  return (
    <div
      className="relative flex flex-col w-full"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="flex-1 flex justify-evenly items-center h-20 sm:mt-40 mx-auto border-solid border-8 border-[#191919] text-[#f9f4f0] font-azeret bg-[#353535] w-full sm:w-[75%] lg:w-[75%]">
        <img
          className="object-cover p-4"
          src="https://see.fontimg.com/api/renderfont4/ZVd9K/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Um9oaXRoIGRhbmRp/rousset-bilast.png"
          alt="RTG"
          width="150"
        />
        <a className="hidden md:flex p-4" href="#about">
          About
        </a>
        <a className="hidden md:flex p-4" href="#projects">
          Projects
        </a>
        <a className="hidden md:flex p-4" href={pdf}>
          Resume
        </a>
        <a className="hidden md:flex p-4" href="#contact">
          Contact
        </a>
        <div onClick={HandleNav} className="flex md:hidden">
          {Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            Nav
              ? "flex flex-col fixed mt-20 right-0 top-0 w-[30%]  border-r border-r-gray-900 bg-black ease-out-in duration-300"
              : "fixed right-[-100%]"
          }
        >
          <a
            className="uppercase p-4"
            href="#about"
            onClick={(!Nav, HandleNav)}
          >
            About
          </a>
          <a
            className="uppercase p-4"
            href="#projects"
            onClick={(!Nav, HandleNav)}
          >
            Projects
          </a>
          <a className="uppercase p-4" href={pdf}>
            Resume
          </a>
          <a
            className="uppercase p-4"
            href="#contact"
            onClick={(!Nav, HandleNav)}
          >
            Contact
          </a>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Navbar;
