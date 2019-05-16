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

  const imageDiv = (image: string, altText: string) => {
    if (!image) { return }
    return (
      // <div className={this.props.active ? "col" : "col-12"}>
      <img
        width="100%"
        style={{ objectFit: "cover" }}
        src={require("../assets" + image)}
        alt={altText}
        className="card-img-top"
      />
      // </div>
    );
  };

  const renderTitle = (active: boolean, icon: object, name: string, date: string, tags: [string], location: string) => {
    if (active) {
      return (
        <div className="card-title text-center">
          <h4>
            <FontAwesomeIcon icon={findIconDefinition(icon as IconLookup)} />
            <br />{" "}
            <span dangerouslySetInnerHTML={{ __html: name }} />
            <br />
            <small className="text-muted">
              {`${location}, ${date}`}
            </small>
          </h4>
          <div>
            {tags.map(tag => {
              return <span className="badge badge-primary mx-1">{tag}</span>;
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="card-title">
          <h4>
            <FontAwesomeIcon icon={findIconDefinition(icon as IconLookup)} />{" "}
            <span dangerouslySetInnerHTML={{ __html: name }} />
            <br />
            <small className="text-muted">{location}</small>
          </h4>
        </div>
      );
    }
  };

    export default (props: { 
      active: boolean, 
      hidden: boolean, 
      image: string,
      altText: string,
      link: string,
      icon: { prefix: string, iconName: string },
      location: string,
      name: string,
      description: string,
      summary: string,
      date: string, 
      tags: [string],
      onClick: Function 
    }) => { 
      return (
      <Card
        pose={props.active ? "fullscreen" : "idle"}
        onClick={props.onClick}
        style={
          props.hidden
            ? {
                flex: 0,
                opacity: 0
                // whiteSpace: "nowrap"
              }
            : { minWidth: 250 }
        }
        className={
          props.active ? "bg-dark text-light" : "bg-secondary text-primary"
        }
      >
        {imageDiv(props.image, props.altText)}
        <div className="card-body d-flex flex-column justify-content-center">
          {renderTitle(props.active, props.icon, props.name, props.date, props.tags, props.location)}
          <div>
            <ReactMarkdown
              escapeHtml={false}
              source={
                props.active ? props.description : props.summary
              }
              className="card-text"
            />
          </div>
        </div>
        <div className="card-footer">
          <a
            href={props.link}
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
