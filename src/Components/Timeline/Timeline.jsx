import { TimelineStyled } from "./timeline.styled"
import { Flex, Text } from "@chakra-ui/react"
import { colors, device } from "../../app.styled"
import { useColorModeValue } from "@chakra-ui/react"
import { useFetch } from "../../utils/fetch"
import { useResize } from "../../utils/resize"


const TimelineObject = ({year, text, screenWidth, data}) => {
    const color = useColorModeValue(colors.darkModeBg, colors.lightModeBg)
    return (
    <Flex 
      alignItems={"flex-start"} 
      flexDir={screenWidth < 768 ? "row" : "column"} 
      w={screenWidth > 768 ? `${100 / data.length}%` : "100%"}  
      p="20px">
        {screenWidth > 385 && <Flex w="3rem" h=".2rem" mr="1rem" mt="20px" bg={color}></Flex>}
        <Text fontSize={"1.5rem"} mr="1rem" color={colors.ctaColor} >{year}</Text>
        <Text fontSize={".9rem"}>{text}</Text>
    </Flex>

    )
}

const Timeline = () => {
    const {data} = useFetch("./timelineData.json")
    const {screenWidth} = useResize()
    return (
        <TimelineStyled 
          minH="100vh" 
          w="100vw" 
          flexDir="column" 
          alignItems="center" 
          justifyContent="flex-end"
            >
            <Flex 
              className="timeline" 
              h="100%"
              w={screenWidth > 768 ? "100%" : screenWidth < 550 ? "100%" : "70%" }
              overflowX={ "scroll"}  
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
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
            
        </TimelineStyled>
    )
}

export default Timeline
