import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  UncontrolledTooltip
} from "reactstrap";
import Header from "./components/Header";
import TestimonialsSection from "./components/TestimonialsSection";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import PortfolioItem from "./components/PortfolioItem";
import Portfolio from "./_data/portfolio";
import Logo from "./assets/images/LogoWhite.svg";

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
          <Row>
            <Col sm={3} md={2} className="bg-dark text-light">
              <Nav
                className="text-light flex-column"
                style={{
                  position: "fixed",
                  top: 51
                }}
              >
                <NavItem>
                  <img
                    src={Logo}
                    alt="Pixelated fish logo"
                    className="mx-auto mb-3"
                    style={{ width: "10vw" }}
                  />
                  <NavLink href="/components/" className="text-light p-0">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/" className="text-light p-0">
                    Portfolio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/" className="text-light p-0">
                    Testimonials
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/" className="text-light p-0">
                    Contact Me
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm={9} md={10} className="bg-primary text-light">
              <main>
                <section className="my-3" id="header">
                  <Header />
                </section>
                <section className="my-3" id="about">
                  <About />
                </section>
                <section className="my-3" id="portfolio">
                  <h2>Portfolio</h2>
                  <div
                    className="card-group"
                    style={{
                      flexWrap: "nowrap",
                      overflowX:
                        this.state.selectedCard === null ? "auto" : "hidden",
                      overflowY: "hidden"
                    }}
                  >
                    {this.renderPortfolio()}
                  </div>
                  <UncontrolledTooltip placement="left" target="portfolio">
                    Click on an item to learn more.
                  </UncontrolledTooltip>
                </section>
                <section className="my-3" id="testimonials">
                  <TestimonialsSection />
                </section>
                <section className="my-3" id="contact-me">
                  <ContactMe />
                </section>
              </main>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
