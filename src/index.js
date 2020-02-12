import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";

// FontAwesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faReact,
  faHtml5,
  faBootstrap,
  faAmazon
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
  faAngleDoubleRight,
  faUser,
  faFolderOpen,
  faComments,
  faTerminal,
  faCreditCard,
  faServer,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";

// FontAwesome icon library intialisation
library.add(
  faAmazon,
  faAngleDoubleRight,
  faBomb,
  faBootstrap,
  faClock,
  faCloud,
  faComments,
  faCreditCard,
  faExclamationCircle,
  faGamepad,
  faGem,
  faGithub,
  faEnvelope,
  faFacebook,
  faFemale,
  faFolderOpen,
  faFile,
  faHtml5,
  faLinkedin,
  faMoon,
  faMobileAlt,
  faReact,
  faServer,
  faTerminal,
  faTwitter,
  faUser,
  faUsers,
  faVolleyballBall
);

ReactDOM.render(<App />, document.getElementById("root"));
