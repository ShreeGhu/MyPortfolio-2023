import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white-500">
            {/* LET&#39;S BUILD SOMETHING TOGETHER */}
            YOUR LIMITATION - IT&#39;S ONLY YOUR IMAGINATION
          </p>
          <h1 className="py-4 text-cyan-500">
            Hi, I&#39;m <span className="text-[#D1D1C7]"> Shreekant</span>
          </h1>
          <h1 className="py-2 text-teal-400">A Full-Stack Web Developer</h1>
          <p className="py-4 text-[#D1D1C7] sm:max-w-[70%] m-auto">
            I&#39;m a proficient and versatile IT programmer, known for my
            analytical skills and diligent work ethic.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/shreekant-gumanju/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full bg-blue-800 shadow-lg hover:shadow-blue-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/ShreeGhu"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg bg-[#171515] hover:shadow-[#171515] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-[#00ACC1] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://www.instagram.com/shree_gumanju/">
              <div className="rounded-full shadow-lg bg-gradient-to-br from-pink-600 to-yellow-600 hover:shadow-[#FF5722] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsInstagram />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
