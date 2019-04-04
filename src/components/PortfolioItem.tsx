import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import posed from "react-pose";
import styled from "styled-components";
import { tween } from "popmotion";
import ReactMarkdown from "react-markdown";
import { IconLookup, findIconDefinition } from "@fortawesome/fontawesome-svg-core";

const Card = styled(
  posed.div({
    idle: {
      height: 600,
      width: 500,
      transition: (props: object) => tween({ ...props, duration: 250 }),
      flip: true
    },
    fullscreen: {
      height: "70em",
      width: "100vw",
      transition: (props: object) => tween({ ...props, duration: 600 }),
      flip: true
    }
  })
).attrs({ className: "card" })`
  transition: all 0.4s ease-out, opacity 0.1s ease-out,
    background-color 0.6s ease-out;
  flex: 1 0 250px;
`;

class PortfolioItem extends Component<{image: string, altText: string, active: boolean, icon: object, name: string, date: Date, tags: [string], location: string, hidden: boolean, description: string, summary: string, link: string, onClick: Function}, {}> {
  imageDiv = () => {
    if (!this.props.image) {
      return null;
    } else {
      return (
        // <div className={this.props.active ? "col" : "col-12"}>
        <img
          width="100%"
          style={{ objectFit: "cover" }}
          src={require("../assets" + this.props.image)}
          alt={this.props.altText}
          className="card-img-top"
        />
        // </div>
      );
    }
  };

  renderTitle = () => {
    if (this.props.active) {
      return (
        <div className="card-title text-center">
          <h4>
            <FontAwesomeIcon icon={findIconDefinition(this.props.icon as IconLookup)} />
            <br />{" "}
            <span dangerouslySetInnerHTML={{ __html: this.props.name }} />
            <br />
            <small className="text-muted">
              {`${this.props.location}, ${this.props.date}`}
            </small>
          </h4>
          <div>
            {this.props.tags.map(tag => {
              return <span className="badge badge-primary mx-1">{tag}</span>;
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="card-title">
          <h4>
            <FontAwesomeIcon icon={findIconDefinition(this.props.icon as IconLookup)} />{" "}
            <span dangerouslySetInnerHTML={{ __html: this.props.name }} />
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
        className={
          this.props.active ? "bg-dark text-light" : "bg-secondary text-primary"
        }
      >
        {this.imageDiv()}
        <div className="card-body d-flex flex-column justify-content-center">
          {this.renderTitle()}
          <div>
            <ReactMarkdown
              escapeHtml={false}
              source={
                this.props.active ? this.props.description : this.props.summary
              }
              className="card-text"
            />
          </div>
        </div>
        <div className="card-footer">
          <a
            href={this.props.link}
            className="btn btn-primary w-100"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          >
            <FontAwesomeIcon icon="angle-double-right" /> More
          </a>
        </div>
      </Card>
    );
  }
}

export default PortfolioItem;
