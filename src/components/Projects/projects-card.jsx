import "./projects-card.css";
import ProjectList from "./Projects-data.json";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectCard = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="project-card">
      {ProjectList.map((project) => {
        return (
          <div
            className="pro"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="image-card">
              <a target="_blank" href={project.link} rel="noreferer">
                <img src={project.image} alt="Project Image" />
              </a>
            </div>
            <div className="pro-text">
              <h3>{project.name}</h3>
              <p>{project.text}</p>
              <div className="tech-stacks">
                <p>{project.skills1}</p>
                <p>{project.skills2}</p>
                <p>{project.skills3}</p>
              </div>
              <div className="links">
                <a target="_blank" href={project.source}>
                  <i class="fa-brands fa-github"></i>
                  Code
                </a>
                <a target="_blank" href={project.link}>
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
