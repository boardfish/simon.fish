import React from "react";
import SocialLink from "./SocialLink";

export default () => {
  return (
    <div className="btn-group w-100">
      <SocialLink
        link="https://github.com/boardfish"
        colorClass="primary"
        icon={["fab", "github"]}
        text="GitHub"
      />
      <SocialLink
        link="mailto:si@mon.fish"
        colorClass="primary"
        icon="envelope"
        text="si@mon.fish"
      />
      <SocialLink
        link="https://linkedin.com/in/boardfish"
        colorClass="primary"
        icon={["fab", "linkedin"]}
        text="LinkedIn"
      />
      <SocialLink
        link="https://twitter.com/boardfish_"
        colorClass="primary"
        icon={["fab", "twitter"]}
        text="@boardfish_"
      />
      <SocialLink
        link="https://facebook.com/simonfish84"
        colorClass="primary"
        icon={["fab", "facebook"]}
        text="Facebook"
      />
    </div>
  );
};
