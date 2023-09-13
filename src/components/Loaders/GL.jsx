import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const LoaderGL = ({ url, scale, position }) => {
  const gltf = useLoader(GLTFLoader, url)

  if (scale) {
    gltf.scene.scale.set(scale, scale, scale)
  }

  if (position) {
    gltf.scene.position.set(position[0], position[1], position[2])
  }

  return <primitive object={gltf.scene} position={position} />
}

export default LoaderGL
