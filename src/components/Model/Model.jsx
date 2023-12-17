import React, { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const { scene } = useGLTF("/model/prog/scene.gltf");
  const group = useRef();

  useFrame(({ mouse }) => {
    const sensitivity = 0.003;
    const rotationSpeed = 0.1;

    if (group.current) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const mouseX = mouse.x * window.innerWidth - centerX;
      const mouseY = mouse.y * window.innerHeight - centerY;

      group.current.rotation.y = mouseX * sensitivity * rotationSpeed;
      group.current.rotation.x = mouseY * sensitivity * rotationSpeed;
    }
  });

  return (
    <group ref={group}>
      {scene && (
        <primitive
          position={[0, 0, 0]}
          object={scene}
          scale={[1.5, 1.5, 1.5]}
          rotation={[5, 0, 5]}
        />
      )}
    </group>
  );
};

export default Model;
