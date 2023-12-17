import React, { useState } from "react";
import "./NameBlock.css";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NameBlock = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBurgerClick = () => {
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
    </div>
  );
};

export default NameBlock;
