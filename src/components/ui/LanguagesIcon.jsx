'use client'
import Loader from './Loader/Loader';
import React, { useEffect, useRef, useState } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Canvas, useFrame } from '@react-three/fiber';
const texturePaths = {
  JS: '/languages/JS.png',
  HTML: '/languages/HTML.png',
  CSS: '/languages/CSS.png',
  TS: '/languages/TS.png',
  NEXT: '/languages/NEXT.png',
  REACT: '/languages/REACT.png',
  REACTNATIVE:"/languages/REACTNATIVE.png",
  NODE: '/languages/NODE.png',
  TAILWIND: '/languages/TAILWIND.png',
};
const LanguagesIcon = () => {
    const [textures, setTextures] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const loader = new TextureLoader();
      const loadedTextures = Object.fromEntries(
        Object.entries(texturePaths).map(([key, path]) => [
          key, loader.load(path)
        ])
      );
      setTextures(loadedTextures);
      setIsLoading(false);
    }, []);
    if (isLoading) {
      return <div className="flex justify-center py-5"><Loader /></div>;
    }
    return (
        <div className='flex justify-center items-center mb-5'>
          <div className='grid grid-cols-3 gap-2 bg-white'>
                {Object.values(textures).map((texture, index) => (
              <div key={index} className="h-[100px] w-[100px] lg:w-[150px] lg:h-[150px]">
                <Canvas camera={{ position: [0,0,3], fov: 60 }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[2, 2,5]} />
                  <Cube map={texture} />
                </Canvas>
              </div>
            ))}
          </div>
        </div>
    );
}

function Cube({ map }) {
    const [isRotating, setIsRotating] = useState(false); // Track if rotating
    const [rotationProgress, setRotationProgress] = useState(0);
    const mesh = useRef(null);
    const ROTATION_TARGET = Math.PI * 1;

    useFrame((state, delta) => {
        if (isRotating && rotationProgress < ROTATION_TARGET) {
            const rotationStep = delta * 5; // Control rotation speed
            mesh.current.rotation.y += rotationStep; // Rotate on Y-axis
            setRotationProgress((prev) => prev + rotationStep);
        } else if (rotationProgress >= ROTATION_TARGET) {
            // Stop rotating and reset after completing 360 degrees
            setIsRotating(false);
            setRotationProgress(0);
            mesh.current.rotation.y = 0; // Ensure exact reset to initial state
        }
    });

    const handlePointerOver = () => {
        if (!isRotating) {
            setIsRotating(true); // Start rotating on hover
        }
    };

    return (
        <mesh 
            ref={mesh} 
            onPointerOver={handlePointerOver}
        >
            <spotLight position={[1, 3, 4]} angle={0.5} penumbra={1} decay={0} intensity={1} />
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial map={map} />
        </mesh>
    );
}

export default LanguagesIcon;
