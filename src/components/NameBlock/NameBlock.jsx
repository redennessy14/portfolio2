import React from "react";
import "./NameBlock.css";
import { useNavigate } from "react-router-dom";

const NameBlock = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="nameblock" onClick={() => navigate("/home")}>
        Islam Tursunaliev
      </div>
    </div>
  );
};

export default NameBlock;
