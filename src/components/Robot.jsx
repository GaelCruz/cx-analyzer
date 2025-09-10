import { useGLTF, OrbitControls, useAnimations } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";

function RobotModel() {
  // Use useGLTF to load the model and its animations
  const group = useRef();
  const { scene, animations } = useGLTF(
    "src/assets/3d-models/moving_spheres.glb"
  );

  // Use the useAnimations hook to get actions for the animations
  const { actions } = useAnimations(animations, group);

  // Play a specific animation clip when the component mounts
  useEffect(() => {
    // Check if the animations array is not empty
    if (animations && animations.length > 0) {
      // Get the name of the first animation clip
      const animationName = animations[0].name;

      // Play the animation
      actions[animationName].play();
    }
  }, [actions, animations]);

  return (
    <primitive ref={group} object={scene} scale={2} position={[0, -2.5, 0]} />
  );
}

export default function Robot() {
  return (
    <div className="bg-red-400/0 w-200 h-200">
      <Canvas camera={{ position: [-2,0,5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={5.5} castShadow />
        <pointLight position={[0,0,0]} />
        <RobotModel />
        <OrbitControls enableRotate={true} enableZoom={false} />
      </Canvas>
    </div>
  );
}
