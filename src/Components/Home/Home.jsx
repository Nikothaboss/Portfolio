import { HomeStyled } from "./home.styled";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Box, Text, Center } from "@chakra-ui/layout";
import { colors } from "../../app.styled";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { motion } from "framer-motion";
import { homeAnimations } from "../../utils/animations";
import Moon from "./Moon";
import WordBall from "./WordBall";

const Home = () => {
    const color = useColorModeValue(colors.darkModeBg, colors.lightDetailColor)
    const MotionBox = motion(Box)
    return (
        <HomeStyled flexDir="column" justifyContent="space-between" alignItems="center" h="88vh" p="20px 0px">
            {/* <Center flexDir="column">
                <Text mb="10px" textAlign="center">Technologies</Text>
                <MotionBox p="20px 40px" variants={homeAnimations} whileHover="arrowAnimation">
                    <FaArrowUp size="1.8rem" color={color} />
                </MotionBox>
            </Center> */}
            
            <Text color={color} fontSize="1.5rem" fontWeight="bold" textAlign="left">
                Hi, I'm <Text as="span" color={colors.ctaColor}>Nikolai</Text> <br/>
                Front end Developer 
            </Text>
            {/* <Moon height="300px" width="300px"/> */}
            <WordBall height="98%" width="100%" />
            <Box p="10px 60px" borderRadius="10px" color="white" bg={colors.darkDetailColor}>About Me</Box>
            {/* <Center flexDir="column">
                <MotionBox p="20px 40px" variants={homeAnimations} whileHover="arrowAnimation">
                    <FaArrowDown size="1.8rem" color={color} />
                </MotionBox>
                <Text mt="10px" textAlign="center">Projects</Text>
            </Center> */}
        </HomeStyled>
    )
}

export default Home
