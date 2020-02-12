import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Header from "./components/Header";
import TestimonialsSection from "./components/TestimonialsSection";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import SocialLinkGroup from "./components/SocialLinkGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNavbar from "./components/MobileNavbar";
import Canvas from "./components/Canvas";
import Pixels from "./components/Pixels";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import NavbarContents from "./_data/navbar";
import Portfolio from './components/Portfolio';

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
    <div>
      <MobileNavbar />
      <Container>
        <Row>
          <Col sm={3} lg={2} className="bg-dark text-light">
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

              {NavbarContents.map(({ href, icon, text, beta }) => {
                return (
                  <NavItem>
                    <NavLink href={href} className="text-light p-0">
                      <FontAwesomeIcon
                        fixedWidth
                        icon={findIconDefinition(icon)}
                      />{" "}
                      {text}
                      {beta ? (
                        <span className="badge badge-primary ml-1">BETA</span>
                      ) : (
                        ""
                      )}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Col>
          <Col sm={9} lg={10} className="bg-primary text-secondary">
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
                {Portfolio(selectedCardState, focusCardState)}
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
    </div>
  );
};
