import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import ProfileImage from "../assets/images/profile.jpg";
import Technologies from "../_data/technologies.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findIconDefinition, IconLookup } from "@fortawesome/fontawesome-svg-core";

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
              {Technologies.map(tech => (
                <span className="h4 mx-2">
                  <FontAwesomeIcon icon={findIconDefinition(tech.icon as IconLookup)} fixedWidth />
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
