import React from "react";
import ListGroupItem from "reactstrap/lib/ListGroupItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconLookup,
  findIconDefinition
} from "@fortawesome/fontawesome-svg-core";

export default (props: {
  name: string;
  className: string;
  id: number;
  icon: object;
  setSelectedCard: Function;
  focusCard: Function;
}) => ( 
    <ListGroupItem
      className={`mx-md-2 px-0 px-md-3 border-0 border-md bg-transparent portfolio-menu-item d-flex flex-row align-items-center ${props.className}`}
      onMouseEnter={() => {
        props.setSelectedCard(props.id);
        props.focusCard(false);
      }}
      onClick={() => {
        props.focusCard(true);
      }}
    >
      <FontAwesomeIcon
        className="mx-auto ml-md-0 mr-md-2"
        icon={findIconDefinition(props.icon as IconLookup)}
      />{" "}
      <span
        className="d-none d-md-inline ml-md-auto text-right"
        dangerouslySetInnerHTML={{ __html: props.name }}
      />
    </ListGroupItem>
 );
