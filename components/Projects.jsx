import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Portfolio2023 from "../public/assets/projects/portfolio2023.png";
import Color from '../public/assets/projects/color.png'
import Tourism from '../public/assets/projects/tourism.png'
import Portfolio22 from '../public/assets/projects/portfolio22.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" tracking-widest uppercase text-cyan-500 text-3xl pb-2 text-bold">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Shree Portfolio - 2023"
            backgroundImg={Portfolio2023}
            projectUrl="/portfolio2023"
            tech="Next JS"
          />
          <ProjectItem
            title="Color Generator App"
            backgroundImg={Color}
            projectUrl="/color"
            tech="React JS"
          />
          <ProjectItem
            title="Nepal Tourism 2023"
            backgroundImg={Tourism}
            projectUrl="/tourism2023"
            tech="React JS"
          />
          <ProjectItem
            title="Shree Portfolio - 2022"
            backgroundImg={Portfolio22}
            projectUrl="/portfolio2022"
            tech="Angular JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
