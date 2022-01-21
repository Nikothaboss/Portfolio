import { Box } from "@chakra-ui/layout";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import {TextureLoader} from "three/src/loaders/TextureLoader"
import { Suspense } from "react";



// import textureColor from "./img/Tiles093_4K_Color.jpg"
// import displacement from "./img/Tiles093_4K_Displacement.jpg"
import normal from "../../img/Tiles093_4K_NormalDX.jpg"
import normal2 from "../../img/Tiles093_4K_NormalGL.jpg"
import roughness from "../../img/Tiles093_4K_Roughness.jpg"
import ao from "../../img/Tiles093_4K_AmbientOcclusion.jpg"

const moonTexture = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
const moonDisplacement = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg"



const Scene = () => {
  const [
    colorMap,
    displacementMap,
    roughnessMap,
    aoMap,
    metalnessMap
  ] = useLoader(TextureLoader, [
    moonTexture,
    moonDisplacement,
    normal2,
    roughness,
    ao,
    normal
  ]);
  return (
    <>
    <ambientLight intensity={0.2} />
    <directionalLight />
        <mesh position={[0, 0, 0]} scale={[2.2, 2.2 , 2.2]}>
          {/* Width and height segments for displacementMap */}
          <sphereBufferGeometry />
          <meshStandardMaterial
            flatShading={false}
            displacementScale={0}
            map={colorMap}
            displacementMap={displacementMap}
            roughnessMap={roughnessMap}
            aoMap={aoMap}
            metalnessMap={metalnessMap}
          />
        </mesh>
    
  </>
  )
}

function Moon({height, width}) {
  return (
    <>
      <Box height={height} width={width} className="canvas-container">
      <Canvas >
        <Suspense fallback={"Loading"}>
          <Scene />
          
          
          <OrbitControls  autoRotate/>
        </Suspense>
      </Canvas>
      </Box>
    </>
  );
}

export default Moon;
