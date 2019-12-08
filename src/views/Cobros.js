import React, { Component } from "react";
import View from "./View";
import CobrosService from "../services/CobrosService";
import { connect } from "react-redux";

const reducer = "COBROS";

class Cobros extends Component {
  render() {
    return (
      <View
        title="Cobros"
        servicio={CobrosService}
        reducer={reducer}
        idFila="idCobro"
        exclude={["idCobro"]}
        headers={[
          "Folio",
          "Inspector",
          "Monto",
          "Puesto",
          "Oferente",
          "Pagado",
          "Tarifa",
          "Mercado"
        ]}
        rows={this.props.cobros}
      />
    );
  }
}

const mapStateToProps = state => ({
  cobros: state.cobros.cobros
});

export default connect(mapStateToProps, null)(Cobros);