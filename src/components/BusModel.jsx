import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, ContactShadows } from '@react-three/drei'

// A stylised low-poly CTM coach built from primitives — no external assets needed.
function Coach() {
  const group = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.y = -0.5 + Math.sin(t * 0.3) * 0.18
      group.current.position.y = Math.sin(t * 0.8) * 0.06
    }
  })

  const windows = [-2.2, -1.1, 0, 1.1, 2.2]

  return (
    <group ref={group} rotation={[0, -0.5, 0]} scale={1.05}>
      {/* Body */}
      <mesh castShadow position={[0, 0.2, 0]}>
        <boxGeometry args={[6.4, 2, 2.2]} />
        <meshStandardMaterial color="#E2001A" metalness={0.35} roughness={0.35} />
      </mesh>
      {/* Roof highlight */}
      <mesh position={[0, 1.18, 0]}>
        <boxGeometry args={[6.2, 0.25, 2.1]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} />
      </mesh>
      {/* White lower stripe */}
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[6.42, 0.5, 2.22]} />
        <meshStandardMaterial color="#0B1F3A" roughness={0.6} />
      </mesh>
      {/* Windscreen */}
      <mesh position={[3.05, 0.45, 0]}>
        <boxGeometry args={[0.4, 0.95, 1.9]} />
        <meshStandardMaterial color="#bfe2ff" metalness={0.6} roughness={0.1} />
      </mesh>
      {/* Side windows */}
      {windows.map((x) => (
        <mesh key={x} position={[x, 0.5, 1.07]}>
          <boxGeometry args={[0.8, 0.8, 0.06]} />
          <meshStandardMaterial color="#bfe2ff" metalness={0.6} roughness={0.1} />
        </mesh>
      ))}
      {windows.map((x) => (
        <mesh key={`r${x}`} position={[x, 0.5, -1.07]}>
          <boxGeometry args={[0.8, 0.8, 0.06]} />
          <meshStandardMaterial color="#bfe2ff" metalness={0.6} roughness={0.1} />
        </mesh>
      ))}
      {/* Wheels */}
      {[
        [-2, -1.05, 1.0],
        [-2, -1.05, -1.0],
        [2.2, -1.05, 1.0],
        [2.2, -1.05, -1.0],
      ].map((p, i) => (
        <mesh key={i} position={p} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.55, 0.55, 0.35, 24]} />
          <meshStandardMaterial color="#101826" roughness={0.7} />
        </mesh>
      ))}
      {/* Headlights */}
      <mesh position={[3.22, -0.1, 0.7]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#fff7d6" emissive="#ffe79a" emissiveIntensity={1.2} />
      </mesh>
      <mesh position={[3.22, -0.1, -0.7]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#fff7d6" emissive="#ffe79a" emissiveIntensity={1.2} />
      </mesh>
    </group>
  )
}

export default function BusModel() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [7, 3, 8], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 8, 4]} intensity={1.6} castShadow />
      <directionalLight position={[-6, 4, -4]} intensity={0.6} color="#7DB9E8" />
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        <Coach />
      </Float>
      <ContactShadows position={[0, -1.7, 0]} opacity={0.4} scale={14} blur={2.6} far={4} />
      <Environment preset="city" />
    </Canvas>
  )
}
