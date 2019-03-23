import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => {
  return (
    <a href={props.link} className={`btn btn-${props.colorClass}`}>
      <FontAwesomeIcon icon={props.icon} /> {props.text}
    </a>
  );
};
