import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleHover = () => {
    const nav = document.querySelector(".nav");
    nav.classList.add("fill-background");
  };

  const handleMouseLeave = () => {
    const nav = document.querySelector(".nav");
    nav.classList.remove("fill-background");
  };

  return (
    <nav className="nav">
      <Link
        className="block"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        to="/projects"
      >
        PROJECTS
      </Link>
      <Link
        className="block"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        to="/about"
      >
        ABOUT ME
      </Link>
      <Link
        className="block"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        to="/contact"
      >
        CONTACT
      </Link>
    </nav>
  );
};

export default Navbar;
