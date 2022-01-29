import React from 'react'
import { AboutStyled, TimelineBtn} from './about.styled'
import { Circle, Text } from '@chakra-ui/react'
import ProfilePic from "../../img/profile-picture.jpg"
import { colors, fonts } from '../../app.styled'
import { aboutAnimations } from '../../utils/animations'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <AboutStyled 
        variants={aboutAnimations}
        exit="pageExit"
        initial="pageInitial"
        animate="pageEnter"
        overflow="hidden"
        h="100vh"
            >
            <Circle 
            backgroundImage={ProfilePic} 
            backgroundPosition="center" 
            backgroundSize="cover"  
            w="250px" 
            h="250px"
            className='profile-pic'
            
            >
          
            </Circle>
            <Text as="h1" m="10" fontFamily={fonts.poppins} fontSize={24} letterSpacing={2.5} color={colors.ctaColor} fontWeight={600}>
                Nikolai Reed-Larsen
            </Text>
            <Text fontFamily={fonts.poppins} maxWidth={750} mb="5" fontSize={16}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Text>
                
            <Text fontFamily={fonts.poppins} maxW={750} fontSize={16}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <TimelineBtn whileHover={{scale: 1.1}} whileTap={{scale: 0.99}} cursor="pointer">
                <Link to="/Timeline"><Text>Timeline</Text></Link>
            </TimelineBtn>


        </AboutStyled>
    )
}

export default About
