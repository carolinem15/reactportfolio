import React from "react";
import { HashRouter as Route } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar sticky="top" />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
         <Footer />
      </div>
     
    </HashRouter>
  );
}

export default App;
