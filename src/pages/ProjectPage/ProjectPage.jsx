import React, { useState } from "react";
import "./ProjectPage.css";
import IMG1 from "../../images/starbucks.png";

const ProjectPage = () => {
  return (
    <div className="project">
      <h2>My Projects</h2>

      <div className="project__block">
        <img src={IMG1} alt="" className="project__block_img" />
        <div>
          {" "}
          <h3 className="project__block_name">Starbucks</h3>
          <p className="project__block_desc">
            JS , HTML , CSS , Typescript , Firebase , Material UI
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
