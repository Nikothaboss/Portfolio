import { AppWrapper, colors } from "./app.styled";
import { useColorModeValue, useColorMode } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/react";



function App() {
  const {colorMode, toggleColorMode} = useColorMode()
  const bg = useColorModeValue(colors.lightModeBg, colors.darkModeBg);
  return (
    <AppWrapper bg={bg} onClick={toggleColorMode} minH="100vh" maxH="100%"  className="App">
      <Flex fontSize="10rem" justifyContent="center">{colorMode}</Flex>
    </AppWrapper>
  );
}

export default App;
