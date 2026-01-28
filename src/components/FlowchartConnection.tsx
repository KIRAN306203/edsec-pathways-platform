import { useMemo } from 'react';
import * as THREE from 'three';

interface FlowchartConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  delay?: number;
}

const FlowchartConnection = ({ start, end }: FlowchartConnectionProps) => {
  const lineObject = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const mid = new THREE.Vector3().lerpVectors(startVec, endVec, 0.5);
    mid.z += 0.5;
    
    const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec);
    const points = curve.getPoints(20);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ 
      color: '#6366f1', 
      transparent: true, 
      opacity: 0.7
    });
    
    return new THREE.Line(geometry, material);
  }, [start, end]);

  return <primitive object={lineObject} />;
};

export default FlowchartConnection;
