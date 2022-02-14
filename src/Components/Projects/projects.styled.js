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
        max-height: 435px;
        border-radius: 10px;
        object-fit: cover;
        /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; */
        /* box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px; */
        box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
            
    }

    .project{
        margin-bottom: 2rem;
        justify-content: center;
        /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; */

        /* position: relative; */
    }

    .project-info{
        flex-direction: column;
        padding:  1rem;
        justify-content: space-between;
        max-height: 100%;
        width: 100%;
        border-radius: 10px;
        z-index: 9;
    }

    .description-container{
        /* background: #07151a; */
        /* font-size: 1.2rem; */
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

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
        margin-right: 1rem;
        margin-bottom: .5rem;
    }

    .github{
        margin-right: 2rem;
    }

    
`
