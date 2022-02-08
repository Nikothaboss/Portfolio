import styled from "styled-components";
import { motion } from "framer-motion";
import { Flex, Center } from "@chakra-ui/layout";
import { colors, device } from "../../app.styled";

const MotionFlex = motion(Flex);
const MotionCenter = motion(Center);

export const AboutStyled = styled(MotionFlex) `
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    .about-container{
        height: 100%;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        justify-content: space-between;

        @media${device.mobileL}{
            padding: 0;
        }
    }

    .profile-pic{
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }

    img{
        width: 200px;
        object-fit: fill;
        border-radius: 50%;
    }

`

export const TimelineBtn = styled(MotionCenter) `
    padding: 10px;
    max-width: 300px;
    min-width: 177px;
    background: ${colors.ctaColor};
    border-radius: 30px;
    font-size: 1.4rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    

`