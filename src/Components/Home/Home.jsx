import { HomeStyled } from "./home.styled";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Box, Text, Center } from "@chakra-ui/layout";
import { colors } from "../../app.styled";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Home = () => {
    const color = useColorModeValue(colors.darkDetailColor, colors.lightDetailColor)
    return (
        <HomeStyled flexDir="column" justifyContent="space-between" alignItems="center" h="88vh" p="20px">
            <Center flexDir="column">
                <Text textAlign="center">Technologies</Text>
                <FaArrowUp size="1.8rem" color={color} />
            </Center>
            <Text color={color} fontSize="1.8rem" textAlign="center">Hi, I'm <Text as="span" color={colors.ctaColor}>Nikolai</Text> <br/>I am a Front end Developer </Text>
            <Center width="80%" h="200px" border="1px solid red">Placeholder for three.js</Center>
            <Box p="10px 50px" borderRadius="5px" color="white" bg={colors.ctaColor}>About Me</Box>
            <Center flexDir="column">
                <FaArrowDown size="1.8rem" color={color} />
                <Text textAlign="center">Projects</Text>
            </Center>
        </HomeStyled>
    )
}

export default Home
