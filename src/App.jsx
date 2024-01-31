import React from "react";
import Container from "./components/Container";
import ContainerTwo from "./components/ContainerTwo";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Endorsements from "./components/Endorsements";
import Services from "./components/Services";
import Results from "./components/Results";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Nav />
        <Hero />
      </Container>
      <ContainerTwo>
        <About />
      </ContainerTwo>
      <Container>
        <Services />
      </Container>
      <Container>
        <Results />
      </Container>
      <ContainerTwo>
        <Endorsements />
      </ContainerTwo>
      <Container>
        <Faq />
        <Contact />
      </Container>
      <div className="buffer"></div>
      <ContainerTwo>
        <Footer />
      </ContainerTwo>
    </>
  );
}

export default App;
