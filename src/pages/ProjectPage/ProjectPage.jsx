import React, { useState } from "react";
import "./ProjectPage.css";
import IMG1 from "../../images/starbucks.png";
import VID1 from "../../video/portfolio.MOV";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectPage = () => {
  const images = [IMG1, IMG1, IMG1];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="project">
      <h2>My Projects</h2>
      <div className="project__block">
        {" "}
        <video controls autoPlay className="project__block_img">
          <source src={VID1} type="video/mp4" />
        </video>
        <div>
          <h3 className="project__block_name">Portfolio</h3>
          <p className="project__block_desc">JS , HTML , CSS , Three Js</p>
        </div>
      </div>
      <div className="project__block">
        <div className="carousel-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <div className="carousel-image">
                  <img src={image} alt={`Image ${index + 1}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          {" "}
          <h3 className="project__block_name">Starbucks</h3>
          <p className="project__block_desc">
            JS , HTML , CSS , Typescript , Firebase , Material UI
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProjectPage;
