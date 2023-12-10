import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import AnimatedModel from "../../components/AnimatedModel/AnimatedModel";
import NameBlock from "../../components/NameBlock/NameBlock";

const HomePage = () => {
  return (
    <div className="homepage">
      <NameBlock />
      <Navbar />
      <AnimatedModel />
    </div>
  );
};

export default HomePage;
