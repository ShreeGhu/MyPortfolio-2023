import Image from "next/image";
import React from "react";
import spotify from "../public/assets/projects/spotify.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const portfolio2022 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={spotify}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-300 z-10 p-2">
          <h2 className="py-2">Spotify Landing Page Clone</h2>
          <h3>React.js / Tailwind CSS / HTML / APIs</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            This Spotify homepage is built using React and Tailwind CSS,
            showcasing advanced front-end development skills. I have implemented
            a responsive and visually appealing design, highlighting proficiency
            in crafting user interfaces with modern technologies. I have
            demonstrated adeptness in utilizing Tailwind CSS utility classes to
            streamline styling, emphasizing the ability to create sleek and
            efficient user interfaces.
          </p>
          <a
            href="https://spotify-clone-shree-gumanju.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/ShreeGhu/Spotify-Clone"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl bg-gray-800 shadow-gray-600 text-white rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 text-white" /> Javascript
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> APIs
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="hover:underline cursor-pointer text-2xl">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default portfolio2022;
