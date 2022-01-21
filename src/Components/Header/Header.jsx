import React from 'react';
import { colors, fonts } from '../../app.styled';
import { HeaderStyled } from './header.styled';
import { Text } from '@chakra-ui/layout';
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

  const bg = useColorModeValue(colors.darkDetailColor, colors.lightDetailColor);
  const {colorMode, toggleColorMode} = useColorMode()


  return (  
  <HeaderStyled justifyContent="space-between" alignItems="center" h="8vh" p="20px">
      <Text fontSize="3rem" color={bg} fontFamily={fonts.displayFont}>N</Text>
      {colorMode === "dark" ? <MdOutlineWbSunny size="1.8rem" onClick={toggleColorMode} color={bg} /> : <FaMoon size="1.6rem" color={bg} onClick={toggleColorMode} />}
      <Burger showMenu={showMenu} toggleMenu={toggleMenu} />
  </HeaderStyled>
  )
};

export default Header;
