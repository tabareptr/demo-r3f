import { Box } from '../shapes/box'

export const L = ({ color, x, onBlockDestroyed, canDestroy }) => (
  <>
    <Box position={[x, 0, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 0, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 1, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 1, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 2, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 2, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 0, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 0, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 4, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 4, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 5, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 5, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 0, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 0, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 1, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 1, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 2, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 2, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />

    <Box position={[x + 1, 0, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x + 1, 0, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x + 1, 0, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />

    <Box position={[x + 2, 0, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x + 2, 0, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x + 3, 0, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x + 3, 0, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />

    <Box position={[x, 3, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 3, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 4, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 4, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 5, 0]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
    <Box position={[x, 5, -1]} defaultColor={color} onBlockDestroyed={onBlockDestroyed} canDestroy={canDestroy} />
  </>
)
