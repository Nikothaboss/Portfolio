import { HomeStyled } from "./home.styled";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Box, Text, Center, Flex } from "@chakra-ui/layout";
import { colors } from "../../app.styled";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { motion } from "framer-motion";
import { homeAnimations } from "../../utils/animations";
import Moon from "./Moon";
import WordBall from "./WordBall";
import {useResize} from "../../utils/resize"

const Home = () => {
    const color = useColorModeValue(colors.darkModeBg, colors.lightDetailColor)
    const MotionBox = motion(Box)
    const {screenWidth} = useResize()
    return (
        <HomeStyled flexDir={screenWidth < 768 ? "column" : "row"} justifyContent="space-between" alignItems="center" h="100vh" p="20px 0px" w="100%">
            
            <Center flexDir="column" w="50%"  >
                <Text color={color} fontSize={screenWidth < 768 ? "1.5rem" : "2rem"} fontWeight="bold" textAlign="left" >
                    Hi, I'm <Text as="span" color={colors.ctaColor}>Nikolai</Text> <br/>
                    Front end Developer
                </Text>
                {screenWidth > 768 && (
                    <Flex justifyContent={"center"} w="308.56px" p="10px 60px" mt="15px" borderRadius="10px" textAlign={"center"} color="white" bg={colors.darkDetailColor}>About Me</Flex>
                )}
            </Center>

            {/* <Moon height="300px" width="300px"/> */}
            <WordBall height="60vh" width={screenWidth > 768 ? screenWidth / 2 : screenWidth - 50} />
            {screenWidth < 768 && (
                <Box p="10px 60px" mt="15px" borderRadius="10px" color="white" bg={colors.darkDetailColor}>About Me</Box>

            )}

        </HomeStyled>
    )
}

export default Home
