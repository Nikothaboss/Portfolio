import { FooterStyled } from "./footer.styled";
import { useColorModeValue } from "@chakra-ui/react";
import { Text, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { footerAnimations } from "../../utils/animations";


const Footer = () => {
    const bg = useColorModeValue("#07151a", "#fff")
    return (
        <FooterStyled 
          variants={footerAnimations}
          initial="initial"
          animate="animate"
          exit="initial"
        >
            <Flex className="contact-info">
                <Flex w="20vw" h="3px" mr="1rem" bg={bg}></Flex>
                {/* <MdMail size={"1.5rem"}/> */}
                <Text fontWeight="800">nreedlarsen@gmail.com</Text>
            </Flex>
            <Flex className="social-media" >
                <a href="https://github.com/Nikothaboss" className="social-icon">
                    <FaGithub size="2rem" />
                </a>
                <a href="https://www.linkedin.com/in/nikolai-reed-larsen-681697214/" className="social-icon">
                    <FaLinkedin size="2rem" />
                </a>
                <Flex w="20vw" h="3px" mr="1rem" bg={bg}></Flex>
            </Flex>
        </FooterStyled>
    )
}

export default Footer