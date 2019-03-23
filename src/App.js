import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Header />
      </Container>
    );
  }
}

export default App;
