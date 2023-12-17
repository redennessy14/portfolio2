import React, { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { scene } = useGLTF("/model/prog/scene.gltf");
  console.log(loadingPercentage, "load");
  const group = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/model/prog/scene.gltf",
      (gltf) => {
        scene.add(gltf.scene);
        setIsLoading(false); // Установка isLoading в false после завершения загрузки
      },
      (xhr) => {
        const percentLoaded = Math.round((xhr.loaded / xhr.total) * 100);
        setLoadingPercentage(percentLoaded);
      },
      (error) => {
        console.error("An error happened", error);
      }
    );
  }, [scene]);

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
    <>
      {isLoading ? (
        <Text style={{ position: "absolute", top: 10, left: 10 }}>
          Loading: {loadingPercentage}%
        </Text>
      ) : null}
      {!isLoading && scene && (
        <group ref={group}>
          <primitive
            position={[0, 0, 0]}
            object={scene}
            scale={[1.5, 1.5, 1.5]}
            rotation={[5, 0, 5]}
          />
        </group>
      )}
    </>
  );
};

export default Model;
