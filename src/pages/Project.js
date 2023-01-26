import React from "react";
import img from "./../img/projects/02-big.jpg";
import gitHubBlack from "./../img/icons/gitHub-black.svg";

const Project = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>

          <img src={img} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, JavaScript, SCSS</p>
          </div>

          <a href="#!" className="btn-outline">
            <img src={gitHubBlack} alt="" />
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  );
};

export default Project;
