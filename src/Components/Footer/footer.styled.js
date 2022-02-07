import styled from "styled-components";
import { Flex } from "@chakra-ui/react";

export const FooterStyled = styled(Flex) `
    
    width: 100%;
    /* border: 1px solid red; */
    padding: 20px;
    justify-content: space-between;
    align-items: center;

    .contact-info {
        font-size: 1rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 20%;
    }

    .social-media {
        justify-content: space-between;
        width: 10%;
    }
`