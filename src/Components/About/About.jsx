import React from 'react'
import { AboutStyled } from './about.styled'

const About = () => {
    return (
        <AboutStyled initial={{opacity: 0}} animate={{opacity: 1}} exit={{x: -200}}transition={{duration: .3}}>
            <h1>DUUUUUUUUUUUDE</h1>
        </AboutStyled>
    )
}

export default About
