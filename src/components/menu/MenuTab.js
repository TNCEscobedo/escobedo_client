import React from "react";
import { Link } from "@reach/router";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default props => {
  return (
    <Link className="text-white h4 text-decoration-none" to={props.tab.link}>
      <Row
        className={
          "menu-tab mb-3 rounded pt-2 pb-2" +
          (props.selected ? " selected" : "")
        }
      >
        <Container fluid={true}>{props.tab.title}</Container>
      </Row>
    </Link>
  );
};
