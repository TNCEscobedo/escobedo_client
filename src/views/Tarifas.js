import React, { Component } from "react";
import View from "./View";
import { connect } from "react-redux";

const reducer = "TARIFAS";

const schema = {
    idTarifa: "nueva",
    superficie: "",
    monto: ""
};

class Tarifas extends Component {
  render() {
    return (
      <View
        title="Tarifas"
        editable={true}
        headers={["Superficie", "Monto"]}
        rows={this.props.tarifas}
        edited={this.props.tarifa}
        schema={schema}
        reducer={reducer}
      />
    );
  }
}

const mapStateToProps = state => ({
  tarifas: state.tarifas.tarifas,
  tarifa: state.tarifas.tarifas
});

export default connect(mapStateToProps, null)(Tarifas);
