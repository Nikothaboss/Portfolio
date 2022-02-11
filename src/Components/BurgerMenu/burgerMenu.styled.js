import styled from "styled-components";
import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";

const MotionFlex = motion(Flex);

export const BurgerMenuStyled = styled(MotionFlex) `
    /* z-index: 999; */

    .burgerMenu{
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 70%;
        font-size: 1.5rem;
        text-align: center;

    }
`