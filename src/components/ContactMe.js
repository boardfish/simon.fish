import React from "react";
import SocialLinkGroup from "./SocialLinkGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  return (
    <div className="d-flex flex-column flex-md-row">
      <p className="text-justify px-3 ">
        If you've taken an interest in what you see here, I look forward to you
        contacting me personally via any of the following means. Or, if you're
        just looking out for me and appreciate anything I've done, I'm very
        grateful for that. A little appreciation goes a long way. I'm extremely
        grateful for any donations that come my way, so if you'd like to support
        me, I'd really appreciate it!
        <br />
        Any and all donations received by way of this site will go towards
        development tools, my university education, and other suitable outlets.
      </p>
      <SocialLinkGroup vertical />
    </div>
  );
};
