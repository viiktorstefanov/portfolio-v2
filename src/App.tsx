import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Main from "./components/Main/Main";
import Certificates from "./components/Certificates/Certificates";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Hero from "./components/Hero/Hero";
import Wrapper from "./components/Wrapper/Wrapper";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Hero />
        <Wrapper>
          <Skills />
          <Experience />
        </Wrapper>
        <Projects />
        <Certificates />
        <Wrapper>
          <Education />
        </Wrapper>
        <Footer />
      </Main>
    </Router>
  );
};

export default App;
