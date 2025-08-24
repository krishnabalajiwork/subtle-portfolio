import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function FloatingShape({ position, scale, color, shape = 'sphere' }: { 
  position: [number, number, number]; 
  scale: number; 
  color: string;
  shape?: 'sphere' | 'box' | 'torus';
}) {
  const meshRef = useRef<Mesh>(null);

  const renderShape = () => {
    switch (shape) {
      case 'box':
        return (
          <Box ref={meshRef} args={[1, 1, 1]}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.3}
              speed={2}
              transparent
              opacity={0.6}
            />
          </Box>
        );
      case 'torus':
        return (
          <Torus ref={meshRef} args={[0.6, 0.25, 16, 32]}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.4}
              speed={1.5}
              transparent
              opacity={0.7}
            />
          </Torus>
        );
      default:
        return (
          <Sphere ref={meshRef} args={[1, 32, 32]}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.5}
              speed={1}
              transparent
              opacity={0.8}
            />
          </Sphere>
        );
    }
  };

  return (
    <Float
      position={position}
      scale={scale}
      rotationIntensity={1}
      floatIntensity={2}
      speed={0.5}
    >
      {renderShape()}
    </Float>
  );
}

const FloatingObjects = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Floating shapes with vibrant colors */}
        <FloatingShape 
          position={[-4, 2, -2]} 
          scale={0.8} 
          color="hsl(var(--vibrant-purple))" 
          shape="sphere"
        />
        <FloatingShape 
          position={[3, -1, -1]} 
          scale={0.6} 
          color="hsl(var(--vibrant-blue))" 
          shape="box"
        />
        <FloatingShape 
          position={[-2, -3, -3]} 
          scale={0.7} 
          color="hsl(var(--vibrant-green))" 
          shape="torus"
        />
        <FloatingShape 
          position={[4, 3, -2]} 
          scale={0.5} 
          color="hsl(var(--vibrant-orange))" 
          shape="sphere"
        />
        <FloatingShape 
          position={[-3, 0, -4]} 
          scale={0.9} 
          color="hsl(var(--vibrant-pink))" 
          shape="box"
        />
        <FloatingShape 
          position={[2, 2, -3]} 
          scale={0.4} 
          color="hsl(var(--vibrant-blue))" 
          shape="torus"
        />
      </Canvas>
    </div>
  );
};

export default FloatingObjects;