import React from "react";
import Project from "../components/project/Project";

// import projects02 from "./../img/projects/02.jpg";
// import projects03 from "./../img/projects/03.jpg";
// import projects04 from "./../img/projects/04.jpg";
// import projects05 from "./../img/projects/05.jpg";
// import projects06 from "./../img/projects/06.jpg";

const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <Project />
            <Project />
            <Project />
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
