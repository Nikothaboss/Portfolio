import { TechStyled } from "./tech.styled"
import { Text, Flex } from "@chakra-ui/react"
import { fonts } from "../../app.styled"

import reactLogo from "../../img/logos/react-logo-2.png"
import strapiLogo from "../../img/logos/Strapi-logo.svg"
import chakraLogo from "../../img/logos/chakra-ui-logo.png"



const Tech = () => {

    const ExpObject = ({logo, field, exp}) => {
        return (
            <Flex flexDir={"column"} w={"100%" / 3} justifyContent={"space-between"}>
                <img src={logo} alt="" className="logo" />
                <Text fontSize={"1.2rem"} fontWeight={800}>{field}</Text>
                <Text w="80%">Experience with {exp}</Text>
            </Flex>
        )
    }

    const NewTech = ({logo, tech}) => {
        return (
            <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                <img src={logo} alt="" className="logo-lg" />
                <Text fontSize={"1.2rem"}>{tech}</Text>
            </Flex>
        )
    }
    return (
        <TechStyled w="100%">
            <Text as="h1" fontFamily={fonts.poppins} fontSize="3.5rem" fontWeight={600}>
                Technologies
            </Text>
            <Text fontSize={"1.2rem"} w="39%">
                I have worked with a variaty of technologies relevant to Front end Development
            </Text>
            <Flex w="50%" className="exp">
                <ExpObject logo={reactLogo} field={"Front End"} exp={"React"} />
                <ExpObject logo={strapiLogo} field={"Back End"} exp={"Strapi & Heroku"} />
                <ExpObject logo={chakraLogo} field={"UX/UI"} exp={"Chakra UI & Figma"} />
            </Flex>

            <Flex className="spacer"></Flex>
            <Text as="h2" fontSize={"1.5rem"} fontWeight={600} fontFamily={fonts.poppins}>
                Technologies I want to work with
            </Text>
            <Flex className="newTech">
                <NewTech logo={reactLogo} tech={"NextJs"} />
                <NewTech logo={strapiLogo} tech={"D3.js"} />
                <NewTech logo={chakraLogo} tech={"Three.js"} />
            </Flex>
        </TechStyled>
    )
}

export default Tech
