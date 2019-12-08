import React, { Component } from "react";
import View from "./View";
import { connect } from "react-redux";

const reducer = "OFERENTES";

const schema = {
    idOferente: "nuevo",
    nombre: "",
    colonia: "",
    telefono: ""
}

class Oferentes extends Component {
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
      />
    );
  }
}

const mapStateToProps = state => ({
  oferentes: state.oferentes.oferentes,
  oferente: state.oferentes.oferente
});

export default connect(mapStateToProps, null)(Oferentes);
