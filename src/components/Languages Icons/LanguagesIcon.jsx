'use client'
import React, { useEffect, useRef, useState } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Canvas, useFrame } from '@react-three/fiber';
const texturePaths = {
  JS: 'languages/JS.png',
  HTML: 'languages/HTML.png',
  CSS: 'languages/CSS.png',
  TS: 'languages/TS.png',
  NEXT: 'languages/NEXT.png',
  REACT: 'languages/REACT.png',
  REACTNATIVE:"languages/REACTNATIVE.png",
  NODE: 'languages/NODE.png',
  TAILWIND: 'languages/TAILWIND.png',
  THREE: 'languages/THREE.png',
};
const LanguagesIcon = () => {
    const [textures, setTextures] = useState({ JS: null, HTML: null });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const loader = new TextureLoader();
        const texturePromises = Object.entries(texturePaths).map(([key, path]) =>
          loader.loadAsync(path).then((texture) => [key, texture])
        );
    
        Promise.all(texturePromises)
          .then((loadedTextures) => {
            const textureObject = Object.fromEntries(loadedTextures);
            setTextures(textureObject);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("Error loading textures", error);
        });
    }, []);
    if (isLoading) {
      return <div className="text-center">Loading textures...</div>;
    }
    return (
        <div className='flex justify-center items-center mb-5'>
          <div className='grid grid-cols-3 gap-2 bg-white lg:grid-cols-5'>
                {Object.values(textures).map((texture, index) => (
              <div key={index} className="h-[100px] w-[100px] lg:w-[150px] lg:h-[150px]">
                <Canvas camera={{ position: [1.5, 1.5, 3], fov: 50 }}>
                  <ambientLight intensity={0.} />
                  <directionalLight position={[2, 1, 1]} />
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
            const rotationStep = delta * 10; // Control rotation speed
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
            <spotLight position={[1, 3, 7]} angle={0.5} penumbra={1} decay={0} intensity={1} />
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial map={map} />
        </mesh>
    );
}

export default LanguagesIcon;
