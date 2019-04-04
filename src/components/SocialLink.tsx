import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLookup, findIconDefinition } from "@fortawesome/fontawesome-svg-core";

export default (props: { link: string, colorClass: string, icon: object, forceShowName: boolean, text: string }) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${
        props.colorClass
      } d-flex flex-row align-items-center`}
    >
      <FontAwesomeIcon icon={findIconDefinition(props.icon as IconLookup)} fixedWidth />{" "}
      <span
        className={`mx-auto ${props.forceShowName ? "" : "d-none d-md-inline"}`}
      >
        {props.text}
      </span>
    </a>
  );
};
