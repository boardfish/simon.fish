import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";

export default props => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h3>
            <FontAwesomeIcon icon={props.icon} /> {props.title}
            <br />
            <small class="text-muted">{props.location}</small>
          </h3>
        </CardTitle>
      </CardBody>
      <img width="100%" src={props.image} alt="Card image cap" />
      <CardBody>
        <CardText>{props.summary}</CardText>
      </CardBody>
    </Card>
  );
};
