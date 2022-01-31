import { TimelineStyled } from "./timeline.styled"
import { Flex, Text } from "@chakra-ui/react"
import { colors, device } from "../../app.styled"
import { useColorModeValue } from "@chakra-ui/react"
import { useFetch } from "../../utils/fetch"


const TimelineObject = ({year, text}) => {
    const color = useColorModeValue(colors.darkModeBg, colors.lightModeBg)
    return (
        <Flex alignItems={"flex-start"} w="300px" mb="1rem">
            <Flex w="4rem" h=".2rem" mr="1rem" mt="20px" bg={color}></Flex>
            <Text fontSize={"1.5rem"} mr="1rem" color={colors.ctaColor} >{year}</Text>
            <Text fontSize={".9rem"}>{text}</Text>
        </Flex>

    )
}

const Timeline = () => {
    console.log(Number(device.mobileL))
    const {data} = useFetch("./timelineData.json")
    return (
        <TimelineStyled h="100vh" w="100vw" flexDir="column">
            <Flex className="timeline" flexDir={"column"}>
                {data.map(({year, text}) => {
                    return(
                        <TimelineObject year={year} text={text} />
                    )
                })}
            </Flex>
            
        </TimelineStyled>
    )
}

export default Timeline
