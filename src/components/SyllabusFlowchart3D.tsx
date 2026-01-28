import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import FlowchartNode from './FlowchartNode';
import FlowchartConnection from './FlowchartConnection';

interface SyllabusFlowchart3DProps {
  courseTitle: string;
  features: string[];
}

const FlowchartScene = ({ courseTitle, features }: SyllabusFlowchart3DProps) => {
  // Calculate positions in a radial pattern around the center
  const getNodePosition = (index: number, total: number): [number, number, number] => {
    const radius = 4.5;
    const angleOffset = -Math.PI / 2; // Start from top
    const angle = (index / total) * Math.PI * 2 + angleOffset;
    return [
      Math.cos(angle) * radius,
      Math.sin(angle) * radius * 0.7,
      0
    ];
  };

  const centerPosition: [number, number, number] = [0, 0, 0];

  // Colors for nodes - vibrant gradient palette
  const nodeColors = [
    '#6366f1', // Indigo
    '#8b5cf6', // Violet
    '#a855f7', // Purple
    '#d946ef', // Fuchsia
    '#ec4899', // Pink
    '#f43f5e', // Rose
    '#ef4444', // Red
    '#f97316', // Orange
  ];

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={50} />
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        minDistance={10}
        maxDistance={25}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI * 0.75}
        minPolarAngle={Math.PI * 0.25}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#6366f1" />
      <pointLight position={[0, 5, 5]} intensity={0.8} color="#8b5cf6" />
      
      {/* Background stars */}
      <Stars radius={50} depth={50} count={1000} factor={3} fade speed={1} />

      {/* Center node - Course Title */}
      <FlowchartNode
        position={centerPosition}
        text={courseTitle}
        color="#1e40af"
        delay={0}
        isCenter
      />

      {/* Feature nodes */}
      {features.map((feature, index) => {
        const position = getNodePosition(index, features.length);
        return (
          <group key={index}>
            {/* Connection line from center to feature */}
            <FlowchartConnection
              start={centerPosition}
              end={position}
              delay={index + 1}
            />
            {/* Feature node */}
            <FlowchartNode
              position={position}
              text={feature}
              color={nodeColors[index % nodeColors.length]}
              delay={index + 1}
            />
          </group>
        );
      })}
    </>
  );
};

const SyllabusFlowchart3D = ({ courseTitle, features }: SyllabusFlowchart3DProps) => {
  return (
    <div className="relative w-full h-[500px] bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 rounded-xl overflow-hidden border border-border">
      <Canvas gl={{ antialias: true, alpha: false }}>
        <Suspense fallback={null}>
          <FlowchartScene courseTitle={courseTitle} features={features} />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-4 text-sm text-white/70 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        🖱️ Drag to rotate • Scroll to zoom • Hover nodes for details
      </div>
    </div>
  );
};

export default SyllabusFlowchart3D;
