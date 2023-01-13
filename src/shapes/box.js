import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export const Box = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()

  useFrame((state, delta) => {
    if (clicked) {
      setScale(scale - delta * 2)
    }
  })

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const [scale, setScale] = useState(1)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX

  // if (clicked) return null

  const canDestroyProps = props.canDestroy
    ? {
        onClick: (event) => {
          click(!clicked)
          props.onBlockDestroyed(props.position.join(''))
        },
        onPointerOver: (event) => {
          hover(true)
          // event.stopPropagation()
        },
        onPointerOut: (event) => {
          // event.stopPropagation()
          hover(false)
        }
      }
    : {}

  if (scale < 0) return null

  return (
    <mesh {...props} ref={ref} scale={scale} {...canDestroyProps}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={clicked ? 'red' : hovered ? 'yellow' : props.defaultColor} />
    </mesh>
  )
}
