import React, { useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import "./AnimatedModel.css";
import Model from "../Model/Model";

const AnimatedModel = () => {
  return (
    <div className="model-container">
      <Canvas className="canvas">
        <ambientLight intensity={3} color="white" />
        <pointLight position={[10, 10, 10]} intensity={3} color="white" />
        <directionalLight position={[-5, 5, 5]} intensity={3} color="white" />
        <Model />
      </Canvas>
    </div>
  );
};

export default AnimatedModel;
