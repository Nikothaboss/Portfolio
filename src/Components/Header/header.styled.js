import styled from "styled-components";
import { Flex, VStack } from "@chakra-ui/layout";
import { colors } from "../../app.styled";

export const HeaderStyled = styled(Flex) `
    flex-direction: column;
    max-width: 1100px;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    margin: auto;
    position: absolute;
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