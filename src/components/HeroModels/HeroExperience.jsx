import { OrbitControls, Bounds, Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { Robot } from "./Robot.jsx";
import HeroLights from "./HeroLights.jsx";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    // X, Y, Z positioning and feild of view:
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <OrbitControls
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Lighting Component  */}
      <HeroLights />

      <group scale={isMobile ? 0.7 : 1} position={(0, -3.5, 0)}>
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1}>
            <Center>
              <Robot scale={0.005} />
            </Center>
          </Bounds>
        </Suspense>
      </group>
    </Canvas>
  );
};

export default HeroExperience;
