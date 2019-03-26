import React from "react";
import SocialLinkGroup from "./SocialLinkGroup";

export default () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>
        If you've taken an interest in what you see here, I look forward to you
        contacting me personally via any of the following means. I take
        commissions for websites, too - please contact me and I'll see what we
        can arrange!
      </p>
      <div className="pb-3">
        <SocialLinkGroup />
      </div>
      <p>
        Or, if you're just looking out for me and appreciate anything I've done,
        I'm very grateful for that. A little appreciation goes a long way. I'm
        extremely grateful for any donations that come my way, so if you'd like
        to support me, I'd really appreciate it!
        <br />
        Any and all donations received by way of this site will go towards
        development tools, my university education, and other suitable outlets.
      </p>
    </div>
  );
};