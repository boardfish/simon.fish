import React from 'react'
import { UncontrolledCollapse, Button } from 'reactstrap';
import NavbarContents from '../_data/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition, IconLookup } from '@fortawesome/fontawesome-svg-core';

export default () => {
  return (<div
          className="d-flex d-md-none flex-column align-items-end"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1,
            opacity: 0.7
          }}
        >
          <UncontrolledCollapse
            toggler="#navbarToggle"
            className="bg-dark p-3 mb-1"
          >
            {
              NavbarContents.map(({href, icon, text}) => {
                return <a href={href}>
                <FontAwesomeIcon icon={findIconDefinition(icon as IconLookup)} fixedWidth />{" "}
                {text}
                <br/></a>
              })
            }
          </UncontrolledCollapse>
          <Button color="danger" id="navbarToggle">
            ===
          </Button>
        </div>)
}