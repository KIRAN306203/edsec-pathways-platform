import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial } from '@react-three/drei';
import FlowchartNode from './FlowchartNode';
import FlowchartConnection from './FlowchartConnection';
import * as THREE from 'three';

interface SyllabusFlowchart3DProps {
  courseTitle: string;
  features: string[];
  theme?: 'tech' | 'nature' | 'gradient' | 'minimal' | 'warm';
}

// Theme configurations
const themes = {
  tech: {
    background: 'from-slate-900 via-blue-950 to-slate-900',
    nodeColors: ['#3b82f6', '#6366f1', '#8b5cf6', '#06b6d4', '#0ea5e9', '#14b8a6'],
    centerColor: '#1e40af',
    ambientLight: 0.3,
    accentColor: '#60a5fa'
  },
  nature: {
    background: 'from-emerald-900 via-teal-900 to-green-950',
    nodeColors: ['#10b981', '#14b8a6', '#22c55e', '#34d399', '#059669', '#0d9488'],
    centerColor: '#065f46',
    ambientLight: 0.4,
    accentColor: '#6ee7b7'
  },
  gradient: {
    background: 'from-purple-900 via-violet-900 to-fuchsia-950',
    nodeColors: ['#a855f7', '#d946ef', '#c026d3', '#e879f9', '#f0abfc', '#c084fc'],
    centerColor: '#581c87',
    ambientLight: 0.35,
    accentColor: '#e879f9'
  },
  minimal: {
    background: 'from-gray-100 via-slate-100 to-gray-200',
    nodeColors: ['#374151', '#4b5563', '#6b7280', '#1f2937', '#111827', '#525252'],
    centerColor: '#0f172a',
    ambientLight: 0.6,
    accentColor: '#94a3b8'
  },
  warm: {
    background: 'from-orange-900 via-amber-900 to-red-950',
    nodeColors: ['#f97316', '#fb923c', '#f59e0b', '#ef4444', '#dc2626', '#ea580c'],
    centerColor: '#7c2d12',
    ambientLight: 0.4,
    accentColor: '#fbbf24'
  }
};

// Floating decorative spheres
const FloatingOrbs = ({ color }: { color: string }) => {
  const orbs = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        -3 - Math.random() * 5
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.5,
      speed: 0.5 + Math.random() * 1.5
    }));
  }, []);

  return (
    <>
      {orbs.map((orb, i) => (
        <Float key={i} speed={orb.speed} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={orb.position} scale={orb.scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial
              color={color}
              transparent
              opacity={0.15}
              distort={0.3}
              speed={2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

// Grid floor for depth
const GridFloor = ({ color }: { color: string }) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <meshBasicMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.1}
      />
    </mesh>
  );
};

const FlowchartScene = ({ courseTitle, features, theme = 'tech' }: SyllabusFlowchart3DProps) => {
  const themeConfig = themes[theme];
  
  // Calculate positions in a radial pattern around the center
  const getNodePosition = (index: number, total: number): [number, number, number] => {
    const radius = 4.5;
    const angleOffset = -Math.PI / 2;
    const angle = (index / total) * Math.PI * 2 + angleOffset;
    return [
      Math.cos(angle) * radius,
      Math.sin(angle) * radius * 0.7,
      0
    ];
  };

  const centerPosition: [number, number, number] = [0, 0, 0];

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={50} />
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        minDistance={10}
        maxDistance={25}
        autoRotate
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI * 0.75}
        minPolarAngle={Math.PI * 0.25}
      />
      
      {/* Lighting */}
      <ambientLight intensity={themeConfig.ambientLight} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color={themeConfig.accentColor} />
      <spotLight 
        position={[0, 8, 8]} 
        angle={0.4} 
        penumbra={1} 
        intensity={0.8}
        color={themeConfig.accentColor}
      />

      {/* Decorative elements */}
      <FloatingOrbs color={themeConfig.accentColor} />
      <GridFloor color={themeConfig.accentColor} />

      {/* Center node - Course Title */}
      <FlowchartNode
        position={centerPosition}
        text={courseTitle}
        color={themeConfig.centerColor}
        delay={0}
        isCenter
      />

      {/* Feature nodes */}
      {features.map((feature, index) => {
        const position = getNodePosition(index, features.length);
        return (
          <group key={index}>
            <FlowchartConnection
              start={centerPosition}
              end={position}
              delay={index + 1}
            />
            <FlowchartNode
              position={position}
              text={feature}
              color={themeConfig.nodeColors[index % themeConfig.nodeColors.length]}
              delay={index + 1}
            />
          </group>
        );
      })}
    </>
  );
};

// Map course IDs to themes
const courseThemeMap: Record<string, 'tech' | 'nature' | 'gradient' | 'minimal' | 'warm'> = {
  'data-science': 'tech',
  'data-analytics': 'gradient',
  'python-sql': 'nature',
  'full-stack': 'minimal',
  'web-development': 'warm',
  'python-basics': 'nature',
  'augmented-reality': 'gradient',
  'sql-language': 'tech',
  'digital-marketing': 'warm'
};

interface SyllabusFlowchart3DContainerProps extends SyllabusFlowchart3DProps {
  courseId?: string;
}

const SyllabusFlowchart3D = ({ courseTitle, features, courseId }: SyllabusFlowchart3DContainerProps) => {
  const theme = courseId ? courseThemeMap[courseId] || 'tech' : 'tech';
  const themeConfig = themes[theme];

  return (
    <div className={`relative w-full h-[500px] bg-gradient-to-br ${themeConfig.background} rounded-xl overflow-hidden border border-white/10`}>
      <Canvas gl={{ antialias: true, alpha: false }}>
        <Suspense fallback={null}>
          <FlowchartScene courseTitle={courseTitle} features={features} theme={theme} />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-4 text-sm text-white/70 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        🖱️ Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default SyllabusFlowchart3D;
