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

    .logo{
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        border: 2px solid white;
        width: 4vw;
    }
    
`