import React from "react";
import "./Contact.css";
import BrainModel from "../../components/BrainModel/BrainModel";
import { Canvas } from "@react-three/fiber";
import { MailOutline, Phone, GitHub } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="contact">
      <div className="brain">
        <Canvas>
          <ambientLight intensity={1} color="white" />
          <pointLight position={[10, 10, 10]} intensity={1} color="white" />
          <directionalLight position={[-5, 5, 5]} intensity={1} color="white" />
          <BrainModel />
        </Canvas>
      </div>
      <div className="contact__block">
        <div>
          <MailOutline /> islamxtursunaliev@gmail.com
        </div>
        <div>
          <Phone /> +996500096966
        </div>
        <div>
          <GitHub />{" "}
          <a href="https://github.com/redennessy14" target="_blank">
            https://github.com/redennessy14
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
