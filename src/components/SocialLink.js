import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${props.colorClass}`}
    >
      <FontAwesomeIcon icon={props.icon} />{" "}
      <span className="d-none d-md-inline">{props.text}</span>
    </a>
  );
};
