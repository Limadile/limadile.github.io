import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function RotatingBox() {
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#f97316" />
    </mesh>
  );
}

export default function App() {
  return (
    <>
      <header>
        {/* Put your social links here if needed */}
      </header>
      <section
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: '#fafafa',
          textAlign: 'center',
        }}
      >
        <h1>Liam Seth Puchero</h1>
        <p>Designing clean interfaces & building modern websites.</p>
        <Canvas
          style={{ width: 300, height: 300, margin: '20px auto' }}
          camera={{ position: [5, 5, 5] }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingBox />
        </Canvas>
        <div>
          <a href="#projects" style={{ marginRight: 15 }}>
            <button>View Skills</button>
          </a>
          <a href="#">
            <button>Download Resume</button>
          </a>
        </div>
      </section>
      {/* You can continue adding About, Projects, Footer sections as React components */}
    </>
  );
}
