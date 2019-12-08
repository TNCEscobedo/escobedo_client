import React from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import MenuTab from "./MenuTab";
import { Link } from "@reach/router";

const Menu = props => {
  let tabs = [];
  if (props.tabs)
    tabs = props.tabs.map((tab, index) => (
      <MenuTab
        key={index}
        tab={tab}
        selected={props.selected === tab.name}
      />
    ));
  return (
    <Container fluid={true}>
      <Link to="/" className="text-white text-decoration-none"><h2 className="mb-5">{props.title}</h2></Link>
      {tabs}
    </Container>
  );
};

const mapStateToProps = state => ({
  tabs: state.menu.tabs,
  selected: state.menu.selected
});

export default connect(mapStateToProps, null)(Menu);
