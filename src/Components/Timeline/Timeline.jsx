import { TimelineStyled } from "./timeline.styled"
import { Flex, Text } from "@chakra-ui/react"
import { colors, device } from "../../app.styled"
import { useColorModeValue } from "@chakra-ui/react"
import { useFetch } from "../../utils/fetch"
import { useResize } from "../../utils/resize"


const TimelineObject = ({year, text, screenWidth}) => {
    const color = useColorModeValue(colors.darkModeBg, colors.lightModeBg)
    return (
        <Flex alignItems={"flex-start"} flexDir={screenWidth < 768 ? "row" : "column"} w="300px" mb="1rem">
            <Flex w="4rem" h=".2rem" mr="1rem" mt="20px" bg={color}></Flex>
            <Text fontSize={"1.5rem"} mr="1rem" color={colors.ctaColor} >{year}</Text>
            <Text fontSize={".9rem"}>{text}</Text>
        </Flex>

    )
}

const Timeline = () => {
    const {data} = useFetch("./timelineData.json")
    const {screenWidth} = useResize()
    return (
        <TimelineStyled h="100vh" w="100vw" flexDir="column" alignItems="center"  >
            <Flex className="timeline" w="80vw" flexDir={screenWidth < 768 ? "column" : "row"} overflowX={screenWidth < 1423 && "scroll"}  >
                {data.map(({year, text, id}) => {
                    return(
                        <TimelineObject year={year} text={text} key={id} screenWidth={screenWidth} />
                    )
                })}
            </Flex>
            
        </TimelineStyled>
    )
}

export default Timeline
