import React from 'react'
import ProfilePic from "../../img/profile-picture.jpg"
import { AboutStyled, TimelineBtn} from './about.styled'
import { Circle, Text, Flex } from '@chakra-ui/react'
import { colors, fonts } from '../../app.styled'
import { aboutAnimations } from '../../utils/animations'
import { Link } from 'react-router-dom'
import { useResize } from '../../utils/resize'
import Footer from "../Footer/Footer"


const About = () => {
    const {screenWidth} = useResize()
    return (
        <AboutStyled 
        variants={aboutAnimations}
        exit="pageExit"
        initial="pageInitial"
        animate="pageEnter"
        overflow="hidden"
        minH="100vh"
        
            >
        <Flex className="about-container">
            <Circle 
            backgroundImage={ProfilePic} 
            backgroundPosition="center" 
            backgroundSize="cover"  
            w={screenWidth < 425 ? "200px" : "250px"} 
            h={screenWidth < 425 ? "200px" : "250px"}
            className='profile-pic'
            m="2rem 0 1rem 0"
            
            >
          
            </Circle>
            <Flex flexDir="column">
            <Text as="h1" textAlign={"center"}  fontFamily={fonts.poppins} fontSize={24} letterSpacing={2.5} color={colors.ctaColor} fontWeight={600} mb="2rem">
                Nikolai Reed-Larsen
            </Text>
                <Text fontFamily={fonts.poppins}  maxWidth={650} mb="5" fontSize={screenWidth < 768 ? "14px" : "1.1rem"}>
                    Hi, my name is Nikolai and I make things that live on the internet. Since I was a kid I've been above average interested in technologies, it started out with video games witch led me to modding games. This gave me a good understanding of the internet and how to get what I wanted from it
                </Text>
                
                <Text fontFamily={fonts.poppins}  maxW={650} fontSize={screenWidth < 768 ? 14 : "1.1rem"}>
                   I'm currently on my last year at Noroff School of Technoligies studying Front End Development. In my first year I landed a job as a mentor at the same school, I enjoy learning and teaching everything about development from front end to back end.
                </Text>
            </Flex>

            <TimelineBtn whileHover={{scale: 1.1}} whileTap={{scale: 0.99}} cursor="pointer">
                <Link to="/Timeline">
                    <Text color={colors.lightModeBg}>
                        Timeline
                    </Text>
                </Link>
            </TimelineBtn>
            <Footer />
        </Flex>
        </AboutStyled>
    )
}

export default About
