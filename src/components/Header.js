import React, { Component } from "react";
import { Row, Container } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <Row>
        <Container>
          <h1 className="display-3 text-center">Simon Fish</h1>
        </Container>
      </Row>
    );
  }
}

export default Header;
