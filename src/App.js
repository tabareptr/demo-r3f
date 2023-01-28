import { useRef, useState } from 'react'
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { P } from './letters/P'
import { J } from './letters/J'
import { L } from './letters/L'
import { Seeker } from './Seeker'

const MAX_BLOCKS = 70

const PJL = ({ rotate, onBlockDestroyed, canDestroy }) => {
  useFrame((state, delta) => {
    if (rotate) {
      ref.current.rotation.x += delta / 3
    }
  })
  const ref = useRef()

  return (
    <mesh ref={ref}>
      <P color="#9BCCFD" x={0} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
      <J color="#f0f0f0" x={5} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
      <L color="#0074DD" x={10} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    </mesh>
  )
}

export function __App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>
        </XR>
      </Canvas>
    </>
  )
}
export default function App() {
  const [rotate, setRotate] = useState(true)
  const [destroyed, setDestroyed] = useState(new Set())

  const message =
    destroyed.size >= MAX_BLOCKS
      ? 'YOU WON! The password is: LOISGRIFFIN '
      : rotate
      ? 'Click the ball! You can zoom, rotate, etc.'
      : destroyed.size > 0
      ? `Blocks destroyed: ${destroyed.size}`
      : 'Yes! Click blocks to destroy them.'

  console.log({ destroyed })
  return (
    <>
      <div style={{ color: '#c9c9c9', width: '100%', textAlign: 'center', margin: 15, fontSize: '50px' }}>{message}</div>
      <VRButton />
      <Canvas camera={{ fov: 75, near: 0.5, far: 1000, position: [5, 0, 20] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <XR>
          <Controllers />

          <PJL
            rotate={rotate}
            destroyable
            canDestroy={!rotate}
            onBlockDestroyed={(id) => {
              setDestroyed((state) => {
                const newState = new Set([...state])
                newState.add(id)
                return newState
              })
            }}
          />

          {/* {rotate && <Seeker onClick={() => setRotate(false)} />} */}
        </XR>

        {/* <OrbitControls /> */}
      </Canvas>
    </>
  )
}
