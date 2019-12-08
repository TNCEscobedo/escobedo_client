import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class View extends Component {
  renderButton() {
    if (this.props.onClick)
      return (
        <Button
          className="shadow-sm rounded-pill pt-2 pb-2 font-weight-bold ml-auto"
          onClick={this.props.onClick}
          style={{ maxWidth: 300 }}
          block
        >
          {this.props.buttonTitle}
        </Button>
      );
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs={8}>
            <h1>{this.props.title}</h1>
          </Col>
          <Col xs={4}>{this.renderButton()}</Col>
        </Row>
        <Row>
          <Container fluid={true}>{this.props.children}</Container>
        </Row>
      </Container>
    );
  }
}

export default View;
