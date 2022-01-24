import React from 'react';
import { colors, fonts } from '../../app.styled';
import { HeaderStyled } from './header.styled';
import { Text, ListItem, UnorderedList  } from '@chakra-ui/layout';
import {MdOutlineWbSunny} from "react-icons/md"
import Burger from './Burger';
import { useColorMode } from '@chakra-ui/color-mode';
import {FaMoon} from "react-icons/fa"
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useState } from 'react';

const Header = () => {
  
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu =()=> setShowMenu(!showMenu)
  const closeMenu =()=> setShowMenu(false)

  const bg = useColorModeValue(colors.lightDetailColor, colors.darkDetailColor);
  const headerBgColor = useColorModeValue(colors.darkModeBg, colors.lightDetailColor)
  const navColor = useColorModeValue(colors.lightDetailColor, colors.darkModeBg)
  const {colorMode, toggleColorMode} = useColorMode()


  return (  
  <HeaderStyled bg={headerBgColor} initial={{x: -120}} animate={{x: 0}} exit={{x: -120}}>
      <Text fontSize="4rem" color={bg} fontFamily={fonts.displayFont}>N</Text>
      {/* <Burger showMenu={showMenu} toggleMenu={toggleMenu} /> */}
      <UnorderedList color={navColor} textAlign="center" ml="0">
        <ListItem>Home</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Tech</ListItem>
        <ListItem>Projects</ListItem>
        <ListItem>Timeline</ListItem>
      </UnorderedList>
      {colorMode === "dark" ? <MdOutlineWbSunny size="1.8rem" onClick={toggleColorMode} color={bg} /> : <FaMoon size="1.6rem" color={bg} onClick={toggleColorMode} />}
  </HeaderStyled>
  )
};

export default Header;
