import { useState } from "react";
import { BurgerMenuStyled } from "./burgerMenu.styled"; 
import {BsPlus} from "react-icons/bs"
import { Center } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { BurgerAnimations } from "../../utils/animations";
import { useColorModeValue } from "@chakra-ui/react";
import { colors } from "../../app.styled";
import { Link } from "react-router-dom";
import {MdOutlineWbSunny} from "react-icons/md"
import {FaMoon} from "react-icons/fa"
import { useColorMode } from "@chakra-ui/react";
// import { useColorModeValue } from "@chakra-ui/react";

 const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)
    const {colorMode, toggleColorMode} = useColorMode()
    const bg = useColorModeValue(colors.lightDetailColor, colors.darkDetailColor);


    const MotionCenter = motion(Center);
    const menuBg = useColorModeValue(colors.lightModeBg, colors.darkModeBg)

    return (
        <BurgerMenuStyled >
            <MotionCenter 
            zIndex="99" 
            position="fixed" 
            right="5" 
            top="5"  
            variants={BurgerAnimations} 
            intial="opened" 
            animate={menuOpen ? "opened" : "closed"} >
                <BsPlus size="3rem"  zIndex="999" onClick={toggleMenu}/>
            </MotionCenter>
            <AnimatePresence>
                {menuOpen && (
                <MotionCenter
                zIndex="9"
                w="100%"
                h="100%"
                bg={menuBg}
                position="absolute"
                top="0"
                bottom="0"
                left="0"
                right="0"
                variants={BurgerAnimations}
                initial="menuExit"
                animate="menuEnter"
                exit="menuExit"
                >
                    <ul className="burgerMenu">
                        <Link onClick={closeMenu} to="/">
                            <li>Home</li>
                        </Link>
                        <Link onClick={closeMenu} to="About">
                            <li>About Me</li>
                        </Link>
                        <Link onClick={closeMenu} to="Projects">
                            <li>Projects</li>
                        </Link>
                        <Link onClick={closeMenu} to="Tech">
                            <li>Technologies</li>
                        </Link>
                        <Link onClick={closeMenu} to="Timeline">
                            <li>Timeline</li>
                        </Link>
                        <li onClick={closeMenu} className="colormode">{colorMode === "dark" ? <MdOutlineWbSunny cursor="pointer" size="1.8rem" onClick={toggleColorMode} color={bg} /> : <FaMoon size="1.6rem" color={bg} onClick={toggleColorMode} />}</li>
                    </ul>
                </MotionCenter>
                )}
            </AnimatePresence>
        </BurgerMenuStyled>
    )
 };
 
 export default BurgerMenu;
 