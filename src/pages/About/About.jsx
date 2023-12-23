import React from "react";
import "./About.css";
import FlagModel from "../../components/FlagModel/FlagModel";
import { Canvas } from "@react-three/fiber";

const About = () => {
  return (
    <div className="about">
      <p class="about_text">
        I`m Islam Tursunaliev , Frontend Developer from Kyrgyzstan
      </p>
      <div className="about_flag">
        <Canvas>
          <ambientLight intensity={1} color="white" />
          <pointLight position={[10, 10, 10]} intensity={1} color="white" />
          <directionalLight position={[-5, 5, 5]} intensity={2} color="white" />
          <FlagModel />
        </Canvas>
      </div>
    </div>
  );
};

export default About;
