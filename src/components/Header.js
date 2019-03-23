import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";
import ProfileImage from "../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <Row>
        <Container style={{ maxHeight: "100vh" }} className="border">
          <Row>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-3">Simon Fish</h1>
              <p className="lead">Student. Software engineer. Explorer.</p>
              <ul>
                <li>
                  <a href="https://github.com/boardfish">GitHub</a>
                </li>
                <li>
                  <a href="mailto:si@mon.fish">si@mon.fish</a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/boardfish">LinkedIn</a>
                </li>
                <li>
                  <a href="https://twitter.com/boardfish_">Twitter</a>
                </li>
                <li>
                  <a href="https://facebook.com/simonfish84">Facebook</a>
                </li>
              </ul>
            </Col>
            <Col>
              <img className="w-100 p-3 rounded" src={ProfileImage} />
            </Col>
          </Row>
        </Container>
      </Row>
    );
  }
}

export default Header;
