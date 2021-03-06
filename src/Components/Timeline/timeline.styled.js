import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { device } from "../../app.styled";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex)
export const TimelineStyled = styled(MotionFlex) `


.timeline{
    /* border-top: 2px solid white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; */
    width: 100%;
    

}

.timelineObj{
    @media${device.tablet}{
        border: none
    }
    /* border-top: 2px solid white; */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.year{
    width: 100%;
    @media${device.mobileL}{
        flex-direction: column;
    }
}

.timeline-container {
    padding: 20px;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    /* overflow-y: scroll; */
}


`