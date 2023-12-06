import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleHover = () => {
    const nav = document.querySelector(".nav");
    nav.classList.add("fill-background");
  };

  const handleMouseLeave = () => {
    const nav = document.querySelector(".nav");
    nav.classList.remove("fill-background");
  };

  return (
    <div className="nav">
      {/* <div
        className="block"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        HOME
      </div> */}

      <div
        className="block"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        PROJECTS
      </div>
      <div
        className="block"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        ABOUT ME
      </div>
      <div
        className="block"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        CONTACT
      </div>
    </div>
  );
};

export default Navbar;
