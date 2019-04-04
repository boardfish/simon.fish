import React from "react";
import SocialLink from "./SocialLink";
import socialLinks from "../_data/socialLinks.json";

export default (props: { vertical: boolean }) => {
  return (
    <div className={`btn-group${props.vertical ? "-vertical" : ""} w-100`}>
      {socialLinks.map(socialLink => (
        <SocialLink {...socialLink} forceShowName={props.vertical} />
      ))}
    </div>
  );
};
