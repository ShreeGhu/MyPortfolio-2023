import React from 'react';
import Color from '../public/assets/projects/color.png'
import Tourism from '../public/assets/projects/tourism.png'
import ProjectItem from './ProjectItem';
import JobTracker from '../public/assets/projects/jobtracker.png'
import spotify from "../public/assets/projects/spotify.png";
import weather from "../public/assets/projects/weather.png";


const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" tracking-widest uppercase text-cyan-500 text-3xl pb-2 text-bold">
          Projects
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Job Tracker"
            backgroundImg={JobTracker}
            projectUrl="/jobtracker"
            tech="React Js"
          />
          <ProjectItem
            title="Weather Application"
            backgroundImg={weather}
            projectUrl="/weather"
            tech="React Js"
          />
          <ProjectItem
            title="Spotify Clone"
            backgroundImg={spotify}
            projectUrl="/spotify"
            tech="React Js"
            width="2000px"
            height="1390px"
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
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
