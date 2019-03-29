import React from "react";
import SocialLink from "./SocialLink";

export default () => {
  return (
    <div className="btn-group w-100">
      <SocialLink
        link="https://github.com/boardfish"
        colorClass="github"
        icon={["fab", "github"]}
        text="GitHub"
      />
      <SocialLink
        link="mailto:si@mon.fish"
        colorClass="danger"
        icon="envelope"
        text="si@mon.fish"
      />
      <SocialLink
        link="https://linkedin.com/in/boardfish"
        colorClass="linkedin"
        icon={["fab", "linkedin"]}
        text="LinkedIn"
      />
      <SocialLink
        link="https://twitter.com/boardfish_"
        colorClass="twitter"
        icon={["fab", "twitter"]}
        text="@boardfish_"
      />
      <SocialLink
        link="https://facebook.com/simonfish84"
        colorClass="facebook"
        icon={["fab", "facebook"]}
        text="Facebook"
      />
    </div>
  );
};
