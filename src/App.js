import { AppWrapper, colors } from "./app.styled";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { AnimatePresence } from "framer-motion";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { useState } from "react";
import { useResize } from "./utils/resize";
import {Switch, Route, useLocation} from "react-router-dom"
import About from "./Components/About/About";




function App() {
  const location = useLocation();

  const {screenWidth} = useResize()
  const bg = useColorModeValue(colors.lightModeBg, colors.darkModeBg);

  return (
    <AppWrapper bg={bg} minH="100vh" maxH="100%" maxW="100vw"  className="App">
        {screenWidth > 950 && (<Header/>)}
      <AnimatePresence exitBeforeEnter={true}>
        <Switch location={location} key={location.key}>
          <Route  path="/" exact>
            <Home />
          </Route>
          <Route  path="/About" exact>
            <About />
          </Route>
        </Switch>
      </AnimatePresence>
    </AppWrapper>
  );
}

export default App;
