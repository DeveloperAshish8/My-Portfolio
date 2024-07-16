import "./projects.css";
import ProjectCard from "./projects-card";
import Major from "./Projects-data.json";
import Minor from "./Minor-projects.json";

import { useState } from "react";

const Projects = () => {
  const [project, setProject] = useState("major");
  return (
    <div className="projects" id="projects">
      <h2 class="heading-about">
        Projects <span>Built</span>
      </h2>
      <div className="toggle-btn">
        <span
          className={`${
            project === "major" ? "toggle-active" : "toggle-inactive"
          }`}
          onClick={() => setProject("major")}
        >
          Major{" "}
        </span>
        <span
          className={`${
            project === "major" ? "toggle-inactive" : "toggle-active"
          }`}
          onClick={() => setProject("minor")}
        >
          Minor
        </span>
      </div>
      <div className="projects-grid">
        {project === "major" ? (
          <ProjectCard ProjectList={Major} />
        ) : (
          <ProjectCard ProjectList={Minor} />
        )}
      </div>
    </div>
  );
};

export default Projects;
