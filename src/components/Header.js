import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";
import ProfileImage from "../images/profile.jpg";

class Header extends Component {
  render() {
    return (
      <Row>
        <Container style={{ maxHeight: "100vh" }} className="border">
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <h1 className="display-3">Simon Fish</h1>
            </Col>
            <Col>
              <img className="w-100" src={ProfileImage} />
            </Col>
          </Row>
        </Container>
      </Row>
    );
  }
}

export default Header;
