import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Router } from "@reach/router";
import Mercados from "./views/Mercados";
import Menu from "./components/menu/Menu";

export default () => (
  <Container fluid={true}>
    <Row>
      <Col md={3} lg={2} className="text-white pt-5" style={{ minHeight: "100vh", backgroundColor: "#3b5a99" }}>
          <Menu title="Mercash" />
      </Col>
      <Col md={9} lg={10} className="pt-5 bg-light">
        <Router>
          <Mercados path="/mercados" />
        </Router>
      </Col>
    </Row>
  </Container>
);
