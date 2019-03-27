import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import ProfileImage from "../images/profile.jpg";
import Logo from "../images/LogoWhite.svg";
import SocialLinkGroup from "./SocialLinkGroup";

class Header extends Component {
  render() {
    return (
      <Row>
        <Col
          xs="12"
          md="6"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <Card className="text-center text-primary">
            <CardBody>
              <img
                className="w-100 p-3 rounded"
                src={ProfileImage}
                alt="Pixelated fish logo"
              />
              <h1 className="display-3">Simon Fish</h1>
              <p className="lead">Student. Software engineer. Explorer.</p>
              <SocialLinkGroup />
            </CardBody>
          </Card>
        </Col>
        <Col
          xs="12"
          md="6"
          className="d-flex justify-content-center align-items-center"
        >
          <img
            className="w-100 p-3 rounded"
            src={Logo}
            alt="Simon in a GitHub hoodie and Ausdom M05 headphones."
          />
        </Col>
      </Row>
    );
  }
}

export default Header;
