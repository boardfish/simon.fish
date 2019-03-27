import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => {
  return (
    <blockquote className="blockquote text-center">
      {props.children}
      <footer className="blockquote-footer">
        {props.author}
        {props.authorRole ? `, ${props.authorRole}` : ""}
      </footer>
      <a
        class="btn btn-lg btn-color btn-outline-secondary mt-3"
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
      >
        <FontAwesomeIcon icon={props.icon} /> Full reference
      </a>
    </blockquote>
  );
};
