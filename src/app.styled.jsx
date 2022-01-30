// ! Styles for hele appen
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Box } from '@chakra-ui/layout';

export const colors = {
    darkModeBg: "#262625",
    lightModeBg: "#ECECEC",
    lightDetailColor: "#F2EDD0",
    darkDetailColor: "#A67246",
    ctaColor: "#FF7262"
};

export const fonts = {
    lato: "'Lato', sans-serif",
    poppins: "'Poppins', sans-serif",
    displayFont: "'Rampart One', cursive"
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${fonts.lato};
    }
`;

export const AppWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
