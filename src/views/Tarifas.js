import React, { Component } from "react";
import View from "./View";
import TarifasService from "../services/TarifasService";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";

const reducer = "TARIFAS";

const schema = {
    idTarifa: "nuevo",
    superficie: "",
    monto: ""
};

class Tarifas extends Component {

  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
  }

  render() {    
    return (
      <View
        idFila="idTarifa"
        title="Tarifas"
        editable={true}
        headers={["Superficie", "Monto"]}
        rows={this.props.tarifas}
        edited={this.props.tarifa}
        schema={schema}
        reducer={reducer}
        servicio={TarifasService}
      />
    );
  }
}

const mapStateToProps = state => ({
  tarifas: state.tarifas.tarifas,
  tarifa: state.tarifas.tarifa
});

export default connect(mapStateToProps, { selectTab })(Tarifas);
