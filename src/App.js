import { AppWrapper, colors } from "./app.styled";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";




function App() {
  
  const bg = useColorModeValue(colors.lightModeBg, colors.darkModeBg);
  return (
    <AppWrapper bg={bg} minH="100vh" maxH="100%"  className="App">
      <Header/>
      <Home />
    </AppWrapper>
  );
}

export default App;
