import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent
} from "reactstrap";
import Header from "./components/Header";
import TestimonialsSection from "./components/TestimonialsSection";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import PortfolioItem from "./components/PortfolioItem";
import Portfolio from "./_data/portfolio";
import SocialLinkGroup from "./components/SocialLinkGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNavbar from "./components/MobileNavbar";
import Canvas from "./components/Canvas";
import Pixels from "./components/Pixels";
import ListGroup from "reactstrap/lib/ListGroup";
import PortfolioMenuItem from "./components/PortfolioMenuItem";
import CardBody from "reactstrap/lib/CardBody";
import Card from "reactstrap/lib/Card";

const renderPortfolio = (selectedCardState, focusCardState) => {
  return (
    <div className="d-flex flex-row w-100" style={{ maxHeight: "70vh" }}>
      <div className="w-25" style={{ maxHeight: "76vh", overflowY: "scroll" }}>
        <ListGroup style={{ overflowY: "scroll" }}>
          {Portfolio.map((portfolioItem, key) => {
            return (
              <PortfolioMenuItem
                key={key}
                id={key}
                name={portfolioItem.name}
                icon={portfolioItem.icon}
                setSelectedCard={selectedCardState[1]}
                focusCard={focusCardState[1]}
              />
            );
          })}
        </ListGroup>
      </div>
      <div style={{ maxHeight: "76vh", overflowY: "scroll" }} className="w-75">
        <TabContent activeTab={selectedCardState[0]}>
          <Card className="bg-dark" style={{ minHeight: "76vh" }}>
            <CardBody className="d-flex flex-column justify-content-center">
              {Portfolio.map((portfolioItem, index) => {
                return (
                  <PortfolioItem
                    {...portfolioItem}
                    key={index}
                    id={index}
                    active={selectedCardState[0] === index}
                    focused={focusCardState[0]}
                    focusCard={focusCardState[1]}
                  />
                );
              })}
            </CardBody>
          </Card>
        </TabContent>
      </div>
    </div>
  );
};

const coords = [
  { y: -2, x: -1 },
  { y: -2, x: 3 },
  { y: -1, x: -2 },
  { y: -1, x: -1 },
  { y: -1, x: 0 },
  { y: -1, x: 2 },
  { y: 0, x: -3 },
  { y: 0, x: -2 },
  { y: 0, x: -1 },
  { y: 0, x: 0 },
  { y: 0, x: 1 },
  { y: 1, x: -2 },
  { y: 1, x: -1 },
  { y: 1, x: 0 },
  { y: 1, x: 2 },
  { y: 2, x: -1 },
  { y: 2, x: 3 }
];

export default () => {
  const selectedCardState = useState(0);
  const focusCardState = useState(true);
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
              <Canvas>
                <Pixels coords={coords} />
              </Canvas>
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
                  href="https://cv.simon.fish"
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
              <section className="py-3 d-flex" id="portfolio">
                <h2 className="sticky-top bg-dark p-2 rounded">
                  <FontAwesomeIcon icon="folder-open" /> Portfolio
                </h2>
                {renderPortfolio(selectedCardState, focusCardState)}
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
};
