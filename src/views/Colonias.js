import React, { Component } from "react";
import View from "./View";
import { connect } from "react-redux";

class Colonias extends Component {
  render() {
    return (
      <View title="Colonias" headers={["Nombre"]} rows={this.props.colonias} editable={true} />
    );
  }
}

const mapStateToProps = state => ({
  colonias: state.colonias.colonias
});

export default connect(mapStateToProps, null)(Colonias);
