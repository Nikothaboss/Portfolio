import styled from "styled-components";
import { Flex, VStack } from "@chakra-ui/layout";
import { colors, device } from "../../app.styled";
import { motion } from "framer-motion";
const MotionFlex = motion(Flex)

export const HeaderStyled = styled(MotionFlex) `
    flex-direction: column;
    padding: 30px;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    z-index: 9;

 

    ul{
        list-style: none;
        font-size: 20px;
        font-weight: 500;
        li{
            margin-bottom: 25px;
        }
    }
    
`