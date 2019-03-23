import React, { Component } from "react";
import { Row, Container, Col, Card, CardBody } from "reactstrap";
import ProfileImage from "../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialLink from "./SocialLink";

class Header extends Component {
  render() {
    return (
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Card className="text-center">
            <CardBody>
              <h1 className="display-3">Simon Fish</h1>
              <p className="lead">Student. Software engineer. Explorer.</p>
              <div className="btn-group">
                <SocialLink
                  link="https://github.com/boardfish"
                  colorClass="primary"
                  icon={["fab", "github"]}
                  text="GitHub"
                />
                <SocialLink
                  link="mailto:si@mon.fish"
                  colorClass="primary"
                  icon="envelope"
                  text="si@mon.fish"
                />
                <SocialLink
                  link="https://linkedin.com/in/boardfish"
                  colorClass="primary"
                  icon={["fab", "linkedin"]}
                  text="LinkedIn"
                />
                <SocialLink
                  link="https://twitter.com/boardfish"
                  colorClass="primary"
                  icon={["fab", "twitter"]}
                  text="@boardfish_"
                />
                <SocialLink
                  link="https://facebook.com/simonfish84"
                  colorClass="primary"
                  icon={["fab", "facebook"]}
                  text="Facebook"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <img className="w-100 p-3 rounded" src={ProfileImage} />
        </Col>
      </Row>
    );
  }
}

export default Header;
