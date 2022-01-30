import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'
import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { colors } from '../../app.styled'
import { useColorMode } from '@chakra-ui/react'
import { fonts } from '../../app.styled'


function Word({ textColor, children, ...props  }) {
    const fontColor = useColorModeValue(colors.darkModeBg, colors.lightDetailColor)
    const {colorMode} = useColorMode()
  const color = new THREE.Color()
  const fontProps = { font: fonts.poppins, fontSize: 2.5, color: textColor , letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
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
    // ref.current.material.color.lerp(color.set(colorMode === "dark" ? colors.darkDetailColor : colors.ctaColor), 0.9)
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
function Cloud({ count = 4, radius = 20, textColor }) {
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
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} textColor={textColor} />)
}

export default function WordBall({width, height, cameraZoom, textColor}) {
  return (
    <Box w={width} h={height}>
        <Canvas dpr={[1, 1]} camera={{ position: [1, 1, cameraZoom], fov: 70 }}>
          {/* <fog attach="fog" args={['#b00b26', 0, 80]} /> */}
          <Cloud count={14} radius={20} textColor={textColor} />
          {/* <TrackballControls /> */}
          <OrbitControls autoRotateSpeed={7} autoRotate />
        </Canvas>
    </Box>
  )
}
