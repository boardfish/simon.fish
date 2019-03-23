import React, { Component } from "react";
import { Row, Container, Col, Card, CardBody } from "reactstrap";
import ProfileImage from "../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialLink from "./SocialLink";

class Header extends Component {
  render() {
    return (
      <Row>
        <Container style={{ maxHeight: "100vh" }} className="border">
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
              <h2>About</h2>
              <p>
                I am a third-year student at the University of Sheffield,
                studying a four-year course in Computer Science including a year
                in industry. My main aim is to become a software developer, with
                the goal of building things that others will enjoy or find
                useful, no matter their level of skill. I am passionate about
                tools and technologies such as Rails and React, and I like to
                apply myself to personal projects to refine my skills.
              </p>
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
