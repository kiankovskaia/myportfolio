import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import projectData from "../../src/ProjectInfo.js"; 

const Projects = () => {
  const renderProjects = (projects) => {
    let allProjects = [];
    const projectsArray = [];
    for (let i = 0; i < projects.length; i++) {
      allProjects = <ProjectTemplate key={i} {...projects[i]} />;
      projectsArray.push(allProjects);
    }
    return projectsArray;
  };

  return <>{renderProjects(projectData)}</>;
};

export default Projects;
