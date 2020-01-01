import React from 'react';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLookup, findIconDefinition } from "@fortawesome/fontawesome-svg-core";

export default (props: { name: string, id: number, icon: object, setSelectedCard: Function, focusCard: Function }) => { 
  return <ListGroupItem className="bg-dark text-right" onMouseEnter={() => { props.setSelectedCard(props.id)
    props.focusCard(false)
  }} onClick={() => { 
    props.focusCard(true)}}>
      
      <FontAwesomeIcon icon={findIconDefinition(props.icon as IconLookup)} />{" "}
      <span className="d-none d-md-inline" dangerouslySetInnerHTML={{ __html: props.name }} />
    </ListGroupItem>
            
  }