import { TimelineStyled } from "./timeline.styled"
import { Flex, Text } from "@chakra-ui/react"
import { colors, fonts } from "../../app.styled"
import { useColorModeValue } from "@chakra-ui/react"
import { useFetch } from "../../utils/fetch"
import { useResize } from "../../utils/resize"
import { aboutAnimations } from "../../utils/animations"
import { motion } from "framer-motion"
import { useRef } from "react"

import Footer from "../Footer/Footer"


const TimelineObject = ({year, text, screenWidth, data}) => {
    const color = useColorModeValue(colors.darkModeBg, colors.lightModeBg)
    return (
    <Flex 
      className="year"
      alignItems={"flex-start"} 
      flexDir={screenWidth < 768 ? "row" : "column"} 
      w={screenWidth > 768 ? `${100 / data.length}%` : "100%"}  
      p="20px"
      >
        {screenWidth > 470 && <Flex w="3rem" h=".2rem" mr="1rem" mt="20px" bg={color}></Flex>}
        <Text fontSize={"1.5rem"} mr="1rem" color={colors.ctaColor} >{year}</Text>
        <Text fontSize={"1rem"}>{text}</Text>
    </Flex>

    )
}

const Timeline = () => {
    const {data} = useFetch("./timelineData.json")
    const {screenWidth} = useResize()
    const letter = useRef(null)
    const MotionText = motion(Text)
    const color = useColorModeValue(colors.darkModeBg, colors.lightModeBg)

    console.log(letter)

    return (
        <TimelineStyled 
          minH="100vh" 
          w="100vw" 
          flexDir="column" 
          alignItems="center" 
          justifyContent="space-around"
          variants={aboutAnimations}
          initial="pageInitial"
          animate="pageEnter"
          exit="pageExit"
        >
          <Flex flexDir="column" className="timeline-container">
            <Flex flexDir={"column"} w="100%" >
                <MotionText
                  as="h1"
                  fontSize={ screenWidth < 425 ? "2rem" : "2.5rem"}
                  textAlign={"left"}
                  fontWeight="600"
                  w="100%"
                  // color={color}
                  ref={letter}
                  fontFamily={fonts.poppins}
                  // opacity=".7"
                  
                  >Timeline</MotionText>

                <Flex flexDir={"column"} w="100%">
                    <Text w="100%" p="0px 0px" fontSize={screenWidth > 768 ? "1.2rem" : "1rem"} fontWeight="600">
                        This is a short summary of my developer journey this far
                    </Text>
                    <Text w="100%" p="0px 0px" fontSize={screenWidth > 768 ? "1.2rem" : "1rem"} fontWeight="600">
                        I have found my passion in life and
                    </Text>
                    <Text w="100%" p="0px 0px" fontSize={screenWidth > 768 ? "1.2rem" : "1rem"} fontWeight="600">
                        I'm eager to make you or your company a part of this journey
                    </Text>
                </Flex>  
            </Flex>

            <Flex 
              className="timeline" 
            //   h="100%"
              w={screenWidth > 768 ? "100%" : screenWidth < 550 ? "100%" : "70%" }
            //   overflowX={ "scroll"}  
              justifyContent={"flex-end"}
              alignItems={"flex-start"}
            >
                <Flex 
                  justifyContent={screenWidth > 768 ? "space-evenly" : "flex-end"} 
                  w="100%"
                  flexDir={screenWidth < 768 ? "column" : "row"}
                  >
                    {data.map(({year, text, id}) => {
                        return(
                        <TimelineObject 
                        year={year} 
                        text={text} 
                        key={id} 
                        screenWidth={screenWidth} 
                        data={data} />
                        )
                    })}
                </Flex>
            </Flex>
            </Flex>
            <Footer />
        </TimelineStyled>
    )
}

export default Timeline
