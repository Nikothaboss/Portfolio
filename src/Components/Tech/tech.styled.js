import styled from "styled-components"
import { Flex } from "@chakra-ui/react"
import { colors, device } from "../../app.styled"

export const TechStyled = styled(Flex) `
    flex-direction: column;
    padding: 40px;
    justify-content: space-between;
    /* align-items: center; */
    @media${device.tablet} {
        /* align-items: flex-start; */
        

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

    @media${device.mobileL}{
        .newTech{
            flex-direction: column;
            justify-content: flex-start
            
        }

        .exp{
            flex-direction: column;
        }

        .techObj{
            justify-content: flex-start;
            align-items: center;
            width: 100%;
        }

        .techObj2{
            justify-content: flex-start;
            
            width: 100%;
        }
        .heading{
            font-size: 2rem;
        }
        .intro-text{
            font-size: 1.1rem;
        }
        .middle{
            margin: 1rem 0;
        }
    }

    .logo{
        width: 50px;
    }

    .logo-lg{
        width: 100px;
        @media${device.mobileL}{
            width: 150px;
        }
    }

    .exp{
        justify-content: space-between;
        margin-top: 2rem;
        align-items: flex-end;
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

    .content-container{
        flex-direction: column;
        /* border: 1px solid red; */
        max-width: 1200px;
        /* margin: auto; */
    }

`