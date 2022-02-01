import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { colors } from "../../app.styled";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex)
export const TimelineStyled = styled(MotionFlex) `

.timeline{
    /* border-left: 5px solid ${colors.darkDetailColor}; */
    padding: 20px;


}
`