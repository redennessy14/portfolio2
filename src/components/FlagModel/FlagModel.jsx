import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const FlagModel = () => {
  const { scene, animations } = useGLTF("/model/kyrgyz/scene.gltf");
  let mixer = new THREE.AnimationMixer(scene);
  animations.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.play();
  });

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  const group = useRef();
  return (
    <group ref={group}>
      {scene && (
        <primitive
          position={[0, 0, 0]}
          object={scene}
          scale={[3, 3, 3]}
          rotation={[0, 0, 0]}
        />
      )}
    </group>
  );
};

export default FlagModel;
