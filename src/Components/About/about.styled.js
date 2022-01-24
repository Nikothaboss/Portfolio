import styled from "styled-components";
import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/layout";

const MotionFlex = motion(Flex)

export const AboutStyled = styled(MotionFlex) `
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .profile-pic{
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }

    img{
        width: 200px;
        object-fit: fill;
        border-radius: 50%;
    }

`