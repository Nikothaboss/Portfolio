import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { device } from "../../app.styled";

const MotionFlex = motion(Flex);

export const ProjectsStyled = styled(MotionFlex) `
    width: 100%;
    list-style: none;
    height: 100vh;
    overflow-y: scroll;
    flex-direction: column;
    

    .projects-container{
        width: 100%;
        height: 100%;
        padding: 2rem;
        flex-direction: column;
        
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;

            
    }

    .project{
        margin-bottom: 2rem;
        justify-content: center;
        /* position: relative; */
    }

    .project-info{
        flex-direction: column;
        padding:  1rem;
        justify-content: space-between;
        max-height: 100%;
        width: 100%;
        z-index: 9;
    }

    .description-container{
        background: #07151a;
        /* font-size: 1.2rem; */
        padding: 1rem;
        border-radius: 10px;
        @media${device.tablet}{
            padding: .8rem;
        }
    }

    .tech-container{
        font-size: 1.2rem;
        font-weight: 600;
        list-style: none;
        justify-content: space-between;
        padding: 1rem;
        display: flex;  
        flex-direction: row;
        margin: 1rem 0;
        flex-wrap: wrap;
        /* border: 1px solid white; */
    }

    .tech-item{
        margin-right: 1rem
    }

    
`
