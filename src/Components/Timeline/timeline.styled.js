import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { colors } from "../../app.styled";

export const TimelineStyled = styled(Flex) `
padding: 20px;
.timeline{
    border-left: 3px solid ${colors.darkDetailColor};
    padding: 20px;


}
`