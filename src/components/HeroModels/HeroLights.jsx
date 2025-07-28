import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight
        intensity={1.5}
        position={[5, 10, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
};

export default HeroLights;
