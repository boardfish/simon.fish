import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import ProfileImage from "../images/profile.jpg";
import SocialLink from "./SocialLink";
import SocialLinkGroup from "./SocialLinkGroup";

class Header extends Component {
  render() {
    return (
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Card className="text-center">
            <CardBody>
              <h1 className="display-3">Simon Fish</h1>
              <p className="lead">Student. Software engineer. Explorer.</p>
              <SocialLinkGroup />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <img
            className="w-100 p-3 rounded"
            src={ProfileImage}
            alt="Simon in a GitHub hoodie and Ausdom M05 headphones."
          />
        </Col>
      </Row>
    );
  }
}

export default Header;
