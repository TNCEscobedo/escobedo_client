import React, { Component } from "react";
import View from "./View";
import CobrosService from "../services/CobrosService";
import { clearFilas } from "../actions/tableActions";
import { getCobrosDia, getCobrosIntervalo } from "../actions/cobrosActions";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";

const reducer = "COBROS";

class Cobros extends Component {
  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
  }

  componentWillUnmount() {
    this.props.clearFilas("COBROS");
  }

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
        name="cobros"
        search={true}
      />
    );
  }
}

const mapStateToProps = state => ({
  cobros: state.cobros.cobros
});

export default connect(mapStateToProps, {
  selectTab,
  getCobrosDia,
  getCobrosIntervalo,
  clearFilas
})(Cobros);
