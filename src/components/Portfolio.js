import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import Portfolio from "../_data/portfolio.json";
import ListGroup from "reactstrap/lib/ListGroup";
import PortfolioMenuItem from "./PortfolioMenuItem";
import CardBody from "reactstrap/lib/CardBody";
import Card from "reactstrap/lib/Card";
import TabContent from "reactstrap/lib/TabContent";
import ListGroupItemHeading from "reactstrap/lib/ListGroupItemHeading";

export default (selectedCardState, focusCardState) => {
  return (
    <div className="row rounded mx-0" style={{minHeight: "76vh", maxHeight: "76vh"}}>
      <div className="col-3 rounded bg-dark pr-0" style={{ overflowY: "scroll", minHeight: "inherit", maxHeight: "inherit" }}>
        <ListGroup style={{ minHeight: "inherit" }} className="mt-3 pr-3 pb-3 d-flex flex-column w-100">
          {Portfolio.map((group, groupIndex) => (
            <div className="portfolio-menu-group">
              <ListGroupItemHeading className="mt-2" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} title={group.name}>{group.name}</ListGroupItemHeading>
              {group.projects.map((portfolioItem, index) => (
                <PortfolioMenuItem
                  key={`${groupIndex}-${index}`}
                  id={`${groupIndex}-${index}`}
                  name={portfolioItem.name}
                  icon={portfolioItem.icon}
                  setSelectedCard={selectedCardState[1]}
                  focusCard={focusCardState[1]}
                />
              ))}
            </div>
          ))}
        </ListGroup>
      </div>
      <TabContent className="col-9 px-0" activeTab={selectedCardState[0]} style={{overflowY: "scroll", minHeight: "inherit", maxHeight: "inherit"}}>
        <Card className="bg-dark" style={{minHeight: "inherit"}}>
          <CardBody className="d-flex flex-column justify-content-center">
            {Portfolio.map((group, groupIndex) => (
              group.projects.map((portfolioItem, index) => (
                <PortfolioItem
                    {...portfolioItem}
                    key={`${groupIndex}-${index}`}
                    id={`${groupIndex}-${index}`}
                    active={selectedCardState[0] === `${groupIndex}-${index}`}
                    focused={focusCardState[0]}
                    focusCard={focusCardState[1]}
                  />
                ))
              )
            )}
          </CardBody>
        </Card>
      </TabContent>
    </div>
  );
};
