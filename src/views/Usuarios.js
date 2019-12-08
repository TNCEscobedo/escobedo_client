import React, { Component } from "react";
import View from "./View";
import { connect } from "react-redux";

class Usuarios extends Component {
  render() {
    return <View title="Usuarios" editable={true} headers={["Nombre", "Correo Electrónico", "Teléfono"]} ></View>;
  }
}

const mapStateToProps = state => ({
  usuarios: state.usuarios.usuarios,
  usuario: state.usuarios.usuario
})

export default connect(mapStateToProps, null)(Usuarios);
