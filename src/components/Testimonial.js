import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardFooter } from "reactstrap";
import ReactMarkdown from "react-markdown";

export default props => {
  return (
    <Card className="text-primary">
      <CardBody className="d-flex flex-column justify-content-center">
        <blockquote className="blockquote text-center">
          <ReactMarkdown
            escapeHtml={false}
            source={props.text}
            className="card-text"
          />
          <footer className="blockquote-footer">
            {props.author}
            {props.authorRole ? `, ${props.authorRole}` : ""}
          </footer>
        </blockquote>
      </CardBody>
      <CardFooter className="text-center">
        <a
          class="btn btn-lg btn-color btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer"
          href={props.link}
        >
          <FontAwesomeIcon icon={props.icon} /> Full reference
        </a>
      </CardFooter>
    </Card>
  );
};
