import React, { Component } from "react";
import View from "./View";
import OferentesService from "../services/OferentesService";
import { selectTab } from "../actions/menuActions";
import { connect } from "react-redux";

const reducer = "OFERENTES";

const schema = {
    idOferente: "nuevo",
    nombre: "",
    colonia: "",
    telefono: ""
}

class Oferentes extends Component {

  componentDidMount() {
    this.props.selectTab(reducer.toLowerCase());
  }

  render() {
    return (
      <View
        title="Oferentes"        
        headers={["Nombre", "Colonia", "Telefono"]}
        rows={this.props.oferentes}
        edited={this.props.oferente}
        editable={true}
        schema={schema}
        reducer={reducer}
        servicio={OferentesService}
      />
    );
  }
}

const mapStateToProps = state => ({
  oferentes: state.oferentes.oferentes,
  oferente: state.oferentes.oferente
});

export default connect(mapStateToProps, { selectTab })(Oferentes);
