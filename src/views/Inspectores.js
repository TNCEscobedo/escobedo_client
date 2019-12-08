import React, { Component } from "react";
import View from "./View";
import { connect } from "react-redux";

class Inspectores extends Component {
  render() {
    return (
      <View
        title="Inspectores"
        editable={true}
        headers={["Nombre", "Correo Electrónico", "Telefono"]}
      />
    );
  }
}

const mapStateToProps = state => ({
    inspectores: state.inspectores.inspectores,
    inspector: state.inspectores.inspector
});

export default connect(mapStateToProps, null)(Inspectores);
