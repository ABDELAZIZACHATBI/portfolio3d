import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, ContactShadows, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

// Stylised low-poly CTM coach + atmospheric environment.
function Coach({ scrollY }) {
  const group = useRef()
  const wheels = useRef([])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      const sy = scrollY?.current ?? 0
      group.current.rotation.y = -0.5 + Math.sin(t * 0.3) * 0.18 + sy * 0.4
      group.current.position.y = Math.sin(t * 0.8) * 0.06 - sy * 0.6
      group.current.position.x = sy * 1.2
    }
    wheels.current.forEach((w) => w && (w.rotation.x += 0.18))
  })

  const windows = [-2.2, -1.1, 0, 1.1, 2.2]

  return (
    <group ref={group} rotation={[0, -0.5, 0]} scale={1.05}>
      <mesh castShadow position={[0, 0.2, 0]}>
        <boxGeometry args={[6.4, 2, 2.2]} />
        <meshStandardMaterial color="#E2001A" metalness={0.45} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.18, 0]}>
        <boxGeometry args={[6.2, 0.25, 2.1]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} />
      </mesh>
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[6.42, 0.5, 2.22]} />
        <meshStandardMaterial color="#0B1F3A" roughness={0.6} />
      </mesh>
      <mesh position={[3.05, 0.45, 0]}>
        <boxGeometry args={[0.4, 0.95, 1.9]} />
        <meshStandardMaterial color="#bfe2ff" metalness={0.8} roughness={0.05} emissive="#1a4a7a" emissiveIntensity={0.2} />
      </mesh>
      {windows.map((x) => (
        <mesh key={x} position={[x, 0.5, 1.07]}>
          <boxGeometry args={[0.8, 0.8, 0.06]} />
          <meshStandardMaterial color="#bfe2ff" metalness={0.8} roughness={0.05} emissive="#1a4a7a" emissiveIntensity={0.2} />
        </mesh>
      ))}
      {windows.map((x) => (
        <mesh key={`r${x}`} position={[x, 0.5, -1.07]}>
          <boxGeometry args={[0.8, 0.8, 0.06]} />
          <meshStandardMaterial color="#bfe2ff" metalness={0.8} roughness={0.05} emissive="#1a4a7a" emissiveIntensity={0.2} />
        </mesh>
      ))}
      {[
        [-2, -1.05, 1.0],
        [-2, -1.05, -1.0],
        [2.2, -1.05, 1.0],
        [2.2, -1.05, -1.0],
      ].map((p, i) => (
        <mesh
          key={i}
          ref={(el) => (wheels.current[i] = el)}
          position={p}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.55, 0.55, 0.35, 24]} />
          <meshStandardMaterial color="#101826" roughness={0.7} />
        </mesh>
      ))}
      <mesh position={[3.22, -0.1, 0.7]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#fff7d6" emissive="#ffe79a" emissiveIntensity={2} />
      </mesh>
      <mesh position={[3.22, -0.1, -0.7]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#fff7d6" emissive="#ffe79a" emissiveIntensity={2} />
      </mesh>
      {/* CTM logo strip */}
      <mesh position={[0, 0.2, 1.12]}>
        <planeGeometry args={[1.6, 0.5]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.15} />
      </mesh>
    </group>
  )
}

function Mountains() {
  const peaks = useMemo(() => {
    const arr = []
    for (let i = 0; i < 7; i++) {
      arr.push({
        x: -18 + i * 6 + (i % 2) * 1.5,
        z: -14 - (i % 3) * 3,
        h: 4 + (i % 4) * 1.2,
        c: i % 2 === 0 ? '#D9A77A' : '#B8835C',
      })
    }
    return arr
  }, [])
  return (
    <group>
      {peaks.map((p, i) => (
        <mesh key={i} position={[p.x, p.h / 2 - 1.5, p.z]}>
          <coneGeometry args={[3.5, p.h, 4]} />
          <meshStandardMaterial color={p.c} roughness={1} flatShading />
        </mesh>
      ))}
    </group>
  )
}

function Sun() {
  const sun = useRef()
  useFrame(({ clock }) => {
    if (sun.current) sun.current.material.emissiveIntensity = 1.8 + Math.sin(clock.elapsedTime) * 0.2
  })
  return (
    <mesh ref={sun} position={[-8, 5, -12]}>
      <sphereGeometry args={[2.2, 32, 32]} />
      <meshStandardMaterial color="#FFD27A" emissive="#FFB347" emissiveIntensity={1.8} toneMapped={false} />
    </mesh>
  )
}

function Road() {
  const lines = useRef()
  useFrame(({ clock }) => {
    if (lines.current) {
      lines.current.position.x = (clock.elapsedTime * 4) % 4 - 8
    }
  })
  return (
    <group position={[0, -1.7, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[40, 6]} />
        <meshStandardMaterial color="#1a1f2e" roughness={0.9} />
      </mesh>
      <group ref={lines} position={[0, 0.01, 0]}>
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={i} position={[-10 + i * 2, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1, 0.15]} />
            <meshStandardMaterial color="#FFD27A" emissive="#FFD27A" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

export default function BusModel({ scrollY }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [7, 3, 9], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={['#F5C58A', 12, 32]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[-8, 8, -4]} intensity={1.8} color="#FFE0B2" castShadow />
      <directionalLight position={[6, 5, 6]} intensity={0.5} color="#7DB9E8" />

      <Sun />
      <Mountains />
      <Road />

      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.3}>
        <Coach scrollY={scrollY} />
      </Float>

      <Sparkles count={40} scale={14} size={3} speed={0.4} color="#FFD27A" position={[0, 2, -3]} />

      <ContactShadows position={[0, -1.68, 0]} opacity={0.5} scale={16} blur={2.8} far={6} />
      <Environment preset="sunset" />
    </Canvas>
  )
}
