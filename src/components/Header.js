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
              <div className="btn-group">
                <a
                  href="https://github.com/boardfish"
                  className="btn btn-primary"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
                </a>
                <a href="mailto:si@mon.fish" className="btn btn-primary">
                  <FontAwesomeIcon icon="envelope" /> si@mon.fish
                </a>
                <a
                  href="https://linkedin.com/in/boardfish"
                  className="btn btn-primary"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} /> LinkedIn
                </a>
                <a
                  href="https://twitter.com/boardfish"
                  className="btn btn-primary"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} /> Twitter
                </a>
                <a
                  href="https://facebook.com/simonfish84"
                  className="btn btn-primary"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} /> Facebook
                </a>
              </div>
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
