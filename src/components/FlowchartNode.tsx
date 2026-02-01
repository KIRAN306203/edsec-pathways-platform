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
  isSubNode?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
  isClickable?: boolean;
}

const FlowchartNode = ({ 
  position, 
  text, 
  color, 
  delay = 0, 
  isCenter = false,
  isSubNode = false,
  onClick,
  isSelected = false,
  isClickable = true
}: FlowchartNodeProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(delay === 0 ? 1 : 0);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Floating animation
      const floatIntensity = isSubNode ? 0.05 : 0.08;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + delay) * floatIntensity;
      
      // Gentle rotation on hover
      if (hovered && isClickable) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0.15, 0.1);
      } else {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.1);
      }

      // Entry animation
      if (animationProgress < 1 && state.clock.elapsedTime > delay * 0.15) {
        const newProgress = Math.min(1, animationProgress + delta * 3);
        setAnimationProgress(newProgress);
      }

      // Scale animation
      let baseScale = isCenter ? 1.3 : isSubNode ? 0.7 : 1;
      const hoverScale = hovered && isClickable ? 1.1 : 1;
      const selectedScale = isSelected ? 1.15 : 1;
      const targetScale = baseScale * hoverScale * selectedScale * animationProgress;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
    }
  });

  const boxWidth = isCenter ? 4 : isSubNode ? 2.2 : 3.2;
  const boxHeight = isCenter ? 1.4 : isSubNode ? 0.7 : 1;

  const handlePointerOver = () => {
    if (isClickable) {
      setHovered(true);
      document.body.style.cursor = 'pointer';
    }
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  const handleClick = () => {
    if (onClick && isClickable) {
      onClick();
    }
  };

  return (
    <group 
      ref={groupRef} 
      position={[position[0], position[1], position[2]]}
      scale={[0, 0, 0]}
    >
      <RoundedBox
        args={[boxWidth, boxHeight, isSubNode ? 0.25 : 0.35]}
        radius={0.12}
        smoothness={4}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <meshStandardMaterial 
          color={isSelected ? '#22c55e' : hovered && isClickable ? '#22c55e' : color}
          metalness={0.2}
          roughness={0.5}
          transparent
          opacity={Math.min(1, animationProgress * 1.5)}
        />
      </RoundedBox>
      
      {/* Glow effect */}
      <RoundedBox
        args={[boxWidth + 0.1, boxHeight + 0.1, isSubNode ? 0.2 : 0.3]}
        radius={0.15}
        smoothness={4}
        position={[0, 0, -0.05]}
      >
        <meshBasicMaterial 
          color={isSelected ? '#22c55e' : color}
          transparent
          opacity={isSelected ? 0.4 : hovered && isClickable ? 0.3 : 0.1}
        />
      </RoundedBox>

      <Text
        position={[0, 0, 0.2]}
        fontSize={isCenter ? 0.28 : isSubNode ? 0.14 : 0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={boxWidth - 0.3}
        textAlign="center"
      >
        {text}
      </Text>
      
      {/* Click indicator for clickable nodes */}
      {isClickable && !isCenter && !isSubNode && (
        <Text
          position={[0, -boxHeight / 2 - 0.15, 0.2]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fillOpacity={hovered ? 0.8 : 0.4}
        >
          Click to explore
        </Text>
      )}
    </group>
  );
};

export default FlowchartNode;
