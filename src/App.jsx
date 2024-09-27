import NavBar from "./Components/NavBar";
import Header from "./Header";
import Services from "./Services";
import Section from "./Section";
import Section2 from "./Section2";
import About from "./About";


import {Element} from "react-scroll";


export default function App() {
  return (
    <div>
      <NavBar/>

      <Element name="header">
        <Header />
      </Element>

      <Element name="Services">
        <Services/>
      </Element>

      <Section/>

      <Section2/>

      <Element name="about">
        <About/>
      </Element>
    </div>
  )
}