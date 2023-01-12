import { Box } from '../shapes/box'

export const J = ({ color, x }) => (
  <>
    <Box position={[x, 0, 0]} defaultColor={color} />
    <Box position={[x, 1, 0]} defaultColor={color} />
    <Box position={[x, 0, -1]} defaultColor={color} />
    <Box position={[x, 1, -1]} defaultColor={color} />
    <Box position={[x, 5, 0]} defaultColor={color} />
    <Box position={[x, 5, -1]} defaultColor={color} />

    <Box position={[x + 1, 0, 0]} defaultColor={color} />
    <Box position={[x + 1, 0, -1]} defaultColor={color} />
    <Box position={[x + 1, 5, 0]} defaultColor={color} />
    <Box position={[x + 1, 5, -1]} defaultColor={color} />

    <Box position={[x + 2, 0, 0]} defaultColor={color} />
    <Box position={[x + 2, 0, -1]} defaultColor={color} />
    <Box position={[x + 2, 1, 0]} defaultColor={color} />
    <Box position={[x + 2, 1, -1]} defaultColor={color} />
    <Box position={[x + 2, 2, 0]} defaultColor={color} />
    <Box position={[x + 2, 2, -1]} defaultColor={color} />
    <Box position={[x + 2, 3, 0]} defaultColor={color} />
    <Box position={[x + 2, 3, -1]} defaultColor={color} />
    <Box position={[x + 2, 4, 0]} defaultColor={color} />
    <Box position={[x + 2, 4, -1]} defaultColor={color} />
    <Box position={[x + 2, 5, 0]} defaultColor={color} />
    <Box position={[x + 2, 5, -1]} defaultColor={color} />

    <Box position={[x + 3, 5, 0]} defaultColor={color} />
    <Box position={[x + 3, 5, -1]} defaultColor={color} />
  </>
)
