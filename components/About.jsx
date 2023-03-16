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
            Currently, I am in my fourth year of pursuing a Bachelor&#39;s
            degree in Information Technology in Canada. Throughout my academic
            journey, I have been fortunate enough to participate in various
            projects. My primary objective at present is to continuously develop
            my skills and create accessible and inclusive digital solutions for
            companies. Although I am most adept in creating front-end
            applications with HTML, CSS, JavaScript, and React, I am a fast
            learner and capable of adapting to new technologies as needed. In my
            view, a great developer is not restricted to a specific language,
            but instead, chooses the most suitable tool for the task at hand.
          </p>
          <p className=" text-[#D1D1C7]">
            As a fourth-year student, I am actively seeking{" "}
            <span className="text-teal-400">
              Full-Stack Web Development positions
            </span>
            . Should there be a vacancy that aligns with my skills and
            aspirations, kindly reach out to me.
          </p>
        </div>
      </div>
      <div>
        <FixedSentence sentence="----------------> Developed By Shreekant Gumanju @ " />
      </div>
    </div>
  );
};

export default About;
