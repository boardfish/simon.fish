import React from "react";
import PortfolioItem from "./PortfolioItem";
import Portfolio from "../_data/portfolio.json";
import ListGroup from "reactstrap/lib/ListGroup";
import CardBody from "reactstrap/lib/CardBody";
import Card from "reactstrap/lib/Card";
import TabContent from "reactstrap/lib/TabContent";
import PortfolioGroup from "./PortfolioGroup";

export default (selectedCardState, focusCardState) => (
  <div
    className="row rounded mx-0"
    style={{ minHeight: "76vh", maxHeight: "76vh" }}
  >
    <div
      className="col-3 rounded bg-dark p-2"
      style={{
        overflowY: "scroll",
        minHeight: "inherit",
        maxHeight: "inherit"
      }}
    >
      <ListGroup
        style={{ minHeight: "inherit" }}
        className="mt-1 pr-0 pb-3 mr-0 d-flex flex-column w-100"
      >
        {Portfolio.map((group, groupIndex) => (
          <div className={`portfolio-menu-group rounded`}>
            <PortfolioGroup
              {...group}
              id={groupIndex}
              keyGroup={groupIndex === 0}
              setSelectedCard={selectedCardState[1]}
              focusCard={focusCardState[1]}
              isOpen={groupIndex === 0}
            />
          </div>
        ))}
      </ListGroup>
    </div>
    <TabContent
      className="col-9 px-0"
      activeTab={selectedCardState[0]}
      style={{
        overflowY: "scroll",
        minHeight: "inherit",
        maxHeight: "inherit"
      }}
    >
      <Card className="bg-dark" style={{ minHeight: "inherit" }}>
        <CardBody className="d-flex flex-column justify-content-center">
          <PortfolioItem
            id={"emptyState"}
            icon={{ prefix: "fas", iconName: "fire-alt" }}
            name="Portfolio"
            location="Welcome to my portfolio. Select a project from the sidebar to open it."
            active={selectedCardState[0] === 0}
            tags={[]}
            focused={true}
            focusCard={focusCardState[1]}
          />
          {Portfolio.map((group, groupIndex) =>
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
          )}
        </CardBody>
      </Card>
    </TabContent>
  </div>
);
