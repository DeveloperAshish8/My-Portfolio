import "./projects-card.css";
import ProjectList from "./Projects-data.json";
import { useEffect } from "react";
import Aos from "aos";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import "aos/dist/aos.css";
import { useState } from "react";

const ProjectCard = () => {
  const [count, setCount] = useState(3);
  const load = () => {
    setCount(4);
  };
  const slice = ProjectList.slice(0, count);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="project-card">
      {slice.map((project) => {
        return (
          <div className="pro" data-aos="fade-zoom-out">
            <div className="image-card">
              <a target="_blank" href={project.link} rel="noreferer">
                <img src={project.image} alt="Project Image" />
              </a>
            </div>
            <div className="pro-text">
              <h3>{project.name}</h3>
              <p>{project.text}</p>
              <div className="tech-stacks">
                <img src={project?.skills1} alt="skill" />
                <img src={project?.skills2} alt="skill" />
                <img src={project?.skills3} alt="skill" />
                {/* <p>{project.skills2}</p>
                <p>{project.skills3}</p> */}
              </div>
              <div className="links">
                <a target="_blank" href={project.source}>
                  <FaGithub />
                  Code
                </a>
                <a target="_blank" href={project.link}>
                  Live Demo
                  <RiShareBoxFill />
                </a>
              </div>
            </div>
          </div>
        );
      })}
      {count < 4 && (
        <div className="load-btn" onClick={() => load()}>
          load more ...
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
