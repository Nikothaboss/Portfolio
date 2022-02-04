import React from 'react';
import { colors, fonts } from '../../app.styled';
import { HeaderStyled } from './header.styled';
import { Text, ListItem, UnorderedList, Circle  } from '@chakra-ui/layout';
import {MdOutlineWbSunny} from "react-icons/md"
// import Burger from './Burger';
import { useColorMode } from '@chakra-ui/color-mode';
import {FaMoon} from "react-icons/fa"
import { useColorModeValue } from '@chakra-ui/color-mode';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  
  // const [showMenu, setShowMenu] = useState(false)
  // const toggleMenu =()=> setShowMenu(!showMenu)
  // const closeMenu =()=> setShowMenu(false)

  const bg = useColorModeValue(colors.lightDetailColor, colors.darkDetailColor);
  const headerBgColor = useColorModeValue(colors.darkModeBg, colors.lightModeBg)
  // const navColor = useColorModeValue(colors.lightDetailColor, colors.darkModeBg)
  const {colorMode, toggleColorMode} = useColorMode()


  return (  
  <HeaderStyled bg={headerBgColor} initial={{x: -120}} animate={{x: 0}} exit={{x: -120}}>
      <Link to="/" exact>
          <Text textAlign={"center"} w="100%" fontSize="3.2rem" color={bg} fontFamily={fonts.displayFont}>
            N
          </Text>
      </Link>
      {/* <Burger showMenu={showMenu} toggleMenu={toggleMenu} /> */}
      <UnorderedList textAlign="center" ml="0" color={bg}>
        <ListItem>Home</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Tech</ListItem>
        <ListItem>Projects</ListItem>
        <ListItem>Timeline</ListItem>
      </UnorderedList>
      {colorMode === "dark" ? <MdOutlineWbSunny cursor="pointer" size="1.8rem" onClick={toggleColorMode} color={bg} /> : <FaMoon size="1.6rem" color={bg} onClick={toggleColorMode} />}
  </HeaderStyled>
  )
};

export default Header;
