import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import TestimonialsSection from "./components/TestimonialsSection";
import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import PortfolioItem from "./components/PortfolioItem";

class App extends Component {
  state = { selectedCard: null };

  handleClick(cardName) {
    if (cardName === this.state.selectedCard) {
      this.setState({ selectedCard: null });
    } else {
      this.setState({ selectedCard: cardName });
    }
  }

  render() {
    return (
      <Container fluid>
        <Container>
          <Header />
          <About />
          <div
            className="d-flex flex-row"
            style={{
              flexWrap: "nowrap",
              overflowX: this.state.selectedCard === null ? "auto" : "visible"
            }}
          />
          <TestimonialsSection />
          <ContactMe />
        </Container>
      </Container>
    );
  }
}

export default App;
