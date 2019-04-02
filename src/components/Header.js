import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import ProfileImage from "../assets/images/profile.jpg";
import Logo from "../assets/images/LogoWhite.svg";
import SocialLinkGroup from "./SocialLinkGroup";

class Header extends Component {
  render() {
    return (
      <Card
        className="text-center text-primary"
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
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Header;
