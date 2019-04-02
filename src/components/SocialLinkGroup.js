import React from "react";
import SocialLink from "./SocialLink";
import socialLinks from "../_data/socialLinks";

export default () => {
  return (
    <div className="btn-group w-100">
      {socialLinks.map(socialLink => (
        <SocialLink {...socialLink} />
      ))}
    </div>
  );
};
