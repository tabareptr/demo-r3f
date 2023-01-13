import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

export const Seeker = ({ onClick }) => {
  const { viewport } = useThree()
  const ref = useRef()
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2

    ref.current.position.set(x - 10, y + 10, 0)
  })

  return (
    <mesh position={[7, -10, 3]} ref={ref} onClick={onClick}>
      <meshStandardMaterial color={'yellow'} emissive="red" />
      <sphereGeometry args={[0.5]} />
    </mesh>
  )
}
