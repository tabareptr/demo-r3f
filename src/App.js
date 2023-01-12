import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { P } from './letters/P'
import { J } from './letters/J'
import { L } from './letters/L'

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <P color="blue" x={0} />
      <J color="black" x={5} />
      <L color="red" x={10} />
      <OrbitControls />
    </Canvas>
  )
}
