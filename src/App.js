import { AppWrapper, colors } from "./app.styled";
import { useColorModeValue, useColorMode } from "@chakra-ui/color-mode";



function App() {
  const {colorMode, toggleColorMode} = useColorMode()
  const bg = useColorModeValue(colors.lightModeBg, colors.darkModeBg);
  return (
    <AppWrapper bg={bg} onClick={toggleColorMode} minH="100vh" maxH="100%"  className="App">
      <button>{colorMode}</button>
    </AppWrapper>
  );
}

export default App;
