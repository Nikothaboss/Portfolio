import { AppWrapper, colors } from "./app.styled";
import { useColorModeValue, useColorMode } from "@chakra-ui/color-mode";



function App() {
  const {colorMode, toggleColorMode} = useColorMode()
  const bg = useColorModeValue(colors.darkModeBg, colors.lightModeBg);
  return (
    <AppWrapper bg={bg} onClick={toggleColorMode}  className="App">
      <button>{colorMode}</button>
    </AppWrapper>
  );
}

export default App;
