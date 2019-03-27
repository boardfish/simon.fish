import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import TestimonialsSection from "./components/TestimonialsSection";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import PortfolioItem from "./components/PortfolioItem";
import Portfolio from "./_data/portfolio";

class App extends Component {
  state = { selectedCard: null };

  handleClick(cardName) {
    if (cardName === this.state.selectedCard) {
      this.setState({ selectedCard: null });
    } else {
      this.setState({ selectedCard: cardName });
    }
  }

  renderPortfolio() {
    return Portfolio.map(portfolioItem => {
      return (
        <PortfolioItem
          {...portfolioItem}
          active={this.state.selectedCard === portfolioItem.project_name}
          hidden={
            ![null, portfolioItem.project_name].includes(
              this.state.selectedCard
            )
          }
          onClick={() => {
            this.handleClick(portfolioItem.project_name);
          }}
          key={portfolioItem.project_name}
        />
      );
    });
  }

  render() {
    return (
      <Container fluid>
        <Container>
          <section className="my-3" id="header">
            <Header />
          </section>
          <section className="my-3" id="about">
            <About />
          </section>
          <section className="my-3" id="portfolio">
            <h2>Portfolio</h2>
            <div
              className="d-flex flex-row"
              style={{
                flexWrap: "nowrap",
                overflowX: this.state.selectedCard === null ? "auto" : "hidden"
              }}
            >
              {this.renderPortfolio()}
            </div>
          </section>
          <section className="my-3" id="testimonials">
            <TestimonialsSection />
          </section>
          <section className="my-3" id="contact-me">
            <ContactMe />
          </section>
        </Container>
      </Container>
    );
  }
}

export default App;
