import React from "react";
import { Link } from "@reach/router";
import Container from "react-bootstrap/Container";

export default props => (
  <Container fluid={true} className="pl-0 pr-0 mb-3">
    <Link className="text-white h4 text-decoration-none" to={props.tab.link}>{props.tab.title}</Link>
  </Container>
);
