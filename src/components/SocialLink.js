import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${
        props.colorClass
      } d-flex flex-row align-items-center`}
    >
      <FontAwesomeIcon icon={props.icon} fixedWidth />{" "}
      <span
        className={`mx-auto ${props.forceShowName ? "" : "d-none d-md-inline"}`}
      >
        {props.text}
      </span>
    </a>
  );
};
