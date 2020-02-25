import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardFooter } from "reactstrap";
import ReactMarkdown from "react-markdown";
import {
  findIconDefinition,
  IconLookup
} from "@fortawesome/fontawesome-svg-core";

export default (props: {
  text: string;
  author: string;
  authorRole: string;
  link: string;
  icon: object;
}) => (
  <Card className="bg-secondary text-primary mb-3">
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
        className="btn btn-lg btn-color btn-outline-primary"
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
      >
        <FontAwesomeIcon icon={findIconDefinition(props.icon as IconLookup)} />{" "}
        Full reference
      </a>
    </CardFooter>
  </Card>
);
