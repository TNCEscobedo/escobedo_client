import React, { Component } from "react";
import View from "./View";
import { getInspectoresDia, getInspectoresIntervalo } from "../actions/inspectoresActions";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";
import InspectoresService from "../services/InspectoresService";
import moment from "moment";

const reducer = "INSPECTORES";

class Inspectores extends Component {

  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
    const fecha = moment().toISOString().substring(0,10);
    this.props.getInspectoresDia(fecha);
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
          "Inspector",
          "Mercado",
          "Folios",
          "Recaudado",
          "Pronosticado",
          "Deudores"
        ]}
        prefixes={{
          recolectado: "$",
          pronosticado: "$"
        }}
        rows={this.props.inspectores}        
        search={true}        
      />
    );
  }
}

const mapStateToProps = state => ({
  inspectores: state.inspectores.inspectores
});

export default connect(mapStateToProps, { selectTab, getInspectoresDia, getInspectoresIntervalo })(Inspectores);
