import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";

library.add(faGithub, faEnvelope, faLinkedin, faFacebook, faTwitter);

ReactDOM.render(<App />, document.getElementById("root"));
