import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const LoaderFBX = ({ url, scale, position }) => {
  const fbx = useLoader(FBXLoader, url)

  if (scale) {
    fbx.scale.set(scale, scale, scale)
  }

  if (position) {
    fbx.position.set(position[0], position[1], position[2])
  }

  return <primitive object={fbx} position={position} />
}

export default LoaderFBX
