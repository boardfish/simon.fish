import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";
import ProfileImage from "../images/profile.jpg";

class Header extends Component {
  render() {
    return (
      <Row>
        <Container style={{ maxHeight: "100vh" }} className="border">
          <Row>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-3">Simon Fish</h1>
              <p className="lead">Student. Software engineer. Explorer.</p>
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
