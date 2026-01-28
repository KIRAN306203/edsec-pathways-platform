import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface FlowchartNodeProps {
  position: [number, number, number];
  text: string;
  color: string;
  delay?: number;
  isCenter?: boolean;
}

const FlowchartNode = ({ position, text, color, delay = 0, isCenter = false }: FlowchartNodeProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(delay === 0 ? 1 : 0);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + delay) * 0.08;
      
      // Gentle rotation
      if (hovered) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0.2, 0.1);
      } else {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.1);
      }

      // Entry animation
      if (animationProgress < 1 && state.clock.elapsedTime > delay * 0.2) {
        const newProgress = Math.min(1, animationProgress + delta * 2.5);
        setAnimationProgress(newProgress);
      }

      // Scale animation
      const baseScale = isCenter ? 1.3 : 1;
      const hoverScale = hovered ? 1.1 : 1;
      const targetScale = baseScale * hoverScale * animationProgress;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
    }
  });

  const boxWidth = isCenter ? 4 : 3.2;
  const boxHeight = isCenter ? 1.4 : 1;

  return (
    <group 
      ref={groupRef} 
      position={[position[0], position[1], position[2]]}
      scale={[0, 0, 0]}
    >
      <RoundedBox
        args={[boxWidth, boxHeight, 0.35]}
        radius={0.12}
        smoothness={4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={hovered ? '#22c55e' : color}
          metalness={0.2}
          roughness={0.5}
          transparent
          opacity={Math.min(1, animationProgress * 1.5)}
        />
      </RoundedBox>
      
      {/* Glow effect */}
      <RoundedBox
        args={[boxWidth + 0.1, boxHeight + 0.1, 0.3]}
        radius={0.15}
        smoothness={4}
        position={[0, 0, -0.05]}
      >
        <meshBasicMaterial 
          color={color}
          transparent
          opacity={hovered ? 0.3 : 0.1}
        />
      </RoundedBox>

      <Text
        position={[0, 0, 0.2]}
        fontSize={isCenter ? 0.28 : 0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={boxWidth - 0.5}
        textAlign="center"
      >
        {text}
      </Text>
    </group>
  );
};

export default FlowchartNode;
