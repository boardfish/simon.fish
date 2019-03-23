import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Container>
          <Header />
          <About />
          <div>
            <h2>Testimonials</h2>
            <p>
              "Simon has an ability to take a <b>complex task</b> (both
              IT-related and non-IT) and not only turn it around extremely
              quickly, but also to apply a level of thought and <b>ingenuity</b>{" "}
              of someone <b>a number of years more experienced.</b> It's this
              level of <b>output and creativity</b> which made the decision to
              bring Simon back after a few months in his summer holiday
              extremely easy."
              <br />
              <strong>Andy Sykes, </strong>formerly of Pera Technology
              <br />
              <a
                class="btn btn-lg btn-color btn-outline-primary"
                target="_blank"
                href="docs/PeraTechnologyReference.pdf"
              >
                <FontAwesomeIcon icon="file" /> Full reference
              </a>
            </p>
            <p>
              Simon's <b>enthusiasm </b>towards helping out at the Code First:
              Girls community courses in Sheffield was so admirable. His ability
              to communicate <b>complex technical concepts </b>to{" "}
              <b>complete beginners</b> is an important one to have in our
              increasingly multi-disciplinary world. <br />
              His genuine passion to <b>help the tech community </b>mixed in
              with his <b>impressive technical knowledge and skills </b>has made
              it a pleasure to work with him.
              <br />
              <a
                class="text-primary"
                target="_blank"
                rel="noopener noreferrer"
                href="https://pawlean.com/"
              >
                <strong>Pauline Narvas, </strong>Code First Girls instructor
              </a>
              <br />
              <a
                class="btn btn-lg btn-color btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/boardfish/"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} /> Full reference
              </a>
            </p>
          </div>
        </Container>
      </Container>
    );
  }
}

export default App;
