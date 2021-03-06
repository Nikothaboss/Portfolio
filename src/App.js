import { AppWrapper, colors } from "./app.styled";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { AnimatePresence } from "framer-motion";
import { useResize } from "./utils/resize";
import { GlobalStyle } from "./app.styled";
import {Switch, Route, useLocation} from "react-router-dom"
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Timeline from "./Components/Timeline/Timeline";
import Tech from "./Components/Tech/Tech";
import Projects from "./Components/Projects/Projects";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu"





function App() {
  const location = useLocation();

  const {screenWidth} = useResize()
  const bg = useColorModeValue(colors.lightModeBg, colors.darkModeBg);

  return (
    <>
    <GlobalStyle/>
    <AppWrapper bg={bg} minH="100vh" maxH="100%" maxW="100vw"  className="App">
        {screenWidth > 950 && (<Header/>)}
        {screenWidth < 950 && (<BurgerMenu/>)}
      <AnimatePresence exitBeforeEnter={true}>
        <Switch location={location} key={location.key}>
          <Route  path="/" exact>
            <Home />
          </Route>
          <Route  path="/About" exact>
            <About />
          </Route>
          <Route  path="/Timeline" exact>
            <Timeline />
          </Route>
          <Route  path="/Tech" exact>
            <Tech />
          </Route>
          <Route  path="/Projects" exact>
            <Projects />
          </Route>
        </Switch>
      </AnimatePresence>
    </AppWrapper>
    </>
  );
}

export default App;
