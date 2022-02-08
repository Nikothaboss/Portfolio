import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
export const FooterStyled = styled(MotionFlex) `
    
    width: 100%;
    /* border: 1px solid red; */
    padding: 25px;
    justify-content: space-between;
    align-items: center;

    .contact-info {
        font-size: 1rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 200px;
    }

    .social-media {
        justify-content: space-between;
        width: 100px;
    }
`