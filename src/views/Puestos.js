import React, { Component } from "react";
import View from "./View";
import PuestosService from "../services/PuestosService";
import OferentesService from "../services/OferentesService";
import GirosService from "../services/GirosService";
import { getFilas } from "../actions/tableActions";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";

const reducer = "PUESTOS";

const schema = {
  giro: "",
  tarifa: "",
  oferente: ""
};

class Puestos extends Component {
  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
    this.props.getFilas("GIROS", GirosService);
    this.props.getFilas("OFERENTES", OferentesService);
  }

  getOptions(rows, name, value) {
    if(rows) return rows.map(row => ({ name: row[name], value: row[value]}))    
  }

  render() {
    return (
      <View
        title="Puestos"
        editable={true}
        headers={["Oferente", "Giro", "Tarifa", "Superficie"]}
        rows={this.props.puestos}
        edited={this.props.puesto}
        options={{
          tarifas: [],
          giro: this.getOptions(this.props.giros, "nombre", "idGiro"),
          oferente: this.getOptions(this.props.oferentes, "oferente", "idOferente")
        }}
        schema={schema}
        reducer={reducer}
        servicio={PuestosService}
      />
    );
  }
}

const mapStateToProps = state => ({
  puestos: state.puestos.puestos,
  puesto: state.puestos.puesto,
  giros: state.giros.giros,
  oferentes: state.oferentes.oferentes
});

export default connect(mapStateToProps, { selectTab, getFilas })(Puestos);
