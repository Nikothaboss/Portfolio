import styled from "styled-components"
import { Flex } from "@chakra-ui/react"
import { colors, device } from "../../app.styled"

export const TechStyled = styled(Flex) `
    flex-direction: column;
    padding: 40px;
    justify-content: space-between;
    @media${device.tablet} {
        align-items: flex-start;
        

        .exp{
            width: 100%
        }

        .newTech{
            
            justify-content: space-between;
            align-items: flex-start;
        }

        .intro-text{
            width: 100%;
        }

        .heading{
            text-align: left;
            font-size: 3rem;
        }
    }

    .logo{
        width: 50px;
    }

    .logo-lg{
        width: 100px;
    }

    .exp{
        justify-content: space-between;
        margin-top: 2rem;
    }

    .spacer{
        margin: 2rem 0;
        width: 5rem;
        height: 1rem;
        background: ${colors.darkDetailColor};
        border-radius: 1rem;
    }

    .newTech{
        margin: 2rem 0 0 0;
        justify-content: space-between;
        align-items: flex-start;
        
        
    }

`