import "./projects.css";
import ProjectCard from "./projects-card";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 class="heading-about">
        Projects <span>Built</span>
      </h2>
      <div className="projects-grid">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
