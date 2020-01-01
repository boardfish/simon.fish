import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import Portfolio from "../_data/portfolio.json";
import ListGroup from "reactstrap/lib/ListGroup";
import PortfolioMenuItem from "./PortfolioMenuItem";
import CardBody from "reactstrap/lib/CardBody";
import Card from "reactstrap/lib/Card";
import TabContent from "reactstrap/lib/TabContent";

export default (selectedCardState, focusCardState) => {
  return (
    <div className="w-100 row" style={{minHeight: "76vh", maxHeight: "76vh"}}>
      <div className="col-3" style={{ overflowY: "scroll", minHeight: "inherit", maxHeight: "inherit" }}>
        <ListGroup style={{ overflowY: "scroll", minHeight: "inherit" }} className="d-flex flex-column">
          {Portfolio.map((portfolioItem, key) => {
            return (
              <PortfolioMenuItem
                key={key}
                id={key}
                name={portfolioItem.name}
                icon={portfolioItem.icon}
                setSelectedCard={selectedCardState[1]}
                focusCard={focusCardState[1]}
              />
            );
          })}
        </ListGroup>
      </div>
      <TabContent className="col-9" activeTab={selectedCardState[0]} style={{overflowY: "scroll", minHeight: "inherit", maxHeight: "inherit"}}>
        <Card className="bg-dark" style={{minHeight: "inherit"}}>
          <CardBody className="d-flex flex-column justify-content-center">
            {Portfolio.map((portfolioItem, index) => {
              return (
                <PortfolioItem
                  {...portfolioItem}
                  key={index}
                  id={index}
                  active={selectedCardState[0] === index}
                  focused={focusCardState[0]}
                  focusCard={focusCardState[1]}
                />
              );
            })}
          </CardBody>
        </Card>
      </TabContent>
    </div>
  );
};
