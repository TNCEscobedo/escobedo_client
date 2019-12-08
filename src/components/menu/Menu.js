import React from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";

const Menu = props => {
  let tabs = [];
  if (props.tabs)
    tabs = props.tabs.map((tab, index) => <p key={index} className="h4 mb-4">{tab.title}</p>);
  return (
    <Container fluid={true}>
      <h2 className="mb-5">{props.title}</h2>
      {tabs}
    </Container>
  );
};

const mapStateToProps = state => ({
  tabs: state.menu.tabs
});

export default connect(mapStateToProps, null)(Menu);
