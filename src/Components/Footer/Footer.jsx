import { FooterStyled } from "./footer.styled";
import { useColorModeValue } from "@chakra-ui/react";
import { Text, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
    const bg = useColorModeValue("#fff", "#07151a")
    return (
        <FooterStyled bg={bg}>
            <Flex className="contact-info">
                <MdMail size={"1.5rem"}/>
                <Text>nreedlarsen@gmail.com</Text>
            </Flex>
            <Flex className="social-media" >
                <a href="https://github.com/Nikothaboss">
                    <FaGithub size="2rem" />
                </a>
                <a href="https://www.linkedin.com/in/nikolai-reed-larsen-681697214/">
                    <FaLinkedin size="2rem" />
                </a>
            </Flex>
        </FooterStyled>
    )
}

export default Footer