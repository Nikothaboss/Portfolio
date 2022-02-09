import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { device } from "../../app.styled";

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
        width: 100%;
        margin-right: 3rem;
        @media${device.mobileL}{
            margin-right: 0rem
        }
    }

    .social-media {
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        margin-left: 3rem;
        @media${device.mobileL}{
            margin-right: 0rem
        }
    }

    .social-icon{
        margin-right: 1rem;
    }
`