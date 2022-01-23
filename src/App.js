import { AppWrapper, colors } from "./app.styled";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { AnimatePresence } from "framer-motion";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { useState } from "react";
import { useResize } from "./utils/resize";




function App() {
  const {screenWidth} = useResize()
  const bg = useColorModeValue(colors.lightModeBg, colors.darkModeBg);
  return (
    <AppWrapper bg={bg} minH="100vh" maxH="100%" maxW="100vw"  className="App">
      <AnimatePresence>
        {screenWidth > 950 && (
          <Header/>
          
        )}
      </AnimatePresence>
      <Home />
    </AppWrapper>
  );
}

export default App;
