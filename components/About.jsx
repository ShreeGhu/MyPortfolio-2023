import React from "react";
import Image from "next/image";
import Headshot from "../public/assets/headshot.png";
import FixedSentence from "../components/FixedSentence";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="w-80 h-80 m-auto shadow-xl shadow-blue-500 rounded-full flex justify-center object-cover hover:scale-105 ease-in-out duration-300 ">
          <Image
            src={Headshot}
            className="rounded-full w-80 h-80 object-cover "
            alt="/"
          />
        </div>
        <div className="col-span-2">
          <p className="uppercase pt-5 tracking-widest text-cyan-500 text-3xl text-bold">
            About Me
          </p>
          <p className="py-2 text-[#D1D1C7]">
            Namaste, I am Shreekant and I am from Nepal. I derive immense
            pleasure in crafting digital products that are hosted on the
            internet. My fascination with web development dates back to 2014
            when I was in the 8th grade. My interest was sparked by observing my
            brother&#39;s coding activities, which culminated in the development
            of a fully responsive website. From that point on, my passion for
            coding was ignited, and my journey as a developer began.
          </p>
          <p className="py-2 text-[#D1D1C7]">
            My education at Fairleigh Dickinson University has equipped me with
            a strong foundation in Information Technology. Throughout my
            academic journey, I've had the opportunity to engage in diverse
            projects that have enriched my practical skills. In terms of
            professional experience, I've undertaken several personal projects,
            which you can explore in detail in the Projects section below.
            Additionally, I have successfully completed HarvardX: CS50's
            Introduction to Programming with Python. You can verify my
            proficiency in Python programming by viewing my certificate here.
          </p>

          <p className=" text-[#D1D1C7]">
            I'm currently seeking{" "}
            <span className="text-teal-400">Software Developer positions </span>
            where I can continue to grow and contribute my skills to create
            accessible and inclusive digital solutions for companies. If you
            believe I'd be a good fit for your team, please feel free to reach
            out.
          </p>
        </div>
      </div>
      <div>
        <FixedSentence sentence="----------------> Developed By Shreekant Gumanju @" />
      </div>
    </div>
  );
};

export default About;
