import React from "react";
import "./Contact.css";
import BrainModel from "../../components/BrainModel/BrainModel";
import { Canvas } from "@react-three/fiber";

const Contact = () => {
  return (
    <div>
      <div className="brain">
        <Canvas>
          <ambientLight intensity={1} color="white" />
          <pointLight position={[10, 10, 10]} intensity={1} color="white" />
          <directionalLight position={[-5, 5, 5]} intensity={1} color="white" />
          <BrainModel />
        </Canvas>
      </div>
    </div>
  );
};

export default Contact;
