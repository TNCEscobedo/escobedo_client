import React, { Component } from "react";
import View from "./View";
import { getInspectoresDia, getInspectoresIntervalo } from "../actions/inspectoresActions";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";
import InspectoresService from "../services/InspectoresService";

const reducer = "INSPECTORES";

class Inspectores extends Component {

  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
  }

  render() {
    return (
      <View
        title="Inspectores"
        custom={true}
        servicio={InspectoresService}
        reducer={reducer}
        idFila="idInspector"
        exclude={["idInspector"]}
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

export default connect(mapStateToProps, { selectTab, getInspectoresDia, getInspectoresIntervalo })(Inspectores);
