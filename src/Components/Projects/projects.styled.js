import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

export const ProjectsStyled = styled(MotionFlex) `
    width: 100%;

    .projects-container{
        width: 100%;
        height: 100%;
    }
`
