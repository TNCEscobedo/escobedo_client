import React from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import MenuTab from "./MenuTab";

const Menu = props => {
  let tabs = [];
  if (props.tabs)
    tabs = props.tabs.map((tab, index) => <MenuTab key={index} tab={tab} />);
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
