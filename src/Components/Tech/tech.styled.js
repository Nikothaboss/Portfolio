import styled from "styled-components"
import { Flex } from "@chakra-ui/react"
import { colors, device } from "../../app.styled"
import { motion } from "framer-motion"

const MotionFlex = motion(Flex)

export const TechStyled = styled(MotionFlex) `
    flex-direction: column;
    height: 100vh;
    /* padding: 40px; */
    justify-content: space-between;
    position: relative;
    /* align-items: center; */
    @media${device.tablet} {
        
        .exp{
            
            flex-direction: column;
            
        }

        .techObj{
            margin-right: 0;
            margin-bottom: 1rem;
        }

        .techObj2{
            margin-right: 0;
            margin-bottom: 1rem;
        }

        .newTech{
            flex-direction: column;
            justify-content: flex-start
            
        }

        .intro-text{
            width: 100%;
            margin: 1rem 0 1.5rem 0;;
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
        width: 85px;
        @media${device.mobileL}{
            width: 150px;
        }
    }

    /* .exp{
        justify-content: space-between;
        margin-top: 2rem;
        align-items: flex-end;
        
    } */

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
        justify-content: space-between;
        height: 100%;
        overflow-x: hidden;
        padding: 40px ;
    }

    .techObj2{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 1rem;
        border-radius: 10px;
        height: 180px;
        margin-right: 1rem;
        img{
            margin-bottom: 1rem;
        }
    }
    .techObj{
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 1rem;
        border-radius: 10px;
        margin-right: 1rem;
        

        img{
            margin-bottom: 1rem;
        }
    }

    .intro-text{
        max-width: 600px;
        margin-bottom: 1rem;
    }

`