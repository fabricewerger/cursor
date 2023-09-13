import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import { Color, UniformsUtils, MathUtils } from 'three'
import vertex from '../../../public/shaders/vertex.js'
import fragment from '../../../public/shaders/fragment.js'

const defaultColors = ['#5E4130', '#FDCBAD', '#78C0A8', '#F07918', '#F09A30']

const MovingPlane = ({ hover, colors, speed }) => {
  const mesh = useRef()

  const newcolors = colors?.length > 0 ? colors : defaultColors

  const uniforms = useMemo(() => {
    return UniformsUtils.merge([
      {
        time: {
          value: 0.0,
        },
      },
      {
        uColor: {
          value: newcolors?.map((color) => new Color(color)),
        },
      },
    ])
  }, [newcolors])

  useFrame((state, delta) => {
    mesh.current.material.uniforms.time.value = uniforms.time.value
    uniforms.time.value += (delta / 55) * speed

    const targetPosition = hover.current ? 0.5 : 0 // Set the target position based on hover state
    const currentPosition = mesh.current.position.z
    const newPosition = MathUtils.lerp(currentPosition, targetPosition, 0.1)

    mesh.current.position.z = newPosition

    // Update camera position based on hover
    state.camera.position.z = MathUtils.lerp(state.camera.position.z, 2.0 - hover.current * 0.5, 0.1)
  })

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={1.5}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <planeGeometry args={[6, 6, 300, 300]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms}
        wireframe={false}
        onPointerOver={() => (hover.current = true)}
        onPointerOut={() => (hover.current = false)}
      />
    </mesh>
  )
}

const Stripe = ({ colors, speed }) => {
  const hover = useRef(0)

  return (
    <Canvas
      className=''
      camera={{ position: [0, 0, 0] }}
      onPointerMove={(e) => {
        hover.current = ((e.clientY / window.innerHeight) * 3 - 1) * 0.5
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight color={0xffffff} intensity={0.5} position={[0.5, 0, 0.866]} />
      <MovingPlane hover={hover} colors={colors} speed={speed} />
    </Canvas>
  )
}

export default Stripe
