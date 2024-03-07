import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import Netlify from "../public/assets/skills/netlify.png";
import Wordpress from "../public/assets/skills/wordpress.png";import Docker from "../public/assets/skills/docker.png";
import Sql from "../public/assets/skills/aql.png";
import Python from "../public/assets/skills/python.png";
import Azure from "../public/assets/skills/azure.png";
import Node from "../public/assets/skills/node.png";
import Cloud from "../public/assets/skills/cloud.png";
import aws from "../public/assets/skills/aws.png";
import mysql from "../public/assets/skills/mysql.png";
import MongoDB from "../public/assets/skills/MongoDB.png";
import Vercel from "../public/assets/skills/Vercel.png";

// Define an array of skill objects
const skills = [
  { name: "JavaScript", src: Javascript },
  { name: "React", src: ReactImg },
  { name: "Next", src: NextJS },
  { name: "Node", src: Node },
  { name: "HTML", src: Html },
  { name: "Python", src: Python },
  { name: "Docker", src: Docker },
  { name: "SQL", src: Sql },
  { name: "MySQL", src: mysql },
  { name: "MongoDB", src: MongoDB },
  { name: "AWS", src: aws },
  { name: "Cloud", src: Cloud },
  { name: "Azure", src: Azure },
  { name: "Firebase", src: Firebase },
  { name: "Tailwind", src: Tailwind },
  { name: "CSS", src: Css },
  { name: "Github", src: Github },
  { name: "Netlify", src: Netlify },
  { name: "Vercel", src: Vercel },
  { name: "Wordpress", src: Wordpress },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase tracking-widest text-cyan-500 text-3xl text-bold pb-2">
          Skills
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 shadow-xl 
                	bg-slate-700
              rounded-xl  hover:scale-105 ease-in duration-300 `}
            >
              <div className="grid grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={skill.src}
                    width="44px"
                    height="34px"
                    alt={skill.name}
                  />
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <h3 className="text-stone-400 ">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

