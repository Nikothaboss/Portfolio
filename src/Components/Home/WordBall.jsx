import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'
import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { colors } from '../../app.styled'
import { useColorMode } from '@chakra-ui/react'


function Word({ children, ...props }) {
    const fontColor = useColorModeValue(colors.darkModeBg, colors.lightDetailColor)
    const {colorMode} = useColorMode()
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, color: colors.ctaColor , letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': true }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(colorMode === "dark" ? colors.darkDetailColor : colors.ctaColor), 0.1)
  })
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />
}


const test = [
  {word: "JS"},
  {word: "JS"},
  {word: "HTML"},
  {word: "CSS"},
  {word: "Strapi"},
  {word: "React"},
  {word: "Framer"},
  {word: "Figma"},
  {word: "Git"},
  {word: "Chakra UI"},
  {word: "Adobe XD"},
  {word: "Sass"},
  {word: "Tailwind"},
  {word: "Styled Components"},
  {word: "Three.js"},
  {word: "Adobe XD"},
]
function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i * i , thetaSpan * i )), test[i].word])
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default function WordBall({width, height}) {
  return (
    <Box w={width} h={height}>
        <Canvas dpr={[1, 1]} camera={{ position: [1, 1, 40], fov: 70 }}>
          {/* <fog attach="fog" args={['#b00b', 0, 80]} /> */}
          <Cloud count={14} radius={20} />
          {/* <TrackballControls /> */}
          <OrbitControls autoRotateSpeed={7} autoRotate />
        </Canvas>
    </Box>
  )
}
