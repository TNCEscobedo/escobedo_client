import React, { Component } from "react";
import View from "./View";
import { connect } from "react-redux";

const reducer = "/oferentes";

class Oferentes extends Component {
  render() {
    return (
      <View
        title="Oferentes"
        reducer={reducer}
        headers={["Nombre", "Colonia", "Telefono"]}
        editable={true}
      />
    );
  }
}

const mapStateToProps = state => ({
  oferentes: state.oferentes.oferentes
});

export default connect(mapStateToProps, null)(Oferentes);
