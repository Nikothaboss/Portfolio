import { HomeStyled } from "./home.styled";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Box, Text, Center, Flex } from "@chakra-ui/layout";
import { colors } from "../../app.styled";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { motion } from "framer-motion";
import { homeAnimations } from "../../utils/animations";
import WordBall from "./WordBall";
import {useResize} from "../../utils/resize"
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

const Home = () => {
    const color = useColorModeValue(colors.darkModeBg, colors.lightModeBg)
    const arrowColor = useColorModeValue(colors.darkDetailColor, colors.lightModeBg)
    const MotionBox = motion(Box)
    const {screenWidth} = useResize()
    const {colorMode} = useColorMode()
    return (
        <HomeStyled 
        flexDir={screenWidth < 768 ? "column" : "row"} 
        justifyContent="space-around" 
        alignItems="center" 
        h="100vh" 
        p="20px 0px" 
        w="100%"
        overflow="hidden"
        variants={homeAnimations}
        exit="pageExit"
        initial="pageInitial"
        animate="pageEnter"
        >
        
            {screenWidth < 768 && (
                <Center flexDir={"column"}>
                    <Link to="/Tech">
                        <Text fontSize={"1.2rem"} fontWeight={500} mb="1rem">
                            Technologies
                        </Text>
                    </Link>
                    <MotionBox variants={homeAnimations} animate={"arrowAnimation"}>
                        <Link to="/Tech">
                            <FaArrowUp size={"1.2rem"} color={arrowColor} />
                        </Link>
                    </MotionBox>

                </Center>
            )}
            <Center flexDir="column" w="50%"  >
                <Text w="100vw" color={color} fontSize={screenWidth < 768 ? "1.5rem" : "2rem"} fontWeight="bold" textAlign="center" p="0" >
                    Hi, I'm <Text as="span"  color={colors.darkDetailColor}>Nikolai</Text> <br/>
                    I'm a Front end Developer
                </Text>
                {screenWidth > 768 && (
                    <>
                        <Link to="/About">
                            <Flex
                                justifyContent={"center"}
                                w="308.56px"
                                p="10px 60px"
                                mt="15px"
                                cursor="pointer"
                                borderRadius="10px"
                                textAlign={"center"}
                                color="white"
                                bg={colors.ctaColor}
                            >
                                About Me
                            </Flex>
                        </Link>
                        <Box h="1.2rem"></Box>
                        <MotionBox  variants={homeAnimations} animate="arrowAnimation">
                            <FaArrowUp size={"1.5rem"} color={arrowColor} />
                        </MotionBox>
                    </>

                )}
            </Center>

            {/* <Moon height="300px" width="300px"/> */}
            <WordBall 
                height={screenWidth < 768 ? "50vh" : "60vh"} 
                width={screenWidth > 768 ? screenWidth / 2 : screenWidth - 50} 
                cameraZoom={screenWidth > 768 ? 40 : 60}
                textColor={colorMode === "dark" ? colors.lightModeBg : colors.darkModeBg}
                />
            {screenWidth < 768 && (
                <>
                    <Link to="/About">
                        <Box p="10px 60px" mb="1rem" borderRadius="30px" color="white" bg={colors.ctaColor}>
                            About Me
                        </Box>
                    </Link>
                    
                    <Center flexDir={"column"}>
                        <MotionBox variants={homeAnimations} animate={"arrowAnimation2"}>
                            <Link to="/Projects">
                                <FaArrowDown size={"1.2rem"} color={arrowColor} />
                            </Link>
                        </MotionBox>
                        <Link to="/Projects">
                            <Text fontSize={"1.2rem"} fontWeight={500}  >
                                Projects
                            </Text>
                        </Link>
                    </Center>
                </>

            )}

        </HomeStyled>
    )
}

export default Home
