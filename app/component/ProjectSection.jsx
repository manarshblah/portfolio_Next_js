"use client"
import React, { useState , useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTags from './ProjectTags';
import {motion , useInView} from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "Project Cyborg Gaming",
    description: "Project 1 : Gaming Website",
    image: "/images/projects/1.png",
    tag: ["All", "Pure"],
    gitUrl: "https://github.com/manarshblah/web-site-gaming",
    previewUrl: "https://manarshblah.github.io/web-site-gaming/",
  },
  {
    id: 2,
    title: "Awairy-Ladies For Fashions",
    description: "Project 2 : Fashion website for show clothes",
    image: "/images/projects/2.png",
    tag: ["All", "Pure"],
    gitUrl: "https://github.com/manarshblah/Awairy",
    previewUrl: "https://manarshblah.github.io/Awairy/",
  },
  {
    id: 3,
    title: "AZYAE HAYEL",
    description: "Project 3 : Fashion website for show clothes",
    image: "/images/projects/3.png",
    tag: ["All", "Pure"],
    gitUrl: "https://github.com/manarshblah/AZYAE-HAYEL",
    previewUrl: "https://manarshblah.github.io/AZYAE-HAYEL/",
  },
  {
    id: 4,
    title: "TenzesGame",
    description: "Project 4 : TenzesGame in React Js",
    image: "/images/projects/4.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/manarshblah/TenzesGame",
    previewUrl: "https://66f03c171b621dd28ca7c914--darling-selkie-b855aa.netlify.app/",
  },
  {
    id: 5,
    title: "ًWeather Application",
    description: "Project 5 : In react js with use openweathermap",
    image: "/images/projects/5.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/manarshblah/weatherApp-React",
    previewUrl: "https://manarshblah.github.io/weatherApp-React/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Rezkaudi/Fifth_Project",
    previewUrl: "https://api-creator.netlify.app",
  },
];

const ProjectSection = () => {

  const [tag, setTag] = useState("All")
  const ref = useRef(null);
  const isInView = useInView( ref , { once:true } );

  const handelTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants={
    initial:{y: 50 , opacity: 0 },
    animate: {y: 0, opacity: 1 }
  };

  return (
    <section id="projects">
      <h2 className='text-center text-white text-4xl font-bold my-4 '>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTags
          onClick={handelTagChange}
          name="All"
          isSelected={tag === "All"} />
        <ProjectTags
          onClick={handelTagChange}
          name="React"
          isSelected={tag === "React"} />
        <ProjectTags
          onClick={handelTagChange}
          name="Pure"
          isSelected={tag === "Pure"} />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {
          filteredProjects.map((project, index) => (
            <motion.li 
            key={index}
            variants={cardVariants} 
            initial="initial" 
            animate={ isInView ? "animate" : "initial"}
            transition={{ duration: 0.3 ,delay: index * 0.4 }}
            >
            <ProjectCard
              key={project.id}
              title={project.title}
              descripton={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
            </motion.li>
          )
          )
        }
      </ul>
    </section>
  )
}

export default ProjectSection