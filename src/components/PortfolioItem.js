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
  transition: all 0.4s ease-out, opacity 0.1s ease-out,
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

  renderTitle = () => {
    if (this.props.active) {
      return (
        <div className="card-title col-12">
          <h4 className="text-center">
            <FontAwesomeIcon icon={this.props.icon} />
            <br /> {this.props.name}
            <br />
            <small className="text-muted">
              {`${this.props.location}, ${this.props.date}`}
              <br />
              {this.props.tags.map(tag => {
                return <span className="badge badge-primary mx-1">{tag}</span>;
              })}
            </small>
          </h4>
        </div>
      );
    } else {
      return (
        <div className="card-title col-12">
          <h4>
            <FontAwesomeIcon icon={this.props.icon} /> {this.props.name}
            <br />
            <small className="text-muted">{this.props.location}</small>
          </h4>
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
                opacity: 0
                // whiteSpace: "nowrap"
              }
            : { minWidth: 250 }
        }
        className={this.props.active ? "bg-dark text-light" : "bg-light text-primary"}
      >
        <div className="card-body row">
          {this.renderTitle()}
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
        <a
          href={this.props.link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        >
          <FontAwesomeIcon icon="angle-double-right" /> More
        </a>
      </Card>
    );
  }
}

export default PortfolioItem;
