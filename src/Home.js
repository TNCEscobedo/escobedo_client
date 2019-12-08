import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Router } from "@reach/router";
import Mercados from "./views/Mercados";
import Menu from "./components/menu/Menu";
import Analiticas from "./views/Analiticas";
import Cobros from "./views/Cobros";
import Colonias from "./views/Colonias";
import Descuentos from "./views/Descuentos";
import Inspectores from "./views/Inspectores";
import Puestos from "./views/Puestos";
import Tarifas from "./views/Tarifas";
import Usuarios from "./views/Usuarios";
import Oferentes from "./views/Oferentes";

export default () => (
  <Container fluid={true}>
    <Row>
      <Col md={3} lg={2} className="text-white pt-5" style={{ minHeight: "100vh", backgroundColor: "#3b5a99" }}>
          <Menu title="Mercash" />
      </Col>
      <Col md={9} lg={10} className="pt-5 bg-light">
        <Router>
          <Mercados path="/mercados" />
          <Analiticas path="/" />
          <Cobros path="/cobros" />
          <Colonias path="/colonias" />
          <Descuentos path="/descuentos" />
          <Inspectores path="/inspectores" />
          <Puestos path="/puestos" />
          <Tarifas path="/tarifas" />
          <Usuarios path="/usuarios" />
          <Oferentes path="/oferentes" />
        </Router>
      </Col>
    </Row>
  </Container>
);
