import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

const LoaderOBJ = ({ url, scale, position }) => {
  const obj = useLoader(OBJLoader, url)

  if (scale) {
    obj.scale.set(scale, scale, scale)
  }

  if (position) {
    obj.position.set(position[0], position[1], position[2])
  }
  return <primitive object={obj} position={position} />
}

export default LoaderOBJ
