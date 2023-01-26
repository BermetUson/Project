import React from "react";
import projects01 from "./../../img/projects/01.jpg";
import "./style.css";

const Project = () => {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={projects01} alt="Project img" className="project__img" />
        <h3 className="project__title">Gaming streaming portal</h3>
      </a>
    </li>
  );
};

export default Project;
