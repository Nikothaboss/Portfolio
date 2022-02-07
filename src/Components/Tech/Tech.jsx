import { TechStyled } from "./tech.styled"
import { Text, Flex } from "@chakra-ui/react"
import { fonts } from "../../app.styled"
import { useColorMode } from "@chakra-ui/react"
import { useResize } from "../../utils/resize"
import { aboutAnimations } from "../../utils/animations"
import Footer from "../Footer/Footer"

import reactLogo from "../../img/logos/react-logo-2.png"
import strapiLogo from "../../img/logos/Strapi-logo.svg"
import chakraLogo from "../../img/logos/chakra-ui-logo.png"
import threeLogo from "../../img/logos/threejs-logo.svg"
import darkThreeLogo from "../../img/logos/darkThreeLogo.svg"
import d3Logo from "../../img/logos/d3-logo.png"
import nextLogo from "../../img/logos/Nextjs-logo.svg"
import darkNextLogo from "../../img/logos/blackNextLogo.svg"



const Tech = () => {

    const {colorMode} = useColorMode()
    const {screenWidth} = useResize()

    const ExpObject = ({logo, field, exp, extraClass=""}) => {
        return (
            <Flex flexDir={"column"}  justifyContent={"space-between"} className={`techObj2 ${extraClass}`}>
                <img src={logo} alt="" className="logo" />
                <Text fontSize={"1.2rem"} fontWeight={800}>{field}</Text>
                <Text w="80%">Experience with {exp}</Text>
            </Flex>
        )
    }

    const NewTech = ({logo, tech, extraClass=""}) => {
        return (
            <Flex flexDir={"column"} justifyContent={"space-between"} alignItems={"center"} h="100%" className={`techObj ${extraClass}`}>
                <img src={logo} alt="" className="logo-lg" />
                <Text fontSize={"1.2rem"}>{tech}</Text>
            </Flex>
        )
    }
    return (
        <>
        <TechStyled w="100%" variants={aboutAnimations} initial="pageInitial" animate="pageEnter" exit="pageExit">
            <Flex className="content-container">
                <Text as="h1" fontFamily={fonts.poppins} fontSize="3.5rem" fontWeight={600} className="heading">
                    Technologies
                </Text>
                <Text fontSize={"1.2rem"} w="40%" className="intro-text">
                    I have worked with a variaty of technologies relevant to Front end Development
                </Text>
                <Flex w={screenWidth > 950 ? "60%":"100%"} className="exp">
                    <ExpObject logo={reactLogo} field={"Front End"} exp={"JavaScript & React"} />
                    <ExpObject logo={strapiLogo} field={"Back End"} exp={"Strapi & Heroku"} extraClass={"middle"} />
                    <ExpObject logo={chakraLogo} field={"UX/UI"} exp={"Chakra UI & Figma"} />
                </Flex>
                <Flex className="spacer"></Flex>
                <Text as="h2" fontSize={"1.5rem"} fontWeight={600} fontFamily={fonts.poppins} >
                    Technologies I want to work with
                </Text>
                <Flex w={screenWidth > 950 ? "60%":"100%"} className="newTech">
                    <NewTech logo={colorMode === "dark" ? nextLogo : darkNextLogo} tech={"Next.js"} />
                    <NewTech logo={d3Logo} tech={"D3.js"} extraClass={"middle"} />
                    <NewTech logo={colorMode === "dark" ? threeLogo : darkThreeLogo} tech={"Three.js"} />
                </Flex>
            </Flex>
            <Footer />
        </TechStyled>
            
        </>
    )
}

export default Tech
