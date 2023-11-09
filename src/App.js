import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import {light} from './styles/Themes'

import Navigation from "../src/components/Navigation"
import Footer from "../src/components/Footer"
import Home from "../src/components/sections/Home"
import About from "../src/components/sections/About"
import Roadmap from "../src/components/sections/Roadmap"
import Showcase from "../src/components/sections/Showcase"
import Team from "../src/components/sections/Team"
import Faq from "../src/components/sections/Faq"


function App() {
  return (
   <>
   <GlobalStyles />
   <ThemeProvider theme={light}>
    <Navigation/>
    <Home />
    <About />
    <Roadmap />
    <Showcase />
    <Team />
    <Faq />
    <Footer />
    </ThemeProvider>
   </>
  );
}

export default App;
