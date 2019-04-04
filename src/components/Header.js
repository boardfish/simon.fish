import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import ProfileImage from "../assets/images/profile.jpg";
import Logo from "../assets/images/LogoWhite.svg";
import SocialLinkGroup from "./SocialLinkGroup";
import Technologies from "../_data/technologies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <Card
        className="text-center text-primary bg-secondary"
        style={{ flexGrow: 1, flexBasis: 0 }}
      >
        <CardBody>
          <img
            className="w-100 p-3 rounded col-md"
            src={ProfileImage}
            alt="Pixelated fish logo"
          />
          <div className="col-md">
            <h1 className="display-4">Simon Fish</h1>
            <p className="lead">Student. Software engineer. Explorer.</p>
            <p className="lead">
              {Technologies.map((tech, i, array) => (
                <span className="h4 mx-2">
                  <FontAwesomeIcon icon={tech.icon} fixedWidth />
                </span>
              ))}
            </p>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Header;
