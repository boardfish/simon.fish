import React from 'react';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';

export default (props: { name: string, id: string, setSelectedCard: Function, focusCard: Function }) => { 
  return <ListGroupItem className="bg-dark text-right" onMouseEnter={() => { props.setSelectedCard(props.id)
    props.focusCard(false)
  }} onClick={() => { 
    props.focusCard(true)}}><span dangerouslySetInnerHTML={{ __html: props.name }} /></ListGroupItem>
            
  }