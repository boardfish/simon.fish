import React from 'react';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';

export default (props: { name: string, id: string, setSelectedCard: Function }) => ( 
  <ListGroupItem className="bg-dark" onClick={() => { 
    props.setSelectedCard(props.id)}}>{props.name}</ListGroupItem>
 )