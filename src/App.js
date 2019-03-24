import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import TestimonialsSection from "./components/TestimonialsSection";
import "./App.css";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Container>
          <Header />
          <About />
          <TestimonialsSection />
        </Container>
      </Container>
    );
  }
}

export default App;
