import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.scss'

// FontAwesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFile,
  faUsers,
  faBomb,
  faCloud,
  faClock,
  faGem,
  faFemale,
  faVolleyballBall,
  faMoon,
  faGamepad,
  faExclamationCircle,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";

// FontAwesome icon library intialisation
library.add(
  faAngleDoubleRight,
  faBomb,
  faClock,
  faCloud,
  faExclamationCircle,
  faGamepad,
  faGem,
  faGithub,
  faEnvelope,
  faFacebook,
  faFemale,
  faFile,
  faLinkedin,
  faMoon,
  faTwitter,
  faUsers,
  faVolleyballBall
);

ReactDOM.render(<App />, document.getElementById("root"));
