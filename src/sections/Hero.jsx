import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Phoenix } from "../components/Phoenix";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Phoenix />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
        {/* Phoenix text */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
          <div className="relative">
            {/* Trapezoid box */}
            <div className="bg-gradient-to-b from-storm to-indigo px-6 py-3 transform -skew-x-12">
              <p className="text-white text-sm italic text-center transform skew-x-12">
                Say hi to my phoenix Larry!
              </p>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    // Slower camera movement - reduced sensitivity by 5x
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 50, 1 + state.mouse.y / 50, 3],
      0.1, // Much slower damping
      delta
    );
  });
}

export default Hero;
