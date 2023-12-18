import React, { useState } from "react";
import "./NameBlock.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NameBlock = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
    setIsModalOpen(!isModalOpen);
  };

  const isHome = location.pathname === "/" || location.pathname === "/index";

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="nameblock" onClick={() => navigate("/")}>
        Tursunaliev
      </div>
      {isHome ? null : (
        <div className="back_home" onClick={handleBack}>
          <ArrowBackIcon />
          Back to home
        </div>
      )}
      <div
        className={`burger-menu ${isActive ? "active" : ""}`}
        onClick={handleBurgerClick}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`modal ${isModalOpen ? "open" : ""}`}>
        <Link className="modal_link" to="/">
          Home
        </Link>
        <Link className="modal_link" to="/projects">
          {" "}
          Projects
        </Link>
        <Link className="modal_link" to="/about">
          About me
        </Link>
        <Link className="modal_link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NameBlock;
