import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

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

        img{
            width: 50%;
            max-height: 350px;
            border-radius: 10px;
        }
    }

    .project{
        margin-bottom: 2rem;
        /* padding: 2rem; */
    }

    .project-info{
        flex-direction: column;
        padding-left: 1rem;
        justify-content: space-between;
        height: 50%;
        width: 50%
    }

    .description-container{
        background: #07151a;
        font-size: 1.2rem;
        padding: 1rem;
        border-radius: 10px;
    }

    .tech-container{
        font-size: 1.2rem;
        font-weight: 600;
        list-style: none;
        justify-content: space-between;
        padding: 1rem;
        display: flex;  
        flex-direction: row;
        /* border: 1px solid white; */
    }

    
`
