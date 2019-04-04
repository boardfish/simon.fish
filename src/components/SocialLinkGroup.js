import React from "react";
import SocialLink from "./SocialLink";
import socialLinks from "../_data/socialLinks";

export default ({ vertical }) => {
  return (
    <div className={`btn-group${vertical ? "-vertical" : ""} w-100`}>
      {socialLinks.map(socialLink => (
        <SocialLink {...socialLink} forceShowName={vertical} />
      ))}
    </div>
  );
};
