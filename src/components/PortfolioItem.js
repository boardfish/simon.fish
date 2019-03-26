import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import { tween } from "popmotion";
import ReactMarkdown from "react-markdown";

const Card = styled(
  posed.div({
    idle: {
      height: 500,
      width: 500,
      transition: props => tween({ ...props, duration: 250 }),
      flip: true
    },
    fullscreen: {
      height: "80vh",
      width: "100vw",
      transition: props => tween({ ...props, duration: 600 }),
      flip: true
    }
  })
).attrs({ className: "card" })`
  transition: flex 0.5s ease-out, opacity 0.1s ease-out,
    background-color 0.6s ease-out;
  flex: 1 0 250px;
`;

class PortfolioItem extends Component {
  imageDiv = () => {
    if (!this.props.image) {
      return null;
    } else {
      return (
        <div className={this.props.active ? "col" : "col-12"}>
          <img width="100%" src={this.props.image} alt="Card image cap" />
        </div>
      );
    }
  };

  render() {
    return (
      <Card
        pose={this.props.active ? "fullscreen" : "idle"}
        onClick={this.props.onClick}
        style={
          this.props.hidden
            ? {
                flex: 0,
                opacity: 0,
                whiteSpace: "nowrap"
              }
            : { minWidth: 250 }
        }
        className={this.props.active ? "bg-dark text-light" : ""}
      >
        <div className="card-body row">
          <div className="card-title col-12">
            <h4>
              <FontAwesomeIcon icon={this.props.icon} /> {this.props.name}
              <br />
              <small className="text-muted">{this.props.location}</small>
            </h4>
          </div>
          {this.imageDiv()}
          <div className={this.props.active ? "col" : "col-12"}>
            <ReactMarkdown
              escapeHtml={false}
              source={
                this.props.active ? this.props.description : this.props.summary
              }
              className="card-text"
            />
          </div>
        </div>
      </Card>
    );
  }
}

export default PortfolioItem;
