import React, { useState } from "react";
import ListGroupItemHeading from "reactstrap/lib/ListGroupItemHeading";
import Collapse from "reactstrap/lib/Collapse";
import PortfolioMenuItem from "./PortfolioMenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({
  name,
  id,
  projects,
  icon,
  keyGroup,
  setSelectedCard,
  focusCard,
  isOpen = false
}) => {
  const [collapse, setCollapse] = useState(isOpen);

  return (
    <div
      className={`portfolio-menu-group rounded ${
        keyGroup ? "bg-secondary text-dark" : "bg-primary"
      } mb-3`}
    >
      <ListGroupItemHeading
        onClick={() => {
          setCollapse(!collapse);
        }}
        className={`py-2 px-1 small-md text-center ${
          keyGroup ? "" : "collapsed"
        } ${
          keyGroup ? "bg-secondary text-dark" : "bg-primary"
        }
        `}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
        title={name}
      >
        <FontAwesomeIcon icon={icon} className="mr-md-1" />
        <span class="d-none d-md-inline">{name}</span>
      </ListGroupItemHeading>
      <Collapse isOpen={collapse} className="pb-2">
        {projects.map((portfolioItem, index) => (
          <PortfolioMenuItem
            key={`${id}-${index}`}
            id={`${id}-${index}`}
            name={portfolioItem.name}
            icon={portfolioItem.icon}
            setSelectedCard={setSelectedCard}
            focusCard={focusCard}
          />
        ))}
      </Collapse>
    </div>
  );
};
