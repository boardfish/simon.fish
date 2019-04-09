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
import SocialLinkGroup from "./components/SocialLinkGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNavbar from "./components/MobileNavbar";

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
        <MobileNavbar />
        <Container>
          <Row>
            <Col sm={3} md={2} className="bg-dark text-light">
              <Nav
                id="navbar"
                className="text-light flex-column"
                style={{
                  position: "fixed",
                  top: 51
                }}
              >
                <img
                  src={Logo}
                  alt="Pixelated fish logo"
                  className="mx-auto mb-3"
                  style={{ width: "10vw" }}
                />
                <h4>Simon Fish</h4>

                <NavItem>
                  <NavLink href="#about" className="text-light p-0">
                    <FontAwesomeIcon fixedWidth icon="user" /> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#portfolio" className="text-light p-0">
                    <FontAwesomeIcon fixedWidth icon="folder-open" /> Portfolio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#testimonials" className="text-light p-0">
                    <FontAwesomeIcon fixedWidth icon="comments" /> Testimonials
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact-me" className="text-light p-0">
                    <FontAwesomeIcon fixedWidth icon="envelope" /> Contact Me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={process.env.PUBLIC_URL + "/docs/CurriculumVitae.pdf"}
                    className="text-light p-0"
                  >
                    <FontAwesomeIcon fixedWidth icon="file" /> CV/Resume
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm={9} md={10} className="bg-primary text-secondary">
              <main className="container">
                <section className="py-3" id="about">
                  <div className="row pb-md-3">
                    <Header className="col-md" />
                    <div className="col-md d-flex flex-column justify-content-center mt-3 mt-md-0">
                      <h2 className="sticky-top bg-dark p-2 rounded">
                        <FontAwesomeIcon icon="user" /> About
                      </h2>
                      <About />
                    </div>
                  </div>
                  <SocialLinkGroup />
                </section>
                <hr />
                <section className="py-3 d-none d-md-flex" id="portfolio">
                  <h2 className="sticky-top bg-dark p-2 rounded">
                    <FontAwesomeIcon icon="folder-open" /> Portfolio
                  </h2>
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
                <hr />
                <section className="py-3" id="testimonials">
                  <h2 className="sticky-top bg-dark p-2 rounded">
                    <FontAwesomeIcon icon="comments" /> Testimonials
                  </h2>
                  <TestimonialsSection />
                </section>
                <hr />
                <section className="py-3" id="contact-me">
                  <h2 className="sticky-top bg-dark p-2 rounded">
                    <FontAwesomeIcon icon="envelope" /> Contact Me
                  </h2>
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
