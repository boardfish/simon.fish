import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import ProfileImage from "../assets/images/profile.jpg";
import SocialLinkGroup from "./SocialLinkGroup";

class Header extends Component {
  render() {
    return (
      <div className="d-flex flex-row">
        <Card
          className="text-center text-primary"
          style={{ flexGrow: 1, flexBasis: 0 }}
        >
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
      </div>
    );
  }
}

export default Header;
