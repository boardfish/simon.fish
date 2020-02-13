import React, { useState } from "react";
import ListGroupItemHeading from "reactstrap/lib/ListGroupItemHeading";
import Collapse from "reactstrap/lib/Collapse";
import PortfolioMenuItem from "./PortfolioMenuItem";


export default ({ name, id, projects, keyGroup, setSelectedCard, focusCard, isOpen = false }) => {
    const [collapse, setCollapse] = useState(isOpen);

    return <div className={`portfolio-menu-group rounded ${keyGroup ? "bg-secondary text-dark" : "bg-primary"} mb-3`}>
        <ListGroupItemHeading onClick={() => { setCollapse(!collapse) }} className={`py-2 px-1 text-center ${keyGroup ? "" : "collapsed"}`} style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} title={name}>
        {name}
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
}